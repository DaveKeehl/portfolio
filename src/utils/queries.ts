const richText = /* groq */ `
	content[]{
		...,
		markDefs[]{
			...,
			_type == "internalLink" => {
				"slug": @.reference->slug.current,
				"type": @.reference->_type
			},
			_type == "image" => {
				...,
				"type": @.reference->_type,
				"altText": @.reference->altText,
				"caption": @.reference->caption,
				"maxWidth": @.reference->maxWidth
			}
		}
	}
`;

export const getHeader = /* groq */ `{
	"logo": *[_type == "siteSettings"][0] {
		"assetId": logo.asset._ref,
		"url": logo.asset->url,
		"alt": logo.alt
	},
	"socials": *[_type == "social"] {
		title,
		url,
		"icon": icon {
			"url": asset->url,
			"assetId": asset._ref
		}
	},
	"sections": *[section != null && !(_id in path("drafts.**"))] | order(section.order) { 
		_id,
		"name": section{name}.name
	}[0...-1]
}`;

export const getFooter = /* groq */ `
	*[_type == "footer"] {
		${richText}
	}[0]
`;

export const getSiteSettings = /* groq */ `
	*[_type == "siteSettings"] {
		brandName,
		tagline,
		openGraph {
			"image": image {
        "url": asset->url
      }.url
		}
	}[0]
`;

export const getHomepage = /* groq */ `{
	"hero": *[_type == "hero"] {
		greetings,
		heading,
		description,
		buttons
	}[0],
	"about": *[_type == "about"] {
		heading,
		"image": image {
			alt,
			"url": asset->url,
			"assetId": asset._ref
		},
		content,
		button
	}[0],
	"projects": *[_type == "projects"] {
		heading,
		"projects": *[_type == "project" && featured == true] {
			_id,
			title,
			"slug": slug.current,
			type,
			"image": image {
				alt,
				"url": asset->url,
				"assetId": asset._ref
			},
			liveButton {
				text,
				url
			},
			"excerpt": *[_type == "caseStudy" && project->title == ^.title]{excerpt}[0].excerpt,
			industry,
			year,
			roles,
			technologies[]-> {
				_id,
				title,
				url
			}
		},
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
			"image": coalesce(image, project->image) {
				alt,
				"url": asset->url,
				"assetId": asset._ref
			},
			excerpt,
		}
	}[0],
	"contact": *[_type == "contact"] {
		heading,
		content
	}[0]
}`;

export const getArticleBySlug = /* groq */ `{
	"article": *[_type == 'article' && slug.current == $slug && visibility == "public"] {
    _updatedAt,
		title,
		${richText},
		"image": image {
			alt,
			"url": asset->url,
			"assetId": asset._ref
		}
	}[0],
	"relatedPosts": *[
		(_type == "caseStudy" && visibility == "public" && project->featured == true && project->slug.current != $slug) || 
		(_type == "article" && visibility == "public" && slug.current != $slug)
	] | order(_updatedAt) {
		_type,
		"title": coalesce(title, project->title),
		"slug": coalesce(slug, project->slug).current,
		"image": coalesce(image, project->image) {
			alt,
			"url": asset->url,
			"assetId": asset._ref
		},
		excerpt,
	}
}`;

export const getProjectBySlug = /* groq */ `{
  "project": *[
		_type == 'caseStudy' && project->slug.current == $slug && project->featured == true
	] {
    _updatedAt,
		"title": project->title,
    "type": project->type,
    "year": project->year,
    "roles": project->roles,
    "technologies": project->technologies[]->{ title, url },
		"image": project->image {
			alt,
			"url": asset->url,
			"assetId": asset._ref
		},
		"liveButton": project->liveButton {
			text,
			url
		},
		"repositoryButton": project->repositoryButton {
			text,
			url
		},
    nutshell,
		${richText}
	}[0],
	"relatedPosts": *[
			(_type == "caseStudy" && visibility == "public" && project->featured == true && project->slug.current != $slug) || 
			(_type == "article" && visibility == "public" && slug.current != $slug)
	] | order(_updatedAt) {
		_type,
		"title": coalesce(title, project->title),
		"slug": coalesce(slug, project->slug).current,
		"image": coalesce(image, project->image) {
			alt,
			"url": asset->url,
			"assetId": asset._ref
		},
		excerpt,
	}
}`;
