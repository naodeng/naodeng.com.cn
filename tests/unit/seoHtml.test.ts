import { JSDOM } from "jsdom";
import { describe, expect, it } from "vitest";
import { readHtmlSeoMetadata, serializeJsonLd } from "../../src/utils/seoHtml.mjs";

describe("rendered SEO metadata", () => {
  it("reads an entire quoted description containing a greater-than sign", () => {
    const metadata = readHtmlSeoMetadata('<html lang="zh-CN"><head><meta name="description" content="需求 -> 测试 &amp; 复核"><link href="https://inaodeng.com/zh-cn/" rel="canonical"></head></html>');
    expect(metadata.description).toBe("需求 -> 测试 & 复核");
    expect(metadata.canonicalUrls).toEqual(["https://inaodeng.com/zh-cn/"]);
  });

  it("decodes attribute entities and ignores tag examples in scripts, comments and body content", () => {
    const metadata = readHtmlSeoMetadata(`<html lang='en-US'><head>
      <title>QA &amp; AI</title>
      <link href='https://inaodeng.com/en/' rel='canonical'>
      <link href='https://inaodeng.com/en/?a=1&amp;b=2' hreflang='en-US' rel='alternate'>
      <!-- <meta name="robots" content="noindex"> -->
      <script>const example = '<link rel="alternate" hreflang="zh-CN" href="/fake/">';</script>
      </head><body><link rel="canonical" href="/body-example/"></body></html>`);
    expect(metadata).toMatchObject({ title: "QA & AI", language: "en-US", noindex: false });
    expect(metadata.canonicalUrls).toEqual(["https://inaodeng.com/en/"]);
    expect(metadata.alternates).toEqual([{ lang: "en-US", url: "https://inaodeng.com/en/?a=1&b=2" }]);
  });

  it("detects noindex with reversed meta attributes", () => {
    expect(readHtmlSeoMetadata('<head><meta content="noindex, follow" name="robots"></head>').noindex).toBe(true);
  });
});

describe("JSON-LD serialization", () => {
  it("preserves text without allowing it to create HTML elements", () => {
    const schema = { "@type": "Article", headline: '</script><img src="bad" onerror="alert(1)"> & QA' };
    const dom = new JSDOM(`<script type="application/ld+json">${serializeJsonLd(schema)}</script>`);
    expect(JSON.parse(dom.window.document.querySelector("script")!.textContent!)).toEqual(schema);
    expect(dom.window.document.querySelectorAll("img")).toHaveLength(0);
    dom.window.close();
  });
});
