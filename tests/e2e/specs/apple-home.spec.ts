import { test, expect } from "@playwright/test";

test.describe("apple homepage exploration", () => {
  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} home shows hero, explore grid, latest posts`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);
      await expect(page.locator(".home-apple-hero")).toBeVisible();
      await expect(page.locator(".home-explore-grid")).toBeVisible();
      await expect(page.locator(".home-latest-posts")).toBeVisible();
      await expect(page.locator(".home-explore-card")).toHaveCount(6);
    });
  }
});
