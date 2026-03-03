import { test, expect } from "@playwright/test";
import { getMainPageUrls } from "../support/constants";

test.describe("SEO 元数据", () => {
  const normalizeBase = (baseURL?: string) => (baseURL || "").replace(/\/$/, "");
  const normalizePath = (s: string) => s.replace(/\/+$/, "/");
  const toURL = (value: string, fallbackOrigin: string) => {
    try {
      return new URL(value);
    } catch {
      return new URL(value, fallbackOrigin);
    }
  };
  const expectCanonicalEquals = async (page: any, expected: string) => {
    const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
    expect(canonical).toBeTruthy();
    const expectedUrl = new URL(expected);
    const canonicalUrl = toURL(String(canonical), expectedUrl.origin);
    expect(normalizePath(canonicalUrl.pathname)).toBe(normalizePath(expectedUrl.pathname));
  };
  const expectEnglishAlternate = async (page: any) => {
    const enCount = await page.locator('link[rel="alternate"][hreflang="en"]').count();
    const enUsCount = await page.locator('link[rel="alternate"][hreflang="en-US"]').count();
    expect(enCount + enUsCount).toBeGreaterThan(0);
  };
  const expectAlternateSet = async (page: any) => {
    await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
    await expectEnglishAlternate(page);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
  };

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
    const url = normalizeBase(baseURL) + "/en/";
    await page.goto(url, { waitUntil: "networkidle" });
    await expectCanonicalEquals(page, url);
  });

  test("zh-cn 首页：canonical 链接存在", async ({ page, baseURL }) => {
    const url = normalizeBase(baseURL) + "/zh-cn/";
    await page.goto(url, { waitUntil: "networkidle" });
    await expectCanonicalEquals(page, url);
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

  test("首页：hreflang 互链完整", async ({ page, baseURL }) => {
    const url = normalizeBase(baseURL) + "/zh-cn/";
    await page.goto(url, { waitUntil: "networkidle" });
    const alternates = page.locator('link[rel="alternate"][hreflang]');
    const count = await alternates.count();
    expect(count).toBeGreaterThan(1);
    await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
    await expectEnglishAlternate(page);
    await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
  });

  test("en 博客详情页：canonical 与 hreflang 正确", async ({ page, baseURL }) => {
    const base = normalizeBase(baseURL);
    await page.goto(base + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstPost).toBeVisible({ timeout: 10000 });
    const href = await firstPost.getAttribute("href");
    expect(href).toBeTruthy();
    const url = new URL(String(href), base).href;
    await page.goto(url, { waitUntil: "networkidle" });
    await expectCanonicalEquals(page, url);
    await expectAlternateSet(page);
  });

  test("zh-cn AIWiki 详情页：canonical 与 hreflang 正确", async ({ page, baseURL }) => {
    const base = normalizeBase(baseURL);
    await page.goto(base + "/zh-cn/AIWiki/", { waitUntil: "networkidle" });
    const firstTerm = page.locator("main a[href*='/zh-cn/AIWiki/']").first();
    await expect(firstTerm).toBeVisible({ timeout: 10000 });
    const href = await firstTerm.getAttribute("href");
    expect(href).toBeTruthy();
    const url = new URL(String(href), base).href;
    await page.goto(url, { waitUntil: "networkidle" });
    await expectCanonicalEquals(page, url);
    await expectAlternateSet(page);
  });

  test("robots 与 sitemap 规则一致（不包含 /en/wiki/）", async ({ page, baseURL }) => {
    const base = normalizeBase(baseURL);

    const robotsResp = await page.request.get(base + "/robots.txt");
    expect(robotsResp.ok()).toBeTruthy();
    const robotsText = await robotsResp.text();
    expect(robotsText).toContain("Sitemap:");
    expect(robotsText).toContain("/sitemap-index.xml");

    const sitemapResp = await page.request.get(base + "/sitemap-index.xml");
    expect(sitemapResp.ok()).toBeTruthy();
    const sitemapText = await sitemapResp.text();
    expect(sitemapText).not.toContain("/en/wiki/");
  });

  test("首页：JSON-LD 可解析且包含 WebSite", async ({ page, baseURL }) => {
    await page.goto(normalizeBase(baseURL) + "/en/", { waitUntil: "networkidle" });
    const scripts = page.locator('script[type="application/ld+json"]');
    const count = await scripts.count();
    expect(count).toBeGreaterThan(0);
    let hasWebSite = false;
    for (let i = 0; i < count; i++) {
      const content = await scripts.nth(i).textContent();
      if (!content) continue;
      const data = JSON.parse(content);
      if (data && data["@type"] === "WebSite") hasWebSite = true;
    }
    expect(hasWebSite).toBeTruthy();
  });
});
