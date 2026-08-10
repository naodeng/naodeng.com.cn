import { test, expect } from "@playwright/test";

test.describe("apple homepage exploration", () => {
  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} home shows hero, explore grid, latest posts`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/`);
      await expect(page.locator(".home-apple-hero")).toBeVisible();
      await expect(page.locator("[data-home-task]")).toHaveCount(6);
      await expect(page.locator("[data-home-capability]")).toHaveCount(3);
      await expect(page.locator("[data-home-example]")).toHaveCount(3);
      await expect(page.locator(".home-explore-grid")).toBeVisible();
      await expect(page.locator(".home-latest-posts")).toBeVisible();
      await expect(page.locator(".home-explore-grid .home-card")).toHaveCount(6);
      await expect(page.locator(".home-prompts")).toBeVisible();
      await expect(page.locator(".home-projects")).toBeVisible();
      await expect(page.locator(".home-tags .tags-container")).toBeVisible();
      await expect(page.locator(".home-tags .home-chip").first()).toBeVisible();
      await expect(page.locator(".home-grid").first()).toBeVisible();
    });
  }
});

test.describe("home information architecture", () => {
  test("zh-cn home exposes three primary entry cards", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`, { waitUntil: "networkidle" });
    const primaryEntries = page.locator(".home-primary-entry");
    await expect(primaryEntries).toHaveCount(3);
    await expect(primaryEntries.nth(0)).toContainText(/博客|Blog/);
    await expect(primaryEntries.nth(1)).toContainText(/Wiki|百科/);
    await expect(primaryEntries.nth(2)).toContainText(/QA|提示词|技能/);
  });

  test("en home exposes three primary entry cards", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/en/`, { waitUntil: "networkidle" });
    const primaryEntries = page.locator(".home-primary-entry");
    await expect(primaryEntries).toHaveCount(3);
    await expect(primaryEntries.nth(0)).toContainText(/Blog/);
    await expect(primaryEntries.nth(1)).toContainText(/Wiki/);
    await expect(primaryEntries.nth(2)).toContainText(/QA|Prompt|Skill/);
  });

  test("task entry offers both skills and prompts without nested links", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const actionEntry = page.locator(".home-primary-entry--act");
    await expect(actionEntry.getByRole("link", { name: /Skills/ })).toBeVisible();
    await expect(actionEntry.getByRole("link", { name: /Prompts/ })).toBeVisible();
  });
});
