// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],

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

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
