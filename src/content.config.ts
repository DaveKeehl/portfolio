import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    updatedAt: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.string(),
    year: z.number().nullable(),
    roles: z.array(z.string()),
    technologies: z.array(z.object({ title: z.string(), url: z.string() })),
    image: z.string(),
    imageAlt: z.string(),
    liveButton: z.object({ text: z.string(), url: z.string() }).nullable(),
    repositoryButton: z.object({ text: z.string(), url: z.string() }).nullable(),
    excerpt: z.string(),
    updatedAt: z.string(),
    nutshell: z.string().optional(),
  }),
});

export const collections = { articles, projects };
