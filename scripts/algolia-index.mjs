#!/usr/bin/env node
/**
 * 将构建后的博客数据推送到 Algolia 索引
 * 使用方式：在 astro build 之后执行 node scripts/algolia-index.mjs
 * 需设置环境变量：ALGOLIA_APP_ID, ALGOLIA_ADMIN_KEY, ALGOLIA_INDEX_NAME
 */
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { algoliasearch } from "algoliasearch";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

// 优先用 ALGOLIA_*，可与前端 PUBLIC_* 共用同一 .env；ADMIN_KEY 无公开替代，必须单独配置
const APP_ID = process.env.ALGOLIA_APP_ID ?? process.env.PUBLIC_ALGOLIA_APP_ID;
const ADMIN_KEY = process.env.ALGOLIA_ADMIN_KEY;
const INDEX_NAME = process.env.ALGOLIA_INDEX_NAME ?? process.env.PUBLIC_ALGOLIA_INDEX_NAME;

if (!APP_ID || !ADMIN_KEY || !INDEX_NAME) {
  console.error(
    "Missing env: set ALGOLIA_ADMIN_KEY (required), and ALGOLIA_APP_ID + ALGOLIA_INDEX_NAME (or PUBLIC_ALGOLIA_APP_ID + PUBLIC_ALGOLIA_INDEX_NAME) in .env. Use: npm run algolia-index (loads .env automatically)."
  );
  process.exit(1);
}

async function loadJson(path) {
  try {
    const raw = await readFile(path, "utf-8");
    return JSON.parse(raw);
  } catch (e) {
    if (e.code === "ENOENT") return [];
    throw e;
  }
}

function toObjectId(lang, url) {
  return `${lang}_${url.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, "_")}`;
}

async function main() {
  const [zhItems, enItems] = await Promise.all([
    loadJson(join(distDir, "zh-cn", "search-index.json")),
    loadJson(join(distDir, "en", "search-index.json")),
  ]);

  const records = [
    ...zhItems.map((item) => ({
      objectID: toObjectId("zh-cn", item.url),
      ...item,
      lang: "zh-cn",
    })),
    ...enItems.map((item) => ({
      objectID: toObjectId("en", item.url),
      ...item,
      lang: "en",
    })),
  ];

  if (records.length === 0) {
    console.warn(
      "No records found. Run 'astro build' first so dist/zh-cn/search-index.json and dist/en/search-index.json exist."
    );
    process.exit(0);
  }

  const client = algoliasearch(APP_ID, ADMIN_KEY);

  await client.setSettings({
    indexName: INDEX_NAME,
    indexSettings: {
      attributesForFaceting: ["filterOnly(lang)"],
      searchableAttributes: ["title", "description", "tags"],
    },
  });

  await client.replaceAllObjects({
    indexName: INDEX_NAME,
    objects: records,
  });

  console.log(`Algolia: pushed ${records.length} records to index "${INDEX_NAME}".`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
