import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} Wiki related term opens another article in the same language`, async ({ app, browser }) => {
    await app.open(`/${locale}/wiki/acceptance-testing/`);
    const firstRelated = browser.locator(".wiki-related-pill").first();
    await expect(firstRelated).toBeVisible();
    const href = await firstRelated.getAttribute("href");
    expect(href).toContain(`/${locale}/wiki/`);
    await firstRelated.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/wiki/.+/`));
    await expect(browser.locator(".docs-content h1")).toBeVisible();
  });
}

test("AI Wiki related term opens a related entry", async ({ app, browser }) => {
  await app.open("/zh-cn/AIWiki/codex/");
  const firstRelated = browser.locator(".aiwiki-related-pill").first();
  await expect(firstRelated).toBeVisible();
  const href = await firstRelated.getAttribute("href");
  expect(href).toMatch(/\/zh-cn\/AIWiki\//);
  await firstRelated.click();
  await expect(browser).toHaveURL(/\/zh-cn\/AIWiki\/.+\/$/);
  await expect(browser.locator(".docs-content h1")).toBeVisible();
});

test("blog and Guild recommendation links lead to related content", async ({ app, browser }) => {
  await app.open("/zh-cn/blog/");
  await browser.locator(".post-card .post-link").first().click();
  const blogPill = browser.locator(".blog-related-terms-pill").first();
  await expect(blogPill).toBeVisible();
  await blogPill.click();
  await expect(browser).toHaveURL(/\/zh-cn\/(wiki|AIWiki|guild|tags|series)\//);

  await app.open("/zh-cn/guild/api-testing/postman/");
  await browser.locator(".article-card").first().click();
  const guildPill = browser.locator(".guild-related-terms-pill").first();
  await expect(guildPill).toBeVisible();
  await guildPill.click();
  await expect(browser).toHaveURL(/\/zh-cn\/(wiki|AIWiki|guild|blog)\//);
});
