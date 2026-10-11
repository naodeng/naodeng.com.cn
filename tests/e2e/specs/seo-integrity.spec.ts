import { test, expect } from "@playwright/test";

test("English Wiki detail is indexable and points to the matching local translations", async ({ page }) => {
  const path = "/en/wiki/a-b-testing/";
  await page.goto(path, { waitUntil: "domcontentloaded" });
  await expect(page.locator("html")).toHaveAttribute("lang", /^en/);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /index, follow/);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);
  await expect(page.locator('link[rel="alternate"][hreflang^="en"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);
  await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/a-b-testing/");
  await expect(page.locator('link[rel="alternate"][hreflang="x-default"]')).toHaveAttribute("href", `https://inaodeng.com${path}`);

  const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes =>
    nodes.map(node => JSON.parse(node.textContent || "null")));
  const term = schemas.find(schema => schema?.["@type"] === "DefinedTerm");
  expect(term?.name).toBeTruthy();
  expect(term?.inDefinedTermSet?.name).toBe("QA Wiki");

  const sitemap = await page.request.get("/sitemap-0.xml");
  expect(sitemap.ok()).toBeTruthy();
  const xml = await sitemap.text();
  expect(xml).toContain(`<loc>https://inaodeng.com${path}</loc>`);
  expect(xml).toContain("<loc>https://inaodeng.com/en/wiki/</loc>");
});

test("sitemap keeps the actual translation address for a bilingual article", async ({ page }) => {
  const response = await page.request.get("/sitemap-0.xml");
  expect(response.ok()).toBeTruthy();
  const entries = await response.text();
  const english = entries.match(/<url>\s*<loc>https:\/\/inaodeng\.com\/en\/blog\/performance-testing\/gatling-tool-tutorial1\/<\/loc>[\s\S]*?<\/url>/)?.[0];
  expect(english).toBeTruthy();
  expect(english).toContain('hreflang="zh-CN" href="https://inaodeng.com/zh-cn/blog/performance-testing/gatling-tool-intro1/"');
});
