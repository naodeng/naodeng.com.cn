import { expect, test } from "@playwright/test";

test("zh-cn RSS 主地址和旧尾斜杠地址均可读取", async ({
  request,
  baseURL,
}) => {
  const base = (baseURL || "").replace(/\/$/, "");
  const rssPath = "/zh-cn/rss.xml";

  const rssResponse = await request.get(base + rssPath);
  expect(rssResponse.status()).toBe(200);
  const contentType = rssResponse.headers()["content-type"].split(";", 1)[0];
  expect(["application/rss+xml", "text/xml"]).toContain(contentType);
  expect(await rssResponse.text()).toMatch(
    /^<\?xml version="1\.0" encoding="UTF-8"\?><rss version="2\.0">/,
  );

  // `astro preview` does not apply the hosting-layer rules in public/_redirects.
  // It serves both spellings from the same static XML file; the unit test for
  // public/_redirects separately verifies the production 301 contract.
  const legacyResponse = await request.get(base + rssPath + "/");
  expect(legacyResponse.status()).toBe(200);
  expect(await legacyResponse.text()).toMatch(
    /^<\?xml version="1\.0" encoding="UTF-8"\?><rss version="2\.0">/,
  );
});
