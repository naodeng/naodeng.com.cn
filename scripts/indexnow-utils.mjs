import fs from "node:fs";
import path from "node:path";

export function readFrontmatterField(root, file, field) {
  const absolutePath = path.join(root, file);
  if (!fs.existsSync(absolutePath)) return "";
  const raw = fs.readFileSync(absolutePath, "utf8");
  const match = raw.match(new RegExp(`^${field}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m"));
  return match?.[1]?.trim() || "";
}

function addListingUrl(urls, origin, lang, section) {
  urls.push(`${origin}/${lang}/${section}/`);
}

export function urlsForSourceFile(file, { origin, root }) {
  const normalized = file.replaceAll(path.sep, "/");
  let match = normalized.match(/^src\/blog\/(en|zh-cn)\/(.+)\.mdx$/i);
  if (match) {
    const [, lang, rest] = match;
    const urls = [`${origin}/${lang}/blog/${rest.toLowerCase()}/`];
    addListingUrl(urls, origin, lang, "blog");
    return urls;
  }

  match = normalized.match(/^src\/content\/guild\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang, rest] = match;
    const urls = [`${origin}/${lang}/guild/${rest.toLowerCase()}/`];
    addListingUrl(urls, origin, lang, "guild");
    return urls;
  }

  match = normalized.match(/^src\/content\/docs\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang, rest] = match;
    return [`${origin}/${lang}/docs/${rest.toLowerCase()}/`];
  }

  match = normalized.match(/^src\/content\/(qaskills|aiwiki)\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, collection, lang, rest] = match;
    const slug = collection === "aiwiki" ? readFrontmatterField(root, normalized, "slug") || rest : rest;
    const section = collection === "aiwiki" ? "AIWiki" : "qaskills";
    const urls = [`${origin}/${lang}/${section}/${slug.toLowerCase()}/`];
    addListingUrl(urls, origin, lang, section);
    return urls;
  }

  match = normalized.match(/^src\/content\/wiki\/(.+)\.md$/i);
  if (match) {
    return [`${origin}/zh-cn/wiki/${match[1].toLowerCase()}/`, `${origin}/zh-cn/wiki/`];
  }

  match = normalized.match(/^src\/content\/prompts\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang] = match;
    const testingType = readFrontmatterField(root, normalized, "testingType") || path.basename(normalized, ".md");
    return [
      `${origin}/${lang}/prompts/${testingType.toLowerCase()}/`,
      `${origin}/${lang}/prompts/`,
      `${origin}/${lang}/prompts/all/`,
    ];
  }

  match = normalized.match(/^src\/content\/workflows\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang] = match;
    const workflowType = readFrontmatterField(root, normalized, "workflowType") || path.basename(normalized, ".md");
    return [`${origin}/${lang}/prompts/workflows/${workflowType.toLowerCase()}/`, `${origin}/${lang}/prompts/`];
  }

  return [];
}

export function isBroadChange(file) {
  return /^(?:astro\.config\.mjs|src\/content\.config\.ts|src\/(?:layouts|pages|components|styles|utils|data|config|i18n|locales)(?:\/|$)|src\/consts\.ts$)/.test(file);
}

export function canonicalUrls(values, origin) {
  return [...new Set(values)]
    .map((value) => {
      try {
        const url = new URL(value);
        if (url.origin !== origin || url.protocol !== "https:" || url.search || url.hash) return null;
        return url.href;
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort();
}

export function classifyIndexNowResponse(status, body) {
  let payload = null;
  try {
    payload = JSON.parse(body);
  } catch {
    // Keep the raw response text for non-JSON upstream errors.
  }

  const message = typeof payload?.message === "string" && payload.message.trim()
    ? payload.message.trim()
    : String(body || `HTTP ${status}`).trim();
  if (status >= 200 && status < 300) return { kind: "accepted", status, message };
  if (payload?.errorCode === "SiteVerificationNotCompleted") return { kind: "pending", status, message };
  return { kind: "failure", status, message };
}
