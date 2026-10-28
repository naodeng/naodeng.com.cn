import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const detailRoutes = [
  { family: "blog", locale: "en", path: "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/" },
  { family: "blog", locale: "zh-cn", path: "/zh-cn/blog/qa-glossary-wiki/qa-glossary-wiki-automated-testing/" },
  { family: "QA Skill", locale: "en", path: "/en/qaskills/manual-testing/" },
  { family: "QA Skill", locale: "zh-cn", path: "/zh-cn/qaskills/manual-testing/" },
  { family: "Prompt", locale: "en", path: "/en/prompts/test-case-writing/" },
  { family: "Prompt", locale: "zh-cn", path: "/zh-cn/prompts/test-case-writing/" },
  { family: "Prompt workflow", locale: "en", path: "/en/prompts/workflows/daily/" },
  { family: "Prompt workflow", locale: "zh-cn", path: "/zh-cn/prompts/workflows/daily/" },
  { family: "Guild tutorial", locale: "en", path: "/en/guild/api-testing/postman/getting-started/" },
  { family: "Guild tutorial", locale: "zh-cn", path: "/zh-cn/guild/api-testing/postman/getting-started/" },
  { family: "Guild UI tutorial", locale: "en", path: "/en/guild/ui-testing/playwright/getting-started/" },
  { family: "Guild UI tutorial", locale: "zh-cn", path: "/zh-cn/guild/ui-testing/playwright/getting-started/" },
  { family: "Guild performance tutorial", locale: "en", path: "/en/guild/performance-testing/jmeter/getting-started/" },
  { family: "Guild performance tutorial", locale: "zh-cn", path: "/zh-cn/guild/performance-testing/gatling/getting-started/" },
  { family: "Wiki", locale: "en", path: "/en/wiki/test-automation/" },
  { family: "Wiki", locale: "zh-cn", path: "/zh-cn/wiki/test-automation/" },
  { family: "AI Wiki", locale: "en", path: "/en/AIWiki/qwen/" },
  { family: "AI Wiki", locale: "zh-cn", path: "/zh-cn/AIWiki/slash-commands/" },
] as const;

for (const route of detailRoutes) {
  test(`${route.locale} ${route.family} exposes localized sponsor and discussion actions`, async ({ app, browser }) => {
    await app.open(route.path);

    const actions = browser.locator("[data-detail-actions]");
    await expect(actions).toHaveCount(1);
    await expect(actions).toBeVisible();
    await expect(browser.locator("[data-detail-actions] [data-sponsor-link]")).toHaveAttribute("href", `/${route.locale}/sponsor/`);
    await expect(browser.locator("[data-detail-actions] [data-sponsor-link]")).toHaveText(route.locale === "zh-cn" ? "支持" : "Support");
    await expect(browser.locator("[data-detail-actions] [data-discussion-link]")).toHaveText(route.locale === "zh-cn" ? "评论" : "Comments");
    await expect(browser.locator("[data-detail-actions] [data-discussion-link]")).toHaveAttribute("href", "#page-discussion");
    await expect(browser.locator("[data-detail-actions] [data-discussion-link]")).toHaveAccessibleName(route.locale === "zh-cn" ? "跳转到点赞和评论" : "Go to reactions and comments");
    await expect(browser.locator("[data-discussion-shortcut]")).toHaveCount(0);

    const actionIsInNavigation = await browser.evaluate(() => {
      const element = document.querySelector("[data-detail-actions]");
      return Boolean(element?.closest(".toc-sidebar, #skill-elevator"));
    });
    expect(actionIsInNavigation).toBe(true);

    if (route.family !== "QA Skill") {
      const navigationOrder = await browser.evaluate(() => {
        const element = document.querySelector("[data-detail-actions]");
        if (!element) return null;
        const nav = element.closest(".toc-nav");
        const desktopList = nav?.querySelector(".toc-list--desktop");
        const mobileDetails = nav?.querySelector(".toc-details-mobile");
        return {
          afterDesktopList: desktopList ? Boolean(desktopList.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING) : true,
          afterMobileList: mobileDetails ? Boolean(mobileDetails.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING) : true,
        };
      });
      expect(navigationOrder).not.toBeNull();
      expect(navigationOrder?.afterDesktopList).toBe(true);
      expect(navigationOrder?.afterMobileList).toBe(true);
    }

    const discussion = browser.locator("section#page-discussion");
    await expect(discussion).toHaveCount(1);
    await expect(discussion).toHaveAttribute("tabindex", "-1");
    await expect(browser.locator('section#page-discussion script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-input-position", "bottom");
    await expect(browser.locator('section#page-discussion script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-reactions-enabled", "1");
    await expect(browser.locator('section#page-discussion script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-loading", route.family === "QA Skill" ? "eager" : "lazy");
    await expect(browser.locator("section#page-discussion .giscus-status")).toHaveAttribute("role", "status");
    await expect(browser.locator("section#page-discussion .giscus-status")).toHaveAttribute("aria-live", "polite");
  });
}

test("weekly issue keeps its existing Giscus section without detail-page actions", async ({ app, browser }) => {
  await app.open("/en/ai-native-qa-weekly/2026/week-39/");
  await expect(browser.locator(".giscus-section")).toHaveCount(1);
  await expect(browser.locator(".giscus-section")).toHaveAttribute("aria-label", "Comments");
  await expect(browser.locator("#page-discussion")).toHaveCount(0);
  await expect(browser.locator("[data-detail-actions]")).toHaveCount(0);
  await expect(browser.locator("[data-discussion-shortcut]")).toHaveCount(0);
});

test("TOC comment action reaches and focuses the discussion section", async ({ app, browser }) => {
  await browser.setViewport({ width: 390, height: 844 });
  await app.open(detailRoutes[0].path);
  const discussion = browser.locator("#page-discussion");
  const commentAction = browser.locator("[data-detail-actions] [data-discussion-link]");
  await expect(commentAction).toBeVisible();
  await commentAction.click();
  await expect(browser).toHaveURL(/#page-discussion$/);
  await expect(discussion).toBeFocused();
});

const responsiveRoutes = [
  { family: "Blog", path: "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/", hasTocDetails: true },
  { family: "QA Skill", path: "/zh-cn/qaskills/manual-testing/", hasTocDetails: false },
  { family: "Prompt", path: "/en/prompts/test-case-writing/", hasTocDetails: true },
  { family: "Prompt workflow", path: "/en/prompts/workflows/daily/", hasTocDetails: true },
  { family: "Guild tutorial", path: "/en/guild/ui-testing/playwright/getting-started/", hasTocDetails: true },
  { family: "Wiki", path: "/en/wiki/test-automation/", hasTocDetails: true },
  { family: "AI Wiki", path: "/en/AIWiki/qwen/", hasTocDetails: true },
] as const;

for (const route of responsiveRoutes) {
  test(`${route.family} keeps page actions visible in desktop, tablet and mobile navigation`, async ({ app, browser }) => {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 834, height: 900 }, { width: 390, height: 844 }]) {
      await browser.setViewport(viewport);
      await app.open(route.path);
      const actions = browser.locator("[data-detail-actions]");
      await expect(actions).toBeVisible();
      expect(await browser.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1)).toBe(true);
      expect(await browser.evaluate(() => Boolean(document.querySelector("[data-detail-actions]")?.closest(".toc-sidebar, #skill-elevator")))).toBe(true);
      if (route.hasTocDetails && viewport.width < 1100) {
        await expect(browser.locator(".toc-details-mobile summary").first()).toBeVisible();
      }
    }
  });
}

const migratedTitleRoutes = [
  { path: "/zh-cn/wiki/test-automation/", title: "测试自动化 ｜ Test Automation", oldId: "测试自动化--test-automation", nextHeading: "有关测试自动化的问题吗" },
  { path: "/en/AIWiki/qwen/", title: "Qwen", oldId: "qwen", nextHeading: "overview" },
  { path: "/zh-cn/AIWiki/slash-commands/", title: "斜杠命令（Slash Commands）", oldId: "斜杠命令slash-commands", nextHeading: "概览" },
] as const;

for (const route of migratedTitleRoutes) {
  test(`${route.path} preserves the visible H1 and its fragment targets`, async ({ app, browser }) => {
    await app.open(route.path);
    const articleTitle = browser.locator("article h1").first();
    await expect(articleTitle).toHaveText(route.title);
    await expect(articleTitle).toHaveAttribute("id", route.oldId);
    await expect(browser.locator("article h1")).toHaveCount(1);
    expect(await browser.evaluate((id) => Boolean(document.getElementById(id)), route.nextHeading)).toBe(true);
  });
}

test("Giscus script failure leaves the discussion anchor and an unavailable status", async ({ app, browser }) => {
  await browser.route("https://giscus.app/client.js", (route) => route.abort());
  await app.open(detailRoutes[0].path);
  await expect(browser.locator("#page-discussion")).toHaveCount(1);
  const status = browser.locator("#page-discussion .giscus-status");
  await expect(status).toBeVisible();
  await expect(status).toContainText(/temporarily unavailable/i);
});

test("Giscus timeout reports unavailable and later recovers after the iframe loads", async ({ app, browser }) => {
  await browser.route("https://giscus.app/client.js", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: "void 0;" }));
  await app.open(detailRoutes[0].path);
  const discussion = browser.locator("#page-discussion");
  const status = browser.locator("#page-discussion .giscus-status");
  await discussion.scrollIntoView();
  await expect(status).toHaveAttribute("data-state", "loading");
  await expect(status).toHaveAttribute("data-state", "unavailable", { timeout: 20_000 });

  await browser.evaluate(() => {
    const container = document.querySelector("#page-discussion .giscus");
    if (!container) return false;
    const frame = document.createElement("iframe");
    frame.className = "giscus-frame";
    container.appendChild(frame);
    return true;
  });
  await expect.poll(() => browser.evaluate(() => Boolean(document.querySelector("iframe.giscus-frame[data-status-observed='true']")))).toBe(true);
  await browser.evaluate(() => document.querySelector("iframe.giscus-frame")?.dispatchEvent(new Event("load")) ?? false);
  await expect(status).toHaveAttribute("data-state", "loaded");
  await expect(status).toBeHidden();
});

test("missing Giscus configuration keeps the detail anchor without loading its external client", async ({ app, browser }) => {
  test.skip(!process.env.EXPECT_GISCUS_DISABLED, "Run against a build with empty PUBLIC_GISCUS_* values");
  await app.open(detailRoutes[0].path);
  await expect(browser.locator("#page-discussion")).toHaveCount(1);
  await expect(browser.locator("#page-discussion .giscus-status")).toBeVisible();
  await expect(browser.locator("#page-discussion .giscus-status")).toContainText(/temporarily unavailable/i);
  await expect(browser.locator('#page-discussion script[src="https://giscus.app/client.js"]')).toHaveCount(0);
});
