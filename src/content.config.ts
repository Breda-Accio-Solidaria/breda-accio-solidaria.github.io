import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const common = {
  title: z.string(),
  summary: z.string(),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
  isPlaceholder: z.boolean().default(false),
};

const actualitat = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/actualitat' }),
  schema: z.object({
    ...common,
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    type: z.enum(['noticia', 'comunicat', 'cronica', 'article']),
    topics: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const agenda = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/agenda' }),
  schema: z.object({
    ...common,
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    location: z.string(),
    organizers: z.array(z.string()).default(['Breda Acció Solidària']),
    campaign: z.string().optional(),
    status: z.enum(['programada', 'cancel·lada', 'finalitzada']).default('programada'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    externalUrl: z.string().url().optional(),
    calendarFile: z.string().optional(),
  }),
});

const campanyes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/campanyes' }),
  schema: z.object({
    ...common,
    status: z.enum(['activa', 'permanent', 'finalitzada']),
    startDate: z.coerce.date().optional(),
    endDate: z.coerce.date().optional(),
    topics: z.array(z.string()).default([]),
    callToAction: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    relatedLinks: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
  }),
});

export const collections = { actualitat, agenda, campanyes };
