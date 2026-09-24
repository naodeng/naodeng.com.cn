#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const HOST = (process.env.INDEXNOW_HOST || "inaodeng.com").replace(/^https?:\/\//, "").replace(/\/$/, "");
const ORIGIN = `https://${HOST}`;
const DEFAULT_KEY_FILE = "public/c4c085c9a15ce7307e6d767b54e218a4.txt";
const keyFile = process.env.INDEXNOW_KEY_FILE || DEFAULT_KEY_FILE;
const key = (process.env.INDEXNOW_KEY || fs.readFileSync(path.join(ROOT, keyFile), "utf8").trim()).trim();
const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `${ORIGIN}/${path.basename(keyFile)}`;
const sitemapDefault = path.join(ROOT, "dist/sitemap-0.xml");
const MAX_URLS_PER_REQUEST = 10_000;

function valueAfterFlag(args, name) {
  const inline = args.find((arg) => arg.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

function readSitemap(file) {
  if (!fs.existsSync(file)) throw new Error(`Sitemap not found: ${file}`);
  return [...fs.readFileSync(file, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

function readFrontmatterField(file, field) {
  if (!fs.existsSync(path.join(ROOT, file))) return "";
  const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
  const match = raw.match(new RegExp(`^${field}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m"));
  return match?.[1]?.trim() || "";
}

function addListingUrls(urls, lang, section) {
  urls.push(`${ORIGIN}/${lang}/${section}/`);
}

function urlsForSourceFile(file) {
  const normalized = file.replaceAll(path.sep, "/");
  let match = normalized.match(/^src\/blog\/(en|zh-cn)\/(.+)\.mdx$/i);
  if (match) {
    const [, lang, rest] = match;
    const urls = [`${ORIGIN}/${lang}/blog/${rest.toLowerCase()}/`];
    addListingUrls(urls, lang, "blog");
    return urls;
  }

  match = normalized.match(/^src\/content\/guild\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang, rest] = match;
    const urls = [`${ORIGIN}/${lang}/guild/${rest.toLowerCase()}/`];
    addListingUrls(urls, lang, "guild");
    return urls;
  }

  match = normalized.match(/^src\/content\/(qaskills|aiwiki)\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, collection, lang, rest] = match;
    const slug = collection === "aiwiki" ? readFrontmatterField(normalized, "slug") || rest : rest;
    const section = collection === "aiwiki" ? "AIWiki" : "qaskills";
    const urls = [`${ORIGIN}/${lang}/${section}/${slug.toLowerCase()}/`];
    addListingUrls(urls, lang, section);
    return urls;
  }

  match = normalized.match(/^src\/content\/wiki\/(.+)\.md$/i);
  if (match) {
    return [`${ORIGIN}/zh-cn/wiki/${match[1].toLowerCase()}/`, `${ORIGIN}/zh-cn/wiki/`];
  }

  match = normalized.match(/^src\/content\/prompts\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang] = match;
    const testingType = readFrontmatterField(normalized, "testingType") || path.basename(normalized, ".md");
    return [
      `${ORIGIN}/${lang}/prompts/${testingType.toLowerCase()}/`,
      `${ORIGIN}/${lang}/prompts/`,
      `${ORIGIN}/${lang}/prompts/all/`,
    ];
  }

  match = normalized.match(/^src\/content\/workflows\/(en|zh-cn)\/(.+)\.md$/i);
  if (match) {
    const [, lang] = match;
    const workflowType = readFrontmatterField(normalized, "workflowType") || path.basename(normalized, ".md");
    return [`${ORIGIN}/${lang}/prompts/workflows/${workflowType.toLowerCase()}/`, `${ORIGIN}/${lang}/prompts/`];
  }

  return [];
}

function isBroadChange(file) {
  return /^(?:astro\.config\.mjs|src\/content\.config\.ts|src\/(?:layouts|pages|components|styles|utils|data|config|i18n|locales)(?:\/|$)|src\/consts\.ts$)/.test(file);
}

function changedFilesForRange(range) {
  if (!range || range.includes("0000000000000000000000000000000000000000")) return [];
  return execFileSync("git", ["diff", "--name-only", range], { cwd: ROOT, encoding: "utf8" })
    .split(/\r?\n/)
    .map((file) => file.trim())
    .filter(Boolean);
}

function canonicalUrls(values) {
  return [...new Set(values)]
    .map((value) => {
      try {
        const url = new URL(value);
        if (url.origin !== ORIGIN || url.protocol !== "https:" || url.search || url.hash) return null;
        return url.href;
      } catch {
        return null;
      }
    })
    .filter(Boolean)
    .sort();
}

async function verifyKey() {
  const response = await fetch(keyLocation);
  const body = (await response.text()).trim();
  if (!response.ok || body !== key) {
    throw new Error(`IndexNow key verification failed at ${keyLocation} (HTTP ${response.status})`);
  }
}

async function submit(urls) {
  await verifyKey();
  let failed = false;
  for (let offset = 0; offset < urls.length; offset += MAX_URLS_PER_REQUEST) {
    const urlList = urls.slice(offset, offset + MAX_URLS_PER_REQUEST);
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
    });
    const body = await response.text();
    if (!response.ok) {
      failed = true;
      console.error(`IndexNow submission failed: HTTP ${response.status} ${body}`);
      continue;
    }
    console.log(`IndexNow accepted ${urlList.length} URL(s): HTTP ${response.status}`);
  }
  if (failed) process.exitCode = 1;
}

const args = process.argv.slice(2);
const gitRange = valueAfterFlag(args, "--git-range");
const sitemapPath = path.resolve(ROOT, valueAfterFlag(args, "--sitemap") || path.relative(ROOT, sitemapDefault));
const changedFiles = gitRange ? changedFilesForRange(gitRange) : [];
const positionalUrls = args.filter((arg) => !arg.startsWith("--"));
const urls = new Set(positionalUrls);

if (gitRange) {
  const useSitemap = changedFiles.some(isBroadChange);
  if (useSitemap) {
    for (const url of readSitemap(sitemapPath)) urls.add(url);
    console.log(`Broad site change detected; using sitemap URLs (${urls.size})`);
  } else {
    for (const file of changedFiles) {
      for (const url of urlsForSourceFile(file)) urls.add(url);
    }
  }
}

const validUrls = canonicalUrls([...urls]);
if (validUrls.length === 0) {
  console.log("No IndexNow URLs to submit for this change.");
} else {
  if (!key) throw new Error("IndexNow key is empty");
  console.log(`Submitting ${validUrls.length} URL(s) to IndexNow for ${HOST}`);
  await submit(validUrls);
}
