import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/locales";

// https://astro.build/config
export default defineConfig({
  site: "https://inaodeng.com",
  markdown: {
    rehypePlugins: [rehypeSlug],
    shikiConfig: {
      langAlias: {
        Javascript: "javascript",
        JavaScript: "javascript",
        Typescript: "typescript",
        Text: "plaintext",
        TEXT: "plaintext",
        Markdown: "markdown",
        Shell: "shell",
        SHELL: "shell",
        JSON: "json",
        YAML: "yaml",
      },
    },
  },
  i18n: {
    defaultLocale: DEFAULT_LOCALE_SETTING,
    locales: Object.keys(LOCALES_SETTING),
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LOCALE_SETTING,
        locales: Object.fromEntries(
          Object.entries(LOCALES_SETTING).map(([key, value]) => [
            key,
            value.lang ?? key,
          ])
        ),
      },
    }),
  ],
});
