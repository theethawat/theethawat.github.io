// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],
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
