/**
 * Sanity Content Extraction Script
 *
 * Pulls all content from Sanity CMS and converts it to local files:
 * - Markdown files for articles and projects (content collections)
 * - TypeScript data files for singletons (hero, about, contact, etc.)
 * - Downloads images to public/images/
 */

import { createClient } from '@sanity/client';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';
import https from 'https';
import http from 'http';

const client = createClient({
  projectId: 'mbh58i22',
  dataset: 'production',
  apiVersion: '2023-08-13',
  useCdn: false,
});

const ROOT = process.cwd();
const IMAGES_DIR = join(ROOT, 'public/images');
const DATA_DIR = join(ROOT, 'src/data');
const ARTICLES_DIR = join(ROOT, 'src/content/articles');
const PROJECTS_DIR = join(ROOT, 'src/content/projects');

// Ensure directories exist
[IMAGES_DIR, DATA_DIR, ARTICLES_DIR, PROJECTS_DIR].forEach((dir) => {
  mkdirSync(dir, { recursive: true });
});

// ============================================
// Image downloading
// ============================================

const downloadedImages = new Map(); // url -> local filename

async function downloadImage(url, filename) {
  if (!url) return null;
  if (downloadedImages.has(url)) return downloadedImages.get(url);

  const localPath = `/images/${filename}`;
  const fullPath = join(IMAGES_DIR, filename);

  if (existsSync(fullPath)) {
    downloadedImages.set(url, localPath);
    return localPath;
  }

  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        downloadImage(res.headers.location, filename).then(resolve).catch(reject);
        return;
      }
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        writeFileSync(fullPath, Buffer.concat(chunks));
        downloadedImages.set(url, localPath);
        console.log(`  Downloaded: ${filename}`);
        resolve(localPath);
      });
      res.on('error', reject);
    });
  });
}

function imageFilename(url, slug = '') {
  if (!url) return '';
  const ext = url.split('?')[0].split('.').pop() || 'jpg';
  const id = url.split('/').pop().split('?')[0].split('.')[0];
  return slug ? `${slug}-${id}.${ext}` : `${id}.${ext}`;
}

// ============================================
// Portable Text to Markdown conversion
// ============================================

function portableTextToMarkdown(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  const lines = [];

  for (const block of blocks) {
    if (block._type === 'block') {
      const text = renderSpans(block.children, block.markDefs || []);

      switch (block.style) {
        case 'h1':
          lines.push(`# ${text}`);
          break;
        case 'h2':
          lines.push(`## ${text}`);
          break;
        case 'h3':
          lines.push(`### ${text}`);
          break;
        case 'h4':
          lines.push(`#### ${text}`);
          break;
        default:
          if (block.listItem === 'bullet') {
            lines.push(`- ${text}`);
          } else if (block.listItem === 'number') {
            lines.push(`1. ${text}`);
          } else {
            lines.push(text);
          }
      }
      lines.push('');
    } else if (block._type === 'image') {
      const alt = block.altText || block.alt || '';
      const caption = block.caption || '';
      // Image URL will be processed during the main extraction
      if (block.asset?.url || block.url) {
        const url = block.asset?.url || block.url;
        const filename = imageFilename(url);
        lines.push(`![${alt}](/images/${filename})`);
        if (caption) {
          lines.push(`*${caption}*`);
        }
      }
      lines.push('');
    } else if (block._type === 'code') {
      const lang = block.language || '';
      lines.push(`\`\`\`${lang}`);
      lines.push(block.code || '');
      lines.push('```');
      lines.push('');
    }
  }

  return lines.join('\n').trim();
}

function renderSpans(children, markDefs) {
  if (!children) return '';

  return children
    .map((child) => {
      let text = child.text || '';

      if (child.marks && child.marks.length > 0) {
        for (const mark of child.marks) {
          if (mark === 'strong') {
            text = `**${text}**`;
          } else if (mark === 'em') {
            text = `*${text}*`;
          } else if (mark === 'code') {
            text = `\`${text}\``;
          } else {
            // Look up in markDefs
            const def = markDefs.find((d) => d._key === mark);
            if (def) {
              if (def._type === 'link') {
                text = `[${text}](${def.href})`;
              } else if (def._type === 'internalLink') {
                const prefix = def.type === 'article' ? '/article' : '/project';
                text = `[${text}](${prefix}/${def.slug})`;
              } else if (def._type === 'inlineCode') {
                text = `\`${text}\``;
              }
            }
          }
        }
      }

      return text;
    })
    .join('');
}

function portableTextToHtml(blocks) {
  if (!blocks || !Array.isArray(blocks)) return '';

  const parts = [];

  for (const block of blocks) {
    if (block._type === 'block') {
      const text = renderSpansToHtml(block.children, block.markDefs || []);
      switch (block.style) {
        case 'h1':
          parts.push(`<h1>${text}</h1>`);
          break;
        case 'h2':
          parts.push(`<h2>${text}</h2>`);
          break;
        case 'h3':
          parts.push(`<h3>${text}</h3>`);
          break;
        default:
          if (block.listItem) {
            parts.push(`<li>${text}</li>`);
          } else {
            parts.push(`<p>${text}</p>`);
          }
      }
    }
  }

  return parts.join('\n');
}

function renderSpansToHtml(children, markDefs) {
  if (!children) return '';

  return children
    .map((child) => {
      let text = child.text || '';
      // Escape HTML entities
      text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      if (child.marks && child.marks.length > 0) {
        for (const mark of child.marks) {
          if (mark === 'strong') {
            text = `<strong>${text}</strong>`;
          } else if (mark === 'em') {
            text = `<em>${text}</em>`;
          } else if (mark === 'code') {
            text = `<code>${text}</code>`;
          } else {
            const def = markDefs.find((d) => d._key === mark);
            if (def) {
              if (def._type === 'link') {
                text = `<a href="${def.href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
              } else if (def._type === 'internalLink') {
                const prefix = def.type === 'article' ? '/article' : '/project';
                text = `<a href="${prefix}/${def.slug}">${text}</a>`;
              }
            }
          }
        }
      }

      return text;
    })
    .join('');
}

// ============================================
// GROQ Queries (simplified for extraction)
// ============================================

const richTextFragment = `
  content[]{
    ...,
    markDefs[]{
      ...,
      _type == "internalLink" => {
        "slug": @.reference->slug.current,
        "type": @.reference->_type
      }
    }
  }
`;

async function fetchAll() {
  console.log('Fetching site settings...');
  const siteSettings = await client.fetch(`
    *[_type == "siteSettings"] {
      brandName,
      tagline,
      "logo": logo { "url": asset->url, "assetId": asset._ref },
      openGraph { "image": image { "url": asset->url }.url }
    }[0]
  `);

  console.log('Fetching header...');
  const header = await client.fetch(`{
    "socials": *[_type == "social"] {
      title,
      url,
      "icon": icon { "url": asset->url, "assetId": asset._ref }
    },
    "sections": *[section != null && !(_id in path("drafts.**"))] | order(section.order) {
      _id,
      "name": section{name}.name
    }[0...-1]
  }`);

  console.log('Fetching footer...');
  const footer = await client.fetch(`
    *[_type == "footer"] { ${richTextFragment} }[0]
  `);

  console.log('Fetching homepage...');
  const homepage = await client.fetch(`{
    "hero": *[_type == "hero"] {
      greetings, heading, description, buttons
    }[0],
    "about": *[_type == "about"] {
      heading,
      "image": image { alt, "url": asset->url, "assetId": asset._ref },
      content,
      button
    }[0],
    "projects": *[_type == "projects"] {
      heading,
      "projects": *[_type == "project" && featured == true] {
        _id, title, "slug": slug.current, type,
        "image": image { alt, "url": asset->url, "assetId": asset._ref },
        liveButton { text, url },
        "excerpt": *[_type == "caseStudy" && project->title == ^.title]{excerpt}[0].excerpt,
        industry, year, roles,
        technologies[]-> { _id, title, url }
      }
    }[0],
    "blog": *[_type == "blog"] {
      heading,
      "labels": array::unique(*[_type in ["caseStudy", "article"]]{_type}._type),
      "posts": *[
        (_type == "caseStudy" && visibility == "public" && project->featured == true) ||
        (_type == "article" && visibility == "public")
      ] | order(_updatedAt) {
        _type,
        "title": coalesce(title, project->title),
        "slug": coalesce(slug, project->slug).current,
        "image": coalesce(image, project->image) { alt, "url": asset->url, "assetId": asset._ref },
        excerpt
      }
    }[0],
    "contact": *[_type == "contact"] {
      heading, content
    }[0]
  }`);

  console.log('Fetching articles...');
  const articles = await client.fetch(`
    *[_type == "article" && visibility == "public"] {
      _updatedAt, title, "slug": slug.current, excerpt,
      ${richTextFragment},
      "image": image { alt, "url": asset->url, "assetId": asset._ref }
    }
  `);

  console.log('Fetching projects (case studies)...');
  const projects = await client.fetch(`
    *[_type == "caseStudy" && visibility == "public" && project->featured == true] {
      _updatedAt,
      "title": project->title,
      "slug": project->slug.current,
      "type": project->type,
      "year": project->year,
      "roles": project->roles,
      "technologies": project->technologies[]->{ title, url },
      "image": project->image { alt, "url": asset->url, "assetId": asset._ref },
      "liveButton": project->liveButton { text, url },
      "repositoryButton": project->repositoryButton { text, url },
      excerpt,
      nutshell,
      ${richTextFragment}
    }
  `);

  // Also fetch related posts mapping
  console.log('Fetching related posts...');
  const allPosts = await client.fetch(`
    *[
      (_type == "caseStudy" && visibility == "public" && project->featured == true) ||
      (_type == "article" && visibility == "public")
    ] | order(_updatedAt) {
      _type,
      "title": coalesce(title, project->title),
      "slug": coalesce(slug, project->slug).current,
      "image": coalesce(image, project->image) { alt, "url": asset->url, "assetId": asset._ref },
      excerpt
    }
  `);

  return { siteSettings, header, footer, homepage, articles, projects, allPosts };
}

// ============================================
// File writers
// ============================================

function escapeTs(str) {
  return str.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$');
}

async function writeDataFiles(data) {
  const { siteSettings, header, footer, homepage, allPosts } = data;

  // Download logo
  let logoPath = '/images/logo.svg';
  if (siteSettings.logo?.url) {
    const ext = siteSettings.logo.url.split('.').pop()?.split('?')[0] || 'png';
    logoPath = await downloadImage(siteSettings.logo.url, `logo.${ext}`);
  }

  // Download social icons
  const socialsWithLocalIcons = [];
  for (const social of header.socials) {
    let iconPath = '';
    if (social.icon?.url) {
      const ext = social.icon.url.split('.').pop()?.split('?')[0] || 'svg';
      iconPath = await downloadImage(social.icon.url, `social-${social.title.toLowerCase().replace(/\s+/g, '-')}.${ext}`);
    }
    socialsWithLocalIcons.push({
      title: social.title,
      url: social.url,
      icon: iconPath,
    });
  }

  // Download about image
  let aboutImagePath = '';
  if (homepage.about.image?.url) {
    const ext = homepage.about.image.url.split('.').pop()?.split('?')[0] || 'png';
    aboutImagePath = await downloadImage(homepage.about.image.url, `about.${ext}`);
  }

  // Download blog post images for allPosts
  const postsWithLocalImages = [];
  for (const post of allPosts) {
    let imagePath = '';
    if (post.image?.url) {
      const filename = imageFilename(post.image.url, post.slug);
      imagePath = await downloadImage(post.image.url, filename);
    }
    postsWithLocalImages.push({
      ...post,
      image: { ...post.image, url: imagePath },
    });
  }

  // site.ts
  writeFileSync(
    join(DATA_DIR, 'site.ts'),
    `export const siteSettings = {
  brandName: ${JSON.stringify(siteSettings.brandName)},
  tagline: ${JSON.stringify(siteSettings.tagline)},
  logo: ${JSON.stringify(logoPath)},
  openGraph: {
    image: ${JSON.stringify(siteSettings.openGraph?.image || '/og_image.png')},
  },
};
`
  );
  console.log('  Wrote src/data/site.ts');

  // header.ts
  writeFileSync(
    join(DATA_DIR, 'header.ts'),
    `export const header = {
  sections: ${JSON.stringify(header.sections, null, 2)},
  socials: ${JSON.stringify(socialsWithLocalIcons, null, 2)},
};
`
  );
  console.log('  Wrote src/data/header.ts');

  // footer.ts
  const footerHtml = portableTextToHtml(footer.content);
  writeFileSync(
    join(DATA_DIR, 'footer.ts'),
    `export const footer = {
  content: \`${escapeTs(footerHtml)}\`,
};
`
  );
  console.log('  Wrote src/data/footer.ts');

  // hero.ts
  writeFileSync(
    join(DATA_DIR, 'hero.ts'),
    `export const hero = ${JSON.stringify(homepage.hero, null, 2)};
`
  );
  console.log('  Wrote src/data/hero.ts');

  // about.ts
  const aboutHtml = portableTextToHtml(homepage.about.content);
  writeFileSync(
    join(DATA_DIR, 'about.ts'),
    `export const about = {
  heading: ${JSON.stringify(homepage.about.heading)},
  image: {
    url: ${JSON.stringify(aboutImagePath)},
    alt: ${JSON.stringify(homepage.about.image?.alt || '')},
  },
  button: ${JSON.stringify(homepage.about.button)},
  content: \`${escapeTs(aboutHtml)}\`,
};
`
  );
  console.log('  Wrote src/data/about.ts');

  // projects.ts - heading + featured projects data
  const projectsWithLocalImages = [];
  for (const project of homepage.projects.projects) {
    let imagePath = '';
    if (project.image?.url) {
      const filename = imageFilename(project.image.url, project.slug);
      imagePath = await downloadImage(project.image.url, filename);
    }
    projectsWithLocalImages.push({
      ...project,
      image: { ...project.image, url: imagePath },
    });
  }

  writeFileSync(
    join(DATA_DIR, 'projects.ts'),
    `export const projectsSection = {
  heading: ${JSON.stringify(homepage.projects.heading)},
  projects: ${JSON.stringify(projectsWithLocalImages, null, 2)},
};
`
  );
  console.log('  Wrote src/data/projects.ts');

  // blog.ts
  writeFileSync(
    join(DATA_DIR, 'blog.ts'),
    `export const blogSection = {
  heading: ${JSON.stringify(homepage.blog.heading)},
  labels: ${JSON.stringify(homepage.blog.labels)},
  posts: ${JSON.stringify(postsWithLocalImages, null, 2)},
};
`
  );
  console.log('  Wrote src/data/blog.ts');

  // contact.ts
  const contactHtml = portableTextToHtml(homepage.contact.content);
  writeFileSync(
    join(DATA_DIR, 'contact.ts'),
    `export const contact = {
  heading: ${JSON.stringify(homepage.contact.heading)},
  content: \`${escapeTs(contactHtml)}\`,
};
`
  );
  console.log('  Wrote src/data/contact.ts');
}

async function writeArticles(articles) {
  console.log(`\nWriting ${articles.length} articles...`);

  for (const article of articles) {
    // Download featured image
    let imagePath = '';
    if (article.image?.url) {
      const filename = imageFilename(article.image.url, article.slug);
      imagePath = await downloadImage(article.image.url, filename);
    }

    // Download any images in the content
    if (article.content) {
      for (const block of article.content) {
        if (block._type === 'image' && block.asset?.url) {
          const filename = imageFilename(block.asset.url);
          await downloadImage(block.asset.url, filename);
        }
      }
    }

    const markdown = portableTextToMarkdown(article.content);

    const frontmatter = {
      title: article.title,
      excerpt: article.excerpt || '',
      image: imagePath,
      imageAlt: article.image?.alt || '',
      updatedAt: article._updatedAt,
    };

    const content = `---
title: ${JSON.stringify(frontmatter.title)}
excerpt: ${JSON.stringify(frontmatter.excerpt)}
image: ${JSON.stringify(frontmatter.image)}
imageAlt: ${JSON.stringify(frontmatter.imageAlt)}
updatedAt: ${JSON.stringify(frontmatter.updatedAt)}
---

${markdown}
`;

    writeFileSync(join(ARTICLES_DIR, `${article.slug}.md`), content);
    console.log(`  Wrote article: ${article.slug}`);
  }
}

async function writeProjects(projects) {
  console.log(`\nWriting ${projects.length} projects...`);

  for (const project of projects) {
    // Download featured image
    let imagePath = '';
    if (project.image?.url) {
      const filename = imageFilename(project.image.url, project.slug);
      imagePath = await downloadImage(project.image.url, filename);
    }

    // Download any images in content
    if (project.content) {
      for (const block of project.content) {
        if (block._type === 'image' && block.asset?.url) {
          const filename = imageFilename(block.asset.url);
          await downloadImage(block.asset.url, filename);
        }
      }
    }

    const nutshellHtml = portableTextToHtml(project.nutshell);
    const contentMd = portableTextToMarkdown(project.content);

    const frontmatter = {
      title: project.title,
      type: project.type || '',
      year: project.year || null,
      roles: project.roles || [],
      technologies: (project.technologies || []).map((t) => ({ title: t.title, url: t.url })),
      image: imagePath,
      imageAlt: project.image?.alt || '',
      liveButton: project.liveButton || null,
      repositoryButton: project.repositoryButton || null,
      excerpt: project.excerpt || '',
      updatedAt: project._updatedAt,
      nutshell: nutshellHtml,
    };

    const content = `---
title: ${JSON.stringify(frontmatter.title)}
type: ${JSON.stringify(frontmatter.type)}
year: ${frontmatter.year}
roles: ${JSON.stringify(frontmatter.roles)}
technologies: ${JSON.stringify(frontmatter.technologies)}
image: ${JSON.stringify(frontmatter.image)}
imageAlt: ${JSON.stringify(frontmatter.imageAlt)}
liveButton: ${JSON.stringify(frontmatter.liveButton)}
repositoryButton: ${JSON.stringify(frontmatter.repositoryButton)}
excerpt: ${JSON.stringify(frontmatter.excerpt)}
updatedAt: ${JSON.stringify(frontmatter.updatedAt)}
nutshell: ${JSON.stringify(frontmatter.nutshell)}
---

${contentMd}
`;

    writeFileSync(join(PROJECTS_DIR, `${project.slug}.md`), content);
    console.log(`  Wrote project: ${project.slug}`);
  }
}

// ============================================
// Main
// ============================================

async function main() {
  console.log('Starting Sanity content extraction...\n');

  const data = await fetchAll();

  console.log('\nDownloading images and writing data files...');
  await writeDataFiles(data);

  await writeArticles(data.articles);
  await writeProjects(data.projects);

  console.log('\n✓ Extraction complete!');
  console.log(`  Images: ${downloadedImages.size} downloaded to public/images/`);
  console.log(`  Articles: ${data.articles.length}`);
  console.log(`  Projects: ${data.projects.length}`);
  console.log(`  Data files: 8 written to src/data/`);
}

main().catch(console.error);
