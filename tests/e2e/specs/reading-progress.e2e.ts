import { test } from "@e2e-dev/web";
import { expect } from "e2e";

const article = "/en/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/";

test("article reading progress grows as the reader scrolls down", async ({ app, browser }) => {
  await app.open(article);
  await expect(browser.locator("#reading-progress-bar")).toHaveCount(1);

  const initial = await browser.evaluate(() =>
    Number(document.querySelector("#reading-progress-bar")?.getAttribute("aria-valuenow") ?? 0),
  );
  expect(initial).toBeLessThan(10);

  await browser.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight / 2);
    return null;
  });
  await expect.poll(() => browser.evaluate(() =>
    Number(document.querySelector("#reading-progress-bar")?.getAttribute("aria-valuenow") ?? 0),
  )).toBeGreaterThan(initial);
  const middle = await browser.evaluate(() =>
    Number(document.querySelector("#reading-progress-bar")?.getAttribute("aria-valuenow") ?? 0),
  );
  await browser.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
    return null;
  });
  await expect.poll(() => browser.evaluate(() =>
    Number(document.querySelector("#reading-progress-bar")?.getAttribute("aria-valuenow") ?? 0),
  )).toBeGreaterThanOrEqual(middle);
});

test("homepage does not render an article reading-progress bar", async ({ app, browser }) => {
  await app.open("/en/");
  await expect(browser.locator("#reading-progress-bar")).toHaveCount(0);
});
