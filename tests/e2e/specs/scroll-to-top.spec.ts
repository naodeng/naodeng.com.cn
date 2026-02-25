import { test, expect } from "@playwright/test";

test.describe("Scroll To Top Button", () => {
  test("button appears after scrolling down and scrolls to top on click", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });

    // Button should be hidden initially
    const btn = page.locator(".scroll-to-top, [class*='scroll-top']").first();
    if (!(await btn.count())) return;

    // Scroll down past threshold (400px)
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(400);

    // Button should now be visible
    await expect(btn).toBeVisible({ timeout: 3000 });

    // Click it
    await btn.click();
    await page.waitForTimeout(600);

    // Should be back near top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test("button is hidden when at top of page", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });

    const btn = page.locator(".scroll-to-top, [class*='scroll-top']").first();
    if (!(await btn.count())) return;

    // At top, button should not be visible
    const isVisible = await btn.isVisible();
    expect(isVisible).toBe(false);
  });
});
