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

test("unknown RSS paths do not return a valid feed", async ({ app, browser }) => {
  await app.open("/zh-cn/");
  const missingFeed = await browser.evaluate(async () => {
    const response = await fetch("/zh-cn/rss-unknown.xml");
    const html = await response.text();
    const page = new DOMParser().parseFromString(html, "text/html");
    return {
      status: response.status,
      pageOrigin: location.origin,
      responseOrigin: new URL(response.url).origin,
      contentType: response.headers.get("content-type"),
      robots: page.querySelector('meta[name="robots"]')?.getAttribute("content"),
      body: page.body.textContent,
    };
  });

  expect(missingFeed.status).toBe(404);
  expect(missingFeed.responseOrigin).toBe(missingFeed.pageOrigin);
  expect(missingFeed.contentType).toMatch(/text\/html/i);
  expect(missingFeed.robots).toMatch(/noindex/i);
  expect(missingFeed.body).not.toContain("<rss version=\"2.0\">");
});
