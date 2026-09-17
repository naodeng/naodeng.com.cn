const ROBOTS_META = /<meta\b[^>]*\bname\s*=\s*["']robots["'][^>]*\bcontent\s*=\s*["'][^"']*\bnoindex\b[^"']*["']/i;
const ROBOTS_META_REVERSED = /<meta\b[^>]*\bcontent\s*=\s*["'][^"']*\bnoindex\b[^"']*["'][^>]*\bname\s*=\s*["']robots["']/i;

/** Return whether generated HTML explicitly tells crawlers not to index it. */
export function hasNoindexRobots(html) {
  return ROBOTS_META.test(String(html ?? "")) || ROBOTS_META_REVERSED.test(String(html ?? ""));
}
