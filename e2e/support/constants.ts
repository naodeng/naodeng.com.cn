/**
 * E2E 测试用路径常量（中英文各一套）
 */
const LOCALES = ["en", "zh-cn"] as const;

/** 各主页面相对路径（不含 locale 前缀） */
export const MAIN_PATHS = [
  "/",
  "/blog/",
  "/archive/",
  "/sponsor/",
  "/series/",
  "/tags/",
] as const;

/** 其他需测试的页面路径 */
export const EXTRA_PATHS = [
  "/about",
  "/projects/",
  "/copyright",
  "/privacy",
  "/links",
] as const;

/** 文档子页路径（相对 /docs 的 slug，与 src/content/docs 对应） */
export const DOCS_SLUGS = ["why-astro", "installation", "project-structure", "configuration", "routing"] as const;

/** 百科词条 slug（与 src/content/wiki 对应，仅 zh-cn 有详情页） */
export const WIKI_SLUGS = [
  "acceptance-testing",
  "manual-testing",
  "A-B-Testing",
  "api-testing",
  "end-to-end-testing",
] as const;

/** 文档页（含首页与子页）带 locale 的路径 */
export function getDocsPageUrls(): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  for (const locale of LOCALES) {
    out.push({ locale, path: `/${locale}/docs/`, name: "docs-index" });
    for (const slug of DOCS_SLUGS) {
      out.push({ locale, path: `/${locale}/docs/${slug}/`, name: `docs-${slug}` });
    }
  }
  return out;
}

/** 百科页（首页 + 词条）：zh-cn 有完整内容，en 仅首页且会跳转 ray.run */
export function getWikiPageUrls(): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  for (const locale of LOCALES) {
    out.push({ locale, path: `/${locale}/wiki/`, name: "wiki-index" });
  }
  for (const slug of WIKI_SLUGS) {
    out.push({ locale: "zh-cn", path: `/zh-cn/wiki/${slug}/`, name: `wiki-${slug}` });
  }
  return out;
}

/** 带 locale 的完整路径列表，用于“页面可访问”与“样式展示”测试 */
export function getMainPageUrls(_baseUrl: string): { locale: string; path: string; name: string }[] {
  const out: { locale: string; path: string; name: string }[] = [];
  const names: Record<string, string> = {
    "/": "home",
    "/blog/": "blog",
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
