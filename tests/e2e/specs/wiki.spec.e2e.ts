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

for (const locale of ["zh-cn", "en"] as const) {
  const aiWikiIndexHeading = locale === "zh-cn" ? "AI 百科" : "AI Wiki";

  test(`${locale} Wiki detail sidebar search submits to the localized index`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/wiki/accessibility-testing/`);
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();

    const input = browser.locator("#docs-sidebar-search-input");
    await expect(input).toBeVisible();
    await expect(browser.locator(".docs-sidebar-search-form")).toHaveAttribute("action", `/${locale}/wiki/`);
    await input.fill(locale === "zh-cn" ? "manual" : "acceptance");
    await input.press("Enter");
    await expect(browser).toHaveURL(new RegExp(`/${locale}/wiki/\\?q=`));
    await expect(browser.locator("#wiki-search")).toHaveValue(locale === "zh-cn" ? "manual" : "acceptance");
  });

  test(`${locale} AI Wiki directory and detail expose localized navigation and sidebar search`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/AIWiki/`);
    await expect(screen.getByRole("heading", { name: aiWikiIndexHeading, level: 1 })).toBeVisible();
    await expect(browser.locator("#aiwiki-search")).toBeVisible();
    await expect(browser.locator(`.docs-sidebar-link[href='/${locale}/AIWiki/ai-agent/']`)).toBeVisible();

    await app.open(`/${locale}/AIWiki/ai-agent/`);
    await expect(browser).toHaveURL(new RegExp(`/${locale}/AIWiki/ai-agent/$`));
    await expect(browser.locator(".docs-sidebar-link--active")).toHaveAttribute("aria-current", "page");
    await expect(browser.locator(".docs-content article")).toContainText(/AI Agent/i);
    await expect(browser.locator(".toc-list--desktop .toc-link").first()).toBeVisible();

    const input = browser.locator("#docs-sidebar-search-input");
    await expect(input).toBeVisible();
    await expect(browser.locator(".docs-sidebar-search-form")).toHaveAttribute("action", `/${locale}/AIWiki/`);
    await input.fill(locale === "zh-cn" ? "agent" : "model");
    await input.press("Enter");
    await expect(browser).toHaveURL(new RegExp(`/${locale}/AIWiki/\\?q=`));
    await expect(browser.locator("#aiwiki-search")).toHaveValue(locale === "zh-cn" ? "agent" : "model");
  });
}
