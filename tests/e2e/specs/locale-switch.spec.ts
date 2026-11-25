import { test, expect, type Page } from "@playwright/test";

const openLocaleOption = async (page: Page, locale: "en" | "zh-cn") => {
  const dropdown = page.locator("header [data-locale-dropdown]");
  const trigger = dropdown.locator("[data-locale-trigger]");
  await expect(trigger).toBeVisible();
  if (await trigger.getAttribute("aria-expanded") !== "true") await trigger.click();

  const option = dropdown.locator(`[data-locale-option][data-lang="${locale}"]`);
  await expect(option).toBeVisible();
  return option;
};

test.describe("语言切换", () => {
  test("en 首页：语言切换器可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header [data-locale-trigger]")).toBeVisible({ timeout: 10000 });
  });

  test("zh-cn 首页：语言切换器可见", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("header [data-locale-trigger]")).toBeVisible({ timeout: 10000 });
  });

  test("从 en 首页切换到 zh-cn", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await (await openLocaleOption(page, "zh-cn")).click();
    await expect(page).toHaveURL(/\/zh-cn\//);
    await expect(page.locator("main")).toBeVisible();
  });

  test("从 zh-cn 首页切换到 en", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/", { waitUntil: "domcontentloaded" });
    await (await openLocaleOption(page, "en")).click();
    await expect(page).toHaveURL(/\/en\//);
    await expect(page.locator("main")).toBeVisible();
  });

  test("从 en 博客页切换到 zh-cn 保持在博客页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/blog/", { waitUntil: "domcontentloaded" });
    const zhLink = await openLocaleOption(page, "zh-cn");
    await expect(zhLink).toHaveAttribute("href", /\/zh-cn\/blog\//);
    await zhLink.click();
    await expect(page).toHaveURL(/\/zh-cn\/blog/);
    await expect(page.locator("main")).toBeVisible();
  });

  test("从 zh-cn 博客页切换到 en 保持在博客页", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/zh-cn/blog/", { waitUntil: "domcontentloaded" });
    const enLink = await openLocaleOption(page, "en");
    await expect(enLink).toHaveAttribute("href", /\/en\/blog\//);
    await enLink.click();
    await expect(page).toHaveURL(/\/en\/blog/);
    await expect(page.locator("main")).toBeVisible();
  });

  for (const [from, to] of [["en", "zh-cn"], ["zh-cn", "en"]] as const) {
    test(`从 ${from} AI 百科切换到 ${to} 保持在同一词条`, async ({ page }) => {
      await page.goto(`/${from}/AIWiki/ai-agent/`, { waitUntil: "domcontentloaded" });
      const link = await openLocaleOption(page, to);
      await expect(link).toHaveAttribute("href", `/${to}/AIWiki/ai-agent/`);
      await link.click();
      await expect(page).toHaveURL(new RegExp(`/${to}/AIWiki/ai-agent/?$`));
      await expect(page.locator(".docs-content h1")).toBeVisible();
    });
  }

  test("语言切换后页面内容语言正确", async ({ page, baseURL }) => {
    await page.goto((baseURL || "") + "/en/", { waitUntil: "domcontentloaded" });
    await expect(page.locator("html")).toHaveAttribute("lang", /en/);
    
    await (await openLocaleOption(page, "zh-cn")).click();
    await page.waitForLoadState("domcontentloaded");
    await expect(page.locator("html")).toHaveAttribute("lang", /zh/);
  });
});

test.describe("浏览器语言不可用时的回退", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("存储和浏览器语言都被阻止时默认跳转到中文首页", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        configurable: true,
        get() {
          throw new DOMException("Storage is blocked", "SecurityError");
        },
      });
      Object.defineProperty(navigator, "language", {
        configurable: true,
        get() {
          throw new Error("Browser language is unavailable");
        },
      });
      Object.defineProperty(navigator, "languages", {
        configurable: true,
        get() {
          throw new Error("Browser language list is unavailable");
        },
      });
    });

    await page.goto("/");
    await expect(page).toHaveURL(/\/zh-cn\/$/);
    await expect(page.locator("main")).toBeVisible();
  });
});

test.describe("英文浏览器的根域名跳转", () => {
  test.use({ locale: "en-US" });

  test("localStorage 被阻止时仍按浏览器语言跳转到英文首页", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        configurable: true,
        get() {
          throw new DOMException("Storage is blocked", "SecurityError");
        },
      });
    });

    await page.goto("/");
    await expect(page).toHaveURL(/\/en\/$/);
    await expect(page.locator("main")).toBeVisible();
  });
});

test.describe("不自动弹出语言切换提示", () => {
  test.describe("中文页面", () => {
    test.use({ locale: "en-US" });

    test("浏览器语言不同也不显示提示，并保留手动切换入口", async ({ page }) => {
      await page.goto("/zh-cn/", { waitUntil: "domcontentloaded" });
      await expect(page.locator("#js-languageSuggest")).toHaveCount(0);
      await expect(page.locator("header [data-locale-trigger]")).toBeVisible();
    });
  });

  test.describe("英文页面", () => {
    test.use({ locale: "zh-CN" });

    test("浏览器语言不同也不显示提示，并保留手动切换入口", async ({ page }) => {
      await page.goto("/en/", { waitUntil: "domcontentloaded" });
      await expect(page.locator("#js-languageSuggest")).toHaveCount(0);
      await expect(page.locator("header [data-locale-trigger]")).toBeVisible();
    });
  });
});

test.describe("根域名语言回退", () => {
  test.use({ locale: "zh-CN" });

  test("localStorage 被浏览器阻止时仍按浏览器语言跳转", async ({ page }) => {
    await page.addInitScript(() => {
      Object.defineProperty(window, "localStorage", {
        configurable: true,
        get() {
          throw new DOMException("Storage is blocked", "SecurityError");
        },
      });
    });

    await page.goto("/");
    await expect(page).toHaveURL(/\/zh-cn\/$/);
    await expect(page.locator("main")).toBeVisible();
  });
});
