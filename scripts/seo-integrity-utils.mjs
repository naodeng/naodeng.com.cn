import fs from "node:fs";
import path from "node:path";
import { decodeHtmlEntities, readHtmlAttributes, readHtmlSeoMetadata } from "../src/utils/seoHtml.mjs";

function normalizedUrl(value) {
  try {
    const url = new URL(value);
    const pathname = url.pathname.split("/").map(segment => encodeURIComponent(decodeURIComponent(segment))).join("/");
    return `${url.origin}${pathname}${url.search}${url.hash}`;
  } catch {
    return null;
  }
}

function walkPages(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walkPages(file));
    else if (entry.isFile() && entry.name === "index.html") files.push(file);
  }
  return files;
}

function linksKey(links) {
  return JSON.stringify(links.map(link => [link.lang.toLowerCase(), normalizedUrl(link.url)]).sort());
}

function languageMatches(actual, requested) {
  const a = actual.toLowerCase();
  const b = requested.toLowerCase();
  return a === b || ((!a.includes("-") || !b.includes("-")) && a.split("-")[0] === b.split("-")[0]);
}

/** Validate all built content pages and every sitemap declared by the index. */
export function checkSeoIntegrity(distDir, origin = "https://inaodeng.com") {
  const failures = [];
  const pages = new Map();
  for (const file of walkPages(distDir)) {
    const relative = `/${path.relative(distDir, file).replaceAll(path.sep, "/").replace(/index\.html$/, "")}`;
    const html = fs.readFileSync(file, "utf8");
    const metadata = readHtmlSeoMetadata(html);
    const url = normalizedUrl(new URL(relative, origin).href);
    const page = { ...metadata, url, relative };
    pages.set(url, page);
    if (page.noindex) continue;
    if (page.canonicalUrls.length !== 1 || normalizedUrl(page.canonicalUrls[0]) !== url) {
      failures.push(`canonical must reference the page itself: ${relative}`);
    }
    if (!page.title || !page.description || !page.language) failures.push(`missing title, description or HTML language: ${relative}`);

    const schemas = [];
    for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
      if (readHtmlAttributes(`<script ${match[1]}>`).type !== "application/ld+json") continue;
      try {
        const data = JSON.parse(match[2]);
        const entries = Array.isArray(data) ? data : data?.["@graph"] ?? [data];
        if (!Array.isArray(entries) || entries.some(item => !item || typeof item !== "object" || !item["@type"])) throw new Error("Invalid schema");
        schemas.push(...entries);
      } catch {
        failures.push(`invalid JSON-LD: ${relative}`);
      }
    }
    const webPage = schemas.find(schema => schema["@type"] === "WebPage");
    if (!webPage || normalizedUrl(webPage.url) !== url || normalizedUrl(webPage["@id"]) !== `${url}#webpage` ||
        webPage.name !== page.title || webPage.description !== page.description || webPage.inLanguage !== page.language ||
        webPage.isPartOf?.["@id"] !== `${origin}/#website`) {
      failures.push(`WebPage JSON-LD does not match page metadata: ${relative}`);
    }
    for (const schema of schemas) {
      if (["Article", "BlogPosting", "TechArticle"].includes(schema["@type"])) {
        if (!schema.headline || !schema.author || normalizedUrl(schema.url) !== url) failures.push(`article JSON-LD has invalid headline, author or URL: ${relative}`);
        const mainEntity = typeof schema.mainEntityOfPage === "string" ? schema.mainEntityOfPage : schema.mainEntityOfPage?.["@id"];
        if (mainEntity && normalizedUrl(mainEntity) !== url) failures.push(`article mainEntityOfPage is not canonical: ${relative}`);
        for (const field of ["datePublished", "dateModified"]) {
          if (schema[field] && (!/^\d{4}-\d{2}-\d{2}(?:T.*)?$/.test(schema[field]) || Number.isNaN(Date.parse(schema[field])))) {
            failures.push(`article JSON-LD has invalid ${field}: ${relative}`);
          }
        }
      }
      if (schema["@type"] === "BreadcrumbList" && (!Array.isArray(schema.itemListElement) || schema.itemListElement.some((item, index) =>
        item.position !== index + 1 || !item.name || !normalizedUrl(item.item)))) {
        failures.push(`invalid BreadcrumbList JSON-LD: ${relative}`);
      }
    }
  }

  function checkTarget(source, link, label) {
    const target = pages.get(normalizedUrl(link.url));
    if (!target) failures.push(`${label} target was not built: ${source.relative} -> ${link.url}`);
    else if (target.noindex) failures.push(`${label} target is noindex: ${source.relative} -> ${link.url}`);
    else if (target.canonicalUrls.length !== 1 || normalizedUrl(target.canonicalUrls[0]) !== target.url) failures.push(`${label} target is not canonical: ${source.relative} -> ${link.url}`);
    if (target && link.lang !== "x-default" && !languageMatches(target.language, link.lang)) failures.push(`${label} language does not match target: ${source.relative} -> ${link.lang}`);
    return target;
  }

  const indexable = [...pages.values()].filter(page => !page.noindex);
  for (const page of indexable) {
    const selfLink = page.alternates.some(link => normalizedUrl(link.url) === page.url && languageMatches(page.language, link.lang));
    if (!selfLink) failures.push(`missing self-referencing hreflang: ${page.relative}`);
    const languages = new Set();
    for (const link of page.alternates) {
      const lang = link.lang.toLowerCase();
      if (languages.has(lang)) failures.push(`duplicate hreflang ${lang}: ${page.relative}`);
      languages.add(lang);
      const target = checkTarget(page, link, "hreflang");
      if (target && !target.noindex && lang !== "x-default" && !target.alternates.some(back =>
        normalizedUrl(back.url) === page.url && languageMatches(page.language, back.lang))) {
        failures.push(`hreflang is not reciprocal: ${page.relative} -> ${link.url}`);
      }
    }
  }

  const sitemapIndex = path.join(distDir, "sitemap-index.xml");
  const sitemapFiles = [];
  if (!fs.existsSync(sitemapIndex)) failures.push("missing sitemap-index.xml");
  else {
    for (const match of fs.readFileSync(sitemapIndex, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)) {
      try {
        const url = new URL(decodeHtmlEntities(match[1]));
        const file = path.resolve(distDir, decodeURIComponent(url.pathname).replace(/^\/+/, ""));
        if (url.origin !== origin || !file.startsWith(`${path.resolve(distDir)}${path.sep}`) || !fs.existsSync(file)) throw new Error("Missing sitemap");
        sitemapFiles.push(file);
      } catch {
        failures.push(`missing or invalid child sitemap: ${match[1]}`);
      }
    }
    if (!sitemapFiles.length) failures.push("sitemap index has no valid child sitemap");
  }
  const sitemapUrls = new Set();
  for (const file of new Set(sitemapFiles)) {
    const xml = fs.readFileSync(file, "utf8");
    for (const match of xml.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/g)) {
      const url = decodeHtmlEntities(match[1].match(/<loc>([^<]+)<\/loc>/)?.[1] ?? "");
      const key = normalizedUrl(url);
      if (sitemapUrls.has(key)) failures.push(`duplicate sitemap URL: ${url}`);
      sitemapUrls.add(key);
      const page = pages.get(key);
      if (!page || page.noindex || page.canonicalUrls.length !== 1 || normalizedUrl(page.canonicalUrls[0]) !== key) {
        failures.push(`sitemap URL is missing, noindex or noncanonical: ${url}`);
        continue;
      }
      const links = [...match[1].matchAll(/<(?:xhtml:)?link\b[^>]*>/g)].map(link => {
        const attributes = readHtmlAttributes(link[0]);
        return { lang: attributes.hreflang || "", url: attributes.href || "" };
      });
      if (linksKey(links) !== linksKey(page.alternates)) failures.push(`sitemap alternates disagree with HTML: ${page.relative}`);
      for (const link of links) checkTarget(page, link, "sitemap alternate");
    }
  }
  for (const page of indexable) {
    if (!sitemapUrls.has(page.url)) failures.push(`indexable page is absent from sitemap: ${page.relative}`);
  }
  return { failures, counts: { htmlPages: pages.size, indexablePages: indexable.length, sitemapUrls: sitemapUrls.size, sitemapFiles: new Set(sitemapFiles).size } };
}
