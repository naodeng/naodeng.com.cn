import { test, expect } from "@playwright/test";

test.describe("Scroll To Top Button", () => {
  test("button appears after scrolling down and scrolls to top on click", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });

    const btn = page.locator("#scroll-to-top");
    await expect(btn).toHaveCount(1);

    // Scroll down past threshold (400px)
    await page.evaluate(() => window.scrollTo(0, 600));
    await page.waitForTimeout(400);

    // The existing control uses opacity and pointer-events to hide itself.
    await expect(btn).toHaveCSS("opacity", "1");
    await expect(btn).toHaveCSS("pointer-events", "auto");

    // Click it
    await btn.click();
    await page.waitForTimeout(600);

    // Should be back near top
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBeLessThan(100);
  });

  test("button is visually hidden and cannot be clicked at the top of the page", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });

    const btn = page.locator("#scroll-to-top");
    await expect(btn).toHaveCount(1);

    await expect(btn).toHaveCSS("opacity", "0");
    await expect(btn).toHaveCSS("pointer-events", "none");
  });
});
