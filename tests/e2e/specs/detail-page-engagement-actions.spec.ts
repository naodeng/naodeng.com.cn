import { expect, test } from "@playwright/test";

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
];

for (const route of detailRoutes) {
  test(`${route.locale} ${route.family} has localized sponsor and discussion links`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: "domcontentloaded" });

    const actions = page.locator("[data-detail-actions]");
    await expect(actions).toHaveCount(1);
    await expect(actions).toBeVisible();
    await expect(actions.locator("[data-sponsor-link]")).toHaveAttribute("href", `/${route.locale}/sponsor/`);
    await expect(actions.locator("[data-sponsor-link]")).toHaveText(route.locale === "zh-cn" ? "支持" : "Support");
    await expect(actions.locator("[data-discussion-link]")).toHaveText(route.locale === "zh-cn" ? "评论" : "Comments");
    await expect(actions.locator("[data-discussion-link]")).toHaveAttribute("href", "#page-discussion");
    await expect(actions.locator("[data-discussion-link]")).toHaveAccessibleName(route.locale === "zh-cn" ? "跳转到点赞和评论" : "Go to reactions and comments");
    await expect(page.locator("[data-discussion-shortcut]")).toHaveCount(0);

    const actionIsInNavigation = await actions.evaluate((element) => Boolean(element.closest(".toc-sidebar, #skill-elevator")));
    expect(actionIsInNavigation).toBe(true);

    if (route.family !== "QA Skill") {
      const navigationOrder = await actions.evaluate((element) => {
        const nav = element.closest(".toc-nav");
        const desktopList = nav?.querySelector(".toc-list--desktop");
        const mobileDetails = nav?.querySelector(".toc-details-mobile");
        return {
          afterDesktopList: desktopList
            ? Boolean(desktopList.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
            : true,
          afterMobileList: mobileDetails
            ? Boolean(mobileDetails.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING)
            : true,
        };
      });
      expect(navigationOrder.afterDesktopList).toBe(true);
      expect(navigationOrder.afterMobileList).toBe(true);
    }

    const discussion = page.locator("section#page-discussion");
    await expect(discussion).toHaveCount(1);
    await expect(discussion).toHaveAttribute("tabindex", "-1");
    await expect(discussion.locator('script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-input-position", "bottom");
    await expect(discussion.locator('script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-reactions-enabled", "1");
    await expect(discussion.locator('script[src="https://giscus.app/client.js"]')).toHaveAttribute("data-loading", route.family === "QA Skill" ? "eager" : "lazy");
    await expect(discussion.locator(".giscus-status")).toHaveAttribute("role", "status");
    await expect(discussion.locator(".giscus-status")).toHaveAttribute("aria-live", "polite");
  });
}

test("weekly issue keeps its existing Giscus without the detail-page actions", async ({ page }) => {
  await page.goto("/en/ai-native-qa-weekly/2026/week-39/", { waitUntil: "domcontentloaded" });

  await expect(page.locator(".giscus-section")).toHaveCount(1);
  await expect(page.locator(".giscus-section")).toHaveAttribute("aria-label", "Comments");
  await expect(page.locator("#page-discussion")).toHaveCount(0);
  await expect(page.locator("[data-detail-actions]")).toHaveCount(0);
  await expect(page.locator("[data-discussion-shortcut]")).toHaveCount(0);
});

test("TOC comment action jumps to the focused discussion section", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(detailRoutes[0].path, { waitUntil: "domcontentloaded" });

  const discussion = page.locator("#page-discussion");
  const commentAction = page.locator("[data-detail-actions] [data-discussion-link]");
  await expect(commentAction).toBeVisible();
  await commentAction.click();
  await expect(page).toHaveURL(/#page-discussion$/);
  await expect(discussion).toBeFocused();
});

const responsiveRoutes = [
  { family: "Blog", path: "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/", hasTocDetails: true },
  { family: "QA Skill", path: "/zh-cn/qaskills/manual-testing/", hasTocDetails: false },
  { family: "QA Skill English", path: "/en/qaskills/manual-testing/", hasTocDetails: false },
  { family: "Prompt", path: "/en/prompts/test-case-writing/", hasTocDetails: true },
  { family: "Prompt workflow", path: "/en/prompts/workflows/daily/", hasTocDetails: true },
  { family: "Guild tutorial", path: "/en/guild/ui-testing/playwright/getting-started/", hasTocDetails: true },
  { family: "Wiki", path: "/en/wiki/test-automation/", hasTocDetails: true },
  { family: "Wiki Chinese", path: "/zh-cn/wiki/test-automation/", hasTocDetails: true },
  { family: "AI Wiki", path: "/en/AIWiki/qwen/", hasTocDetails: true },
];

for (const route of responsiveRoutes) {
  test(`${route.family} keeps page actions in its navigation at desktop, tablet, and mobile sizes`, async ({ page }) => {
    for (const viewport of [{ width: 1440, height: 900 }, { width: 1100, height: 900 }, { width: 834, height: 900 }, { width: 390, height: 844 }]) {
      await page.setViewportSize(viewport);
      await page.goto(route.path, { waitUntil: "domcontentloaded" });

      const actions = page.locator("[data-detail-actions]");
      await expect(actions).toBeVisible();
      const [actionsBox, pageWidth, actionIsInNavigation] = await Promise.all([
        actions.boundingBox(),
        page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1),
        actions.evaluate((element) => Boolean(element.closest(".toc-sidebar, #skill-elevator"))),
      ]);
      expect(actionsBox).not.toBeNull();
      expect(actionsBox!.height).toBeGreaterThanOrEqual(38);
      expect(pageWidth).toBe(true);
      expect(actionIsInNavigation).toBe(true);

      // The action container can fit the column while its labels still overflow their own buttons.
      await page.evaluate(() => document.fonts.ready);
      const labelBounds = await actions.locator("a").evaluateAll((links) => links.map((link) => {
        const button = link.getBoundingClientRect();
        const range = document.createRange();
        range.selectNodeContents(link);
        const label = range.getBoundingClientRect();
        return { text: link.textContent?.trim(), left: button.left, right: button.right, labelLeft: label.left, labelRight: label.right, height: button.height };
      }));
      expect(labelBounds).toHaveLength(2);
      for (const bounds of labelBounds) {
        expect.soft(bounds.labelLeft, `${route.family} ${viewport.width}px ${bounds.text} left`).toBeGreaterThanOrEqual(bounds.left - 0.5);
        expect.soft(bounds.labelRight, `${route.family} ${viewport.width}px ${bounds.text} right`).toBeLessThanOrEqual(bounds.right + 0.5);
        expect.soft(bounds.height, `${route.family} ${viewport.width}px ${bounds.text} target`).toBeGreaterThanOrEqual(44);
      }

      if (route.hasTocDetails && viewport.width < 1100) {
        await expect(page.locator(".toc-details-mobile summary").first()).toBeVisible();
      }
    }
  });
}

const migratedTitleRoutes = [
  { path: "/zh-cn/wiki/test-automation/", title: "测试自动化 ｜ Test Automation", oldId: "测试自动化--test-automation", nextHeading: "有关测试自动化的问题吗" },
  { path: "/en/AIWiki/qwen/", title: "Qwen", oldId: "qwen", nextHeading: "overview" },
  { path: "/zh-cn/AIWiki/slash-commands/", title: "斜杠命令（Slash Commands）", oldId: "斜杠命令slash-commands", nextHeading: "概览" },
];

for (const route of migratedTitleRoutes) {
  test(`${route.path} preserves the original visible H1 and fragment ID`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: "domcontentloaded" });
    const article = page.locator("article").first();
    const title = article.locator("h1").first();
    await expect(title).toHaveText(route.title);
    await expect(title).toHaveAttribute("id", route.oldId);
    await expect(article.locator("h1")).toHaveCount(1);
    await expect(article.locator(`#${route.nextHeading}`)).toHaveCount(1);
  });
}

test("Giscus script failure leaves the discussion anchor and reports an unavailable state", async ({ page }) => {
  await page.route("https://giscus.app/client.js", (route) => route.abort());
  await page.goto(detailRoutes[0].path, { waitUntil: "domcontentloaded" });

  const discussion = page.locator("#page-discussion");
  const status = discussion.locator(".giscus-status");
  await expect(discussion).toHaveCount(1);
  await expect(status).toBeVisible();
  await expect(status).toContainText("temporarily unavailable");
});

test("Giscus reports a timeout but recovers when its iframe loads later", async ({ page }) => {
  await page.clock.install();
  await page.route("https://giscus.app/client.js", (route) => route.fulfill({ status: 200, contentType: "text/javascript", body: "void 0;" }));
  await page.goto(detailRoutes[0].path, { waitUntil: "domcontentloaded" });

  const discussion = page.locator("#page-discussion");
  const status = discussion.locator(".giscus-status");
  await discussion.scrollIntoViewIfNeeded();
  await expect(status).toHaveAttribute("data-state", "loading");
  await page.clock.fastForward(15_001);
  await expect(status).toHaveAttribute("data-state", "unavailable");

  await discussion.locator(".giscus").evaluate((container) => {
    const frame = document.createElement("iframe");
    frame.className = "giscus-frame";
    container.appendChild(frame);
  });
  const lateFrame = discussion.locator("iframe.giscus-frame");
  await expect(lateFrame).toHaveAttribute("data-status-observed", "true");
  await lateFrame.evaluate((frame) => frame.dispatchEvent(new Event("load")));
  await expect(status).toHaveAttribute("data-state", "loaded");
  await expect(status).toBeHidden();
});

test("missing Giscus configuration keeps the detail anchor without loading its external client", async ({ page }) => {
  test.skip(!process.env.EXPECT_GISCUS_DISABLED, "Run against a build with empty PUBLIC_GISCUS_* values");
  await page.goto(detailRoutes[0].path, { waitUntil: "domcontentloaded" });

  const discussion = page.locator("#page-discussion");
  await expect(discussion).toHaveCount(1);
  await expect(discussion.locator(".giscus-status")).toBeVisible();
  await expect(discussion.locator(".giscus-status")).toContainText("temporarily unavailable");
  await expect(discussion.locator('script[src="https://giscus.app/client.js"]')).toHaveCount(0);
});
