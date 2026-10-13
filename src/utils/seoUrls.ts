export { hasNoindexRobots } from "./seoNoindex.mjs";

/** Resolve the matching Wiki page for the other locale. */
export function resolveWikiLocalePath(pathname: string, targetLang: string): { path: string; isEquivalent: boolean } | null {
  const match = pathname.match(/^\/(en|zh-cn)\/wiki(\/.*)?$/);
  if (!match || (targetLang !== "en" && targetLang !== "zh-cn")) return null;
  const suffix = match[2] ?? "/";
  const path = `/${targetLang}/wiki${suffix}`;
  return { path, isEquivalent: shouldIncludeInSitemap(path) };
}

/**
 * Return the stable URL slug used by the Chinese Wiki.
 * Source filenames are historical input; published URLs are lowercase.
 */
export function canonicalWikiSlug(slug: string): string {
  return String(slug ?? "")
    .trim()
    .replace(/\.md$/i, "")
    .toLowerCase();
}

const NON_INDEXABLE_SITEMAP_PATHS = new Set([
  "/en/sitemap",
  "/zh-cn/sitemap",
  "/prompts",
  "/qaskills",
]);

/**
 * Keep only indexable, canonical pages in the generated XML sitemap.
 * Legacy Wiki paths are not generated and must not become discovery targets.
 */
export function shouldIncludeInSitemap(page: string): boolean {
  let pathname: string;
  try {
    pathname = new URL(page, "https://inaodeng.com").pathname;
  } catch {
    return false;
  }

  const normalizedPath = pathname.replace(/\/{2,}/g, "/").replace(/\/+$/, "/");
  const pathWithoutTrailingSlash = normalizedPath !== "/" && normalizedPath.endsWith("/")
    ? normalizedPath.slice(0, -1)
    : normalizedPath;
  if (normalizedPath === "/") return false;
  if (NON_INDEXABLE_SITEMAP_PATHS.has(pathWithoutTrailingSlash)) return false;
  const wikiMatch = normalizedPath.match(/^\/(en|zh-cn)\/wiki(?:\/(.*))?$/);
  if (!wikiMatch) return true;

  const rest = (wikiMatch[2] ?? "").replace(/\/$/, "");
  if (!rest) return true;

  const segments = rest.split("/");
  if (segments.length !== 1) return false;

  const slug = segments[0];
  return slug === canonicalWikiSlug(slug);
}
