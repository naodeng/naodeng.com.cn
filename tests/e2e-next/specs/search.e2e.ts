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

  test(`${locale} search shows an empty state and restores suggestions when cleared`, async ({ app, browser }) => {
    await app.open(`/${locale}/`);
    await browser.locator(`header button[data-search-open]`).click();
    const input = browser.locator("#search-input");

    await input.fill("zzzz-no-search-match");
    await expect(browser.locator("#search-empty")).toBeVisible();
    await expect(browser.locator(".search-result-item")).toHaveCount(0);

    await input.clear();
    await expect(browser.locator("#search-empty")).toBeHidden();
    await expect(browser.locator(".search-result-item")).toHaveCount(3);
  });
}

test("search result selection navigates to the result and Escape returns focus to the trigger", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  const trigger = browser.locator("header button[data-search-open]");
  await trigger.click();
  const input = browser.locator("#search-input");
  await input.fill("API");
  const results = browser.locator(".search-result-item");
  expect(await results.count()).toBeGreaterThan(1);
  const firstResult = results.nth(0);
  const selectedResult = results.nth(1);
  const href = await selectedResult.getAttribute("href");
  expect(href).toBeTruthy();
  await input.press("ArrowDown");
  await expect(firstResult).toBeFocused();
  await browser.keyboard.press("ArrowDown");
  await expect(selectedResult).toBeFocused();
  await expect(selectedResult).toHaveAttribute("aria-selected", "true");
  await browser.keyboard.press("Enter");
  const destination = new URL(href!, await browser.url()).href;
  await browser.waitForURL(destination);
  expect(await browser.url()).toBe(destination);

  await app.open("/zh-cn/");
  await trigger.click();
  await browser.locator("#search-input").press("Escape");
  await expect(browser.locator("#search-dialog")).toBeHidden();
  await expect(trigger).toBeFocused();
});
