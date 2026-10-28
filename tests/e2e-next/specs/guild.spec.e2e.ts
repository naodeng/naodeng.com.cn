import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["zh-cn", "en"] as const) {
  const indexHeading = locale === "zh-cn" ? /让自动化测试成为你的超能力/ : /Make Test Automation Your Superpower/;

  test(`${locale} Guild directory filters learning cards and opens a framework`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/guild/`);
    await expect(screen.getByRole("heading", { name: indexHeading, level: 1 })).toBeVisible();

    const uiFilter = browser.locator('.filter-pill[data-filter="ui-testing"]');
    await uiFilter.click();
    await expect(uiFilter).toHaveAttribute("aria-pressed", "true");
    await expect(browser.locator('[data-testtype="ui-testing"]').first()).toBeVisible();
    await expect(browser.locator('[data-testtype="api-testing"]').first()).toBeHidden();

    const frameworkPath = `/${locale}/guild/api-testing/postman/`;
    await app.open(`/${locale}/guild/`);
    const framework = browser.locator(`.fw-card[href="${frameworkPath}"]`);
    await expect(framework).toBeVisible();
    await expect(browser.locator(`.fw-card[href="${frameworkPath}"] .fw-card__name`)).toContainText("Postman");
    await framework.click();
    await expect(browser).toHaveURL(new RegExp(`${locale}/guild/api-testing/postman/`));
    await expect(browser.locator("#learning-path .article-card").first()).toBeVisible();
  });
}

for (const locale of ["zh-cn", "en"] as const) {
  test(`${locale} Postman learning path filters a stage and opens its tutorial`, async ({ app, browser }) => {
    await app.open(`/${locale}/guild/api-testing/postman/`);
    const pills = browser.locator(".lp-pill");
    const tutorials = browser.locator("#learning-path .article-card");
    await expect(tutorials.first()).toBeVisible();

    await pills.nth(1).click();
    await expect(browser).toHaveClass(pills.nth(1), /lp-pill--active/);
    await expect(tutorials.first()).toBeVisible();
    const href = await tutorials.first().getAttribute("href");
    await tutorials.first().click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/guild/api-testing/postman/.+/`));
    await expect(browser.locator(".guild-content")).toBeVisible();
    expect(href).toContain(`/${locale}/guild/api-testing/postman/`);
  });
}

for (const item of [
  { locale: "zh-cn", title: "Playwright MCP：用 AI Agent 探索浏览器并沉淀测试" },
  { locale: "en", title: "Playwright MCP: Agent-Assisted Browser Exploration" },
] as const) {
  test(`${item.locale} Playwright MCP tutorial keeps the localized setup guidance`, async ({ app, browser }) => {
    await app.open(`/${item.locale}/guild/ui-testing/playwright/mcp-agent-browser-automation/`);
    await expect(browser.locator("h1")).toContainText(item.title);
    await expect(browser.locator(".guild-content")).toContainText("@playwright/mcp@latest");
    await expect(browser.locator(".guild-content")).toContainText("Playwright MCP");
  });
}
