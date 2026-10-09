import { expect, test } from "@playwright/test";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} weekly index opens the archive homepage`, async ({ page, baseURL }) => {
    const response = await page.goto(`${baseURL || ""}/${locale}/ai-native-qa-weekly/`, { waitUntil: "domcontentloaded" });

    expect(response?.status()).toBe(200);
    await expect(page).toHaveURL(new RegExp(`/${locale}/ai-native-qa-weekly/?$`));
    await expect(page.locator(".weekly-index-title")).toBeVisible();
    expect(await page.locator(".weekly-index-card").count()).toBeGreaterThan(0);
    const firstIssue = page.locator(".weekly-index-card").first();
    await expect(firstIssue).toBeVisible();
    await expect(firstIssue.locator("h3")).not.toHaveText(/^[-—_]+$/);
    await expect(firstIssue.locator("p")).not.toHaveText(/^[-—_]+$/);
  });

  test(`${locale} weekly index issue cards do not underline all copy`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/${locale}/ai-native-qa-weekly/`, { waitUntil: "domcontentloaded" });

    const decorations = await page.locator(".weekly-index-card").first().evaluate((card) =>
      [card, ...Array.from(card.querySelectorAll<HTMLElement>("span, time, h3, p, div"))].map((element) => ({
        className: element.className,
        text: element.textContent?.trim(),
        textDecorationLine: getComputedStyle(element).textDecorationLine,
      })),
    );

    const textDecorations = decorations.filter(({ text }) => text);
    expect(textDecorations.every(({ textDecorationLine }) => textDecorationLine === "none"), JSON.stringify(textDecorations)).toBe(true);
  });

  test(`${locale} weekly issue titles use the neutral heading color in both themes`, async ({ page, baseURL }) => {
    await page.goto(`${baseURL || ""}/${locale}/ai-native-qa-weekly/`, { waitUntil: "domcontentloaded" });

    for (const theme of ["light", "dark"] as const) {
      await page.locator("html").evaluate((html, value) => { html.dataset.theme = value; }, theme);
      const colors = await page.locator(".weekly-index-card").first().evaluate((card) => ({
        issueTitle: getComputedStyle(card.querySelector("h3")!).color,
        pageTitle: getComputedStyle(document.querySelector(".weekly-index-title")!).color,
      }));

      expect(colors.issueTitle, `${theme} weekly card titles should match the neutral page heading`).toBe(colors.pageTitle);
    }
  });

  test(`${locale} weekly selector changes issue without losing the reading layout`, async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(`${baseURL || ""}/${locale}/ai-native-qa-weekly/2026/week-39/`, { waitUntil: "domcontentloaded" });

    const select = page.locator("[data-weekly-period]");
    const issueCount = await select.locator("option").count();
    if (issueCount > 1) {
      const firstAlternative = await select.locator("option").nth(1).getAttribute("value");
      expect(firstAlternative).toBeTruthy();
      await select.selectOption({ index: 1 });
      await expect(page).toHaveURL(new RegExp(`${firstAlternative?.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    } else {
      await expect(select.locator("option")).toHaveCount(1);
      await expect(select.locator("option:checked")).toHaveValue(/\/ai-native-qa-weekly\/2026\/week-39\/$/);
    }

    const dimensions = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth + 1);
    await expect(page.locator(".weekly-article")).toBeVisible();
  });

  test(`${locale} weekly issue exposes a readable desktop TOC`, async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL || ""}/${locale}/ai-native-qa-weekly/2026/week-39/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".weekly-article")).toBeVisible();
    await expect(page.locator(".docs-toc-wrap .toc-sidebar--right")).toBeVisible();
    expect(await page.locator(".docs-toc-wrap .toc-link").count()).toBeGreaterThan(0);
  });

  test(`${locale} long active chapter names stay inside the desktop TOC`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`/${locale}/ai-native-qa-weekly/2026/week-40/`, { waitUntil: "domcontentloaded" });
    const links = page.locator(".toc-list--desktop .toc-link");
    for (const index of [2, 5, 8]) {
      const link = links.nth(index);
      const title = (await link.innerText()).trim();
      await link.focus();
      await page.keyboard.press("Enter");
      await expect(page.locator(".toc-current [data-current-section]")).toHaveText(title);
      const bounds = await page.evaluate(() => ({
        viewport: document.documentElement.clientWidth,
        pageWidth: document.documentElement.scrollWidth,
        sidebarRight: document.querySelector(".toc-sidebar--right")!.getBoundingClientRect().right,
        columnRight: document.querySelector(".docs-toc-wrap")!.getBoundingClientRect().right,
      }));
      expect(bounds.pageWidth).toBeLessThanOrEqual(bounds.viewport + 1);
      expect(bounds.sidebarRight).toBeLessThanOrEqual(bounds.columnRight + 1);
    }
  });
}
