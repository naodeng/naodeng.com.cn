import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const article = "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/";

test("article table of contents has links and nested headings are indented", async ({ app, browser }) => {
  await app.open(article);
  const toc = browser.locator(".toc-list--desktop");
  const links = browser.locator(".toc-list--desktop .toc-link");
  const count = await links.count();
  expect(count).toBeGreaterThan(0);
  await expect(toc).toBeVisible();

  const nestedCount = await browser.locator(".toc-item--depth-3").count();
  if (nestedCount > 0) {
    const padding = await browser.evaluate(() =>
      Number.parseFloat(getComputedStyle(document.querySelector(".toc-item--depth-3")!).paddingInlineStart),
    );
    expect(padding).toBeGreaterThan(0);
  }
});

test("article TOC collapses into a details control on mobile", async ({ app, browser }) => {
  await browser.setViewport({ width: 375, height: 812 });
  await app.open(article);
  const details = browser.locator("details").filter({ hasText: /contents|目录/i }).first();
  await expect(details).toBeVisible();
  await expect(browser.locator(".toc-details-mobile summary")).toBeVisible();
});

test("TOC links can be reached and activated with the keyboard", async ({ app, browser }) => {
  await app.open(article);
  const firstLink = browser.locator(".toc-list--desktop .toc-link").first();
  await firstLink.focus();
  await expect(firstLink).toBeFocused();
  const href = await firstLink.getAttribute("href");
  expect(href).toMatch(/^#.+$/);

  await firstLink.press("Enter");
  await expect(browser).toHaveURL(new URL(href!, await browser.url()).href);
  const targetVisible = await browser.evaluate((id) => {
    const target = document.getElementById(decodeURIComponent(id.slice(1)));
    return Boolean(target && target.getBoundingClientRect().height > 0);
  }, href!);
  expect(targetVisible).toBe(true);
});
