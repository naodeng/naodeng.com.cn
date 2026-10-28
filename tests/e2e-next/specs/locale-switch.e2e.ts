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
    await expect(browser.locator(`footer a[href="${target}"]`)).toBeVisible();

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
