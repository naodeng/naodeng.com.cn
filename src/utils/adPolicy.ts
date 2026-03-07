const EXEMPT_PATH_PATTERNS = [
  /\/404\/?$/i,
  /\/privacy\/?$/i,
  /\/copyright\/?$/i,
];

const SHORT_CONTENT_MIN_CHARS = 2600;

export function normalizeAdText(input: string): string {
  return String(input || "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]+`/g, " ")
    .replace(/\[[^\]]+\]\([^)]+\)/g, " ")
    .replace(/[#>*_~-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function isAdExemptPath(pathname: string): boolean {
  return EXEMPT_PATH_PATTERNS.some((pattern) => pattern.test(pathname));
}

export function shouldRenderPageAd(pathname: string): boolean {
  return !isAdExemptPath(pathname);
}

export function shouldRenderMidArticleAd(pathname: string, rawText: string): boolean {
  if (isAdExemptPath(pathname)) return false;
  return normalizeAdText(rawText).length >= SHORT_CONTENT_MIN_CHARS;
}
