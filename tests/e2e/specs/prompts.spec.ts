import { expect, test } from "@playwright/test";

test.describe("Prompts selection and review flow", () => {
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
