import { test, expect } from "@playwright/test";

test("中文测试百科只声明真实可收录的语言版本", async ({ page }) => {
  await page.goto("/zh-cn/wiki/a-b-testing/", { waitUntil: "domcontentloaded" });
  await expect(page.locator('link[hreflang="en-US"], link[hreflang="en"]')).toHaveCount(0);
  await expect(page.locator('link[hreflang="zh-CN"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/a-b-testing/");
  await expect(page.locator('link[hreflang="x-default"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/a-b-testing/");
});

test("sitemap 保留历史双语文章的实际对译地址", async ({ page }) => {
  const response = await page.request.get("/sitemap-0.xml");
  expect(response.ok()).toBeTruthy();
  const entries = await response.text();
  const english = entries.match(/<url>\s*<loc>https:\/\/inaodeng\.com\/en\/blog\/performance-testing\/gatling-tool-tutorial1\/<\/loc>[\s\S]*?<\/url>/)?.[0];
  expect(english).toBeTruthy();
  expect(english).toContain('hreflang="zh-CN" href="https://inaodeng.com/zh-cn/blog/performance-testing/gatling-tool-intro1/"');
  expect(entries).not.toContain('href="https://inaodeng.com/en/wiki/');
});

for (const locale of ["en", "zh-cn"]) {
  const seriesName = locale === "zh-cn" ? "Awesome QA Skills 实战" : "Awesome QA Skills Field Guides";
  for (const { name, section } of [
    { name: "博客", section: "blog/" },
    { name: "标签", section: `tags/${encodeURIComponent("QA Skills")}/` },
    { name: "系列", section: `series/${encodeURIComponent(seriesName)}/` },
  ]) {
    test(`${locale} ${name}分页拥有独立的标题和摘要`, async ({ page }) => {
      await page.goto(`/${locale}/${section}`, { waitUntil: "domcontentloaded" });
      const indexTitle = await page.title();
      const indexDescription = await page.locator('meta[name="description"]').getAttribute("content");
      const path = `/${locale}/${section}page/2/`;
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.status()).toBe(200);
      expect(await page.title()).not.toBe(indexTitle);
      expect(await page.locator('meta[name="description"]').getAttribute("content")).not.toBe(indexDescription);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);
    });
  }
}

const sections = [
  "", "about/", "blog/", "AIWiki/", "AIWiki/ai-agent/",
  "prompts/", "prompts/requirements-analysis/", "prompts/workflows/daily/",
  "qaskills/", "qaskills/requirements-analysis/",
  "guild/api-testing/bruno/building-project/", "ai-native-qa-weekly/2026/week-40/",
];

for (const locale of ["en", "zh-cn"]) {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    for (const section of sections) {
      test(`${locale}/${section} ${viewport.width}px WebPage 关联站点与页面内容`, async ({ page }) => {
        await page.setViewportSize(viewport);
        const response = await page.goto(`/${locale}/${section}`, { waitUntil: "domcontentloaded" });
        expect(response?.status()).toBe(200);
        const canonical = await page.locator('link[rel="canonical"]').getAttribute("href");
        const description = await page.locator('meta[name="description"]').getAttribute("content");
        const language = await page.locator("html").getAttribute("lang");
        const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes =>
          nodes.map(node => JSON.parse(node.textContent || "null")));
        const webPage = schemas.find(schema => schema?.["@type"] === "WebPage");
        expect(webPage).toBeTruthy();
        expect(webPage["@id"]).toBe(`${canonical}#webpage`);
        expect(webPage.url).toBe(canonical);
        expect(webPage.name).toBe(await page.title());
        expect(webPage.description).toBe(description);
        expect(webPage.inLanguage).toBe(language);
        expect(webPage.isPartOf["@id"]).toBe("https://inaodeng.com/#website");
        const website = schemas.find(schema => schema?.["@type"] === "WebSite");
        expect(website["@id"]).toBe(webPage.isPartOf["@id"]);
        await expect(page.locator("main h1").first()).toBeVisible();
      });
    }
  }
}
