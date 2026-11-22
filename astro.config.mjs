// @ts-check
import { defineConfig } from "astro/config";
import { copyFile } from "node:fs/promises";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    {
      name: "copy-cname",
      hooks: {
        "astro:build:done": async ({ dir }) => {
          await copyFile(new URL("./CNAME", import.meta.url), new URL("./CNAME", dir));
        },
      },
    },
  ],
  site: "https://theethawat.dev",

  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
    routing: "manual",
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ["@keystatic/core", "@keystatic/astro"],
    },
  },

  output: "static",
  build: {
    assets: "assets",
  },
});
