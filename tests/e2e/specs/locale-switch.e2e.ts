import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const localeCases = [
  { source: "/en/", target: "/zh-cn/", lang: "zh-cn", equivalent: true },
  { source: "/zh-cn/", target: "/en/", lang: "en", equivalent: true },
  { source: "/en/blog/", target: "/zh-cn/blog/", lang: "zh-cn", equivalent: true },
  { source: "/zh-cn/blog/", target: "/en/blog/", lang: "en", equivalent: true },
  { source: "/en/AIWiki/ai-agent/", target: "/zh-cn/AIWiki/ai-agent/", lang: "zh-cn", equivalent: true },
  { source: "/zh-cn/AIWiki/ai-agent/", target: "/en/AIWiki/ai-agent/", lang: "en", equivalent: true },
] as const;

for (const { source, target, lang, equivalent } of localeCases) {
  test(`${source} switches to ${lang} at the matching page or locale fallback`, async ({ app, browser }) => {
    await app.open(source);

    const option = browser.locator(`header [data-locale-option][data-lang="${lang}"]`);
    await expect(option).toHaveAttribute("href", target);
    await expect(browser.locator("footer [data-locale-trigger]")).toHaveCount(0);

    const alternate = browser.locator(`head link[hreflang="${lang === "zh-cn" ? "zh-CN" : "en-US"}"]`);
    if (equivalent) {
      await expect(alternate).toHaveAttribute("href", `https://inaodeng.com${target}`);
    } else {
      await expect(alternate).toHaveCount(0);
    }

    await browser.locator("header [data-locale-trigger]").click();
    await option.click();
    await expect(browser).toHaveURL(new RegExp(`${target.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    await expect(browser.locator("main h1").first()).toBeVisible();
  });
}

test("locale switch updates the document language", async ({ app, browser }) => {
  await app.open("/en/");
  await expect(browser.locator("html")).toHaveAttribute("lang", /en/);

  await browser.locator("header [data-locale-trigger]").click();
  await browser.locator('header [data-locale-option][data-lang="zh-cn"]').click();
  await expect(browser.locator("html")).toHaveAttribute("lang", /zh/);
});

test("root route falls back to Chinese when storage and browser language are unavailable", async ({ app, browser }) => {
  await browser.addInitScript(() => {
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

  await app.open("/");
  await expect(browser).toHaveURL(/\/zh-cn\/$/);
  await expect(browser.locator("main")).toBeVisible();
});

test("root route follows the English browser language when storage is blocked", async ({ app, browser }) => {
  await browser.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      configurable: true,
      get() {
        throw new DOMException("Storage is blocked", "SecurityError");
      },
    });
    Object.defineProperty(navigator, "language", { configurable: true, value: "en-US" });
    Object.defineProperty(navigator, "languages", { configurable: true, value: ["en-US"] });
  });

  await app.open("/");
  await expect(browser).toHaveURL(/\/en\/$/);
  await expect(browser.locator("main")).toBeVisible();
});

for (const item of [
  { locale: "zh-cn", browserLanguage: "en-US" },
  { locale: "en", browserLanguage: "zh-CN" },
] as const) {
  test(`${item.locale} page keeps manual locale switching without an automatic prompt`, async ({ app, browser }) => {
    await browser.addInitScript((language) => {
      Object.defineProperty(navigator, "language", { configurable: true, value: language });
      Object.defineProperty(navigator, "languages", { configurable: true, value: [language] });
    }, item.browserLanguage);

    await app.open(`/${item.locale}/`);
    await expect(browser.locator("#js-languageSuggest")).toHaveCount(0);
    await expect(browser.locator("header [data-locale-trigger]")).toBeVisible();
    await expect(browser.locator("footer [data-locale-trigger]")).toHaveCount(0);
  });
}

for (const item of [
  { source: "/en/AIWiki/ai-agent/", target: "/zh-cn/AIWiki/ai-agent/", fallback: "/zh-cn/AIWiki/", lang: "zh-cn" },
  { source: "/zh-cn/AIWiki/ai-agent/", target: "/en/AIWiki/ai-agent/", fallback: "/en/AIWiki/", lang: "en" },
] as const) {
  test(`${item.source} falls back to the section index when the paired article cannot load`, async ({ app, browser }) => {
    await browser.addInitScript(() => {
      const setItem = Storage.prototype.setItem;
      Storage.prototype.setItem = function (key, value) {
        if (key === "selectedLang") throw new DOMException("Storage is blocked", "SecurityError");
        setItem.call(this, key, value);
      };
    });
    await app.open(item.source);
    await browser.route(`**${item.target}`, (route) => route.abort());
    await browser.locator("header [data-locale-trigger]").click();
    await browser.locator(`header [data-locale-option][data-lang="${item.lang}"]`).click();
    await expect(browser).toHaveURL(new RegExp(`${item.fallback.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    await expect(browser.locator("main h1").first()).toBeVisible();
    expect(await browser.evaluate(() => localStorage.getItem("selectedLang"))).toBeNull();
  });
}
