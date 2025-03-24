import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { boolean } from "astro:schema";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts/" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string())
  }),
});

export const collections = { posts };
