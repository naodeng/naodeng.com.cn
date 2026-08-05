import { test, expect } from "@playwright/test";

test.describe("QA Skills", () => {
  test("zh-cn index shows search and code-review card metadata", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/");
    await expect(page.locator("#qaskills-search")).toBeVisible();
    const card = page.locator('a.card[data-slug="code-review"]');
    await expect(card).toBeVisible();
    await expect(card.locator(".tag-evals")).toBeVisible();
  });

  test("detail shows Guide section, raw SKILL tab, and install panel", async ({ page }) => {
    await page.goto("/zh-cn/qaskills/api-testing/");
    await expect(page.getByRole("heading", { name: /何时使用|When to Use/ })).toBeVisible();
    await page.getByRole("tab", { name: /SKILL\.md/i }).click();
    await expect(page.locator(".skill-raw")).toContainText("name: api-testing");
    await expect(page.locator("#copy-raw-skill-btn")).toBeVisible();
    await expect(page.locator("#installer-panel")).toBeVisible();
    await expect(page.locator("#copy-quick-btn")).toBeVisible();
  });
});
