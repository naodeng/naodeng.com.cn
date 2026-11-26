import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const locales = ["en", "zh-cn"] as const;
const mainPaths = ["/", "/blog/", "/qaskills/", "/archive/", "/sponsor/", "/series/", "/tags/"] as const;

function normalizePath(path: string): string {
  return path.replace(/\/+$/, "/");
}

test.describe("SEO metadata and crawl surfaces", () => {
  for (const locale of locales) {
    for (const path of mainPaths) {
      test(`${locale}${path} has a title and useful description`, async ({ app, browser }) => {
        await app.open(`/${locale}${path}`);

        const title = await browser.title();
        const description = await browser.locator('meta[name="description"]').getAttribute("content");
        expect(title.trim().length).toBeGreaterThan(0);
        expect(description?.trim().length ?? 0).toBeGreaterThan(10);
      });

    }

    test(`${locale} homepage exposes social preview metadata and the document language`, async ({ app, browser }) => {
      await app.open(`/${locale}/`);

      await expect(browser.locator("html")).toHaveAttribute("lang", locale === "en" ? /^en/i : /^zh/i);
      for (const selector of [
        'meta[property="og:title"]',
        'meta[property="og:description"]',
        'meta[property="og:image"]',
        'meta[name="twitter:card"]',
        'meta[name="twitter:title"]',
      ]) {
        const value = await browser.locator(selector).getAttribute("content");
        expect(value?.trim().length ?? 0).toBeGreaterThan(0);
      }
    });
  }

  test("QA Skills detail prototype is excluded from indexing", async ({ app, browser }) => {
    await app.open("/en/qaskills/detail-prototype/?variant=a");
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex, nofollow/i);
  });

  test("both blog indexes link to detail pages with structured data", async ({ app, browser, screen }) => {
    for (const locale of locales) {
      await app.open(`/${locale}/blog/`);
      const firstPost = browser.locator(`main a[href*='/${locale}/blog/']`).first();
      await expect(firstPost).toBeVisible();
      const href = await firstPost.getAttribute("href");
      expect(href).toBeTruthy();

      await app.open(String(href));
      await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
      expect(await browser.locator('script[type="application/ld+json"]').count()).toBeGreaterThan(0);
    }
  });

  test("localized home and representative detail pages have canonical and alternate links", async ({ app, browser }) => {
    for (const locale of locales) {
      const path = `/${locale}/`;
      await app.open(path);
      const canonical = await browser.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBeTruthy();
      expect(normalizePath(new URL(String(canonical), "https://inaodeng.com").pathname)).toBe(path);
      await expect(browser.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
      const englishAlternates = await browser.locator('link[rel="alternate"][hreflang="en"]').count();
      const englishUsAlternates = await browser.locator('link[rel="alternate"][hreflang="en-US"]').count();
      expect(englishAlternates + englishUsAlternates).toBeGreaterThan(0);
      await expect(browser.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
    }

    const routes = [
      "/en/blog/ai-testing/awesome-qa-skills/awesome-qa-skills-test-strategy-review/",
      "/zh-cn/AIWiki/",
    ];
    for (const route of routes) {
      await app.open(route);
      if (route === "/zh-cn/AIWiki/") {
        const firstTerm = browser.locator("main a[href*='/zh-cn/AIWiki/']").first();
        await expect(firstTerm).toBeVisible();
        const href = await firstTerm.getAttribute("href");
        expect(href).toBeTruthy();
        await app.open(String(href));
        const expectedPath = new URL(String(href), "https://inaodeng.com").pathname;
        const canonical = await browser.locator('link[rel="canonical"]').getAttribute("href");
        expect(canonical).toBeTruthy();
        expect(normalizePath(new URL(String(canonical), "https://inaodeng.com").pathname)).toBe(normalizePath(expectedPath));
        await expect(browser.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
        await expect(browser.locator('link[rel^="alternate"][hreflang^="en"]')).toHaveCount(1);
        await expect(browser.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
        continue;
      }

      const canonical = await browser.locator('link[rel="canonical"]').getAttribute("href");
      expect(canonical).toBeTruthy();
      expect(normalizePath(new URL(String(canonical), "https://inaodeng.com").pathname)).toBe(normalizePath(route));
      await expect(browser.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveCount(1);
      await expect(browser.locator('link[rel^="alternate"][hreflang^="en"]')).toHaveCount(1);
      await expect(browser.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveCount(1);
    }
  });

  test("localhost does not load Counterscale and its production host allowlist remains explicit", async ({ app, browser }) => {
    await app.open("/zh-cn/");

    await expect(browser.locator("#counterscale-script")).toHaveCount(0);
    const scripts = await browser.locator("script").allTextContents();
    const policy = scripts.find((text) => text.includes("counterscale-script") && text.includes("shouldLoadCounterscale"));
    if (policy) {
      expect(policy).toContain("allowedHosts.includes(hostname)");
      expect(policy).toContain("blockedHosts.includes(hostname)");
      expect(policy).toContain("inaodeng.com");
      expect(policy).toContain("www.inaodeng.com");
    }
  });

  test("robots.txt points to the sitemap and the sitemap keeps valid bilingual Wiki URLs", async ({ app, browser }) => {
    const robotsWait = browser.waitForResponse(/\/robots\.txt(?:\?.*)?$/);
    await app.open("/robots.txt");
    const robots = await robotsWait;
    expect(robots.status).toBe(200);
    const robotsText = await robots.text();
    expect(robotsText).toContain("Sitemap:");
    expect(robotsText).toContain("/sitemap-index.xml");

    const sitemapWait = browser.waitForResponse(/\/sitemap-0\.xml(?:\?.*)?$/);
    await app.open("/sitemap-0.xml");
    const sitemap = await sitemapWait;
    expect(sitemap.status).toBe(200);
    const sitemapText = await sitemap.text();
    expect(sitemapText).toContain("<loc>https://inaodeng.com/en/wiki/</loc>");
    expect(sitemapText).toContain("<loc>https://inaodeng.com/en/wiki/a-b-testing/</loc>");
    expect(sitemapText).toContain("<loc>https://inaodeng.com/zh-cn/wiki/a-b-testing/</loc>");
    expect(sitemapText).not.toMatch(/\/zh-cn\/wiki\/wiki\//i);
    expect(sitemapText).not.toMatch(/\/zh-cn\/wiki\/[^<]+\.md\//i);
    expect(sitemapText).not.toMatch(/<loc>https:\/\/inaodeng\.com\/zh-cn\/wiki\/[^<]*[A-Z][^<]*<\/loc>/);
  });

  test("homepage JSON-LD parses and includes a WebSite entity", async ({ app, browser }) => {
    await app.open("/en/");
    const contents = await browser.locator('script[type="application/ld+json"]').allTextContents();
    expect(contents.length).toBeGreaterThan(0);
    const schemas = contents.map((content) => JSON.parse(content) as { [key: string]: unknown });
    expect(schemas.some((schema) => schema["@type"] === "WebSite")).toBe(true);
  });
});
