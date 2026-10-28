import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("Wiki search narrows the index and clearing it restores both matched terms", async ({ app, browser }) => {
  await app.open("/zh-cn/wiki/");
  const search = browser.locator(".wiki-search-input");
  const acceptance = browser.locator(".wiki-letter-link[href='/zh-cn/wiki/acceptance-testing/']");
  const manual = browser.locator(".wiki-letter-link[href='/zh-cn/wiki/manual-testing/']");

  await expect(acceptance).toBeVisible();
  await expect(manual).toBeVisible();
  await search.fill("验收测试");
  await expect(acceptance).toBeVisible();
  await expect(manual).toBeHidden();
  expect(await browser.locator(".wiki-letter-group:not([hidden])").count()).toBeGreaterThan(0);

  await search.fill("");
  await expect(acceptance).toBeVisible();
  await expect(manual).toBeVisible();
});

test("Wiki search empty state can be cleared without leaving the directory", async ({ app, browser }) => {
  await app.open("/en/wiki/");
  const search = browser.locator(".wiki-search-input");
  await search.fill("zzzzz-no-wiki-term");

  await expect(browser.locator(".wiki-search-empty")).toBeVisible();
  const visibleEntries = await browser.evaluate(
    (selector) => Array.from(document.querySelectorAll(selector)).filter((link) => !link.closest("li")?.hidden).length,
    ".wiki-letter-link",
  );
  expect(visibleEntries).toBe(0);
  await browser.locator(".wiki-search-empty button").click();
  await expect(search).toHaveValue("");
  const restoredEntries = await browser.evaluate(
    (selector) => Array.from(document.querySelectorAll(selector)).filter((link) => !link.closest("li")?.hidden).length,
    ".wiki-letter-link",
  );
  expect(restoredEntries).toBeGreaterThan(0);
});
