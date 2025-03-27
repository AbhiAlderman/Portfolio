import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects/" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    order: z.number(),
    description: z.string(),
    cover: image(),
    coverAlt: z.string(),
    tags: z.array(z.string()),
    youtubePairs: z.array(
      z.object({
        title: z.string(),
        link: z.string(),
      })
    ).optional(),
    externalLinks: z.array(
      z.object({
        title: z.string(),
        link: z.string(),
      })
    ).optional()
  }),
});

export const collections = { projects };
