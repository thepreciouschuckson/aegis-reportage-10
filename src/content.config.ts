import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    category: z.enum(['campus', 'community', 'trending', 'national']),
    date: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCaption: z.string().optional(),
    imageCredit: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    sources: z.array(z.object({ name: z.string(), url: z.string().optional() })).default([]),
  }),
});

export const collections = { stories };
