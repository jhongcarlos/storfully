import { defineCollection, z } from 'astro:content';

// Shared FAQ shape used across every content page (FAQPage schema)
const faqItem = z.object({
  question: z.string(),
  answer: z.string().max(400), // keep answers under ~60 words per house rules
});

// Shared offer shape for package/service pages (Service + Offer schema)
const offer = z
  .object({
    price: z.string(),
    priceCurrency: z.string().default('USD'),
    unitText: z.string(), // e.g. "per facility per month"
  })
  .optional();

const baseFrontmatter = {
  title: z.string(), // <title> tag
  h1: z.string(),
  description: z.string(), // meta description
  primaryQuery: z.string(), // the search query this page targets
  schemaType: z.array(z.string()), // e.g. ["Service", "Offer", "FAQPage"]
  dateModified: z.date(),
  faqs: z.array(faqItem).default([]),
};

const pages = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFrontmatter,
    offer: offer,
  }),
});

const services = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFrontmatter,
    includedIn: z.array(z.enum(['5x5', '10x10', '10x20'])).default([]),
  }),
});

const playbook = defineCollection({
  type: 'content',
  schema: z.object({
    ...baseFrontmatter,
    author: z.string().default('Chans Weber'),
    datePublished: z.date(),
    citations: z.array(z.string().url()).default([]), // sources, required by house rules
  }),
});

const glossary = defineCollection({
  type: 'content',
  schema: z.object({
    term: z.string(),
    definition: z.string().max(800), // 60-120 words
    example: z.string(),
    relatedPage: z.string(), // link to the package/article that uses the term
  }),
});

export const collections = { pages, services, playbook, glossary };
