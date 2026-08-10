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
  test("hero console cards link to wiki, skills, and prompts", async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const links = page.locator(".home-hero-console .console-card");
    await expect(links).toHaveCount(3);
    await expect(links.nth(0)).toHaveAttribute("href", "/zh-cn/wiki/");
    await expect(links.nth(1)).toHaveAttribute("href", "/zh-cn/qaskills/");
    await expect(links.nth(2)).toHaveAttribute("href", "/zh-cn/prompts/");
  });

  test("proof section keeps readable spacing between title and introduction", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);
    const spacing = await page.locator("[data-home-example]").first().evaluate((example) => {
      const section = example.closest("section");
      const title = section?.querySelector(".home-band__title")?.getBoundingClientRect();
      const intro = section?.querySelector(".home-band__subtitle")?.getBoundingClientRect();
      return title && intro
        ? {
            gap: Math.round(intro.top - title.bottom),
            centerOffset: Math.round(Math.abs((intro.left + intro.right) / 2 - window.innerWidth / 2)),
          }
        : { gap: 0, centerOffset: 999 };
    });
    expect(spacing.gap).toBeGreaterThanOrEqual(18);
    expect(spacing.centerOffset).toBeLessThanOrEqual(2);
  });


  test("new homepage sections keep the shared centered content layout", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/zh-cn/`);

    const layout = await page.locator(".home-task-navigator .home-inner").evaluate((element) => {
      const rect = element.getBoundingClientRect();
      const title = element.querySelector(".home-band__title");
      return {
        width: Math.round(rect.width),
        left: Math.round(rect.left),
        right: Math.round(window.innerWidth - rect.right),
        titleSize: title ? getComputedStyle(title).fontSize : "",
      };
    });

    expect(layout.width).toBeLessThanOrEqual(1120);
    expect(Math.abs(layout.left - layout.right)).toBeLessThanOrEqual(2);
    expect(layout.titleSize).toBe("34px");
  });

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
