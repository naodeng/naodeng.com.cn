import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} scroll-to-top appears after scrolling and returns to the page start`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/`);
    const button = browser.locator("#scroll-to-top");
    await expect(button).toHaveCount(1);
    await expect.poll(() => browser.evaluate(() => getComputedStyle(document.querySelector("#scroll-to-top")!).opacity)).toBe("0");

    await browser.evaluate(() => {
      window.scrollTo(0, 600);
      return null;
    });
    await expect.poll(() => browser.evaluate(() => window.scrollY)).toBeGreaterThan(400);
    await expect.poll(() => browser.evaluate(() => getComputedStyle(document.querySelector("#scroll-to-top")!).opacity)).toBe("1");
    await button.click();
    await expect.poll(() => browser.evaluate(() => window.scrollY)).toBeLessThan(100);
  });
}

test("scroll-to-top is inert while the page is at its start", async ({ app, browser }) => {
  await app.open("/en/");
  await expect(browser.locator("#scroll-to-top")).toHaveCount(1);
  const styles = await browser.evaluate(() => {
    const button = document.querySelector("#scroll-to-top")!;
    const style = getComputedStyle(button);
    return { opacity: style.opacity, pointerEvents: style.pointerEvents };
  });
  expect(styles.opacity).toBe("0");
  expect(styles.pointerEvents).toBe("none");
});
