import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const articleSlug = "ai-testing/dsh-qa-test-project-full-lifecycle";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} article omits the decorative cover and its network request`, async ({ app, browser }) => {
    let coverRequested = false;
    const coverPattern = /\/default\.jpg(?:$|\?)/;
    await browser.route(coverPattern, async (route) => {
      coverRequested = true;
      await route.continue();
    });
    await app.open(`/${locale}/blog/${articleSlug}/`);

    await expect(browser.locator(".cover-wrap, .cover-bg, .cover-overlay")).toHaveCount(0);
    expect(coverRequested).toBe(false);
  });

  test(`${locale} article image declares dimensions and high-priority eager loading`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/${articleSlug}/`);

    const image = browser.locator("img.article-content-image");
    await expect(image).toHaveCount(1);
    await expect(image).toHaveAttribute("src", "/images/dsh-qa-v1.webp");
    await expect(image).toHaveAttribute("width", "1600");
    await expect(image).toHaveAttribute("height", "979");
    await expect(image).toHaveAttribute("loading", "eager");
    await expect(image).toHaveAttribute("fetchpriority", "high");
    await expect(image).toHaveAttribute("decoding", "async");
  });
}

test("blog page 2 omits decorative cover cards", async ({ app, browser }) => {
  await app.open("/en/blog/page/2/");
  await expect(browser.locator(".post-cover, .post-cover-bg, .post-cover-overlay")).toHaveCount(0);
});

test("built stylesheet URLs do not contain unescaped at-signs", async ({ app, browser }) => {
  await app.open(`/en/blog/${articleSlug}/`);
  const stylesheets = await browser.locator('link[rel="stylesheet"]').all();
  const builtUrls: string[] = [];
  for (const stylesheet of stylesheets) {
    const href = await stylesheet.getAttribute("href");
    if (href?.includes("/_astro/")) builtUrls.push(href);
  }
  expect(builtUrls.length).toBeGreaterThan(0);
  expect(builtUrls.every((href) => !href.includes("@"))).toBe(true);
});
