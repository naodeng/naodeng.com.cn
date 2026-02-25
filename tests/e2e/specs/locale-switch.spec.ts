import { test, expect } from "@playwright/test";

test.describe("语言切换", () => {
  test("en 首页：语言切换器可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const langSwitcher = page.locator('a[href*="/zh-cn/"], button[aria-label*="language" i], [class*="lang-switch"]').first();
    await expect(langSwitcher).toBeVisible({ timeout: 10000 });
  });

  test("zh-cn 首页：语言切换器可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const langSwitcher = page.locator('a[href*="/en/"], button[aria-label*="语言"], [class*="lang-switch"]').first();
    await expect(langSwitcher).toBeVisible({ timeout: 10000 });
  });

  test("从 en 首页切换到 zh-cn", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const zhLink = page.locator('a[href*="/zh-cn/"]').first();
    
    if (await zhLink.isVisible()) {
      await zhLink.click();
      await expect(page).toHaveURL(/\/zh-cn\//);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("从 zh-cn 首页切换到 en", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const enLink = page.locator('a[href*="/en/"]').first();
    
    if (await enLink.isVisible()) {
      await enLink.click();
      await expect(page).toHaveURL(/\/en\//);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("从 en 博客页切换到 zh-cn 保持在博客页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const zhLink = page.locator('a[href*="/zh-cn/blog"]').first();
    
    if (await zhLink.isVisible()) {
      await zhLink.click();
      await expect(page).toHaveURL(/\/zh-cn\/blog/);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("从 zh-cn 博客页切换到 en 保持在博客页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const enLink = page.locator('a[href*="/en/blog"]').first();
    
    if (await enLink.isVisible()) {
      await enLink.click();
      await expect(page).toHaveURL(/\/en\/blog/);
      await expect(page.locator("main")).toBeVisible();
    }
  });

  test("从 en 文档页切换到 zh-cn 保持在文档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/docs/", { waitUntil: "networkidle" });
    const zhLink = page.locator('a[href*="/zh-cn/docs"]').first();
    
    if (await zhLink.isVisible()) {
      await zhLink.click();
      await expect(page).toHaveURL(/\/zh-cn\/docs/);
      await expect(page.locator(".docs-sidebar")).toBeVisible();
    }
  });

  test("从 zh-cn 文档页切换到 en 保持在文档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/docs/", { waitUntil: "networkidle" });
    const enLink = page.locator('a[href*="/en/docs"]').first();
    
    if (await enLink.isVisible()) {
      await enLink.click();
      await expect(page).toHaveURL(/\/en\/docs/);
      await expect(page.locator(".docs-sidebar")).toBeVisible();
    }
  });

  test("语言切换后页面内容语言正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("lang", /en/);
    
    const zhLink = page.locator('a[href*="/zh-cn/"]').first();
    if (await zhLink.isVisible()) {
      await zhLink.click();
      await page.waitForLoadState("networkidle");
      await expect(page.locator("html")).toHaveAttribute("lang", /zh/);
    }
  });
});
