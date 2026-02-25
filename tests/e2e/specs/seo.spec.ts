import { test, expect } from "@playwright/test";
import { getMainPageUrls } from "../support/constants";

test.describe("SEO 元数据", () => {
  const mainPages = getMainPageUrls("");

  for (const { locale, path, name } of mainPages.slice(0, 4)) {
    test(`${locale} ${name} 页：title 标签存在且非空`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });
      
      const title = await page.title();
      expect(title).toBeTruthy();
      expect(title.length).toBeGreaterThan(0);
    });

    test(`${locale} ${name} 页：meta description 存在`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });
      
      const description = await page.locator('meta[name="description"]').getAttribute("content");
      expect(description).toBeTruthy();
      if (description) {
        expect(description.length).toBeGreaterThan(10);
      }
    });
  }

  test("en 首页：Open Graph 标签存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute("content");
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
    
    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogImage).toBeTruthy();
  });

  test("zh-cn 首页：Open Graph 标签存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    const ogTitle = await page.locator('meta[property="og:title"]').getAttribute("content");
    const ogDescription = await page.locator('meta[property="og:description"]').getAttribute("content");
    const ogImage = await page.locator('meta[property="og:image"]').getAttribute("content");
    
    expect(ogTitle).toBeTruthy();
    expect(ogDescription).toBeTruthy();
    expect(ogImage).toBeTruthy();
  });

  test("en 博客详情页：结构化数据存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const count = await jsonLd.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test("zh-cn 博客详情页：结构化数据存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const jsonLd = page.locator('script[type="application/ld+json"]');
      const count = await jsonLd.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test("en 首页：canonical 链接存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
  });

  test("zh-cn 首页：canonical 链接存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
  });

  test("en 页面：lang 属性正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("lang", /en/);
  });

  test("zh-cn 页面：lang 属性正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    await expect(page.locator("html")).toHaveAttribute("lang", /zh/);
  });

  test("en 首页：Twitter Card 标签存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute("content");
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute("content");
    
    expect(twitterCard).toBeTruthy();
    expect(twitterTitle).toBeTruthy();
  });

  test("zh-cn 首页：Twitter Card 标签存在", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    const twitterCard = await page.locator('meta[name="twitter:card"]').getAttribute("content");
    const twitterTitle = await page.locator('meta[name="twitter:title"]').getAttribute("content");
    
    expect(twitterCard).toBeTruthy();
    expect(twitterTitle).toBeTruthy();
  });
});
