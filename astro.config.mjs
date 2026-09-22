import fs from "node:fs";
import path from "node:path";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeSlug from "rehype-slug";
import { defineConfig } from "astro/config";
import { DEFAULT_LOCALE_SETTING, LOCALES_SETTING } from "./src/locales";
import { hasNoindexRobots, shouldIncludeInSitemap } from "./src/utils/seoUrls";
import markdownPresentationRemark from "./src/utils/markdownPresentationRemark.mjs";

const sanitizeRollupFileName = (fileName) =>
  fileName
    .replace(/@/g, "-")
    .replace(/[\u0000-\u001F"#$%&*+,:;<=>?[\]^`{|}\u007F]/g, "_");

const sitemapOutputDir = path.resolve(process.cwd(), "dist");

function generatedPagePath(url) {
  let parsed;
  try {
    parsed = new URL(String(url));
  } catch {
    return null;
  }
  if (parsed.origin !== "https://inaodeng.com") return null;

  const pathVariants = [parsed.pathname];
  try {
    pathVariants.push(decodeURIComponent(parsed.pathname));
  } catch {
    // Keep the encoded path when a URL contains an invalid escape sequence.
  }

  for (const pathname of [...new Set(pathVariants)]) {
    const relativePath = pathname.replace(/^\/+/, "");
    const candidate = path.resolve(
      sitemapOutputDir,
      relativePath,
      pathname.endsWith("/") ? "index.html" : "",
    );
    if (!candidate.startsWith(`${sitemapOutputDir}${path.sep}`) && candidate !== path.join(sitemapOutputDir, "index.html")) {
      continue;
    }
    if (fs.existsSync(candidate)) return candidate;
  }
  return null;
}

function stripNoindexSitemapItem(item) {
  const pagePath = generatedPagePath(item.url);
  if (!pagePath) return item;
  const html = fs.readFileSync(pagePath, "utf8");
  return hasNoindexRobots(html) ? undefined : item;
}

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
    remarkPlugins: [markdownPresentationRemark],
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
      serialize: stripNoindexSitemapItem,
    }),
  ],
});
