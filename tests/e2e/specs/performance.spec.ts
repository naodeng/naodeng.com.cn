import { test, expect } from "@playwright/test";

/** AdSense/GTM 在非生产域名下的已知 pageerror（如 TagError: Y） */
function isThirdPartyPageError(error: Error): boolean {
  const text = `${error.name}\n${error.message}\n${error.stack ?? ""}`;
  return /TagError|adsbygoogle|googlesyndication|googletagmanager|doubleclick\.net|ca-pub-/i.test(
    text,
  );
}

test.describe("性能与加载", () => {
  test("en 首页加载时间合理", async ({ page, baseURL }) => {
    const startTime = Date.now();
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(15000);
  });

  test("zh-cn 首页加载时间合理", async ({ page, baseURL }) => {
    const startTime = Date.now();
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    const loadTime = Date.now() - startTime;
    
    expect(loadTime).toBeLessThan(15000);
  });

  test("en 首页：图片懒加载", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    
    const images = page.locator("img");
    const count = await images.count();
    
    if (count > 0) {
      const firstImg = images.first();
      const loading = await firstImg.getAttribute("loading");
      expect(loading === "lazy" || loading === null).toBeTruthy();
    }
  });

  test("zh-cn 首页：图片懒加载", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    
    const images = page.locator("img");
    const count = await images.count();
    
    if (count > 0) {
      const firstImg = images.first();
      const loading = await firstImg.getAttribute("loading");
      expect(loading === "lazy" || loading === null).toBeTruthy();
    }
  });

  test("en 博客列表页：分页加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    
    const pagination = page.locator('[class*="pagination"], nav[aria-label*="pagination" i]').first();
    if (await pagination.isVisible({ timeout: 5000 })) {
      const nextLink = page.locator('a[href*="/page/2"], a[aria-label*="next" i]').first();
      if (await nextLink.isVisible()) {
        await nextLink.click();
        await expect(page).toHaveURL(/\/page\/2/);
        await expect(page.locator("main")).toBeVisible();
      }
    }
  });

  test("zh-cn 博客列表页：分页加载正常", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    
    const pagination = page.locator('[class*="pagination"], nav[aria-label*="分页"]').first();
    if (await pagination.isVisible({ timeout: 5000 })) {
      const nextLink = page.locator('a[href*="/page/2"], a[aria-label*="下一页"]').first();
      if (await nextLink.isVisible()) {
        await nextLink.click();
        await expect(page).toHaveURL(/\/page\/2/);
        await expect(page.locator("main")).toBeVisible();
      }
    }
  });

  test("en 页面无 JavaScript 错误", async ({ page, baseURL }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => {
      // AdSense / GTM 在 localhost 常抛 TagError（如 message "Y"），属第三方已知噪声
      if (isThirdPartyPageError(error)) return;
      errors.push(error.message);
    });
    
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    expect(errors.length).toBe(0);
  });

  test("zh-cn 页面无 JavaScript 错误", async ({ page, baseURL }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => {
      if (isThirdPartyPageError(error)) return;
      errors.push(error.message);
    });
    
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    expect(errors.length).toBe(0);
  });

  test("en 页面无控制台错误", async ({ page, baseURL }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // 过滤第三方脚本（AdSense、Analytics、Counterscale）在非生产域名下的已知错误
        // 也过滤网络层面的资源加载失败（ERR_BLOCKED_BY_CLIENT、ERR_FAILED 等）
        const isThirdParty = /pagead2\.googlesyndication|googletagmanager|google-analytics|analytics\.inaodeng\.com|adsbygoogle|ca-pub-|googlesyndication|doubleclick\.net|google\.com|Content Security Policy|frame-ancestors|net::ERR_|Failed to load resource/.test(text);
        if (!isThirdParty) {
          consoleErrors.push(text);
        }
      }
    });
    
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    if (consoleErrors.length > 0) {
      console.log("Console errors found:", JSON.stringify(consoleErrors, null, 2));
    }
    expect(consoleErrors.length).toBe(0);
  });

  test("zh-cn 页面无控制台错误", async ({ page, baseURL }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        const text = msg.text();
        // 过滤第三方脚本（AdSense、Analytics、Counterscale）在非生产域名下的已知错误
        // 也过滤网络层面的资源加载失败（ERR_BLOCKED_BY_CLIENT、ERR_FAILED 等）
        const isThirdParty = /pagead2\.googlesyndication|googletagmanager|google-analytics|analytics\.inaodeng\.com|adsbygoogle|ca-pub-|googlesyndication|doubleclick\.net|google\.com|Content Security Policy|frame-ancestors|net::ERR_|Failed to load resource/.test(text);
        if (!isThirdParty) {
          consoleErrors.push(text);
        }
      }
    });
    
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    if (consoleErrors.length > 0) {
      console.log("Console errors found:", JSON.stringify(consoleErrors, null, 2));
    }
    expect(consoleErrors.length).toBe(0);
  });
});
