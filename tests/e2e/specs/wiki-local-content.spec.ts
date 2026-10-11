import { expect, test } from "@playwright/test";

test("English Wiki term is served from a local page with a matching Chinese translation", async ({ page }) => {
  const path = "/en/wiki/acceptance-testing/";
  const response = await page.request.get(path, { maxRedirects: 0 });
  expect(response.status()).toBe(200);
  const html = await response.text();
  expect(html).toMatch(/<html lang="en(?:-[A-Za-z]+)?"/);
  expect(html).toContain('<link rel="canonical" href="https://inaodeng.com/en/wiki/acceptance-testing/">');
  expect(html).toContain("Acceptance testing is conducted by potential end-users or customers");

  await page.goto(path, { waitUntil: "domcontentloaded" });
  await expect(page.locator(".docs-content h1")).toHaveText("Acceptance Testing");
  await expect(page.locator(".docs-sidebar-link--active")).toHaveText("Acceptance Testing");
  await expect(page.getByText("On this page").first()).toBeVisible();
  await expect(page.locator('.giscus-section script[data-lang="en"]')).toHaveCount(1);
  await expect(page.locator('link[rel="alternate"][hreflang="zh-CN"]')).toHaveAttribute("href", "https://inaodeng.com/zh-cn/wiki/acceptance-testing/");

  const schemas = await page.locator('script[type="application/ld+json"]').evaluateAll(nodes =>
    nodes.map(node => JSON.parse(node.textContent || "null")));
  const term = schemas.find(schema => schema?.["@type"] === "DefinedTerm");
  expect(term?.name).toBe("Acceptance Testing");
  expect(term?.inDefinedTermSet?.name).toBe("QA Wiki");
});

test("English Wiki language switch opens the matching Chinese term", async ({ page }) => {
  await page.goto("/en/wiki/acceptance-testing/", { waitUntil: "domcontentloaded" });
  await page.locator("[data-locale-trigger]").first().click();
  await page.locator('[data-locale-option][data-lang="zh-cn"]').first().click();
  await expect(page).toHaveURL(/\/zh-cn\/wiki\/acceptance-testing\/?$/);
  await expect(page.locator(".docs-content h1")).toContainText("验收测试");
});

test("English Wiki index stays usable on desktop and mobile", async ({ page }) => {
  for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    await page.goto("/en/wiki/", { waitUntil: "domcontentloaded" });
    await expect(page.getByRole("heading", { name: "QA Wiki", level: 1 })).toBeVisible();
    await expect(page.locator('.wiki-license a[href="https://github.com/naodeng/QA-Glossary-Wiki"]'))
      .toHaveText("QA Glossary Wiki source collection");
    await expect(page.locator('.wiki-license a[rel="license"]')).toHaveText("PolyForm Noncommercial 1.0.0");
    await expect(page.locator("#wiki-search")).toBeVisible();
    await page.locator("#wiki-search").fill("acceptance testing");
    await expect(page.locator(".wiki-letter-link[href='/en/wiki/acceptance-testing/']")).toBeVisible();
    const widths = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
    expect(widths.content).toBeLessThanOrEqual(widths.viewport + 1);
  }
});
