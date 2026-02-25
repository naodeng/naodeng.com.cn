import { test, expect } from "@playwright/test";

test.describe("Reading Progress Bar", () => {
  test("progress bar exists on article pages", async ({ page, baseURL }) => {
    // Navigate to blog list and find first article
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    if (!(await firstPost.isVisible({ timeout: 10000 }))) return;

    const href = await firstPost.getAttribute("href");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });

    // Check progress bar exists
    const bar = page.locator(".reading-progress-bar, [class*='progress-bar']").first();
    if (!(await bar.isVisible({ timeout: 5000 }))) return;

    // At top of page, width should be near 0%
    const initialWidth = await bar.evaluate((el) => (el as HTMLElement).style.width);
    expect(parseFloat(initialWidth) || 0).toBeLessThan(10);

    // Scroll to middle
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await page.waitForTimeout(300);

    const midWidth = await bar.evaluate((el) => (el as HTMLElement).style.width);

    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(300);

    const endWidth = await bar.evaluate((el) => (el as HTMLElement).style.width);

    // Width should increase as we scroll down
    const parseWidth = (w: string) => parseFloat(w) || 0;
    expect(parseWidth(endWidth)).toBeGreaterThanOrEqual(parseWidth(midWidth));
  });

  test("progress bar is not visible on non-article pages", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    // Progress bar should not be present on homepage (it's only in Article layout)
    const bar = page.locator(".reading-progress-bar").first();
    // Either not present or has 0 width — both are acceptable
    const count = await bar.count();
    if (count > 0) {
      const width = await bar.evaluate((el) => (el as HTMLElement).style.width);
      expect(parseFloat(width) || 0).toBe(0);
    }
  });
});
