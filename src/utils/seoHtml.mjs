import { hasNoindexRobots } from "./seoNoindex.mjs";

/** Decode the entities Astro emits in HTML attributes and sitemap XML. */
export function decodeHtmlEntities(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">", nbsp: "\u00a0" };
  return String(value ?? "").replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi, (entity, name) => {
    if (!name.startsWith("#")) return named[name.toLowerCase()] ?? entity;
    const code = name[1].toLowerCase() === "x" ? parseInt(name.slice(2), 16) : Number(name.slice(1));
    return code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : entity;
  });
}

/** Read quoted or unquoted attributes without depending on their order. */
export function readHtmlAttributes(tag) {
  const attributes = {};
  const source = tag.replace(/^<\s*[\w:-]+/, "").replace(/\/?>$/, "");
  for (const match of source.matchAll(/([^\s=/>]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
    const name = match[1].toLowerCase();
    if (!(name in attributes)) attributes[name] = decodeHtmlEntities(match[2] ?? match[3] ?? match[4] ?? "");
  }
  return attributes;
}

/** Head metadata is the single source of truth for sitemap language links. */
export function readHtmlSeoMetadata(html) {
  const head = String(html).split(/<\/head\s*>/i)[0]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi, "");
  const canonicalUrls = [];
  const alternates = [];
  let description = "";
  for (const match of head.matchAll(/<(link|meta)\b(?:[^"'<>]|"[^"]*"|'[^']*')*>/gi)) {
    const attributes = readHtmlAttributes(match[0]);
    const relations = (attributes.rel || "").toLowerCase().split(/\s+/);
    if (relations.includes("canonical")) canonicalUrls.push(attributes.href || "");
    if (relations.includes("alternate") && attributes.hreflang) {
      alternates.push({ lang: attributes.hreflang, url: attributes.href || "" });
    }
    if (attributes.name?.toLowerCase() === "description") description = attributes.content || "";
  }
  return {
    canonicalUrls,
    alternates,
    description,
    title: decodeHtmlEntities(head.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim(),
    language: readHtmlAttributes(head.match(/<html\b[^>]*>/i)?.[0] ?? "").lang || "",
    noindex: hasNoindexRobots(head),
  };
}

/** Prevent text containing </script> from terminating a JSON-LD element. */
export function serializeJsonLd(schema) {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
