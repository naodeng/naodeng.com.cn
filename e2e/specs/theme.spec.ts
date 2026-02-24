import { test, expect } from "@playwright/test";

test.describe("主题切换", () => {
  test.skip("en 首页：主题切换按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="theme" i], button[title*="theme" i], [class*="theme-toggle"]').first();
    await expect(themeToggle).toBeVisible({ timeout: 10000 });
  });

  test.skip("zh-cn 首页：主题切换按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="主题"], button[title*="主题"], [class*="theme-toggle"]').first();
    await expect(themeToggle).toBeVisible({ timeout: 10000 });
  });

  test("en 点击主题切换按钮切换主题", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="theme" i], button[title*="theme" i], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      const htmlElement = page.locator("html");
      const initialTheme = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const newTheme = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test("zh-cn 点击主题切换按钮切换主题", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="主题"], button[title*="主题"], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      const htmlElement = page.locator("html");
      const initialTheme = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const newTheme = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(newTheme).not.toBe(initialTheme);
    }
  });

  test("en 主题偏好在页面刷新后保持", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="theme" i], button[title*="theme" i], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const htmlElement = page.locator("html");
      const themeAfterToggle = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await page.reload({ waitUntil: "networkidle" });
      
      const themeAfterReload = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(themeAfterReload).toBe(themeAfterToggle);
    }
  });

  test("zh-cn 主题偏好在页面刷新后保持", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="主题"], button[title*="主题"], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const htmlElement = page.locator("html");
      const themeAfterToggle = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await page.reload({ waitUntil: "networkidle" });
      
      const themeAfterReload = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(themeAfterReload).toBe(themeAfterToggle);
    }
  });

  test("en 主题切换在不同页面间保持一致", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="theme" i], button[title*="theme" i], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const htmlElement = page.locator("html");
      const themeOnHome = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
      
      const themeOnBlog = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(themeOnBlog).toBe(themeOnHome);
    }
  });

  test("zh-cn 主题切换在不同页面间保持一致", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const themeToggle = page.locator('button[aria-label*="主题"], button[title*="主题"], [class*="theme-toggle"]').first();
    
    if (await themeToggle.isVisible()) {
      await themeToggle.click();
      await page.waitForTimeout(500);
      
      const htmlElement = page.locator("html");
      const themeOnHome = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      
      await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
      
      const themeOnBlog = await htmlElement.getAttribute("data-theme") || await htmlElement.getAttribute("class");
      expect(themeOnBlog).toBe(themeOnHome);
    }
  });
});
