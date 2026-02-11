import { test, expect } from "@playwright/test";
import { getMainPageUrls, getExtraPageUrls } from "../support/constants";

test.describe("主页面样式与布局正常展示", () => {
  const mainPages = getMainPageUrls("");
  const extraPages = getExtraPageUrls();

  for (const { locale, path, name } of mainPages) {
    test(`${locale} ${name} 页：头部、主体、底部可见`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });

      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });

    test(`${locale} ${name} 页：无布局错位（主内容区域存在）`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });

      const main = page.locator("main").first();
      await expect(main).toBeVisible();
      const box = await main.boundingBox();
      expect(box?.width).toBeGreaterThan(200);
      expect(box?.height).toBeGreaterThan(100);
    });
  }

  test("en 博客详情页：文章标题与正文区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });

    await expect(page.locator("article").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
  });

  test("zh-cn 博客详情页：文章标题与正文区域可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });

    await expect(page.locator("article").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
  });

  for (const { locale, path, name } of extraPages) {
    test(`${locale} ${name} 页：头部、主体、底部可见`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });
      await expect(page.locator("header").first()).toBeVisible();
      await expect(page.locator("main").first()).toBeVisible();
      await expect(page.locator("footer").first()).toBeVisible();
    });
  }

  test("en 博客分页页：布局正常", async ({ page }) => {
    await page.goto("/en/blog/page/2/", { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 博客分页页：布局正常", async ({ page }) => {
    await page.goto("/zh-cn/blog/page/2/", { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("en 博文分类子页：布局正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/series/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/en/series/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).pathname, { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });

  test("zh-cn 博文标签子页：布局正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/tags/", { waitUntil: "networkidle" });
    const firstLink = page.locator("main a[href*='/zh-cn/tags/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    await page.goto(new URL(href!, baseURL).pathname, { waitUntil: "networkidle" });
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("main").first()).toBeVisible();
    await expect(page.locator("footer").first()).toBeVisible();
  });
});
