import { test, expect } from "@playwright/test";

test.describe("导航与首页内容", () => {
  test("en 首页：简介区、项目展示、标签云、最新文章区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator("main .intro-section").first()).toBeVisible();
    await expect(page.locator("main .projects-showcase").first()).toBeVisible();
    await expect(page.locator("main .tags-cloud").first()).toBeVisible();
    await expect(page.locator("main .latest").first()).toBeVisible();
  });

  test("zh-cn 首页：简介区、项目展示、Guild展示、标签云、最新文章区可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator("main .intro-section").first()).toBeVisible();
    await expect(page.locator("main .projects-showcase").first()).toBeVisible();
    await expect(page.locator("main .guild-showcase").first()).toBeVisible();
    await expect(page.locator("main .tags-cloud").first()).toBeVisible();
    await expect(page.locator("main .latest").first()).toBeVisible();
  });

  test("en 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header nav a[data-nav-item='blog']").click();
    await expect(page).toHaveURL(/\/(en)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「博客」进入博客列表", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav a[data-nav-item='blog']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/blog\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从博客首页点击「归档」按钮进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    await page.locator(".headline-actions a[href*='/en/archive']").first().click();
    await expect(page).toHaveURL(/\/(en)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从博客首页点击「归档」按钮进入归档页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    await page.locator(".headline-actions a[href*='/zh-cn/archive']").first().click();
    await expect(page).toHaveURL(/\/(zh-cn)\/archive\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header nav a[data-nav-item='about']").click();
    await expect(page).toHaveURL(/\/(en)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「关于」进入关于页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav a[data-nav-item='about']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/about\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「百科 > 软件测试百科」进入百科首页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='encyclopedia'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-wiki']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/wiki\/?/);
    await expect(page.locator("main .docs-sidebar").first()).toBeVisible();
    await expect(page.getByRole("heading", { name: "测试百科", level: 1 }).first()).toBeVisible();
  });

  test("zh-cn 从首页点击「指南 > 自动化测试指南」进入指南页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='guides'] summary").click();
    await page.locator("header nav a[data-nav-item='guild']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/guild\/?/);
    await expect(page.locator(".guild-hero__title")).toBeVisible();
  });

  test("en 从首页点击「Guides > Guild」进入指南页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='guides'] summary").click();
    await page.locator("header nav a[data-nav-item='guild']").click();
    await expect(page).toHaveURL(/\/(en)\/guild\/?/);
    await expect(page.locator(".guild-hero__title")).toBeVisible();
  });

  test("en 首页「Encyclopedia > QA wiki」链接指向外站 ray.run", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='encyclopedia'] summary").click();
    const wikiLink = page.locator("header nav a[data-nav-item='qa-wiki']").first();
    await expect(wikiLink).toBeVisible();
    await expect(wikiLink).toHaveAttribute("target", "_blank");
  });

  test("zh-cn 从首页点击「AI测试 > 软件测试提示词库」进入提示词库", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='ai-testing'] summary").click();
    await page.locator("header nav a[data-nav-item='qa-prompts']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/prompts\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「更多 > 项目」进入项目页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='more'] summary").click();
    await page.locator("header nav a[data-nav-item='projects']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/projects\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("zh-cn 从首页点击「更多 > 支持」进入支持页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await page.locator("header nav [data-nav-group='more'] summary").click();
    await page.locator("header nav a[data-nav-item='sponsor']").click();
    await expect(page).toHaveURL(/\/(zh-cn)\/sponsor\/?/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("en 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/en\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });

  test("zh-cn 博客列表页：文章卡片可点击进入详情", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    await firstLink.click();
    await expect(page).toHaveURL(/\/zh-cn\/blog\/.+\/$/);
    await expect(page.locator("article").first()).toBeVisible();
  });
});
