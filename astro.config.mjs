// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";
import { remarkModifiedTime } from "./src/utils/remark-modified-time.mjs";
import rehypeRaw from 'rehype-raw';
import partytown from "@astrojs/partytown";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: "https://example.com",
  trailingSlash: "always",

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  experimental: {},

  image: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  markdown: {
    rehypePlugins: [rehypeRaw],
    remarkPlugins: [remarkModifiedTime],
  },

  integrations: [
    mdx(),
    sitemap(),
    pagefind(),

    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false,
      },
    }),
  ],

  adapter: netlify(),
});