import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const indexRoutes = [
  "/zh-cn/wiki/",
  "/zh-cn/AIWiki/",
  "/en/AIWiki/",
  "/zh-cn/ai-native-qa-weekly/",
  "/en/ai-native-qa-weekly/",
];

for (const route of indexRoutes) {
  test(`${route} keeps its directory usable across desktop and mobile widths`, async ({ app, browser, screen }) => {
    for (const width of [375, 768, 1024, 1440]) {
      await browser.setViewport({ width, height: 900 });
      await app.open(route);
      await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(browser.locator(".docs-toc-wrap")).toHaveCount(0);
      const hasOverflow = await browser.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      );
      expect(hasOverflow).toBe(false);

      if (width < 900 && (route.includes("wiki") || route.includes("AIWiki"))) {
        await expect(browser.locator(".docs-sidebar-toggle")).toBeVisible();
        await browser.locator(".docs-sidebar-toggle").click();
        await expect(browser.locator(".docs-sidebar-toggle")).toHaveAttribute("aria-expanded", "true");
        await expect(browser.locator(".docs-sidebar-nav")).toBeVisible();
      }
    }
  });
}

for (const { route, query } of [
  { route: "/zh-cn/wiki/", query: "acceptance" },
  { route: "/zh-cn/AIWiki/", query: "agent" },
  { route: "/en/AIWiki/", query: "agent" },
]) {
  test(`${route} recovers from an empty search and restores its matching entries`, async ({ app, browser }) => {
    await app.open(`${route}?q=${query}`);
    const search = browser.locator(".wiki-search-input");
    const sidebar = browser.locator("#docs-sidebar-search-input");
    await expect(search).toHaveValue(query);

    await sidebar.fill("zz-no-matching-proofline-term");
    await expect(browser.locator(".wiki-search-empty")).toBeVisible();
    const visibleEntries = await browser.evaluate(
      (selector) => Array.from(document.querySelectorAll(selector)).filter((link) => !link.closest("li")?.hidden).length,
      ".wiki-letter-link",
    );
    expect(visibleEntries).toBe(0);
    await browser.locator(".wiki-search-empty button").click();
    await expect(search).toHaveValue("");
    await expect(sidebar).toHaveValue("");
    const restoredEntries = await browser.evaluate(
      (selector) => Array.from(document.querySelectorAll(selector)).filter((link) => !link.closest("li")?.hidden).length,
      ".wiki-letter-link",
    );
    expect(restoredEntries).toBeGreaterThan(0);
  });
}
