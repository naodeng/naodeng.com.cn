import { expect, test } from "@playwright/test";

test("legacy English Wiki entry publishes the maintained external QA Wiki redirect artifact", async ({ page, baseURL }) => {
  const response = await page.request.get(
    `${baseURL || ""}/en/wiki/acceptance-testing/`,
    { maxRedirects: 0 },
  );

  expect(response.status()).toBe(200);
  const body = await response.text();
  expect(body).toContain('<meta http-equiv="refresh" content="2;url=https://ray.run/wiki#acceptance-testing">');
  expect(body).toContain('<link rel="canonical" href="https://ray.run/wiki#acceptance-testing">');
});
