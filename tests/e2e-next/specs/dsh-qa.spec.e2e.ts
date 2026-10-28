import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} dsh-qa page presents the product, install paths, and current release`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/dsh-qa/`);

    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator("[data-dsh-qa-page]")).toBeVisible();
    await expect(browser.locator("[data-dsh-qa-action]")).toHaveCount(3);
    await expect(browser.locator("[data-dsh-qa-feature]")).toHaveCount(4);
    await expect(browser.locator("[data-dsh-qa-flow-stage]")).toHaveCount(5);
    await expect(browser.locator("[data-dsh-qa-showcase]")).toHaveCount(6);
    await expect(browser.locator("[data-install-mode]")).toHaveCount(2);
    await expect(browser.locator("[data-dsh-command-copy]")).toBeVisible();
    await expect(browser.locator("[data-dsh-command-value]")).toContainText("npm install -g dsh-qa");

    const latestVersion = (await browser.locator("[data-dsh-current-release] strong").textContent())?.trim();
    expect(latestVersion).toBeTruthy();
    await expect(browser.locator("[data-dsh-qa-latest-release]")).toContainText(latestVersion!);
    await expect(browser.locator("[data-dsh-qa-latest-release]")).toHaveAttribute(
      "href",
      new RegExp(`github\\.com/naodeng/dsh-qa/releases/tag/${latestVersion}`),
    );
    expect(await browser.locator("[data-release-note]").count()).toBeGreaterThan(0);
  });

  test(`${locale} dsh-qa command tabs and release history expose the selected content`, async ({ app, browser }) => {
    await app.open(`/${locale}/dsh-qa/`);
    const pluginTab = browser.locator("[data-dsh-command-card] [data-dsh-command-tab]").nth(1);
    await pluginTab.click();
    await expect(pluginTab).toHaveAttribute("aria-selected", "true");
    await expect(browser.locator("[data-dsh-command-card] [data-dsh-command-value]")).toContainText(
      "npx @deepseek-ai/dsh plugin --profile web add dsh-qa",
    );

    const history = browser.locator("[data-dsh-release-history]");
    await browser.locator("[data-dsh-release-history] > summary").click();
    await expect(history).toHaveAttribute("open", "");
    await browser.locator("[data-release-note] > summary").first().click();
    await expect(browser.locator("[data-release-note]").first()).toHaveAttribute("open", "");
    await expect(browser.locator("[data-release-note] ul li").first()).toBeVisible();
    await expect(browser.locator('[data-release-note] a[href*="github.com/naodeng/dsh-qa/releases/tag/"]').first()).toBeVisible();
    await expect(browser.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/${locale}/dsh-qa/?$`));
    const otherLocale = locale === "en" ? "zh-cn" : "en";
    await browser.locator("header [data-locale-trigger]").click();
    await expect(browser.locator(`header [data-locale-option][data-lang="${otherLocale}"]`)).toHaveAttribute(
      "href",
      `/${otherLocale}/dsh-qa/`,
    );
  });

  test(`${locale} dsh-qa copies the selected install command and reports success`, async ({ app, browser }) => {
    await browser.addInitScript(() => {
      const testWindow = window as Window & { __e2eClipboard?: string };
      Object.defineProperty(navigator, "clipboard", {
        configurable: true,
        value: { writeText: async (text: string) => { testWindow.__e2eClipboard = text; } },
      });
    });
    await app.open(`/${locale}/dsh-qa/`);

    const commandCard = browser.locator("[data-dsh-command-card]");
    const command = await browser.locator("[data-dsh-command-value]").textContent();
    await browser.locator("[data-dsh-command-copy]").click();
    await expect(commandCard).toHaveAttribute("data-copy-state", "copied");
    const copiedCommand = await browser.evaluate(() => (window as Window & { __e2eClipboard?: string }).__e2eClipboard ?? "");
    expect(copiedCommand).toBe(command!);
  });

  test(`${locale} dsh-qa fits a narrow viewport without losing its install command`, async ({ app, browser }) => {
    await browser.setViewport({ width: 375, height: 844 });
    await app.open(`/${locale}/dsh-qa/`);
    await expect(browser.locator("[data-dsh-command-value]")).toBeVisible();
    const overflows = await browser.evaluate(
      () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
    );
    expect(overflows).toBe(false);
  });
}
