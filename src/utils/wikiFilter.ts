/**
 * Filters wiki entries by a search query (case-insensitive).
 * @param entries - Array of entry labels/names
 * @param query - Search string
 * @returns Filtered array of entries that include the query
 */
export function filterWikiEntries(entries: string[], query: string): string[] {
  if (!query.trim()) return entries;
  const lower = query.toLowerCase();
  return entries.filter((entry) => entry.toLowerCase().includes(lower));
}
