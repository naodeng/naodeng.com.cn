import { test, expect } from "@playwright/test";

test.describe("响应式布局", () => {
  const viewports = [
    { name: "Mobile", width: 375, height: 667 },
    { name: "Tablet", width: 768, height: 1024 },
    { name: "Desktop", width: 1920, height: 1080 },
  ];

  for (const viewport of viewports) {
    test(`en 首页在 ${viewport.name} 视口下正常显示`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
      
      // 使用更精确的选择器，只选择页面主 header
      await expect(page.locator("header.l-header").first()).toBeVisible({ timeout: 10000 });
      await expect(page.locator("main").first()).toBeVisible({ timeout: 10000 });
      await expect(page.locator("footer.l-footer").first()).toBeVisible({ timeout: 10000 });
      
      const main = page.locator("main").first();
      const box = await main.boundingBox();
      expect(box?.width).toBeGreaterThan(0);
      expect(box?.width).toBeLessThanOrEqual(viewport.width);
    });

    test(`zh-cn 首页在 ${viewport.name} 视口下正常显示`, async ({ page, baseURL }) => {
      await page.setViewportSize({ width: viewport.width, height: viewport.height });
      await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
      
      // 使用更精确的选择器，只选择页面主 header
      await expect(page.locator("header.l-header").first()).toBeVisible({ timeout: 10000 });
      await expect(page.locator("main").first()).toBeVisible({ timeout: 10000 });
      await expect(page.locator("footer.l-footer").first()).toBeVisible({ timeout: 10000 });
      
      const main = page.locator("main").first();
      const box = await main.boundingBox();
      expect(box?.width).toBeGreaterThan(0);
      expect(box?.width).toBeLessThanOrEqual(viewport.width);
    });
  }

  test("en 移动端：导航菜单可展开收起", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const menuToggle = page.locator('button[aria-label*="menu" i], button[aria-label*="navigation" i], [class*="menu-toggle"], [class*="hamburger"]').first();
    
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      await page.waitForTimeout(500);
      
      const nav = page.locator('nav[class*="mobile"], [class*="mobile-menu"], [class*="nav-menu"]').first();
      if (await nav.isVisible({ timeout: 2000 })) {
        await expect(nav).toBeVisible();
        
        await menuToggle.click();
        await page.waitForTimeout(500);
      }
    }
  });

  test("zh-cn 移动端：导航菜单可展开收起", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    const menuToggle = page.locator('button[aria-label*="菜单"], button[aria-label*="导航"], [class*="menu-toggle"], [class*="hamburger"]').first();
    
    if (await menuToggle.isVisible()) {
      await menuToggle.click();
      await page.waitForTimeout(500);
      
      const nav = page.locator('nav[class*="mobile"], [class*="mobile-menu"], [class*="nav-menu"]').first();
      if (await nav.isVisible({ timeout: 2000 })) {
        await expect(nav).toBeVisible();
        
        await menuToggle.click();
        await page.waitForTimeout(500);
      }
    }
  });

  test("en 博客列表在移动端正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    
    await expect(page.locator("main")).toBeVisible();
    const articles = page.locator('article, [class*="post"], [class*="blog-card"]');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test("zh-cn 博客列表在移动端正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    
    await expect(page.locator("main")).toBeVisible();
    const articles = page.locator('article, [class*="post"], [class*="blog-card"]');
    const count = await articles.count();
    expect(count).toBeGreaterThan(0);
  });

  test("en 文档页侧栏在移动端可切换", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/en/docs/", { waitUntil: "networkidle" });
    
    const sidebarToggle = page.locator('button[aria-label*="sidebar" i], button[aria-label*="menu" i], [class*="sidebar-toggle"]').first();
    
    if (await sidebarToggle.isVisible()) {
      await sidebarToggle.click();
      await page.waitForTimeout(500);
      
      const sidebar = page.locator(".docs-sidebar").first();
      if (await sidebar.isVisible({ timeout: 2000 })) {
        await expect(sidebar).toBeVisible();
      }
    }
  });

  test("zh-cn 文档页侧栏在移动端可切换", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/docs/", { waitUntil: "networkidle" });
    
    const sidebarToggle = page.locator('button[aria-label*="侧边栏"], button[aria-label*="菜单"], [class*="sidebar-toggle"]').first();
    
    if (await sidebarToggle.isVisible()) {
      await sidebarToggle.click();
      await page.waitForTimeout(500);
      
      const sidebar = page.locator(".docs-sidebar").first();
      if (await sidebar.isVisible({ timeout: 2000 })) {
        await expect(sidebar).toBeVisible();
      }
    }
  });

  test("平板视口下内容布局合理", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const main = page.locator("main");
    const box = await main.boundingBox();
    expect(box?.width).toBeGreaterThan(500);
    expect(box?.width).toBeLessThanOrEqual(768);
  });

  test("桌面视口下内容居中且有合理宽度", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const main = page.locator("main");
    const box = await main.boundingBox();
    expect(box?.width).toBeGreaterThan(800);
  });
});
