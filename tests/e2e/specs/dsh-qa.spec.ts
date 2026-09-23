import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh-cn"] as const) {
  const otherLocale = locale === "en" ? "zh-cn" : "en";

  test(`${locale} dsh-qa presents the complete product page with the latest release expanded`, async ({ page }) => {
    const response = await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });

    expect(response?.status()).toBe(200);
    await expect(page.locator("[data-dsh-qa-page]")).toBeVisible();
    await expect(page.locator("[data-dsh-qa-action]")).toHaveCount(3);
    await expect(page.locator("[data-dsh-qa-feature]")).toHaveCount(4);
    await expect(page.locator("[data-dsh-qa-flow-stage]")).toHaveCount(5);
    await expect(page.locator("[data-dsh-qa-showcase]")).toHaveCount(6);
    await expect(page.locator("[data-dsh-qa-showcase] img")).toHaveCount(6);
    await expect(page.locator("[data-dsh-qa-showcase] img").first()).toHaveAttribute("loading", "eager");
    expect(await page.locator("[data-dsh-qa-showcase] img").evaluateAll((images) => images.slice(1).every((image) => image.getAttribute("loading") === "lazy"))).toBe(true);
    await expect(page.locator("[data-dsh-qa-latest-release]")).toContainText("v0.5.2");
    await expect(page.locator("[data-dsh-qa-latest-release]")).toHaveAttribute("href", "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.2");
    await expect(page.locator("[data-dsh-command-card]")).toContainText("npm install -g dsh-qa");
    await expect(page.locator("[data-dsh-command-copy]")).toBeVisible();
    await expect(page.locator("[data-install-mode]")).toHaveCount(2);
    await expect(page.locator("[data-dsh-current-release]")).toContainText("v0.5.2");
    await expect(page.locator("[data-dsh-release-history]")).not.toHaveAttribute("open", "");
    await expect(page.locator("[data-release-note]")).toHaveCount(16);
  });

  test(`${locale} dsh-qa expands a release and exposes localized metadata`, async ({ page }) => {
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });
    const history = page.locator("[data-dsh-release-history]");
    await history.locator(":scope > summary").click();
    await expect(history).toHaveAttribute("open", "");
    const release = page.locator("[data-release-note]").first();

    await release.locator("summary").click();
    await expect(release).toHaveAttribute("open", "");
    await expect(release.locator("li")).not.toHaveCount(0);
    await expect(release.locator('a[href*="github.com/naodeng/dsh-qa/releases/tag/"]')).toBeVisible();
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/${locale}/dsh-qa/?$`));
    expect(await page.locator(`a[href="/${otherLocale}/dsh-qa/"]`).count()).toBeGreaterThan(0);
  });

  test(`${locale} dsh-qa copies the Harness web command`, async ({ page, context }) => {
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });

    const commandCard = page.locator("[data-dsh-command-card]");
    await commandCard.locator("[data-dsh-command-copy]").click();
    await expect(commandCard).toHaveAttribute("data-copy-state", "copied");
  });

  test(`${locale} dsh-qa switches the Hero command to the Harness plugin installer`, async ({ page }) => {
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });
    const commandCard = page.locator("[data-dsh-command-card]");

    await commandCard.locator("[data-dsh-command-tab]").nth(1).click();
    await expect(commandCard.locator("[data-dsh-command-value]")).toContainText("npx @deepseek-ai/dsh plugin --profile web add dsh-qa");
    await expect(commandCard.locator("[data-dsh-command-tab]").nth(1)).toHaveAttribute("aria-selected", "true");
    await expect(page.locator("[data-install-mode]").nth(0)).not.toContainText("npx @deepseek-ai/dsh web");
    await expect(page.locator("[data-install-mode]").nth(1)).not.toContainText("qabench");
  });

  test(`${locale} dsh-qa adapts the Harness command card to the site theme`, async ({ page }) => {
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });

    const commandCard = page.locator("[data-dsh-command-card]");
    const lightBackground = await commandCard.evaluate((node) => getComputedStyle(node).backgroundColor);
    await page.evaluate(() => { document.documentElement.dataset.theme = "dark"; });
    const darkBackground = await commandCard.evaluate((node) => getComputedStyle(node).backgroundColor);

    expect(darkBackground).not.toBe(lightBackground);
  });

  test(`${locale} project and resource cards keep dsh-qa in the same locale`, async ({ page }) => {
    await page.goto(`/${locale}/projects/`, { waitUntil: "domcontentloaded" });
    const projectCard = page.locator(`a[href="/${locale}/dsh-qa/"]`).first();
    await expect(projectCard).toBeVisible();
    await expect(projectCard).not.toHaveAttribute("target", "_blank");

    await page.goto(`/${locale}/resources/`, { waitUntil: "domcontentloaded" });
    const resourceCard = page.locator(`a[href="/${locale}/dsh-qa/"]`).first();
    await expect(resourceCard).toBeVisible();
    await expect(resourceCard).not.toHaveAttribute("target", "_blank");
  });

  test(`${locale} dsh-qa has no horizontal overflow on a narrow viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 844 });
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });

    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(375);
  });

  test(`${locale} dsh-qa uses the site's native surface treatment`, async ({ page }) => {
    await page.goto(`/${locale}/dsh-qa/`, { waitUntil: "domcontentloaded" });

    expect(await page.evaluate(() => getComputedStyle(document.querySelector(".dsh-qa-page")!).color)).toBe(await page.evaluate(() => getComputedStyle(document.body).color));
    await expect(page.locator(".hero")).toHaveCSS("background-color", "rgba(0, 0, 0, 0)");
  });
}
