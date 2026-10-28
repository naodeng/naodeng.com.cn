import { test } from "@e2e-dev/web";
import { expect } from "e2e";

test("RSS feed and legacy trailing-slash path return valid XML", async ({ app, browser }) => {
  const [feed] = await Promise.all([
    browser.waitForResponse("**/zh-cn/rss.xml"),
    app.open("/zh-cn/rss.xml"),
  ]);
  expect(feed.status).toBe(200);
  expect(["application/rss+xml", "text/xml"]).toContain(feed.headers["content-type"]?.split(";", 1)[0]);
  expect(await feed.text()).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?><rss version="2\.0">/);

  const [legacy] = await Promise.all([
    browser.waitForResponse("**/zh-cn/rss.xml/"),
    app.open("/zh-cn/rss.xml/"),
  ]);
  expect(legacy.status).toBe(200);
  expect(await legacy.text()).toMatch(/^<\?xml version="1\.0" encoding="UTF-8"\?><rss version="2\.0">/);
});
