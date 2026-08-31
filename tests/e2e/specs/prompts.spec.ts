import { expect, test } from "@playwright/test";

test.describe("Prompts selection and review flow", () => {
  test("desktop quick-start row balances all five steps", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL}/zh-cn/prompts/`);
    const boxes = await page.locator("[data-prompt-quick-step]").evaluateAll((cards) =>
      cards.map((card) => {
        const rect = card.getBoundingClientRect();
        return { left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) };
      }),
    );
    expect(boxes).toHaveLength(5);
    expect(Math.abs(boxes[3].left - boxes[0].left)).toBeLessThanOrEqual(2);
    expect(Math.abs(boxes[4].right - boxes[2].right)).toBeLessThanOrEqual(2);
    expect(boxes[3].width).toBeGreaterThan(boxes[0].width);
  });

  test("content sections keep visible separation without overlap", async ({ page, baseURL }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto(`${baseURL}/zh-cn/prompts/`);
    const gaps = await page.evaluate(() => {
      const rect = (selector: string) => document.querySelector(selector)?.getBoundingClientRect();
      const categories = rect("#testing-types-heading");
      const quick = rect("#quickstart-heading");
      const examples = rect(".examples");
      const notice = rect("#ai-output-notice");
      const flow = rect("#flow-heading");
      return {
        categoriesToQuick: categories && quick ? Math.round(quick.top - categories.bottom) : -999,
        examplesToNotice: examples && notice ? Math.round(notice.top - examples.bottom) : -999,
        noticeToFlow: notice && flow ? Math.round(flow.top - notice.bottom) : -999,
      };
    });
    expect(gaps.categoriesToQuick).toBeGreaterThanOrEqual(24);
    expect(gaps.examplesToNotice).toBeGreaterThanOrEqual(24);
    expect(gaps.noticeToFlow).toBeGreaterThanOrEqual(24);
  });

  test("prompt details show the prompt name without a Default version label", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/zh-cn/prompts/test-strategy/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".prompt-detail-header h1")).toHaveText("测试策略 Prompt");
    await expect(page.locator(".prompt-detail-header h1")).not.toContainText("Default");
    await expect(page.locator(".prompt-content > h1")).toBeHidden();
  });

  test("prompt details keep the prompt name before a platform version", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/zh-cn/prompts/test-strategy-Mobile/`, { waitUntil: "domcontentloaded" });

    await expect(page.locator(".prompt-detail-header h1")).toHaveText("测试策略 Prompt - 移动端版");
  });

  test("prompt details show five linked related prompts below sharing", async ({ page, baseURL }) => {
    await page.goto(`${baseURL}/zh-cn/prompts/test-strategy-Mobile/`, { waitUntil: "domcontentloaded" });

    const related = page.locator(".prompt-related-prompts");
    await expect(related).toBeVisible();
    await expect(related.locator("[data-related-prompt]")).toHaveCount(5);
    const firstRelated = related.locator("[data-related-prompt]").first();
    const href = await firstRelated.getAttribute("href");
    expect(href).toMatch(/^\/zh-cn\/prompts\/.+\/$/);
    await expect(related.locator(".prompt-related-prompt-description")).toHaveCount(0);
    await firstRelated.click();
    await expect(page).toHaveURL(new RegExp(`${href}$`));
  });


  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} lists every prompt category without version choices`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });

      await expect(page.locator("[data-prompt-version]")).toHaveCount(0);
      await expect(page.locator(".prompt-category")).toHaveCount(11);
      await expect(page.locator("main")).not.toContainText("9007199254740991");
      await expect(page.locator("[data-prompt-quick-step]")).toHaveCount(5);
      await expect(page.locator("[data-prompt-example]")).toHaveCount(6);
      await expect(page.locator("#ai-output-notice")).toBeVisible();
      expect(await page.locator("[data-prompt-type]").count()).toBeGreaterThanOrEqual(200);

      const text = await page.locator("main").innerText();
      expect(text).not.toContain("_EN.md");
      expect(text).not.toContain("_Lite.md");
    });

    test(`${lang} searches prompts and keeps categories expanded after refresh`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });
      const category = page.locator(".prompt-category").first();
      const toggle = category.locator(".prompt-category-toggle");
      const list = category.locator(".prompts-grid");

      await expect(toggle).toHaveAttribute("aria-expanded", "false");
      await expect(list).toBeHidden();
      await toggle.click();
      await expect(toggle).toHaveAttribute("aria-expanded", "true");
      await expect(list).toBeVisible();

      await page.reload({ waitUntil: "domcontentloaded" });
      await expect(page.locator(".prompt-category").first().locator(".prompt-category-toggle")).toHaveAttribute("aria-expanded", "false");

      const search = page.locator("#prompt-search-input");
      await search.fill(lang === "zh-cn" ? "API测试" : "API Testing");
      const apiPrompt = page.locator('[data-prompt-type="api-testing"]');
      await expect(apiPrompt).toBeVisible();
      await expect(page.locator(".prompt-category").filter({ has: apiPrompt }).locator(".prompt-category-toggle")).toHaveAttribute("aria-expanded", "true");
      await expect(page.locator(".prompt-search-empty")).toBeHidden();
      await search.fill("");
      await expect(page.locator(".prompt-category").first().locator(".prompts-grid")).toBeHidden();
    });

    test(`${lang} unifies the page name and frames the flow as assisted`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });
      const h1 = lang === "zh-cn" ? "软件测试提示词库" : "Software Testing Prompt Library";
      await expect(page.locator("main h1")).toHaveText(h1);
      await expect(page).toHaveTitle(new RegExp(h1));
      await expect(page.locator("#flow-heading")).toContainText(lang === "zh-cn" ? "辅助" : /assisted/i);
    });

    test(`${lang} opens a category with one prompt and its GitHub source link`, async ({ page, baseURL }) => {
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });
      const href = await page.locator("[data-prompt-type]").first().getAttribute("href");
      await page.goto(`${baseURL}${href}`, { waitUntil: "domcontentloaded" });

      await expect(page.locator('[role="tablist"]')).toHaveCount(0);
      await expect(page.locator(".prompt-source-link")).toHaveAttribute(
        "href",
        /github\.com\/naodeng\/awesome-qa-prompt\/blob\/main\/testing-types\//,
      );
    });
  }
});
