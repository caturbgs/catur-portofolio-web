import { defineCollection, defineContentConfig, z } from "@nuxt/content";

const bodySchema = z.object({
  type: z.string(),
  children: z.any(),
  toc: z.any(),
});

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: "page",
      source: "*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        body: bodySchema,
      }),
    }),
    projects: defineCollection({
      type: "page",
      source: {
        include: "projects/*.md",
        prefix: "/project",
      },
      schema: z.object({
        title: z.string(),
        description: z.string(),
        role: z.string(),
        company: z.string(),
        period: z.string(),
        technologies: z.array(z.string()),
        featured: z.boolean().default(false),
        outcomes: z.array(z.string()),
        image: z.string().optional(),
        externalUrl: z.string().url().optional(),
        body: bodySchema,
      }),
    }),
  },
});
