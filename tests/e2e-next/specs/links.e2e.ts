import { test } from "@e2e-dev/web";
import type { Browser } from "@e2e-dev/web";
import { expect } from "e2e";
import { getExtraPageUrls, getMainPageUrls, getWikiPageUrls } from "../../e2e/support/constants";

async function getBrokenSameOriginLinks(browser: Browser) {
  return browser.evaluate(async () => {
    const hrefs = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[href]"), (anchor) => anchor.getAttribute("href") ?? "")
      .filter((href) => href && !href.startsWith("javascript:") && !href.startsWith("mailto:") && !href.startsWith("#"))
      .map((href) => {
        try {
          const url = new URL(href, window.location.href);
          if (url.origin !== window.location.origin || /\/tags\/[^/]*%[0-9a-f]{2}/i.test(url.pathname)) return null;
          url.hash = "";
          return url.href;
        } catch {
          return null;
        }
      })
      .filter((href): href is string => href !== null);
    const uniqueHrefs = Array.from(new Set(hrefs));

    const results = await Promise.all(uniqueHrefs.map(async (href) => {
      try {
        const response = await fetch(href, { credentials: "same-origin", redirect: "follow" });
        return response.status < 400 ? null : `${href} returned HTTP ${response.status}`;
      } catch (error) {
        return `${href} failed: ${String(error)}`;
      }
    }));
    return results.filter((result): result is string => result !== null);
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} links page contains only usable destinations`, async ({ app, browser }) => {
    await app.open(`/${locale}/links/`);
    await expect(browser.locator(".link-card")).toHaveCount(1);
    await expect(browser.locator('a[href="#"]')).toHaveCount(0);
    await expect(browser.locator(`main a[href="mailto:dengnao@gmail.com"]`)).toBeVisible();
    await expect(browser.locator(".link-card").first()).toHaveAttribute("href", "https://guangzhengli.com/");
  });
}

test("blog list exposes working same-origin article links in both languages", async ({ app, browser }) => {
  for (const locale of ["en", "zh-cn"] as const) {
    await app.open(`/${locale}/blog/`);
    const link = browser.locator(`main a[href*='/${locale}/blog/']`).first();
    await expect(link).toBeVisible();
    const href = await link.getAttribute("href");
    expect(href).toMatch(new RegExp(`^/${locale}/blog/.+/`));
    await link.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/blog/.+/`));
    await expect(browser.locator("article").first()).toBeVisible();
  }
});

test("Chinese links page renders destinations with valid URL schemes", async ({ app, browser }) => {
  await app.open("/zh-cn/links/");
  const hrefs = await browser.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>("main a[href]"), (anchor) => anchor.getAttribute("href") ?? ""),
  );
  expect(hrefs.length).toBeGreaterThan(0);
  expect(hrefs.every((href) => /^(https?:\/\/|mailto:|\/)/.test(href))).toBe(true);
});

for (const route of [...getMainPageUrls(""), ...getExtraPageUrls(), ...getWikiPageUrls()]) {
  test(`${route.locale} ${route.name} same-origin links return successful responses`, async ({ app, browser }) => {
    await app.open(route.path);
    const brokenLinks = await getBrokenSameOriginLinks(browser);
    expect(brokenLinks, `Broken links on ${route.path}`).toEqual([]);
  });
}

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} blog detail same-origin links return successful responses`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/`);
    const firstPost = browser.locator(`main a[href*="/${locale}/blog/"]`).first();
    await expect(firstPost).toBeVisible();
    await firstPost.click();
    await expect(browser.locator("article").first()).toBeVisible();

    const brokenLinks = await getBrokenSameOriginLinks(browser);
    expect(brokenLinks, `Broken links on ${locale} blog detail`).toEqual([]);
  });
}
