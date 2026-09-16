import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/locales";
import { shouldIncludeInSitemap } from "./src/utils/seoUrls";

const sanitizeRollupFileName = (fileName) =>
  fileName
    .replace(/@/g, "-")
    .replace(/[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g, "_");

// https://astro.build/config
export default defineConfig({
  site: "https://inaodeng.com",
  vite: {
    build: {
      rollupOptions: {
        output: {
          sanitizeFileName: sanitizeRollupFileName,
        },
      },
    },
  },
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
  redirects: {
    "/zh/blog/event/30-days-of-ai-in-testing-day-31-bonus-visualise-the-future-of-ai-in-testing/":
      "/zh-cn/blog/event/30-days-of-ai-in-testing-day-31-bonus-visualise-the-future-of-ai-in-testing/",
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
      filter: shouldIncludeInSitemap,
    }),
  ],
});
