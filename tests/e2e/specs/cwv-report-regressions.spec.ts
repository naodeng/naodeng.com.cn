import { expect, test } from "@playwright/test";

const ARTICLE_PATH = "blog/ai-testing/dsh-qa-v072-harness-desktop-update/";
const VIEWPORTS = [
  { name: "desktop", width: 1280, height: 800 },
  { name: "mobile", width: 390, height: 844 },
] as const;

for (const locale of ["en", "zh-cn"] as const) {
  for (const viewport of VIEWPORTS) {
    test(`${locale} ${viewport.name}: delayed article image keeps its layout space`, async ({ page }) => {
      await page.setViewportSize(viewport);
      // Isolate image layout from external font availability.
      await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
      let releaseImage!: () => void;
      const imageGate = new Promise<void>((resolve) => { releaseImage = resolve; });
      await page.route("**/*dsh-desktop*", async (route) => {
        await imageGate;
        await route.fulfill({
          contentType: "image/svg+xml",
          body: '<svg xmlns="http://www.w3.org/2000/svg" width="3050" height="2014"><rect width="100%" height="100%" fill="#888"/></svg>',
        });
      });

      await page.goto(`/${locale}/${ARTICLE_PATH}`, { waitUntil: "domcontentloaded" });
      const image = page.locator('.prose img[src*="dsh-desktop"]');
      await expect(image).toHaveCount(1);
      const before = await image.evaluate((node) => node.getBoundingClientRect().height);
      releaseImage();
      await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
      const after = await image.evaluate((node) => node.getBoundingClientRect().height);

      expect(before).toBeGreaterThan(100);
      expect(Math.abs(after - before)).toBeLessThan(1);
    });

    test(`${locale} ${viewport.name}: delayed payment images keep their layout space`, async ({ page }) => {
      await page.setViewportSize(viewport);
      await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
      let releaseImages!: () => void;
      const gate = new Promise<void>((resolve) => { releaseImages = resolve; });
      await page.route("**/images/*-qr-code.png", async (route) => {
        await gate;
        const [width, height] = route.request().url().includes("wechat") ? [828, 1124] : [1200, 1800];
        await route.fulfill({
          contentType: "image/svg+xml",
          body: `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="100%" height="100%" fill="#888"/></svg>`,
        });
      });
      await page.goto(`/${locale}/sponsor/`, { waitUntil: "domcontentloaded" });
      const images = page.locator(".qr-card img");
      await expect(images).toHaveCount(2);
      const before = await images.evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().height));
      releaseImages();
      for (const image of await images.all()) {
        await image.scrollIntoViewIfNeeded();
        await expect.poll(() => image.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
      }
      const after = await images.evaluateAll((nodes) => nodes.map((node) => node.getBoundingClientRect().height));
      before.forEach((height, index) => {
        expect(height).toBeGreaterThan(100);
        expect(Math.abs(after[index] - height)).toBeLessThan(1);
      });
    });
  }

  test(`${locale}: below-fold screenshot is requested when scrolled into view`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
    const requests: string[] = [];
    page.on("request", (request) => {
      if (request.url().includes("dsh-qa-1.1")) requests.push(request.url());
    });
    await page.goto(`/${locale}/${ARTICLE_PATH}`, { waitUntil: "domcontentloaded" });
    const firstImage = page.locator('.prose img[src*="dsh-desktop"]');
    await expect.poll(() => firstImage.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
    expect(requests).toHaveLength(0);
    const laterImage = page.locator('.prose img[src*="dsh-qa-1.1"]');
    await laterImage.scrollIntoViewIfNeeded();
    await expect.poll(() => requests.length).toBe(1);
    await expect.poll(() => laterImage.evaluate((node: HTMLImageElement) => node.complete && node.naturalWidth > 0)).toBe(true);
    await expect(laterImage).toBeVisible();
  });

  for (const slug of ["dsh-qa-v072-harness-desktop-update", "deepseek-harness-desktop-dsh-qa"]) {
    test(`${locale}: ${slug} project link reaches the localized page`, async ({ page, request }) => {
      await page.goto(`/${locale}/blog/ai-testing/${slug}/`, { waitUntil: "domcontentloaded" });
      await expect(page.locator('a[href="https://inaodeng.com/dsh-qa/"]')).toHaveCount(0);
      await expect(page.locator(`a[href="https://inaodeng.com/${locale}/dsh-qa/"]`)).toHaveCount(1);
      const response = await request.get(`/${locale}/dsh-qa/`);
      expect(response.status()).toBe(200);
    });
  }

  test(`${locale}: about support links reach the localized page`, async ({ page, request }) => {
    await page.goto(`/${locale}/about/`, { waitUntil: "domcontentloaded" });
    await expect(page.locator('a[href="https://inaodeng.com/sponsor"]')).toHaveCount(0);
    const links = page.locator(`a[href="https://inaodeng.com/${locale}/sponsor"]`);
    await expect(links).toHaveCount(1);
    expect((await request.get(`/${locale}/sponsor/`)).status()).toBe(200);
  });
}
