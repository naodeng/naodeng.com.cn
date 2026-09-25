#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import {
  classifyIndexNowResponse,
  isBroadChange,
} from "./indexnow-utils.mjs";
import { collectSubmissionUrls, valueAfterFlag } from "./submission-utils.mjs";

const ROOT = process.cwd();
const HOST = (process.env.INDEXNOW_HOST || "inaodeng.com").replace(/^https?:\/\//, "").replace(/\/$/, "");
const ORIGIN = `https://${HOST}`;
const DEFAULT_KEY_FILE = "public/c4c085c9a15ce7307e6d767b54e218a4.txt";
const keyFile = process.env.INDEXNOW_KEY_FILE || DEFAULT_KEY_FILE;
const key = (process.env.INDEXNOW_KEY || fs.readFileSync(path.join(ROOT, keyFile), "utf8").trim()).trim();
const keyLocation = process.env.INDEXNOW_KEY_LOCATION || `${ORIGIN}/${path.basename(keyFile)}`;
const sitemapDefault = path.join(ROOT, "dist/sitemap-0.xml");
const MAX_URLS_PER_REQUEST = 10_000;

async function verifyKey() {
  const response = await fetch(keyLocation);
  const body = (await response.text()).trim();
  if (!response.ok || body !== key) {
    throw new Error(`IndexNow key verification failed at ${keyLocation} (HTTP ${response.status})`);
  }
}

function writeWorkflowSummary(markdown) {
  const summaryPath = process.env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${markdown.trim()}\n`);
}

async function submit(urls) {
  await verifyKey();
  let failed = false;
  let pendingUrlCount = 0;
  let acceptedUrlCount = 0;
  for (let offset = 0; offset < urls.length; offset += MAX_URLS_PER_REQUEST) {
    const urlList = urls.slice(offset, offset + MAX_URLS_PER_REQUEST);
    const response = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key, keyLocation, urlList }),
    });
    const body = await response.text();
    const result = classifyIndexNowResponse(response.status, body);
    if (result.kind === "pending") {
      pendingUrlCount += urlList.length;
      console.warn(`::warning::IndexNow site verification is not complete; ${urlList.length} URL(s) were not accepted.`);
      console.warn(result.message);
      continue;
    }
    if (result.kind === "failure") {
      failed = true;
      console.error(`IndexNow submission failed: HTTP ${result.status} ${result.message}`);
      continue;
    }
    acceptedUrlCount += urlList.length;
    console.log(`IndexNow accepted ${urlList.length} URL(s): HTTP ${result.status}`);
  }
  if (pendingUrlCount > 0) {
    writeWorkflowSummary(
      [
        "## IndexNow",
        "",
        `⚠️ Bing site verification is not complete; ${pendingUrlCount} URL(s) were not accepted.`,
        "The deployment completed, but rerun the workflow after Bing verification completes.",
      ].join("\n"),
    );
  }
  if (failed) {
    writeWorkflowSummary(`## IndexNow\n\n❌ ${acceptedUrlCount} URL(s) accepted; at least one submission failed.`);
    process.exitCode = 1;
  } else if (pendingUrlCount === 0) {
    writeWorkflowSummary(`## IndexNow\n\n✅ ${acceptedUrlCount} URL(s) accepted.`);
  }
}

const args = process.argv.slice(2);
const gitRange = valueAfterFlag(args, "--git-range");
const { changedFiles, validUrls } = collectSubmissionUrls({
  args,
  origin: ORIGIN,
  root: ROOT,
  sitemapDefault,
});
if (gitRange && changedFiles.some(isBroadChange)) {
  console.log(`Broad site change detected; using sitemap URLs (${validUrls.length})`);
}

if (validUrls.length === 0) {
  console.log("No IndexNow URLs to submit for this change.");
} else {
  if (!key) throw new Error("IndexNow key is empty");
  console.log(`Submitting ${validUrls.length} URL(s) to IndexNow for ${HOST}`);
  await submit(validUrls);
}
