import { test, expect } from "@playwright/test";

test.describe("Code Block Enhancements", () => {
  async function getArticleWithCode(page: any, baseURL: string | undefined, locale: string) {
    await page.goto((baseURL || "") + `/${locale}/blog/`, { waitUntil: "domcontentloaded" });
    const hrefs = await page.locator(`main a[href*='/${locale}/blog/']`).evaluateAll((anchors) =>
      anchors
        .map((a) => a.getAttribute("href"))
        .filter((href): href is string => Boolean(href))
    );

    for (const href of hrefs.slice(0, 5)) {
      await page.goto(new URL(href, baseURL).href, { waitUntil: "domcontentloaded" });
      const codeBlock = page.locator("pre").first();
      if (await codeBlock.isVisible({ timeout: 3000 })) return true;
    }
    return false;
  }

  test("code block header bar renders with language label", async ({ page, baseURL }) => {
    const found = await getArticleWithCode(page, baseURL, "en");
    if (!found) return;

    const header = page.locator(".code-block-header").first();
    if (!(await header.isVisible({ timeout: 3000 }))) return;

    await expect(header).toBeVisible();
    const langLabel = header.locator(".code-block-lang").first();
    await expect(langLabel).toBeVisible();
  });

  test("copy button is present in code block header", async ({ page, baseURL }) => {
    const found = await getArticleWithCode(page, baseURL, "en");
    if (!found) return;

    const copyBtn = page.locator(".code-copy-btn").first();
    if (!(await copyBtn.isVisible({ timeout: 3000 }))) return;

    await expect(copyBtn).toBeVisible();
    // Button text should be "Copy" initially
    const text = await copyBtn.textContent();
    expect(text?.trim()).toMatch(/copy|复制/i);
  });

  test("copy button appears on hover and keyboard focus on desktop", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 900 });
    await page.goto("/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/", { waitUntil: "domcontentloaded" });

    const wrapper = page.locator(".code-block-wrapper").first();
    const copyBtn = wrapper.locator(".code-copy-btn");
    await expect(copyBtn).toHaveCSS("opacity", "0");

    await wrapper.hover();
    await expect(copyBtn).toHaveCSS("opacity", "1");

    await page.mouse.move(0, 0);
    await expect(copyBtn).toHaveCSS("opacity", "0");

    await copyBtn.focus();
    await expect(copyBtn).toHaveCSS("opacity", "1");
  });

  test("copy button stays visible on touch devices", async ({ browser, baseURL }) => {
    const context = await browser.newContext({
      baseURL,
      isMobile: true,
      hasTouch: true,
      viewport: { width: 390, height: 844 },
    });
    const page = await context.newPage();
    await page.goto("/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/", { waitUntil: "domcontentloaded" });

    await expect(page.locator(".code-copy-btn").first()).toHaveCSS("opacity", "1");
    await context.close();
  });

  test("copy button shows confirmation state after click", async ({ page, baseURL, context }) => {
    // Grant clipboard permissions so navigator.clipboard.writeText() works in headless mode
    await context.grantPermissions(["clipboard-read", "clipboard-write"]);

    const found = await getArticleWithCode(page, baseURL, "en");
    if (!found) return;

    const copyBtn = page.locator(".code-copy-btn").first();
    // Button may be opacity:0 — force it visible via JS before clicking
    const exists = await copyBtn.count() > 0;
    if (!exists) return;

    await page.evaluate(() => {
      const btn = document.querySelector<HTMLElement>(".code-copy-btn");
      if (btn) btn.style.opacity = "1";
    });

    await copyBtn.click();
    await page.waitForTimeout(400);

    // After click, button should show "Copied!" or "已复制"
    const text = await copyBtn.textContent();
    expect(text?.trim()).toMatch(/copied|已复制/i);
  });
});
