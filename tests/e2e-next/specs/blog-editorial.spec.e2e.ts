import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  const article = `/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`;

  test(`${locale} blog preview opens the article with matching reading metadata`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/blog/`);
    const preview = browser.locator(".post-card").first();
    await expect(preview).toBeVisible();
    const readingTime = await browser.locator(".post-card .post-reading-time").first().textContent();
    const href = await browser.locator(".post-card .post-link").first().getAttribute("href");
    expect(href).toBeTruthy();

    await app.open(href!);
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(browser.locator(".article-meta")).toContainText(readingTime!.trim());
    await expect(browser.locator(".prose")).toBeVisible();
  });

  test(`${locale} article keeps related reading and a working section directory`, async ({ app, browser, screen }) => {
    await browser.setViewport({ width: 2560, height: 1440 });
    await app.open(article);
    const discovery = screen.getByRole("complementary", {
      name: locale === "zh-cn" ? "文章发现" : "Article discovery",
    });
    await expect(discovery).toBeVisible();
    await expect(discovery.getByRole("heading", { name: locale === "zh-cn" ? "相关文章" : "Related articles" })).toBeVisible();
    await expect(discovery.getByRole("heading", { name: locale === "zh-cn" ? "最近博文" : "Recent articles" })).toBeVisible();
    await expect(browser.locator(".article-sidebar .toc-list--desktop .toc-link").first()).toBeVisible();

    await browser.setViewport({ width: 390, height: 844 });
    await browser.emulateMedia({ reducedMotion: "reduce" });
    const toc = browser.locator(".toc-details-mobile");
    await expect(toc).toBeVisible();
    await browser.locator(".toc-details-mobile summary").press("Enter");
    await expect(toc).toHaveAttribute("open", "");
    const link = browser.locator(".toc-details-mobile .toc-link").nth(1);
    const href = await link.getAttribute("href");
    await link.press("Enter");
    expect(await browser.url()).toBe(new URL(href!, await browser.url()).href);
    await expect(toc).not.toHaveAttribute("open", "");
  });

  test(`${locale} article credits link back to its local license page`, async ({ app, browser }) => {
    await app.open(article);
    const license = browser.locator(".article-license a");
    await expect(license).toHaveText("PolyForm Noncommercial 1.0.0");
    await expect(license).toHaveAttribute("href", `/${locale}/copyright/`);
    await license.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/copyright/$`));
  });

  for (const theme of ["light", "dark"] as const) {
    test(`${locale} comments update after the ${theme} theme changes`, async ({ app, browser }) => {
      await browser.emulateMedia({ colorScheme: theme === "light" ? "dark" : "light" });
      await browser.addInitScript((selected) => localStorage.setItem("themePreference", selected), theme);
      await browser.route("https://giscus.app/client.js", async (route) => {
        await route.fulfill({
          contentType: "application/javascript",
          body: `
            const initialTheme = document.currentScript.dataset.theme;
            const frame = document.createElement("iframe");
            frame.className = "giscus-frame";
            frame.dataset.initialTheme = initialTheme;
            document.querySelector(".giscus").appendChild(frame);
            frame.contentWindow.postMessage = (message, origin) => {
              frame.dataset.receivedTheme = message.giscus.setConfig.theme;
              frame.dataset.messageOrigin = origin;
            };
          `,
        });
      });
      await app.open(article);

      const frame = browser.locator(".giscus-frame");
      await expect(frame).toHaveAttribute("data-initial-theme", theme);
      const nextTheme = theme === "light" ? "dark" : "light";
      await browser.locator("[data-theme-toggle]").click();
      await browser.locator(`[data-theme-option="${nextTheme}"]`).click();
      await expect(frame).toHaveAttribute("data-received-theme", nextTheme);
      await expect(frame).toHaveAttribute("data-message-origin", "https://giscus.app");
    });
  }
}

test("blog index and detail use the shared site container", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open("/en/blog/");
  const indexWidth = await browser.evaluate(() => document.querySelector("main")!.getBoundingClientRect().width);
  const href = await browser.locator("main a[href*='/en/blog/']").first().getAttribute("href");
  await app.open(href!);
  const detailWidth = await browser.evaluate(() => document.querySelector("main")!.getBoundingClientRect().width);
  expect(detailWidth).toBeCloseTo(indexWidth, 0);
  await expect(browser.locator(".article-body")).toBeVisible();
});
