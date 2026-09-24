import { test, expect } from "@playwright/test";
import { getMainPageUrls, getExtraPageUrls } from "../support/constants";

test.describe("页面可访问性（中英文）", () => {
  const mainPages = getMainPageUrls("");
  const extraPages = getExtraPageUrls();

  for (const { locale, path, name } of mainPages) {
    test(`${locale} ${name} ${path} 可正常访问`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }

  test("en 博客列表页可访问", async ({ page }) => {
    const res = await page.goto("/en/blog/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 博客列表页可访问", async ({ page }) => {
    const res = await page.goto("/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("en 博客详情页可访问（从列表取第一篇链接）", async ({ page }) => {
    await page.goto("/en/blog/", { waitUntil: "domcontentloaded" });
    const firstPostLink = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstPostLink).toBeVisible({ timeout: 10000 });
    const href = await firstPostLink.getAttribute("href");
    expect(href).toBeTruthy();
    const res = await page.goto(new URL(href!, page.url()).pathname, {
      waitUntil: "domcontentloaded",
    });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 博客详情页可访问（从列表取第一篇链接）", async ({ page }) => {
    await page.goto("/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    const firstPostLink = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstPostLink).toBeVisible({ timeout: 10000 });
    const href = await firstPostLink.getAttribute("href");
    expect(href).toBeTruthy();
    const res = await page.goto(new URL(href!, page.url()).pathname, {
      waitUntil: "domcontentloaded",
    });
    expect(res?.status()).toBe(200);
  });

  test("en 博文分类（series）子页可访问", async ({ page }) => {
    await page.goto("/en/series/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/en/series/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    expect(href).toBeTruthy();
    const res = await page.goto(new URL(href!, page.url()).pathname, {
      waitUntil: "domcontentloaded",
    });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 博文分类（series）子页可访问", async ({ page }) => {
    await page.goto("/zh-cn/series/", { waitUntil: "domcontentloaded" });
    const firstLink = page.locator("main a[href*='/zh-cn/series/']").first();
    await expect(firstLink).toBeVisible({ timeout: 10000 });
    const href = await firstLink.getAttribute("href");
    expect(href).toBeTruthy();
    const res = await page.goto(new URL(href!, page.url()).pathname, {
      waitUntil: "domcontentloaded",
    });
    expect(res?.status()).toBe(200);
  });

  test("en 博文标签（tags）子页可访问", async ({ page }) => {
    await page.goto("/en/tags/", { waitUntil: "domcontentloaded" });
    const tagLinks = await page.locator("main a[href*='/en/tags/']").evaluateAll((anchors) =>
      anchors.map((a) => (a as HTMLAnchorElement).href).filter((h) => h && !/\/tags\/[^/]*%/.test(new URL(h).pathname))
    );
    const href = tagLinks[0];
    expect(href, "至少应有一个不含编码的标签链接").toBeTruthy();
    const res = await page.goto(new URL(href!).pathname, { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 博文标签（tags）子页可访问", async ({ page }) => {
    await page.goto("/zh-cn/tags/", { waitUntil: "domcontentloaded" });
    const tagLinks = await page.locator("main a[href*='/zh-cn/tags/']").evaluateAll((anchors) =>
      anchors.map((a) => (a as HTMLAnchorElement).href).filter((h) => h && !/\/tags\/[^/]*%/.test(new URL(h).pathname))
    );
    const href = tagLinks[0];
    expect(href, "至少应有一个不含编码的标签链接").toBeTruthy();
    const res = await page.goto(new URL(href!).pathname, { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  for (const { locale, path, name } of extraPages) {
    test(`${locale} ${name} ${path} 可正常访问`, async ({ page }) => {
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
    });
  }

  test("en 博客分页第 2 页可访问", async ({ page }) => {
    const res = await page.goto("/en/blog/page/2/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 博客分页第 2 页可访问", async ({ page }) => {
    const res = await page.goto("/zh-cn/blog/page/2/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn Awesome QA Skills 系列按博客规则分页", async ({ page }) => {
    const seriesPath = "/zh-cn/series/Awesome%20QA%20Skills%20%E5%AE%9E%E6%88%98/";
    const firstPage = await page.goto(seriesPath, { waitUntil: "domcontentloaded" });
    expect(firstPage?.status()).toBe(200);
    await expect(page.locator("main article.post-card")).toHaveCount(12);
    await expect(page.locator("nav.pagination-nav")).toBeVisible();
    await expect(page.locator("a.pagination-next")).toHaveAttribute("href", /\/page\/2\/$/);

    const secondPage = await page.goto(`${seriesPath}page/2/`, { waitUntil: "domcontentloaded" });
    expect(secondPage?.status()).toBe(200);
    await expect(page.locator("main article.post-card")).toHaveCount(12);
  });

  test("zh-cn Agent Skills 标签按博客规则分页", async ({ page }) => {
    const tagPath = "/zh-cn/tags/Agent%20Skills/";
    const firstPage = await page.goto(tagPath, { waitUntil: "domcontentloaded" });
    expect(firstPage?.status()).toBe(200);
    await expect(page.locator("main article.post-card")).toHaveCount(12);
    await expect(page.locator("nav.pagination-nav")).toBeVisible();
    await expect(page.locator("a.pagination-next")).toHaveAttribute("href", /\/page\/2\/$/);

    const secondPage = await page.goto(`${tagPath}page/2/`, { waitUntil: "domcontentloaded" });
    expect(secondPage?.status()).toBe(200);
    await expect(page.locator("main article.post-card")).toHaveCount(12);
  });

  test("zh-cn CI-CD 标签使用规范 URL", async ({ page }) => {
    const canonical = await page.goto("/zh-cn/tags/CI-CD/", { waitUntil: "domcontentloaded" });
    expect(canonical?.status()).toBe(200);
    await expect(page.locator("main h1")).toContainText("#CI-CD");
  });

  test("根路径 / 重定向到语言页", async ({ page }) => {
    const res = await page.goto("/", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
    await expect(page).toHaveURL(/\/(en|zh-cn)\/?/);
  });

  test("en RSS 可访问", async ({ page }) => {
    const res = await page.goto("/en/rss.xml", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn RSS 可访问", async ({ page }) => {
    const res = await page.goto("/zh-cn/rss.xml", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("en 站点地图页可访问", async ({ page }) => {
    const res = await page.goto("/en/sitemap", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test("zh-cn 站点地图页可访问", async ({ page }) => {
    const res = await page.goto("/zh-cn/sitemap", { waitUntil: "domcontentloaded" });
    expect(res?.status()).toBe(200);
  });

  test.skip("en 404 页可访问且展示 404 内容", async ({ page }) => {
    const res = await page.goto("/en/404/", { waitUntil: "commit" });
    expect(res?.status()).toBeLessThan(500);
    const html = await page.content();
    expect(html).toContain("404");
  });

  test.skip("zh-cn 404 页可访问且展示 404 内容", async ({ page }) => {
    const res = await page.goto("/zh-cn/404/", { waitUntil: "commit" });
    expect(res?.status()).toBeLessThan(500);
    const html = await page.content();
    expect(html).toContain("404");
  });
});
