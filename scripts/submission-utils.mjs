import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  canonicalUrls,
  isBroadChange,
  urlsForSourceFile,
} from "./indexnow-utils.mjs";

export function valueAfterFlag(args, name) {
  const inline = args.find((arg) => arg.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : undefined;
}

export function readSitemap(file) {
  if (!fs.existsSync(file)) throw new Error(`Sitemap not found: ${file}`);
  return [...fs.readFileSync(file, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

export function changedFilesForRange(range, root) {
  if (!range || range.includes("0000000000000000000000000000000000000000")) return [];
  return execFileSync("git", ["diff", "--name-only", range], { cwd: root, encoding: "utf8" })
    .split(/\r?\n/)
    .map((file) => file.trim())
    .filter(Boolean);
}

function positionalArgs(args) {
  const values = [];
  for (let index = 0; index < args.length; index += 1) {
    const arg = args[index];
    if (arg === "--git-range" || arg === "--sitemap") {
      index += 1;
      continue;
    }
    if (!arg.startsWith("--")) values.push(arg);
  }
  return values;
}

export function collectSubmissionUrls({ args, origin, root, sitemapDefault }) {
  const gitRange = valueAfterFlag(args, "--git-range");
  const submitAll = args.includes("--all");
  const sitemapPath = path.resolve(root, valueAfterFlag(args, "--sitemap") || path.relative(root, sitemapDefault));
  const changedFiles = gitRange ? changedFilesForRange(gitRange, root) : [];
  const urls = new Set(positionalArgs(args));

  if (gitRange || submitAll) {
    const useSitemap = submitAll || changedFiles.some(isBroadChange);
    if (useSitemap) {
      for (const url of readSitemap(sitemapPath)) urls.add(url);
    } else if (gitRange) {
      for (const file of changedFiles) {
        for (const url of urlsForSourceFile(file, { origin, root })) urls.add(url);
      }
    }
  }

  return {
    sitemapPath,
    changedFiles,
    candidateUrlCount: urls.size,
    validUrls: canonicalUrls([...urls], origin),
  };
}
