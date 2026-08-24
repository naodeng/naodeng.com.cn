import { expect, test } from "@playwright/test";

test("zh-cn RSS 主地址可读取，旧尾斜杠地址单向跳转", async ({
  request,
  baseURL,
}) => {
  const base = (baseURL || "").replace(/\/$/, "");
  const rssPath = "/zh-cn/rss.xml";

  const rssResponse = await request.get(base + rssPath);
  expect(rssResponse.status()).toBe(200);
  expect(rssResponse.headers()["content-type"]).toContain(
    "application/rss+xml",
  );
  expect(await rssResponse.text()).toMatch(
    /^<\?xml version="1\.0" encoding="UTF-8"\?><rss version="2\.0">/,
  );

  const legacyResponse = await request.get(base + rssPath + "/", {
    maxRedirects: 0,
  });
  expect(legacyResponse.status()).toBe(301);
  expect(legacyResponse.headers().location).toBe(rssPath);
});
