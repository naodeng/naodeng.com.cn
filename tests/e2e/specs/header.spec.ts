import { test, expect } from "@playwright/test";

// 覆盖 Header 最近改动：
// - 渐变背景（linear-gradient with --color-theme）
// - nav 链接 hover 使用 var(--color-theme)
// - active 链接有下划线指示器 + font-weight: 700
// - 搜索按钮 ⌘K 快捷键提示

test.describe("Header 导航", () => {
  test("en 首页：header 可见且包含 logo 和导航", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const header = page.locator("header.l-header");
    await expect(header).toBeVisible();
    await expect(header.locator(".site-logo")).toBeVisible();
    await expect(header.locator("nav")).toBeVisible();
  });

  test("zh-cn 首页：header 可见且包含 logo 和导航", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.l-header")).toBeVisible();
    await expect(page.locator("header .site-logo")).toBeVisible();
  });

  test("en 首页：site slogan 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const slogan = page.locator(".site-slogan");
    await expect(slogan).toBeVisible();
    await expect(slogan).toContainText("Quality Analyst");
  });

  test("zh-cn 首页：site slogan 可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const slogan = page.locator(".site-slogan");
    await expect(slogan).toBeVisible();
    await expect(slogan).toContainText("质量分析师");
  });

  test("en 首页：所有主导航链接可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const nav = page.locator("header nav");
    await expect(nav.locator("a[href*='/en/blog']")).toBeVisible();
    await expect(nav.locator("a[href*='/en/guild']")).toBeVisible();
    await expect(nav.locator("a[href*='/en/about']")).toBeVisible();
    await expect(nav.locator("a[href*='/en/sponsor']")).toBeVisible();
    await expect(nav.locator("a[href*='/en/archive']")).toHaveCount(0);
  });

  test("zh-cn 首页：所有主导航链接可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const nav = page.locator("header nav");
    await expect(nav.locator("a[href*='/zh-cn/blog']")).toBeVisible();
    await expect(nav.locator("a[href*='/zh-cn/guild']")).toBeVisible();
    await expect(nav.locator("a[href*='/zh-cn/wiki']")).toBeVisible();
    await expect(nav.locator("a[href*='/zh-cn/about']")).toBeVisible();
    await expect(nav.locator("a[href*='/zh-cn/archive']")).toHaveCount(0);
  });

  test("en 博客页：博客导航链接有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    // Use :not([data-locale-option]) to exclude LocaleSelect links that share the same href
    const blogLink = page.locator("header nav a[href*='/en/blog']:not([data-locale-option])");
    await expect(blogLink).toHaveClass(/active/);
  });

  test("zh-cn 博客页：博客导航链接有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    const blogLink = page.locator("header nav a[href*='/zh-cn/blog']:not([data-locale-option])");
    await expect(blogLink).toHaveClass(/active/);
  });

  test("zh-cn Guild 页：指南导航链接有 active 样式", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/guild/", { waitUntil: "domcontentloaded" });
    const guildLink = page.locator("header nav a[href*='/zh-cn/guild']:not([data-locale-option])");
    await expect(guildLink).toHaveClass(/active/);
  });

  test("en Guild 文章页：Guild 导航链接有 active 样式（section 匹配）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/", { waitUntil: "domcontentloaded" });
    const guildLink = page.locator("header nav a[href*='/en/guild']:not([data-locale-option])");
    await expect(guildLink).toHaveClass(/active/);
  });

  test("zh-cn Wiki 页：百科导航链接有 active 样式（section 匹配）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "domcontentloaded" });
    const wikiLink = page.locator("header nav a[href*='/zh-cn/wiki']:not([data-locale-option])");
    await expect(wikiLink).toHaveClass(/active/);
  });

  test("en 首页：QA wiki 链接指向 ray.run（外链）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const wikiLink = page.locator("header nav a[href='https://ray.run/wiki']");
    await expect(wikiLink).toBeVisible();
    await expect(wikiLink).toHaveAttribute("target", "_blank");
    await expect(wikiLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("en 首页：搜索按钮可见且有 ⌘K 提示", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const searchBtn = page.locator("header button[data-search-open]");
    await expect(searchBtn).toBeVisible();
    // 快捷键提示文字
    await expect(page.locator("header .btn-icon-kbd")).toBeVisible();
    await expect(page.locator("header .btn-icon-kbd")).toContainText("⌘K");
  });

  test("zh-cn 首页：搜索按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header button[data-search-open]")).toBeVisible();
  });

  test("en 首页：header 有渐变背景（background 样式存在）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const header = page.locator("header.l-header");
    const bg = await header.evaluate((el) => getComputedStyle(el).background || getComputedStyle(el).backgroundImage);
    // 渐变背景应包含 gradient 关键字
    expect(bg).toMatch(/gradient/i);
  });

  test("响应式：移动端 header 正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.l-header")).toBeVisible();
    await expect(page.locator("header .site-logo")).toBeVisible();
    // 导航在移动端应换行但仍可见
    await expect(page.locator("header nav")).toBeVisible();
  });

  test("响应式：平板端 header 正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.l-header")).toBeVisible();
    await expect(page.locator("header nav")).toBeVisible();
  });
});
