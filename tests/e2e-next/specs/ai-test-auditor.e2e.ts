import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} AI Test Auditor keeps the install and release workflow usable`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/ai-test-auditor/`);
    await expect(browser.locator("[data-ai-test-auditor-page]")).toBeVisible();
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(browser.locator("#sample-report-title")).toHaveText(locale === "zh-cn" ? "立即体验" : "Try it now");
    await expect(browser.locator("#install-title")).toHaveText(locale === "zh-cn" ? "快速开始" : "Quick start");
    expect(await browser.evaluate(() => {
      const report = document.querySelector(".report-section");
      const install = document.querySelector("#install-title");
      return Boolean(report && install && (report.compareDocumentPosition(install) & Node.DOCUMENT_POSITION_FOLLOWING));
    })).toBe(true);
    expect(await browser.locator(".auditor-page .grid article").count()).toBeGreaterThan(0);
    await expect(browser.locator(".auditor-page pre code").first()).toBeVisible();

    const history = browser.locator("[data-auditor-release-history]");
    await expect(history).toBeVisible();
    await expect(history).not.toHaveAttribute("open");
    await expect(browser.locator(".release-history-toggle > span").first()).toHaveText(locale === "zh-cn" ? "历史版本" : "Release history");
    const release = browser.locator("[data-auditor-release-history] [data-release-note]").first();
    await expect(release).toBeHidden();
    await browser.locator("[data-auditor-release-history] > summary").click();
    await expect(release).toBeVisible();
    await browser.locator("[data-auditor-release-history] [data-release-note] summary").first().click();
    await expect(browser.locator("[data-auditor-release-history] [data-release-note] ul").first()).toBeVisible();
    await expect(browser.locator("[data-auditor-release-history] [data-release-note] a[href^='http']").first()).toBeVisible();
  });

  test(`${locale} AI Test Auditor sections use headings and avoid narrow-screen overflow`, async ({ app, browser }) => {
    await browser.setViewport({ width: 390, height: 844 });
    await app.open(`/${locale}/ai-test-auditor/`);
    await expect(browser.locator(".auditor-page .section > .kicker")).toHaveCount(0);
    await expect(browser.locator(".auditor-page .section > h2")).toHaveCount(5);
    const dimensions = await browser.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });

  test(`${locale} AI Test Auditor release history is operable by keyboard and shows focus`, async ({ app, browser }) => {
    await app.open(`/${locale}/ai-test-auditor/`);
    const summary = browser.locator("[data-auditor-release-history] > summary");
    await summary.focus();
    await expect(summary).toBeFocused();
    const focusStyle = await browser.evaluate(() => {
      const node = document.querySelector("[data-auditor-release-history] > summary");
      if (!node) return null;
      const style = getComputedStyle(node);
      return { outlineStyle: style.outlineStyle, outlineWidth: style.outlineWidth };
    });
    expect(focusStyle?.outlineStyle).toBe("solid");
    expect(focusStyle?.outlineWidth).toBe("2px");
    await summary.press("Enter");
    await expect(browser.locator("[data-auditor-release-history]")).toHaveAttribute("open");
    await expect(browser.locator("[data-auditor-release-history] [data-release-note]").first()).toBeVisible();
  });

  if (locale === "zh-cn") {
    test("Chinese AI Test Auditor localizes its release section heading", async ({ app, browser }) => {
      await app.open("/zh-cn/ai-test-auditor/");
      await expect(browser.locator(".auditor-page .section").last().getByRole("heading", { level: 2 })).toHaveText("版本变更");
    });
  }
}
