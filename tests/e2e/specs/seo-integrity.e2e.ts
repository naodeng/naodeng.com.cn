import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const pages = [
  "",
  "about/",
  "blog/",
  "AIWiki/",
  "AIWiki/ai-agent/",
  "prompts/",
  "prompts/requirements-analysis/",
  "prompts/workflows/daily/",
  "qaskills/",
  "qaskills/requirements-analysis/",
  "guild/api-testing/bruno/building-project/",
  "ai-native-qa-weekly/2026/week-40/",
] as const;
const viewports = [
  { width: 1280, height: 900 },
  { width: 390, height: 844 },
] as const;

test("English Wiki detail metadata and sitemap point to the matching Chinese translation", async ({ app, browser, screen }) => {
  const path = "/en/wiki/a-b-testing/";
  await app.open(path);

  await expect(browser.locator("html")).toHaveAttribute("lang", /^en/i);
  await expect(browser.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/i);
  await expect(browser.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);
  await expect(browser.locator('link[rel="alternate"][hreflang^="en"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);
  await expect(browser.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/a-b-testing/");
  await expect(browser.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);

  const schemas = (await browser.locator('script[type="application/ld+json"]').allTextContents()).map((text) => JSON.parse(text) as Record<string, unknown>);
  const term = schemas.find((schema) => schema["@type"] === "DefinedTerm");
  expect(term?.name).toBe(await browser.locator("main h1").first().textContent());
  expect((term?.inDefinedTermSet as { name?: string } | undefined)?.name).toBe("QA Wiki");
  await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();

  const sitemapWait = browser.waitForResponse(/\/sitemap-0\.xml(?:\?.*)?$/);
  await app.open("/sitemap-0.xml");
  const sitemap = await sitemapWait;
  expect(sitemap.status).toBe(200);
  const xml = await sitemap.text();
  expect(xml).toContain(`<loc>https://inaodeng.com${path}</loc>`);
  expect(xml).toContain("<loc>https://inaodeng.com/en/wiki/</loc>");
});

test("sitemap retains the actual Chinese translation URL for a bilingual article", async ({ app, browser }) => {
  const responseWait = browser.waitForResponse(/\/sitemap-0\.xml(?:\?.*)?$/);
  await app.open("/sitemap-0.xml");
  const response = await responseWait;
  expect(response.status).toBe(200);
  const entries = await response.text();
  const english = entries.match(/<url>\s*<loc>https:\/\/inaodeng\.com\/en\/blog\/performance-testing\/gatling-tool-tutorial1\/<\/loc>[\s\S]*?<\/url>/)?.[0];
  expect(english).toBeTruthy();
  expect(english).toContain('hreflang="zh-CN" href="https://inaodeng.com/zh-cn/blog/performance-testing/gatling-tool-intro1/"');
});

for (const locale of ["en", "zh-cn"] as const) {
  const seriesName = locale === "zh-cn" ? "Awesome QA Skills 实战" : "Awesome QA Skills Field Guides";
  for (const section of ["blog/", `tags/${encodeURIComponent("QA Skills")}/`, `series/${encodeURIComponent(seriesName)}/`]) {
    test(`${locale}/${section} page 2 has its own title, description and canonical`, async ({ app, browser }) => {
      await app.open(`/${locale}/${section}`);
      const firstTitle = await browser.title();
      const firstDescription = await browser.locator('meta[name="description"]').getAttribute("content");

      const pageTwo = `/${locale}/${section}page/2/`;
      await app.open(pageTwo);
      const secondTitle = await browser.title();
      const secondDescription = await browser.locator('meta[name="description"]').getAttribute("content");
      const canonical = await browser.locator('link[rel="canonical"]').getAttribute("href");

      expect(secondTitle).not.toBe(firstTitle);
      expect(secondDescription).not.toBe(firstDescription);
      expect(new URL(String(canonical), "https://inaodeng.com").pathname).toBe(pageTwo);
    });
  }
}

for (const locale of ["en", "zh-cn"] as const) {
  for (const viewport of viewports) {
    for (const section of pages) {
      const path = `/${locale}/${section}`;
      test(`${path} has matching WebPage and WebSite structured data at ${viewport.width}px`, async ({ app, browser, screen }) => {
        await browser.setViewport(viewport);
        await app.open(path);

        const canonical = await browser.locator('link[rel="canonical"]').getAttribute("href");
        const description = await browser.locator('meta[name="description"]').getAttribute("content");
        const language = await browser.locator("html").getAttribute("lang");
        const title = await browser.title();
        const schemas = (await browser.locator('script[type="application/ld+json"]').allTextContents()).map((text) => JSON.parse(text) as Record<string, unknown>);
        const webPage = schemas.find((schema) => schema["@type"] === "WebPage");
        const website = schemas.find((schema) => schema["@type"] === "WebSite");

        expect(webPage).toBeTruthy();
        expect(website).toBeTruthy();
        expect(webPage?.["@id"]).toBe(`${canonical}#webpage`);
        expect(webPage?.url).toBe(canonical);
        expect(webPage?.name).toBe(title);
        expect(webPage?.description).toBe(description);
        expect(webPage?.inLanguage).toBe(language);
        const partOf = webPage?.isPartOf as { [key: string]: unknown } | undefined;
        expect(partOf?.["@id"]).toBe("https://inaodeng.com/#website");
        expect(website?.["@id"]).toBe(partOf?.["@id"]);
        await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
      });
    }
  }
}
