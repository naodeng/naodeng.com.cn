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
