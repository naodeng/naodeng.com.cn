import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const locales = ["en", "zh-cn"] as const;
const mainPaths = ["/", "/blog/", "/qaskills/", "/archive/", "/sponsor/", "/series/", "/tags/"] as const;
const extraPaths = ["/about", "/projects/", "/dsh-qa/", "/copyright", "/privacy", "/links"] as const;

async function openAndExpectStatus(
  app: { open(path?: string): Promise<void> },
  browser: { waitForResponse(pattern: string | RegExp): Promise<{ status: number }> },
  path: string,
): Promise<void> {
  const responseWait = browser.waitForResponse(new RegExp(`${path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:[?#].*)?$`));
  await app.open(path);
  const response = await responseWait;
  expect(response.status).toBe(200);
}

for (const locale of locales) {
  for (const path of [...mainPaths, ...extraPaths]) {
    test(`${locale}${path} renders a main landmark and page heading`, async ({ app, screen }) => {
      await app.open(`/${locale}${path}`);
      await expect(screen.getByRole("main")).toBeVisible();
      await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
    });
  }

  test(`${locale} blog index opens a real article`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/blog/`);
    const post = browser.locator(`main a[href*='/${locale}/blog/']`).first();
    await expect(post).toBeVisible();
    const href = await post.getAttribute("href");
    expect(href).toBeTruthy();
    await app.open(String(href));
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test(`${locale} series index opens a series page`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/series/`);
    const firstLink = browser.locator(`main a[href*='/${locale}/series/']`).first();
    await expect(firstLink).toBeVisible();
    const href = await firstLink.getAttribute("href");
    expect(href).toBeTruthy();
    await app.open(String(href));
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test(`${locale} tag index opens a tag page`, async ({ app, browser, screen }) => {
    await app.open(`/${locale}/tags/`);
    const firstLink = browser.locator(`main a[href*='/${locale}/tags/']`).first();
    await expect(firstLink).toBeVisible();
    const href = await firstLink.getAttribute("href");
    expect(href).toBeTruthy();
    await app.open(String(href));
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test(`${locale} blog page 2 is reachable`, async ({ app, screen }) => {
    await app.open(`/${locale}/blog/page/2/`);
    await expect(screen.getByRole("main")).toBeVisible();
    await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test(`${locale} RSS and HTML sitemap endpoints return successfully`, async ({ app, browser }) => {
    await openAndExpectStatus(app, browser, `/${locale}/rss.xml`);
    await openAndExpectStatus(app, browser, `/${locale}/sitemap`);
  });
}

test("root route resolves to a localized home page", async ({ app, browser, screen }) => {
  await app.open("/");
  await expect(browser).toHaveURL(/\/(?:en|zh-cn)\/?$/);
  await expect(screen.getByRole("heading", { level: 1 })).toBeVisible();
});

test("404 page exposes a noindex recovery surface in both languages", async ({ app, browser, screen }) => {
  for (const locale of locales) {
    await app.open(`/${locale}/404/`);
    await expect(screen.getByRole("main")).toBeVisible();
    await expect(browser.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/i);
    await expect(browser.locator(".container .gotop")).toBeVisible();
  }
});
