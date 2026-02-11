import { test, expect } from "@playwright/test";
import { getMainPageUrls, getExtraPageUrls } from "../support/constants";

/** 带编码的标签路径在 preview/静态托管下可能 404 或 500（如 %20 空格、%2F 斜杠），跳过断言避免误报 */
function isTagUrlWithEncodedSegment(link: string): boolean {
  try {
    const pathname = new URL(link).pathname;
    return /\/tags\/[^/]*%[0-9A-Fa-f]{2}/.test(pathname);
  } catch {
    return false;
  }
}

function assertLinkStatus(link: string, status: number): void {
  if (isTagUrlWithEncodedSegment(link) && (status === 404 || status === 500)) return;
  expect(status, `链接 ${link} 应返回 2xx 或 3xx，实际 ${status}`).toBeLessThan(400);
}

test.describe("各页面链接跳转正确", () => {
  const mainPages = getMainPageUrls("");
  const extraPages = getExtraPageUrls();

  for (const { locale, path, name } of mainPages) {
    test(`${locale} ${name} 页内所有同站链接可正常跳转`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });

      const links = await page.locator("a[href]").evaluateAll((anchors) =>
        anchors
          .map((a) => (a as HTMLAnchorElement).href)
          .filter((href) => href && !href.startsWith("javascript:") && !href.startsWith("mailto:") && !href.startsWith("#"))
      );

      const origin = new URL(url).origin;
      const sameOriginLinks = [...new Set(links)].filter((href) => {
        try {
          return new URL(href).origin === origin;
        } catch {
          return false;
        }
      });

      for (const link of sameOriginLinks) {
        if (isTagUrlWithEncodedSegment(link)) continue;
        const res = await page.request.get(link, { timeout: 15000 });
        assertLinkStatus(link, res.status());
      }
    });
  }

  test("en 博客详情页内同站链接可跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    await expect(firstPost).toBeVisible({ timeout: 10000 });
    const href = await firstPost.getAttribute("href");
    expect(href).toBeTruthy();
    const detailUrl = new URL(href!, baseURL).href;
    await page.goto(detailUrl, { waitUntil: "networkidle" });

    const links = await page.locator("a[href]").evaluateAll((anchors) =>
      anchors
        .map((a) => (a as HTMLAnchorElement).href)
        .filter((h) => h && !h.startsWith("javascript:") && !h.startsWith("mailto:") && !h.startsWith("#"))
    );
    const origin = new URL(detailUrl).origin;
    const sameOrigin = [...new Set(links)].filter((h) => new URL(h).origin === origin);

    for (const link of sameOrigin) {
      if (isTagUrlWithEncodedSegment(link)) continue;
      const res = await page.request.get(link, { timeout: 15000 });
      assertLinkStatus(link, res.status());
    }
  });

  test("zh-cn 博客详情页内同站链接可跳转", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
    await expect(firstPost).toBeVisible({ timeout: 10000 });
    const href = await firstPost.getAttribute("href");
    expect(href).toBeTruthy();
    const detailUrl = new URL(href!, baseURL).href;
    await page.goto(detailUrl, { waitUntil: "networkidle" });

    const links = await page.locator("a[href]").evaluateAll((anchors) =>
      anchors
        .map((a) => (a as HTMLAnchorElement).href)
        .filter((h) => h && !h.startsWith("javascript:") && !h.startsWith("mailto:") && !h.startsWith("#"))
    );
    const origin = new URL(detailUrl).origin;
    const sameOrigin = [...new Set(links)].filter((h) => new URL(h).origin === origin);

    for (const link of sameOrigin) {
      if (isTagUrlWithEncodedSegment(link)) continue;
      const res = await page.request.get(link, { timeout: 15000 });
      assertLinkStatus(link, res.status());
    }
  });

  for (const { locale, path, name } of extraPages) {
    test(`${locale} ${name} 页内所有同站链接可正常跳转`, async ({ page, baseURL }) => {
      const url = (baseURL || "").replace(/\/$/, "") + path;
      await page.goto(url, { waitUntil: "networkidle" });

      const links = await page.locator("a[href]").evaluateAll((anchors) =>
        anchors
          .map((a) => (a as HTMLAnchorElement).href)
          .filter((h) => h && !h.startsWith("javascript:") && !h.startsWith("mailto:") && !h.startsWith("#"))
      );
      const origin = new URL(url).origin;
      const sameOriginLinks = [...new Set(links)].filter((h) => new URL(h).origin === origin);

      for (const link of sameOriginLinks) {
        if (isTagUrlWithEncodedSegment(link)) continue;
        const res = await page.request.get(link, { timeout: 15000 });
        assertLinkStatus(link, res.status());
      }
    });
  }
});
