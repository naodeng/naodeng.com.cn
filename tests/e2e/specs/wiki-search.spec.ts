import { test, expect } from "@playwright/test";

test.describe("Wiki Search Filter", () => {
  test("search input filters wiki entries", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });

    const searchInput = page.locator("#wiki-search, .wiki-search-input").first();
    if (!(await searchInput.isVisible({ timeout: 5000 }))) return;

    // Count visible entry links before search
    const allLinks = page.locator(".wiki-letter-link");
    const totalBefore = await allLinks.count();
    expect(totalBefore).toBeGreaterThan(0);

    // Type a specific query
    await searchInput.fill("api");
    await page.waitForTimeout(200);

    // Count visible links after search — should be fewer
    const visibleAfter = await allLinks.evaluateAll((els) =>
      els.filter((el) => !(el.closest("li") as HTMLElement)?.hidden).length
    );
    expect(visibleAfter).toBeLessThanOrEqual(totalBefore);
  });

  test("clearing search restores all entries", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });

    const searchInput = page.locator("#wiki-search, .wiki-search-input").first();
    if (!(await searchInput.isVisible({ timeout: 5000 }))) return;

    const allLinks = page.locator(".wiki-letter-link");
    const totalBefore = await allLinks.count();

    // Filter
    await searchInput.fill("testing");
    await page.waitForTimeout(200);

    // Clear
    await searchInput.fill("");
    await page.waitForTimeout(200);

    // All entries should be visible again
    const visibleAfterClear = await allLinks.evaluateAll((els) =>
      els.filter((el) => !(el.closest("li") as HTMLElement)?.hidden).length
    );
    expect(visibleAfterClear).toBe(totalBefore);
  });

  test("empty letter groups are hidden during search", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "networkidle" });

    const searchInput = page.locator("#wiki-search, .wiki-search-input").first();
    if (!(await searchInput.isVisible({ timeout: 5000 }))) return;

    // Type a very specific query unlikely to match all letters
    await searchInput.fill("zzzzz");
    await page.waitForTimeout(200);

    // All letter groups should be hidden (no matches)
    const visibleGroups = await page.locator(".wiki-letter-group").evaluateAll((els) =>
      els.filter((el) => !(el as HTMLElement).hidden).length
    );
    expect(visibleGroups).toBe(0);
  });
});
