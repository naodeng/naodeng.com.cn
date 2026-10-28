import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const locales = [
  { locale: "en", query: "API", searchName: /search/i },
  { locale: "zh-cn", query: "API", searchName: /搜索/ },
] as const;

for (const { locale, query, searchName } of locales) {
  test(`${locale} search opens, accepts a query, and exposes selectable results`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/`);

    const openButton = screen.getByRole("button", { name: searchName });
    await expect(openButton).toBeVisible();
    await openButton.click();

    const input = browser.locator("#search-input");
    await expect(input).toBeFocused();
    await expect(browser.locator(".search-result-item")).toHaveCount(3);
    await input.fill(query);
    await expect(input).toHaveValue(query);
    await expect(browser.locator(".search-result-item").first()).toBeVisible();
    await expect(browser.locator(".search-result-type").first()).toBeVisible();

    await input.press("ArrowDown");
    await expect(browser.locator(".search-result-item.is-active")).toHaveCount(1);
    await expect(browser.locator(".search-result-item.is-active")).toHaveAttribute("aria-selected", "true");
    await input.clear();
    await expect(input).toHaveValue("");
  });

  test(`${locale} search opens with the keyboard shortcut`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await browser.locator("body").press("Control+k");
    await expect(browser.locator("#search-input")).toBeFocused();
  });
}
