/**
 * Estimates reading time in minutes.
 * @param wordCount - Number of words in the article body
 * @returns Estimated minutes to read (minimum 1)
 */
export function readingTime(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / 200));
}

/** Keep blog previews and article headers on the same body-based estimate. */
export function blogReadingTime(rawBody: string = ""): number {
  const text = rawBody.replace(/\s+/g, " ").trim();
  return Math.max(1, Math.ceil(text.length / 1000));
}
