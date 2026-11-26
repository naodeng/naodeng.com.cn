import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["zh-cn", "en"] as const) {
  const indexTitle = locale === "zh-cn" ? "测试百科" : "QA Wiki";

  test(`${locale} Wiki directory searches and opens a localized term`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/wiki/`);

    await expect(screen.getByRole("heading", { name: indexTitle, level: 1 })).toBeVisible();
    expect(await browser.locator(".wiki-letter-link").count()).toBeGreaterThan(0);
    const search = browser.locator(".wiki-search-input");
    await expect(search).toBeVisible();
    await search.fill(locale === "zh-cn" ? "验收测试" : "acceptance testing");
    const result = browser.locator(`.wiki-letter-link[href="/${locale}/wiki/acceptance-testing/"]`);
    await expect(result).toBeVisible();
    await result.click();

    await expect(browser).toHaveURL(new RegExp(`/${locale}/wiki/acceptance-testing/?$`));
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(browser.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
    await expect(browser.locator(".docs-content article")).toContainText(locale === "zh-cn" ? /验收测试/ : /acceptance testing/i);
  });
}

test("Wiki sidebar search stays synchronized with the directory search", async ({ app, browser, screen }) => {
  await app.open("/zh-cn/wiki/");
  await expect(screen.getByRole("heading", { name: "测试百科", level: 1 })).toBeVisible();

  await browser.locator("#docs-sidebar-search-input").fill("acceptance");
  await expect(browser.locator("#wiki-search")).toHaveValue("acceptance");
  await expect(browser.locator(".wiki-letter-link[href='/zh-cn/wiki/acceptance-testing/']")).toBeVisible();
  await expect(browser.locator(".wiki-letter-link[href='/zh-cn/wiki/manual-testing/']")).toBeHidden();
});

test("AI Wiki directory and detail expose matching localized navigation", async ({ app, browser, screen }) => {
  await app.open("/en/AIWiki/");
  await expect(screen.getByRole("heading", { name: "AI Wiki", level: 1 })).toBeVisible();
  await expect(browser.locator("#aiwiki-search")).toBeVisible();
  await expect(browser.locator(".docs-sidebar-link[href='/en/AIWiki/ai-agent/']")).toBeVisible();

  await app.open("/en/AIWiki/ai-agent/");
  await expect(browser).toHaveURL(/\/en\/AIWiki\/ai-agent\/$/);
  await expect(browser.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
  await expect(browser.locator(".docs-content article")).toContainText(/AI agent/i);
  await expect(browser.locator(".toc-list--desktop .toc-link").first()).toBeVisible();
});
