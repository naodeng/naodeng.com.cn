import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const articlePath = "blog/ai-testing/dsh-qa-v072-harness-desktop-update/";
const viewports = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const locale of ["en", "zh-cn"] as const) {
  for (const viewport of viewports) {
    test(`${locale} ${viewport.name}: delayed article image keeps its reserved layout height`, async ({ browser }) => {
      await browser.setViewport(viewport);
      await browser.route(/https:\/\/fonts\.googleapis\.com\//, (route) => route.abort());
      let releaseImage!: () => void;
      const imageGate = new Promise<void>((resolve) => { releaseImage = resolve; });
      await browser.route(/dsh-desktop/, async (route) => {
        await imageGate;
        await route.fulfill({
          contentType: "image/svg+xml",
          body: '<svg xmlns="http://www.w3.org/2000/svg" width="3050" height="2014"><rect width="100%" height="100%" fill="#888"/></svg>',
        });
      });

      await browser.goto(`/${locale}/${articlePath}`, { waitUntil: "domcontentloaded" });
      const image = browser.locator('.prose img[src*="dsh-desktop"]');
      await expect(image).toHaveCount(1);
      const before = await browser.evaluate(() => {
        const node = document.querySelector('.prose img[src*="dsh-desktop"]');
        return node ? node.getBoundingClientRect().height : null;
      });
      expect(before ?? 0).toBeGreaterThan(100);

      const imageResponseWait = browser.waitForResponse(/dsh-desktop/);
      releaseImage();
      const response = await imageResponseWait;
      expect(response.status).toBe(200);
      await expect.poll(() => browser.evaluate(() => {
        const node = document.querySelector('.prose img[src*="dsh-desktop"]') as HTMLImageElement | null;
        return Boolean(node?.complete && node.naturalWidth > 0);
      })).toBe(true);
      const after = await browser.evaluate(() => document.querySelector('.prose img[src*="dsh-desktop"]')?.getBoundingClientRect().height ?? null);
      expect(Math.abs((after ?? 0) - (before ?? 0))).toBeLessThan(1);
    });

    test(`${locale} ${viewport.name}: sponsor QR images keep their reserved layout height`, async ({ browser }) => {
      await browser.setViewport(viewport);
      await browser.route(/https:\/\/fonts\.googleapis\.com\//, (route) => route.abort());
      let releaseImages!: () => void;
      const gate = new Promise<void>((resolve) => { releaseImages = resolve; });
      await browser.route(/\/images\/.*-qr-code\.png/, async (route) => {
        await gate;
        const [width, height] = route.request.url.includes("wechat") ? [828, 1124] : [1200, 1800];
        await route.fulfill({
          contentType: "image/svg+xml",
          body: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#888"/></svg>`,
        });
      });

      await browser.goto(`/${locale}/sponsor/`, { waitUntil: "domcontentloaded" });
      const images = browser.locator(".qr-card img");
      await expect(images).toHaveCount(2);
      const before = await browser.evaluate(() => Array.from(document.querySelectorAll(".qr-card img"), (image) => image.getBoundingClientRect().height));
      expect(before.length).toBe(2);
      expect(before.every((height) => height > 100)).toBe(true);

      const responseWait = browser.waitForResponse(/-qr-code\.png/);
      releaseImages();
      for (let index = 0; index < 2; index += 1) {
        await images.nth(index).scrollIntoView();
        await expect.poll(() => browser.evaluate((imageIndex) => {
          const node = document.querySelectorAll(".qr-card img")[imageIndex] as HTMLImageElement | undefined;
          return Boolean(node?.complete && node.naturalWidth > 0);
        }, index)).toBe(true);
      }
      const response = await responseWait;
      expect(response.status).toBe(200);
      const after = await browser.evaluate(() => Array.from(document.querySelectorAll(".qr-card img"), (image) => image.getBoundingClientRect().height));
      for (let index = 0; index < before.length; index += 1) {
        expect(Math.abs((after[index] ?? 0) - (before[index] ?? 0))).toBeLessThan(1);
      }
    });
  }

  test(`${locale}: below-fold article image is requested when it is scrolled into view`, async ({ browser }) => {
    await browser.setViewport({ width: 390, height: 844 });
    await browser.route(/https:\/\/fonts\.googleapis\.com\//, (route) => route.abort());
    const laterImagePattern = /dsh-qa-1\.1/;
    let requests = 0;
    await browser.route(laterImagePattern, async (route) => {
      requests += 1;
      await route.continue();
    });

    await browser.goto(`/${locale}/${articlePath}`, { waitUntil: "domcontentloaded" });
    await expect.poll(() => browser.evaluate(() => {
      const image = document.querySelector('.prose img[src*="dsh-desktop"]') as HTMLImageElement | null;
      return Boolean(image?.complete && image.naturalWidth > 0);
    })).toBe(true);
    expect(requests).toBe(0);

    const laterImage = browser.locator('.prose img[src*="dsh-qa-1.1"]');
    await expect(laterImage).toBeAttached();
    const imageResponseWait = browser.waitForResponse(laterImagePattern);
    await laterImage.scrollIntoView();
    const response = await imageResponseWait;
    expect(response.status).toBe(200);
    await expect.poll(() => browser.evaluate(() => {
      const image = document.querySelector('.prose img[src*="dsh-qa-1.1"]') as HTMLImageElement | null;
      return Boolean(image?.complete && image.naturalWidth > 0);
    })).toBe(true);
    await expect(laterImage).toBeVisible();
    expect(requests).toBe(1);
  });

  for (const slug of ["dsh-qa-v072-harness-desktop-update", "deepseek-harness-desktop-dsh-qa"] as const) {
    test(`${locale}: ${slug} project link reaches the localized DSH-QA page`, async ({ app, browser }) => {
      await app.open(`/${locale}/blog/ai-testing/${slug}/`);
      await expect(browser.locator('a[href="https://inaodeng.com/dsh-qa/"]')).toHaveCount(0);
      const projectLink = browser.locator(`a[href="https://inaodeng.com/${locale}/dsh-qa/"]`);
      await expect(projectLink).toHaveCount(1);
      await projectLink.click();
      await expect(browser).toHaveURL(new RegExp(`/${locale}/dsh-qa/?$`));
      await expect(browser.locator("main h1")).toBeVisible();
    });
  }

  test(`${locale}: about support link reaches the localized sponsor page`, async ({ app, browser }) => {
    await app.open(`/${locale}/about/`);
    await expect(browser.locator('a[href="https://inaodeng.com/sponsor"]')).toHaveCount(0);
    const sponsorLink = browser.locator(`a[href="https://inaodeng.com/${locale}/sponsor"]`);
    await expect(sponsorLink).toHaveCount(1);
    await sponsorLink.click();
    await expect(browser).toHaveURL(new RegExp(`/${locale}/sponsor/?$`));
    await expect(browser.locator("main h1")).toBeVisible();
  });
}
