import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} weekly archive opens an issue and changes to another period`, async ({ app, browser }) => {
    await app.open(`/${locale}/ai-native-qa-weekly/`);
    await expect(browser.locator(".weekly-index-title")).toBeVisible();
    const firstIssue = browser.locator(".weekly-index-card").first();
    await expect(firstIssue).toBeVisible();
    await expect(browser.locator(".weekly-index-card h3").first()).toContainText(/\S/);
    const firstIssueHref = await firstIssue.getAttribute("href");
    expect(firstIssueHref).toBeTruthy();
    await firstIssue.click();
    expect(await browser.url()).toContain(firstIssueHref!);

    await app.open(`/${locale}/ai-native-qa-weekly/2026/week-39/`);
    await expect(browser.locator(".weekly-article")).toBeVisible();
    const period = browser.locator("[data-weekly-period]");
    expect(await browser.locator("[data-weekly-period] option").count()).toBeGreaterThan(1);
    await period.selectOption({ index: 1 });
    await expect(browser).toHaveURL(/\/ai-native-qa-weekly\/2026\/week-\d+\/$/);
    await expect(browser.locator(".weekly-article")).toBeVisible();
  });

  test(`${locale} weekly issue exposes chapter navigation in the reading view`, async ({ app, browser }) => {
    await browser.setViewport({ width: 1440, height: 900 });
    await app.open(`/${locale}/ai-native-qa-weekly/2026/week-39/`);
    await expect(browser.locator(".weekly-article")).toBeVisible();
    await expect(browser.locator(".docs-toc-wrap .toc-sidebar--right")).toBeVisible();
    expect(await browser.locator(".docs-toc-wrap .toc-link").count()).toBeGreaterThan(0);
  });
}
