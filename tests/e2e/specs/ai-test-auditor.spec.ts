import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} AI Test Auditor preserves the installation and release workflow`, async ({ page, baseURL }) => {
    const response = await page.goto(`${baseURL || ""}/${locale}/ai-test-auditor/`, { waitUntil: "domcontentloaded" });

    expect(response?.status()).toBe(200);
    await expect(page.locator("[data-ai-test-auditor-page]")).toBeVisible();
    await expect(page.locator(".auditor-page h1")).toBeVisible();
    expect(await page.locator(".auditor-page .grid article").count()).toBeGreaterThan(0);
    await expect(page.locator(".auditor-page pre code").first()).toBeVisible();

    const release = page.locator(".releases details").first();
    await expect(release).toBeVisible();
    await release.locator("summary").click();
    await expect(release.locator("ul")).toBeVisible();
    await expect(release.locator('a[href^="http"]')).toBeVisible();
  });

  test(`${locale} AI Test Auditor follows Proofline surfaces in both themes`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/${locale}/ai-test-auditor/`, { waitUntil: "domcontentloaded" });

    const surface = await page.locator(".auditor-page .panel").evaluate((node) => getComputedStyle(node).backgroundColor);
    const pageColor = await page.locator(".auditor-page").evaluate((node) => getComputedStyle(node).color);
    const bodyColor = await page.locator("body").evaluate((node) => getComputedStyle(node).color);
    expect(surface).not.toBe("rgba(0, 0, 0, 0)");
    expect(pageColor).toBe(bodyColor);

    await page.evaluate(() => { document.documentElement.dataset.theme = "dark"; });
    const darkSurface = await page.locator(".auditor-page .panel").evaluate((node) => getComputedStyle(node).backgroundColor);
    expect(darkSurface).not.toBe(surface);
  });

  test(`${locale} AI Test Auditor sections use headings without repeated numbered eyebrows`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/${locale}/ai-test-auditor/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".auditor-page .section > .kicker")).toHaveCount(0);
    await expect(page.locator(".auditor-page .section > h2")).toHaveCount(5);
  });

  test(`${locale} AI Test Auditor has no narrow-screen overflow`, async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseURL || ""}/${locale}/ai-test-auditor/`, { waitUntil: "domcontentloaded" });

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
  });

  test(`${locale} AI Test Auditor release summaries expose the site focus ring`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/${locale}/ai-test-auditor/`, { waitUntil: "domcontentloaded" });
    const summary = page.locator(".releases summary").first();
    await summary.focus();
    await expect(summary).toHaveCSS("outline-style", "solid");
    await expect(summary).toHaveCSS("outline-width", "2px");
  });

  if (locale === "zh-cn") {
    test("中文 AI Test Auditor 将版本区标题本地化", async ({ page, baseURL }) => {
      await page.goto(`${baseURL || ""}/zh-cn/ai-test-auditor/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator(".auditor-page .section").last().locator("h2")).toHaveText("版本变更");
    });
  }
}
