import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        // Content v3 requires explicitly including the body if needed for some modules
        body: z.object({
          type: z.string(),
          children: z.any(),
          toc: z.any(),
        }),
      }),
    }),
  },
});
