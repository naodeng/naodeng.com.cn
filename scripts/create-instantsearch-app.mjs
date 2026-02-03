#!/usr/bin/env node
/**
 * 使用 create-instantsearch-app 在项目内创建 InstantSearch 演示应用
 * 配置来自环境变量，未设置时使用下方默认值（与 .env.example 中说明一致）
 * 使用：npm run create-instantsearch-app
 */
import { execSync } from "child_process";

const defaults = {
  INSTANTSEARCH_APP_NAME: "instantsearch-app",
  INSTANTSEARCH_TEMPLATE: "InstantSearch.js",
  INSTANTSEARCH_INDEX_NAME: "inaodeng_com_5l1s6uuzvf_pages.tmp",
  INSTANTSEARCH_ATTRIBUTES_TO_DISPLAY: "keywords",
  INSTANTSEARCH_IMAGE_ATTRIBUTE: "image",
};

const name = process.env.INSTANTSEARCH_APP_NAME ?? defaults.INSTANTSEARCH_APP_NAME;
const template = process.env.INSTANTSEARCH_TEMPLATE ?? defaults.INSTANTSEARCH_TEMPLATE;
const appId =
  process.env.INSTANTSEARCH_APP_ID ??
  process.env.PUBLIC_ALGOLIA_APP_ID ??
  process.env.ALGOLIA_APP_ID;
const apiKey =
  process.env.INSTANTSEARCH_API_KEY ?? process.env.PUBLIC_ALGOLIA_SEARCH_KEY;
const indexName =
  process.env.INSTANTSEARCH_INDEX_NAME ??
  process.env.ALGOLIA_INDEX_NAME ??
  defaults.INSTANTSEARCH_INDEX_NAME;
const attributesToDisplay =
  process.env.INSTANTSEARCH_ATTRIBUTES_TO_DISPLAY ?? defaults.INSTANTSEARCH_ATTRIBUTES_TO_DISPLAY;
const imageAttribute =
  process.env.INSTANTSEARCH_IMAGE_ATTRIBUTE ?? defaults.INSTANTSEARCH_IMAGE_ATTRIBUTE;

if (!appId || !apiKey) {
  console.error(
    "请设置 Algolia 凭证：INSTANTSEARCH_APP_ID 与 INSTANTSEARCH_API_KEY（或 PUBLIC_ALGOLIA_APP_ID、PUBLIC_ALGOLIA_SEARCH_KEY），或在 .env 中配置。"
  );
  process.exit(1);
}

const cmd = [
  "npx",
  "create-instantsearch-app@latest",
  name,
  "--name",
  `'${name}'`,
  "--template",
  `'${template}'`,
  "--app-id",
  `'${appId}'`,
  "--api-key",
  `'${apiKey}'`,
  "--index-name",
  `'${indexName}'`,
  "--attributes-to-display",
  `'${attributesToDisplay}'`,
  "--image-attribute",
  `'${imageAttribute}'`,
  "--no-interactive",
].join(" ");

console.log("Running:", cmd.replace(apiKey, "***"));
execSync(cmd, { stdio: "inherit", shell: true });
