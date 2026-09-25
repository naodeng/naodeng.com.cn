#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { collectSubmissionUrls } from "./submission-utils.mjs";
import {
  BAIDU_PUSH_ENDPOINT,
  submitBaiduUrls,
} from "./baidu-push-utils.mjs";

const DEFAULT_SITE = "https://inaodeng.com";

function writeWorkflowSummary(markdown, env) {
  const summaryPath = env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${markdown.trim()}\n`);
}

export async function main({
  args = process.argv.slice(2),
  env = process.env,
  fetchImpl = fetch,
  root = process.cwd(),
} = {}) {
  const site = (env.BAIDU_PUSH_SITE || DEFAULT_SITE).replace(/\/$/, "");
  const sitemapDefault = path.join(root, "dist/sitemap-0.xml");
  const { validUrls } = collectSubmissionUrls({
    args,
    origin: site,
    root,
    sitemapDefault,
  });

  if (validUrls.length === 0) {
    console.log("No Baidu URLs to submit for this change.");
    return 0;
  }

  const result = await submitBaiduUrls(validUrls, {
    endpoint: BAIDU_PUSH_ENDPOINT,
    site,
    token: env.BAIDU_PUSH_TOKEN,
    fetchImpl,
  });
  console.log(`Baidu accepted ${result.acceptedUrls}/${validUrls.length} URL(s) for ${site}`);
  if (result.remaining !== null) console.log(`Baidu remaining quota: ${result.remaining}`);
  for (const message of result.messages) console.warn(`::warning::Baidu URL push: ${message}`);

  const failed = result.failedBatches > 0 || result.partialBatches > 0;
  writeWorkflowSummary(
    [
      "## Baidu URL Push",
      "",
      failed
        ? `⚠️ ${result.acceptedUrls}/${validUrls.length} URL(s) accepted; ${result.failedBatches} failed batch(es), ${result.partialBatches} partial batch(es).`
        : `✅ ${result.acceptedUrls}/${validUrls.length} URL(s) accepted; ${result.remaining} URL(s) remain in the quota.`,
    ].join("\n"),
    env,
  );
  return failed ? 1 : 0;
}

const isCli = process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;
if (isCli) {
  main().then((exitCode) => {
    process.exitCode = exitCode;
  }).catch((error) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
}
