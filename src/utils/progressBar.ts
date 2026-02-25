/**
 * Calculates reading progress bar width as a percentage.
 * @param scrollY - Current scroll position in pixels
 * @param totalHeight - Total scrollable height in pixels
 * @returns Percentage (0–100), clamped
 */
export function progressBarWidth(scrollY: number, totalHeight: number): number {
  if (totalHeight <= 0) return 0;
  return Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
}
