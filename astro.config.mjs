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
  redirects: {
    "/zh/blog/event/30-days-of-ai-in-testing-day-31-bonus-visualise-the-future-of-ai-in-testing/":
      "/zh-cn/blog/event/30-days-of-ai-in-testing-day-31-bonus-visualise-the-future-of-ai-in-testing/",
    "/en/rss.xml/": "/en/rss.xml",
    "/zh-cn/rss.xml/": "/zh-cn/rss.xml",
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
      filter: (page) => {
        // 排除语言探测跳转页和英文 wiki 页面（wiki 是中文专属内容）。
        // 根路径输出 noindex，不能进入 XML sitemap 或成为 hreflang 目标。
        return page !== 'https://inaodeng.com/' && !page.includes('/en/wiki/');
      },
    }),
  ],
});
