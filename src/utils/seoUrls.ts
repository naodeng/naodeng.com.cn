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

/**
 * Keep only indexable, canonical pages in the generated XML sitemap.
 * Legacy Wiki aliases remain routable, but must not be discovery targets.
 */
export function shouldIncludeInSitemap(page: string): boolean {
  let pathname: string;
  try {
    pathname = new URL(page, "https://inaodeng.com").pathname;
  } catch {
    return false;
  }

  const normalizedPath = pathname.replace(/\/{2,}/g, "/").replace(/\/+$/, "/");
  if (normalizedPath === "/") return false;
  if (normalizedPath.startsWith("/en/wiki/")) return false;

  const zhWikiPrefix = "/zh-cn/wiki/";
  if (!normalizedPath.startsWith(zhWikiPrefix)) return true;

  const rest = normalizedPath.slice(zhWikiPrefix.length).replace(/\/$/, "");
  if (!rest) return true;

  const segments = rest.split("/");
  if (segments.length !== 1) return false;

  const slug = segments[0];
  return slug === canonicalWikiSlug(slug);
}
