import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const packageJson = JSON.parse(
  readFileSync(path.join(REPO_ROOT, "package.json"), "utf8"),
);

describe("SEO build gate", () => {
  it("runs the post-build SEO check for build and deployment entry points", () => {
    expect(packageJson.scripts.build).toContain("npm run seo:build:check");
    expect(packageJson.scripts["preview:worker"]).toContain("npm run build");
    expect(packageJson.scripts.deploy).toContain("npm run build");
  });
});

const fixtures: string[] = [];
afterEach(() => fixtures.splice(0).forEach(root => rmSync(root, { recursive: true, force: true })));

function createBuildFixture() {
  const root = mkdtempSync(path.join(tmpdir(), "inaodeng-seo-gate-"));
  fixtures.push(root);
  const write = (relative: string, content: string) => {
    const file = path.join(root, "dist", relative);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content);
  };
  const languageLinks = '<link rel="alternate" hreflang="en-US" href="https://inaodeng.com/en/">' +
    '<link rel="alternate" hreflang="zh-CN" href="https://inaodeng.com/zh-cn/">' +
    '<link rel="alternate" hreflang="x-default" href="https://inaodeng.com/en/">';
  const page = (pathname: string, links: string) => {
    const url = `https://inaodeng.com${pathname}`;
    const schema = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: "Testing resources", description: "Software testing resources with practical guidance for test design and automation workflows.", inLanguage: pathname.startsWith("/zh-cn/") ? "zh-CN" : "en-US", isPartOf: { "@id": "https://inaodeng.com/#website" } };
    return `<html lang="${schema.inLanguage}"><head><title>${schema.name}</title><meta name="description" content="${schema.description}"><meta name="robots" content="index, follow"><link rel="canonical" href="${url}">${links}<script type="application/ld+json">${JSON.stringify(schema)}</script></head><body><h1>Testing resources</h1></body></html>`;
  };
  write("en/index.html", page("/en/", languageLinks));
  write("zh-cn/index.html", page("/zh-cn/", languageLinks));
  const wikiLinks = '<link rel="alternate" hreflang="zh-CN" href="https://inaodeng.com/zh-cn/wiki/a-b-testing/"><link rel="alternate" hreflang="x-default" href="https://inaodeng.com/zh-cn/wiki/a-b-testing/">';
  write("zh-cn/wiki/a-b-testing/index.html", page("/zh-cn/wiki/a-b-testing/", wikiLinks));
  const redirect = '<html><head><meta name="robots" content="noindex, follow"></head><body>https://ray.run/wiki</body></html>';
  write("en/private/index.html", redirect);
  for (const slug of ["software-testing", "decision-table-testing", "test-case"]) write(`en/wiki/${slug}/index.html`, redirect);
  for (const relative of ["en/wiki/index.html", "en/sitemap/index.html", "zh-cn/sitemap/index.html", "en/blog/api-automation-testing/bruno-tutorial-building-your-own-project-from-0-to-1/index.html", "en/guild/api-testing/bruno/building-project/index.html", "en/guild/performance-testing/k6/ci-cd-integration/index.html"]) write(relative, redirect);
  write("_redirects", "/zh-cn/wiki/A-B-Testing/ /zh-cn/wiki/a-b-testing/ 301\n");
  write("index.xml", "legacy RSS redirect");
  mkdirSync(path.join(root, "dist/en/qaskills"), { recursive: true });
  write("sitemap-index.xml", '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://inaodeng.com/sitemap-0.xml</loc></sitemap></sitemapindex>');
  const xmlLinks = languageLinks.replaceAll("<link ", "<xhtml:link ").replaceAll(">", "/>");
  const xmlWikiLinks = wikiLinks.replaceAll("<link ", "<xhtml:link ").replaceAll(">", "/>");
  write("sitemap-0.xml", `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"><url><loc>https://inaodeng.com/en/</loc>${xmlLinks}</url><url><loc>https://inaodeng.com/zh-cn/</loc>${xmlLinks}</url><url><loc>https://inaodeng.com/zh-cn/wiki/a-b-testing/</loc>${xmlWikiLinks}</url></urlset>`);
  return { root, write, page, read: (relative: string) => readFileSync(path.join(root, "dist", relative), "utf8") };
}

function runGate(root: string) {
  return spawnSync(process.execPath, [path.join(REPO_ROOT, "scripts/seo-build-check.mjs")], { cwd: root, encoding: "utf8" });
}

describe("SEO checks the rendered pages", () => {
  it("accepts a valid bilingual sitemap and a Chinese-only Wiki", () => {
    const fixture = createBuildFixture();
    const result = runGate(fixture.root);
    expect(result.status, result.stderr).toBe(0);
  });

  it("rejects a canonical pointing to another language", () => {
    const fixture = createBuildFixture();
    fixture.write("en/index.html", fixture.read("en/index.html").replace('rel="canonical" href="https://inaodeng.com/en/"', 'rel="canonical" href="https://inaodeng.com/zh-cn/"'));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/canonical/i);
  });

  it("rejects a sitemap language alternate pointing to a noindex redirect", () => {
    const fixture = createBuildFixture();
    fixture.write("sitemap-0.xml", fixture.read("sitemap-0.xml").replace('hreflang="en-US" href="https://inaodeng.com/en/"', 'hreflang="en-US" href="https://inaodeng.com/en/private/"'));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/noindex/i);
  });

  it("rejects nonreciprocal language links", () => {
    const fixture = createBuildFixture();
    fixture.write("zh-cn/index.html", fixture.read("zh-cn/index.html").replace('<link rel="alternate" hreflang="en-US" href="https://inaodeng.com/en/">', ""));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/reciprocal/i);
  });

  it("rejects malformed JSON-LD instead of only checking that a script exists", () => {
    const fixture = createBuildFixture();
    fixture.write("en/index.html", fixture.read("en/index.html").replace('<script type="application/ld+json">{', '<script type="application/ld+json">{broken,'));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/JSON-LD/i);
  });

  it("checks child sitemaps beyond sitemap-0.xml", () => {
    const fixture = createBuildFixture();
    fixture.write("sitemap-index.xml", fixture.read("sitemap-index.xml").replace("</sitemapindex>", "<sitemap><loc>https://inaodeng.com/sitemap-1.xml</loc></sitemap></sitemapindex>"));
    fixture.write("sitemap-1.xml", '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://inaodeng.com/en/wiki/software-testing/</loc></url></urlset>');
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/noindex/i);
  });

  it.each([
    ["en/tags/api%2Fui/index.html", 0],
    ["en/tags/api/ui/index.html", 1],
  ])("keeps encoded slashes distinct from route separators: %s", (file, expectedStatus) => {
    const fixture = createBuildFixture();
    const url = "https://inaodeng.com/en/tags/api%2Fui/";
    fixture.write(file, fixture.page("/en/tags/api%2Fui/", `<link rel="alternate" hreflang="en-US" href="${url}">`));
    fixture.write("sitemap-0.xml", fixture.read("sitemap-0.xml").replace("</urlset>", `<url><loc>${url}</loc><xhtml:link rel="alternate" hreflang="en-US" href="${url}"/></url></urlset>`));
    const result = runGate(fixture.root);
    expect(result.status, result.stderr).toBe(expectedStatus);
    if (expectedStatus === 1) expect(result.stderr).toMatch(/canonical/i);
  });
});
