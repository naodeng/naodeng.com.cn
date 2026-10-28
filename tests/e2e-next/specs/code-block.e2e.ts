import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const article = "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/";

test("code block renders with a usable copy control", async ({ app, browser }) => {
  await app.open(article);
  await expect(browser.locator(".code-block-wrapper pre code").first()).toBeVisible();
  await expect(browser.locator(".code-copy-btn").first()).toHaveAttribute("aria-label", /copy|复制/i);
});

test("code copy control appears on hover and keyboard focus", async ({ app, browser }) => {
  await browser.setViewport({ width: 1280, height: 900 });
  await app.open(article);
  const wrapper = browser.locator(".code-block-wrapper").first();
  const button = browser.locator(".code-block-wrapper .code-copy-btn").first();
  const opacity = () => browser.evaluate(() => getComputedStyle(document.querySelector(".code-copy-btn")!).opacity);

  expect(await opacity()).toBe("0");
  await wrapper.hover();
  await expect.poll(opacity).toBe("1");
  await browser.mouse.move(0, 0);
  await expect.poll(opacity).toBe("0");
  await button.focus();
  await expect.poll(opacity).toBe("1");
});

test("code copy confirms success after click", async ({ app, browser }) => {
  await browser.addInitScript(() => {
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: { writeText: () => Promise.resolve() },
    });
  });
  await app.open(article);
  const button = browser.locator(".code-copy-btn").first();
  await expect(button).toBeVisible();
  await button.focus();
  await button.click();
  await expect(button).toHaveText(/copied|已复制/i);
});
