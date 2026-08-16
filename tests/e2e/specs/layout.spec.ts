import { test, expect } from "@playwright/test";
import { getMainPageUrls, getExtraPageUrls } from "../support/constants";

test.describe("主页面样式与布局正常展示", () => {
  const mainPages = getMainPageUrls("");
  const extraPages = getExtraPageUrls();

  for (const { locale, path, name } of mainPages) {
    test(`${locale} ${name} 页：头部、主体、底部可见`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "domcontentloaded" });

      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });

    test(`${locale} ${name} 页：无布局错位（主内容区域存在）`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "domcontentloaded" });

      const main = page.locator("main").first();
      await expect(main).toBeVisible();
      const box = await main.boundingBox();
      expect(box?.width).toBeGreaterThan(200);
      expect(box?.height).toBeGreaterThan(100);
    });
  }

  test("en 博客详情页：文章标题与正文区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "domcontentloaded" });

    await expect(page.locator("article").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
  });

  test("zh-cn 博客详情页：文章标题与正文区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "domcontentloaded" });

    await expect(page.locator("article").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
  });

  test("zh-cn 页脚按内容类型分组", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });

    await expect(page.locator("footer [data-footer-group]")).toHaveCount(4);
    await expect(page.locator("footer [data-footer-group='explore']")).toContainText("探索");
    await expect(page.locator("footer [data-footer-group='knowledge']")).toContainText("知识库");
    await expect(page.locator("footer [data-footer-group='tools']")).toContainText("工具与学习");
    await expect(page.locator("footer [data-footer-group='site']")).toContainText("站点");
    await expect(page.locator("footer .footer-nav a[href*='/zh-cn/qaskills']").first()).toBeVisible();
  });

  for (const { locale, path, name } of extraPages) {
    test(`${locale} ${name} 页：头部、主体、底部可见`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "domcontentloaded" });
      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });
  }

  test("en 博客分页页：布局正常", async ({ page }) => {
    await page.goto("/en/blog/page/2/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 博客分页页：布局正常", async ({ page }) => {
    await page.goto("/zh-cn/blog/page/2/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("en 博文分类子页：布局正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/series/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/en/series/']").first();
    const hasLink = await firstLink.isVisible({ timeout: 5000 });
    if (!hasLink) return; // no series sub-pages, skip gracefully
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).pathname, { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 博文标签子页：布局正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/tags/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/zh-cn/tags/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).pathname, { waitUntil: "domcontentloaded" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });
});
