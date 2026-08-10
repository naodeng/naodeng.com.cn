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

  for (const lang of ["zh-cn", "en"] as const) {
    test(`${lang} explains versions, usage, examples, and review limits`, async ({
      page,
      baseURL,
    }) => {
      await page.goto(`${baseURL}/${lang}/prompts/`, { waitUntil: "domcontentloaded" });

      await expect(page.locator("[data-prompt-version]")).toHaveCount(6);
      await expect(
        page.locator('[data-prompt-version="Standard"][data-recommended="true"]'),
      ).toBeVisible();
      await expect(page.locator("[data-prompt-quick-step]")).toHaveCount(5);
      await expect(page.locator("[data-prompt-example]")).toHaveCount(3);
      await expect(page.locator("#ai-output-notice")).toBeVisible();
      await expect(page.locator("[data-prompt-type]")).toHaveCount(15);

      const text = await page.locator("main").innerText();
      expect(text).not.toContain("_EN.md");
      expect(text).not.toContain("_Lite.md");
    });
  }
});
