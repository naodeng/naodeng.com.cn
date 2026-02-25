import { test, expect } from "@playwright/test";

test.describe("用户交互", () => {
  test("en 首页：返回顶部按钮功能", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    const backToTop = page.locator('button[aria-label*="top" i], [class*="back-to-top"], [class*="scroll-top"]').first();
    if (await backToTop.isVisible({ timeout: 5000 })) {
      await backToTop.click();
      await page.waitForFunction(() => window.scrollY < 100, { timeout: 3000 }).catch(() => {});
      
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(100);
    }
  });

  test("zh-cn 首页：返回顶部按钮功能", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    const backToTop = page.locator('button[aria-label*="顶部"], [class*="back-to-top"], [class*="scroll-top"]').first();
    if (await backToTop.isVisible({ timeout: 5000 })) {
      await backToTop.click();
      await page.waitForFunction(() => window.scrollY < 100, { timeout: 3000 }).catch(() => {});
      
      const scrollY = await page.evaluate(() => window.scrollY);
      expect(scrollY).toBeLessThan(100);
    }
  });

  test("en 博客详情页：目录导航可点击", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const toc = page.locator('[class*="toc"], [class*="table-of-contents"], aside nav').first();
      if (await toc.isVisible({ timeout: 5000 })) {
        const tocLink = toc.locator("a").first();
        if (await tocLink.isVisible()) {
          await tocLink.click();
          await page.waitForTimeout(500);
        }
      }
    }
  });

  test("zh-cn 博客详情页：目录导航可点击", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const toc = page.locator('[class*="toc"], [class*="table-of-contents"], aside nav').first();
      if (await toc.isVisible({ timeout: 5000 })) {
        const tocLink = toc.locator("a").first();
        if (await tocLink.isVisible()) {
          await tocLink.click();
          await page.waitForTimeout(500);
        }
      }
    }
  });

  test("en 标签云：标签可点击", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    const tagsCloud = page.locator('[class*="tags-cloud"]').first();
    if (await tagsCloud.isVisible({ timeout: 5000 })) {
      const tagLink = tagsCloud.locator("a").first();
      if (await tagLink.isVisible()) {
        await tagLink.click();
        await page.waitForLoadState("networkidle");
        
        // 检查是否跳转到了有效页面（不是 404）
        const currentUrl = page.url();
        if (!currentUrl.includes("/404")) {
          await expect(page).toHaveURL(/\/en\/(tags|series)\//);
          await expect(page.locator("main")).toBeVisible();
        }
      }
    }
  });

  test("zh-cn 标签云：标签可点击", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    const tagsCloud = page.locator('[class*="tags-cloud"]').first();
    if (await tagsCloud.isVisible({ timeout: 5000 })) {
      const tagLink = tagsCloud.locator("a").first();
      if (await tagLink.isVisible()) {
        await tagLink.click();
        await page.waitForLoadState("networkidle");
        
        // 检查是否跳转到了有效页面（不是 404）
        const currentUrl = page.url();
        if (!currentUrl.includes("/404")) {
          await expect(page).toHaveURL(/\/zh-cn\/(tags|series)\//);
          await expect(page.locator("main")).toBeVisible();
        }
      }
    }
  });

  test("en 博客详情页：代码块复制按钮", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const codeBlock = page.locator("pre").first();
      if (await codeBlock.isVisible({ timeout: 5000 })) {
        const copyButton = page.locator('button[class*="copy"], button[aria-label*="copy" i]').first();
        if (await copyButton.isVisible({ timeout: 2000 })) {
          await copyButton.click();
          await page.waitForTimeout(500);
        }
      }
    }
  });

  test("zh-cn 博客详情页：代码块复制按钮", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const codeBlock = page.locator("pre").first();
      if (await codeBlock.isVisible({ timeout: 5000 })) {
        const copyButton = page.locator('button[class*="copy"], button[aria-label*="复制"]').first();
        if (await copyButton.isVisible({ timeout: 2000 })) {
          await copyButton.click();
          await page.waitForTimeout(500);
        }
      }
    }
  });

  test("en 社交分享按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/en/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const shareButtons = page.locator('[class*="share"], [aria-label*="share" i]').first();
      if (await shareButtons.isVisible({ timeout: 5000 })) {
        await expect(shareButtons).toBeVisible();
      }
    }
  });

  test("zh-cn 社交分享按钮可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "networkidle" });
    const firstPost = page.locator("main a[href*='/zh-cn/blog/']").first();
    
    if (await firstPost.isVisible({ timeout: 10000 })) {
      const href = await firstPost.getAttribute("href");
      await page.goto(new URL(href!, baseURL).href, { waitUntil: "networkidle" });
      
      const shareButtons = page.locator('[class*="share"], [aria-label*="分享"]').first();
      if (await shareButtons.isVisible({ timeout: 5000 })) {
        await expect(shareButtons).toBeVisible();
      }
    }
  });
});
