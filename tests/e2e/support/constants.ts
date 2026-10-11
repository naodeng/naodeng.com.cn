/**
 * E2E 测试用路径常量（中英文各一套）
 */
const LOCALES = ["en", "zh-cn"] as const;

/** 各主页面相对路径（不含 locale 前缀） */
export const MAIN_PATHS = [
  "/",
  "/blog/",
  "/qaskills/",
  "/archive/",
  "/sponsor/",
  "/series/",
  "/tags/",
] as const;

/** 其他需测试的页面路径 */
export const EXTRA_PATHS = [
  "/about",
  "/projects/",
  "/dsh-qa/",
  "/copyright",
  "/privacy",
  "/links",
] as const;

/** 已移除的 Astro 示例页；保留路径用于验证 404 和无残留入口。 */
export const RETIRED_DOCS_SLUGS = ["why-astro", "installation", "project-structure", "configuration", "routing"] as const;

/** 两种语言都发布的 Wiki 词条 slug（与中英文内容目录对应） */
export const WIKI_SLUGS = [
  "acceptance-testing",
  "manual-testing",
  "a-b-testing",
  "api-testing",
  "end-to-end-testing",
] as const;

/** 已移除示例页的历史路径。 */
export function getRetiredDocsPageUrls(): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  for (const locale of LOCALES) {
    for (const slug of RETIRED_DOCS_SLUGS) {
      out.push({ locale, path: `/${locale}/docs/${slug}/`, name: `docs-${slug}` });
    }
  }
  return out;
}

/** 双语 Wiki 首页和代表性词条页。 */
export function getWikiPageUrls(): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  for (const locale of LOCALES) {
    out.push({ locale, path: `/${locale}/wiki/`, name: "wiki-index" });
  }
  for (const locale of LOCALES) {
    for (const slug of WIKI_SLUGS) {
      out.push({ locale, path: `/${locale}/wiki/${slug}/`, name: `wiki-${slug}` });
    }
  }
  return out;
}

/** 带 locale 的完整路径列表，用于“页面可访问”与“样式展示”测试 */
export function getMainPageUrls(_baseUrl: string): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  const names: Record<string, string> = {
    "/": "home",
    "/blog/": "blog",
    "/qaskills/": "qaskills",
    "/archive/": "archive",
    "/sponsor/": "sponsor",
    "/series/": "series",
    "/tags/": "tags",
  };
  for (const locale of LOCALES) {
    for (const path of MAIN_PATHS) {
      const fullPath = `/${locale}${path}`;
      out.push({
        locale,
        path: fullPath,
        name: names[path] ?? path,
      });
    }
  }
  return out;
}

/** 扩展页面（about、projects、copyright 等）带 locale 的路径 */
export function getExtraPageUrls(): { locale: string; path: string; name: string }[] {
  const names: Record<string, string> = {
    "/about": "about",
    "/projects/": "projects",
    "/dsh-qa/": "dsh-qa",
    "/copyright": "copyright",
    "/privacy": "privacy",
    "/links": "links",
  };
  const out: { locale: string; path: string; name: string }[] = [];
  for (const locale of LOCALES) {
    for (const path of EXTRA_PATHS) {
      out.push({
        locale,
        path: `/${locale}${path}`,
        name: names[path] ?? path,
      });
    }
  }
  return out;
}

export { LOCALES };
