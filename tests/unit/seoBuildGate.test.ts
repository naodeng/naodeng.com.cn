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
  const writeSource = (relative: string, content: string) => {
    const file = path.join(root, "src", "content", "wiki", relative);
    mkdirSync(path.dirname(file), { recursive: true });
    writeFileSync(file, content);
  };
  const page = (pathname: string, links: string, content = "Testing resources") => {
    const url = `https://inaodeng.com${pathname}`;
    const isChinese = pathname.startsWith("/zh-cn/");
    const language = isChinese ? "zh-CN" : "en-US";
    const description = `${content} at ${pathname} covers practical software testing guidance for test design and automation workflows.`;
    const webPage = { "@context": "https://schema.org", "@type": "WebPage", "@id": `${url}#webpage`, url, name: content, description, inLanguage: language, isPartOf: { "@id": "https://inaodeng.com/#website" } };
    const term = pathname.startsWith("/en/wiki/") && pathname !== "/en/wiki/"
      ? { "@context": "https://schema.org", "@type": "DefinedTerm", name: "A/B Testing", inDefinedTermSet: { "@type": "DefinedTermSet", name: "QA Wiki", url: "https://inaodeng.com/en/wiki/" } }
      : null;
    const termSet = pathname === "/en/wiki/"
      ? { "@context": "https://schema.org", "@type": "DefinedTermSet", name: "QA Wiki", url }
      : null;
    const schemas = [webPage, term, termSet].filter(Boolean).map(schema => `<script type="application/ld+json">${JSON.stringify(schema)}</script>`).join("");
    const linksHtml = links.includes("<link rel=") ? links : links.split("|").filter(Boolean).map(href => `<link rel="alternate" hreflang="${href.includes("/zh-cn/") ? "zh-CN" : href.includes("x-default") ? "x-default" : "en-US"}" href="${href.replace(/^x-default:/, "")}">`).join("");
    const canonical = `<link rel="canonical" href="${url}">`;
    return `<html lang="${language}"><head><title>${content}</title><meta name="description" content="${description}"><meta name="robots" content="index, follow">${canonical}${linksHtml}${schemas}</head><body><main><h1>${content}</h1>${pathname === "/en/wiki/" ? '<a class="wiki-letter-link" href="/en/wiki/a-b-testing/">A/B Testing</a>' : ""}</main></body></html>`;
  };
  const enWikiUrl = "https://inaodeng.com/en/wiki/a-b-testing/";
  const zhWikiUrl = "https://inaodeng.com/zh-cn/wiki/a-b-testing/";
  const enIndexUrl = "https://inaodeng.com/en/wiki/";
  const zhIndexUrl = "https://inaodeng.com/zh-cn/wiki/";
  const enWikiLinks = `${enWikiUrl}|${zhWikiUrl}|x-default:${enWikiUrl}`;
  const zhWikiLinks = `${enWikiUrl}|${zhWikiUrl}|x-default:${enWikiUrl}`;
  const enIndexLinks = `${enIndexUrl}|${zhIndexUrl}|x-default:${enIndexUrl}`;
  const zhIndexLinks = `${enIndexUrl}|${zhIndexUrl}|x-default:${enIndexUrl}`;
  const homeLinks = "https://inaodeng.com/en/|https://inaodeng.com/zh-cn/|x-default:https://inaodeng.com/en/";
  write("en/index.html", page("/en/", homeLinks));
  write("zh-cn/index.html", page("/zh-cn/", homeLinks));
  write("en/wiki/index.html", page("/en/wiki/", enIndexLinks, "QA Wiki"));
  write("zh-cn/wiki/index.html", page("/zh-cn/wiki/", zhIndexLinks, "测试百科"));
  write("en/wiki/a-b-testing/index.html", page("/en/wiki/a-b-testing/", enWikiLinks, "A/B Testing"));
  write("zh-cn/wiki/a-b-testing/index.html", page("/zh-cn/wiki/a-b-testing/", zhWikiLinks, "A/B 测试"));
  write("index.html", '<html><head><meta name="robots" content="noindex, follow"></head><body></body></html>');
  writeSource("a-b-testing.md", "---\ntitle: A/B 测试\n---\n");
  writeSource("en/a-b-testing.md", "---\ntitle: A/B Testing\n---\n");
  const noindex = '<html><head><meta name="robots" content="noindex, follow"></head><body>private</body></html>';
  write("en/private/index.html", noindex);
  for (const relative of ["en/sitemap/index.html", "zh-cn/sitemap/index.html", "en/blog/api-automation-testing/bruno-tutorial-building-your-own-project-from-0-to-1/index.html", "en/guild/api-testing/bruno/building-project/index.html", "en/guild/performance-testing/k6/ci-cd-integration/index.html"]) write(relative, noindex);
  write("_redirects", "/example/ /target/ 301\n");
  write("index.xml", "legacy RSS redirect");
  mkdirSync(path.join(root, "dist/en/qaskills"), { recursive: true });
  write("sitemap-index.xml", '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>https://inaodeng.com/sitemap-0.xml</loc></sitemap></sitemapindex>');
  const xml = (loc: string, links: string) => `<url><loc>${loc}</loc>${links.split("|").filter(Boolean).map(href => {
    const isDefault = href.startsWith("x-default:");
    const value = href.replace(/^x-default:/, "");
    const lang = isDefault ? "x-default" : value.includes("/zh-cn/") ? "zh-CN" : "en-US";
    return `<xhtml:link rel="alternate" hreflang="${lang}" href="${value}"/>`;
  }).join("")}</url>`;
  const wikiXml = xml(enWikiUrl, enWikiLinks) + xml(zhWikiUrl, zhWikiLinks) + xml(enIndexUrl, enIndexLinks) + xml(zhIndexUrl, zhIndexLinks);
  write("sitemap-0.xml", `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${xml("https://inaodeng.com/en/", homeLinks)}${xml("https://inaodeng.com/zh-cn/", homeLinks)}${wikiXml}</urlset>`);
  return { root, write, page, read: (relative: string) => readFileSync(path.join(root, "dist", relative), "utf8") };
}
function runGate(root: string) {
  return spawnSync(process.execPath, [path.join(REPO_ROOT, "scripts/seo-build-check.mjs")], { cwd: root, encoding: "utf8" });
}

describe("SEO checks the rendered pages", () => {
  it("accepts a valid bilingual sitemap and matching local Wiki pages", () => {
    const fixture = createBuildFixture();
    const result = runGate(fixture.root);
    expect(result.status, result.stderr).toBe(0);
  });

  it("allows an accurate concise meta description without a fixed minimum", () => {
    const fixture = createBuildFixture();
    const original = fixture.read("en/index.html");
    const currentDescription = original.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
    const page = original.replaceAll(currentDescription, "Compare API responses for status, data, and error behavior.");
    fixture.write("en/index.html", page);
    const result = runGate(fixture.root);
    expect(result.status, result.stderr).toBe(0);
    expect(result.stdout).toMatch(/review relevance manually/i);
  });

  it("rejects duplicate meta descriptions on indexable pages", () => {
    const fixture = createBuildFixture();
    const description = fixture.read("en/index.html").match(/<meta name="description" content="([^"]*)"/)?.[1];
    fixture.write(
      "zh-cn/index.html",
      fixture.read("zh-cn/index.html").replace(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${description}"`),
    );
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/duplicate meta description/i);
  });

  it("rejects the known generic Wiki fallback description", () => {
    const fixture = createBuildFixture();
    fixture.write(
      "en/index.html",
      fixture.read("en/index.html").replace(
        /<meta name="description" content="[^"]*"/,
        '<meta name="description" content="Learn the key concepts, use cases, practical guidance, and quality considerations for this software testing topic."',
      ),
    );
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/generic meta description/i);
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

  it.each(["/", "https://inaodeng.com/"])("rejects an internal link to the noindex root language entry: %s", href => {
    const fixture = createBuildFixture();
    fixture.write("en/index.html", fixture.read("en/index.html").replace("</body>", `<a href="${href}">Home</a></body>`));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/noindex root language entry/i);
  });

  it("rejects whitespace-only image alt text on indexable pages", () => {
    const fixture = createBuildFixture();
    fixture.write("en/index.html", fixture.read("en/index.html").replace("</main>", '<img src="/screen.png" alt="   "></main>'));
    const result = runGate(fixture.root);
    expect(result.status).toBe(1);
    expect(result.stderr).toMatch(/whitespace-only image alt/i);
  });

  it("allows empty alt text for decorative images", () => {
    const fixture = createBuildFixture();
    fixture.write("en/index.html", fixture.read("en/index.html").replace("</main>", '<img src="/decoration.svg" alt=""></main>'));
    const result = runGate(fixture.root);
    expect(result.status, result.stderr).toBe(0);
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
    fixture.write("sitemap-1.xml", '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://inaodeng.com/en/private/</loc></url></urlset>');
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
