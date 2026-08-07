import { test, expect } from "@playwright/test";

// 覆盖 Header（Apple 探索改版）：
// - 黑色顶栏（无渐变背景）
// - slogan 隐藏（display: none）
// - active 链接样式 + 搜索按钮

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

  test("en 首页：site slogan 已隐藏", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".site-slogan")).toBeHidden();
  });

  test("zh-cn 首页：site slogan 已隐藏", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator(".site-slogan")).toBeHidden();
  });

  test("en 首页：所有主导航链接可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const nav = page.locator("header nav");
    await expect(nav.locator("[data-nav-item='home']")).toBeVisible();
    await expect(nav.locator("[data-nav-item='blog']")).toBeVisible();
    await expect(nav.locator("[data-nav-group='encyclopedia'] summary")).toBeVisible();
    await expect(nav.locator("[data-nav-group='guides'] a[data-nav-item='guild']")).toBeVisible();
    await expect(nav.locator("[data-nav-group='ai-testing'] summary")).toBeVisible();
    await expect(nav.locator("[data-nav-group='more'] summary")).toBeVisible();
    await expect(nav.locator("[data-nav-item='about']")).toBeVisible();
    await expect(nav.locator("a[href*='/en/archive']")).toHaveCount(0);
  });

  test("zh-cn 首页：所有主导航链接可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const nav = page.locator("header nav");
    await expect(nav.locator("[data-nav-item='home']")).toBeVisible();
    await expect(nav.locator("[data-nav-item='blog']")).toBeVisible();
    await expect(nav.locator("[data-nav-group='encyclopedia'] summary")).toContainText("百科");
    await expect(nav.locator("[data-nav-group='guides'] a[data-nav-item='guild']")).toContainText("指南");
    await expect(nav.locator("[data-nav-group='ai-testing'] summary")).toContainText("AI测试");
    await expect(nav.locator("[data-nav-group='more'] summary")).toContainText("更多");
    await expect(nav.locator("[data-nav-item='about']")).toBeVisible();
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
    const guidesTrigger = page.locator("header nav [data-nav-group='guides'] a[data-nav-item='guild']");
    await expect(guidesTrigger).toHaveClass(/active/);
  });

  test("en Guild 文章页：Guild 导航链接有 active 样式（section 匹配）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/guild/api-testing/postman/", { waitUntil: "domcontentloaded" });
    const guidesTrigger = page.locator("header nav [data-nav-group='guides'] a[data-nav-item='guild']");
    await expect(guidesTrigger).toHaveClass(/active/);
  });

  test("zh-cn Wiki 页：百科导航链接有 active 样式（section 匹配）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/wiki/", { waitUntil: "domcontentloaded" });
    const encyclopediaTrigger = page.locator("header nav [data-nav-group='encyclopedia'] summary");
    await expect(encyclopediaTrigger).toHaveClass(/active/);
  });

  test("en 首页：百科菜单下 QA wiki 链接指向 ray.run（外链）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-nav-group='encyclopedia'] summary").click();
    const wikiLink = page.locator("header nav a[data-nav-item='qa-wiki']");
    await expect(wikiLink).toBeVisible();
    await expect(wikiLink).toHaveAttribute("target", "_blank");
    await expect(wikiLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("zh-cn 首页：更多菜单下项目和支持可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-nav-group='more'] summary").click();
    await expect(page.locator("header nav a[data-nav-item='projects']")).toBeVisible();
    await expect(page.locator("header nav a[data-nav-item='sponsor']")).toBeVisible();
  });

  test("zh-cn 首页：更多菜单包含英语学习外链", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });

    const englishLearningUrl = "https://30-day-qa-english-learning-plan.inaodeng.com/";
    await page.locator("[data-nav-group='more'] summary").click();
    const menuLink = page.locator("header nav a[data-nav-item='english-learning']");
    await expect(menuLink).toBeVisible();
    await expect(menuLink).toContainText("英语学习");
    await expect(menuLink).toHaveAttribute("href", englishLearningUrl);
    await expect(menuLink).toHaveAttribute("target", "_blank");
    await expect(menuLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  test("zh-cn 首页：AI测试菜单下提示词库和技能库都可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-nav-group='ai-testing'] summary").click();
    await expect(page.locator("header nav a[data-nav-item='qa-prompts']")).toContainText("软件测试提示词库");
    await expect(page.locator("header nav a[data-nav-item='qa-skills']")).toContainText("软件测试技能库");
  });

  test("en 首页：AI Testing 菜单下 Prompt/Skill 两个入口都可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await page.locator("[data-nav-group='ai-testing'] summary").click();
    await expect(page.locator("header nav a[data-nav-item='qa-prompts']")).toContainText("QA Prompt Library");
    await expect(page.locator("header nav a[data-nav-item='qa-skills']")).toContainText("QA Skill Library");
  });

  test("en 首页：搜索按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const searchBtn = page.locator("header button[data-search-open]");
    await expect(searchBtn).toBeVisible();
    await expect(searchBtn).toHaveAttribute("aria-label", "Search");
  });

  test("zh-cn 首页：搜索按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header button[data-search-open]")).toBeVisible();
  });

  test("en 首页：header 为黑色顶栏（无渐变）", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const header = page.locator("header.l-header");
    const styles = await header.evaluate((el) => {
      const cs = getComputedStyle(el);
      return {
        backgroundColor: cs.backgroundColor,
        backgroundImage: cs.backgroundImage,
      };
    });
    expect(styles.backgroundImage === "none" || !/gradient/i.test(styles.backgroundImage)).toBeTruthy();
    // rgb(0, 0, 0) or #000
    expect(styles.backgroundColor).toMatch(/rgba?\(0,\s*0,\s*0(?:,\s*1)?\)|#000/i);
  });

  test("响应式：移动端 header 为品牌 + 搜索 + 汉堡", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.l-header")).toBeVisible();
    await expect(page.locator("header .site-logo")).toBeVisible();
    await expect(page.locator("header [data-nav-toggle]")).toBeVisible();
    await expect(page.locator("header button[data-search-open]")).toBeVisible();
    await expect(page.locator("header [data-site-nav]")).toBeHidden();

    const layout = await page.evaluate(() => {
      const brand = document.querySelector(".site-brand-link");
      const utils = document.querySelector(".header-utils");
      if (!(brand instanceof HTMLElement) || !(utils instanceof HTMLElement)) {
        return { ok: false };
      }
      const br = brand.getBoundingClientRect();
      const ur = utils.getBoundingClientRect();
      const overlapX = Math.max(0, Math.min(br.right, ur.right) - Math.max(br.left, ur.left));
      const overlapY = Math.max(0, Math.min(br.bottom, ur.bottom) - Math.max(br.top, ur.top));
      return {
        ok: true,
        gap: ur.left - br.right,
        overlapArea: overlapX * overlapY,
        primaryVisible: getComputedStyle(
          document.querySelector(".site-title-primary") as Element,
        ).display !== "none",
        secondaryHidden: getComputedStyle(
          document.querySelector(".site-title-secondary") as Element,
        ).display === "none",
      };
    });
    expect(layout.ok).toBeTruthy();
    expect(layout.overlapArea).toBeLessThanOrEqual(1);
    expect(layout.gap).toBeGreaterThanOrEqual(4);
    expect(layout.primaryVisible).toBeTruthy();
    expect(layout.secondaryHidden).toBeTruthy();

    await page.locator("header [data-nav-toggle]").click();
    await expect(page.locator("header.l-header")).toHaveAttribute("data-nav-open", "");
    await expect(page.locator("header [data-site-nav]")).toBeVisible();
    await expect(page.locator("header nav a[data-nav-item='blog']")).toBeVisible();
  });

  test("响应式：平板端 header 正常显示", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header.l-header")).toBeVisible();
    await expect(page.locator("header [data-nav-toggle]")).toBeVisible();
    await page.locator("header [data-nav-toggle]").click();
    await expect(page.locator("header nav")).toBeVisible();
  });
});
