import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const article = "/zh-cn/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/";

test("TOC current section follows scroll position across headings", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open(article);
  await expect(browser.locator(".article-sidebar-inner")).toBeVisible();
  await expect(browser.locator(".toc-nav")).toBeVisible();

  const headings = await browser.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>(".toc-link[href^='#']"))
      .filter((link) => document.getElementById(decodeURIComponent(link.hash.slice(1)))?.tagName === "H2")
      .map((link) => link.getAttribute("href") ?? ""),
  );
  expect(headings.length).toBeGreaterThan(2);

  for (const href of [headings[1], headings[headings.length - 1]]) {
    await browser.evaluate((targetHref) => {
      const target = document.getElementById(decodeURIComponent(targetHref.slice(1)));
      if (!target) return false;
      window.scrollTo(0, window.scrollY + target.getBoundingClientRect().top - 140);
      return true;
    }, href);
    await expect.poll(() => browser.evaluate(() =>
      document.querySelector(".toc-link[aria-current='true']")?.getAttribute("href") ?? "",
    )).toBe(href);
  }
});

test("TOC reports an active section and a valid reading position", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open(article);
  const links = browser.locator(".toc-list--desktop .toc-link");
  const href = await links.nth(1).getAttribute("href");
  expect(href).toMatch(/^#.+$/);
  expect(href).not.toBeNull();
  await browser.evaluate((targetHref) => {
    const target = document.getElementById(targetHref.slice(1));
    if (!target) return false;
    window.scrollTo(0, window.scrollY + target.getBoundingClientRect().top - 140);
    return true;
  }, href as string);

  await expect.poll(() => browser.evaluate(() =>
    document.querySelector(".toc-list--desktop .toc-link[aria-current='true']")?.getAttribute("href") ?? "",
  )).toBe(href ?? "");
  await expect(browser.locator(".toc-list--desktop .toc-item.is-active").first()).toBeVisible();
  await expect(browser.locator(".toc-current [data-current-section]").first()).not.toHaveText("");
  const progress = await browser.evaluate(() =>
    Number.parseFloat(getComputedStyle(document.querySelector(".toc-sidebar")!).getPropertyValue("--toc-progress")) || 0,
  );
  expect(progress).toBeGreaterThanOrEqual(0);
});

test("sticky article sidebar stops before the footer", async ({ app, browser }) => {
  await browser.setViewport({ width: 1440, height: 900 });
  await app.open(article);
  await browser.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    return null;
  });
  const overlap = await browser.evaluate(() => {
    const sidebar = document.querySelector(".article-sidebar-inner")?.getBoundingClientRect();
    const footer = document.querySelector(".l-footer")?.getBoundingClientRect();
    if (!sidebar || !footer) return null;
    return {
      overlap: Math.max(0, Math.min(sidebar.bottom, footer.bottom) - Math.max(sidebar.top, footer.top)),
      sidebarBottom: sidebar.bottom,
      footerTop: footer.top,
    };
  });
  expect(overlap).not.toBeNull();
  expect(overlap!.overlap).toBeLessThanOrEqual(0.5);
  expect(overlap!.sidebarBottom).toBeLessThanOrEqual(overlap!.footerTop + 0.5);
});
