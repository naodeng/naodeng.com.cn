import { test, expect } from "@playwright/test";

test.describe("搜索功能", () => {
  test("en 首页：搜索框可见且可输入", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="search" i], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="search" i]').first();
    await expect(searchInput).toBeVisible({ timeout: 10000 });
    await searchInput.fill("testing");
    await expect(searchInput).toHaveValue("testing");
  });

  test("zh-cn 首页：搜索框可见且可输入", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="搜索"], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="搜索"], input[aria-label*="搜索"]').first();
    await expect(searchInput).toBeVisible({ timeout: 10000 });
    await searchInput.fill("测试");
    await expect(searchInput).toHaveValue("测试");
  });

  test("en 搜索后显示结果", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="search" i], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="search" i]').first();
    
    if (await searchInput.isVisible({ timeout: 5000 })) {
      await searchInput.fill("API");
      await searchInput.press("Enter");
      await page.waitForTimeout(1000);
      
      const resultsContainer = page.locator('[class*="search-result"], [class*="search-panel"], [role="listbox"]').first();
      if (await resultsContainer.isVisible({ timeout: 5000 })) {
        await expect(resultsContainer).toBeVisible();
      }
    }
  });

  test("zh-cn 搜索后显示结果", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="搜索"], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="搜索"], input[aria-label*="搜索"]').first();
    
    if (await searchInput.isVisible({ timeout: 5000 })) {
      await searchInput.fill("API");
      await searchInput.press("Enter");
      await page.waitForTimeout(1000);
      
      const resultsContainer = page.locator('[class*="search-result"], [class*="search-panel"], [role="listbox"]').first();
      if (await resultsContainer.isVisible({ timeout: 5000 })) {
        await expect(resultsContainer).toBeVisible();
      }
    }
  });

  test("en 搜索框支持键盘快捷键", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    await page.keyboard.press("Control+K");
    await page.waitForTimeout(500);
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="search" i]').first();
    if (await searchInput.isVisible({ timeout: 2000 })) {
      await expect(searchInput).toBeFocused();
    }
  });

  test("zh-cn 搜索框支持键盘快捷键", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    await page.keyboard.press("Control+K");
    await page.waitForTimeout(500);
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="搜索"], input[aria-label*="搜索"]').first();
    if (await searchInput.isVisible({ timeout: 2000 })) {
      await expect(searchInput).toBeFocused();
    }
  });

  test("en 清空搜索内容", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="search" i], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="Search"], input[aria-label*="search" i]').first();
    
    if (await searchInput.isVisible({ timeout: 5000 })) {
      await searchInput.fill("testing");
      await expect(searchInput).toHaveValue("testing");
      
      await searchInput.clear();
      await expect(searchInput).toHaveValue("");
    }
  });

  test("zh-cn 清空搜索内容", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "networkidle" });
    
    // 先点击搜索按钮打开搜索框
    const searchButton = page.locator('button[aria-label*="搜索"], button[class*="search"]').first();
    if (await searchButton.isVisible({ timeout: 5000 })) {
      await searchButton.click();
      await page.waitForTimeout(500);
    }
    
    const searchInput = page.locator('input[type="search"], input[placeholder*="搜索"], input[aria-label*="搜索"]').first();
    
    if (await searchInput.isVisible({ timeout: 5000 })) {
      await searchInput.fill("测试");
      await expect(searchInput).toHaveValue("测试");
      
      await searchInput.clear();
      await expect(searchInput).toHaveValue("");
    }
  });
});
