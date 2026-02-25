/**
 * Determines whether the scroll-to-top button should be visible.
 * @param scrollY - Current scroll position in pixels
 * @param threshold - Minimum scroll position to show the button (default 400)
 * @returns true if button should be visible
 */
export function shouldShowScrollToTop(scrollY: number, threshold = 400): boolean {
  return scrollY > threshold;
}
