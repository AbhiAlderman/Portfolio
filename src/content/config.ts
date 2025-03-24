import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string())
  }),
});

export const collections = { posts };
