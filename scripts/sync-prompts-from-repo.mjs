#!/usr/bin/env node
import {
  cpSync,
  existsSync,
  mkdirSync,
  mkdtempSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const SCRIPT_DIR = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(SCRIPT_DIR, "..");
const REPO_URL = "https://github.com/naodeng/awesome-qa-prompt.git";

export const PROMPT_VERSIONS = [
  { dir: "Standard-version", value: "Standard", order: 1 },
  { dir: "ROSES-version", value: "ROSES", order: 2 },
  { dir: "LangGPT-version", value: "LangGPT", order: 3 },
  { dir: "ICIO-version", value: "ICIO", order: 4 },
  { dir: "CRISPE-version", value: "CRISPE", order: 5 },
  { dir: "RISE-version", value: "RISE", order: 6 },
];

export const WORKFLOWS = {
  "daily-testing-workflow.md": { type: "daily", order: 1 },
  "sprint-testing-workflow.md": { type: "sprint", order: 2 },
  "release-testing-workflow.md": { type: "release", order: 3 },
};

const LANGUAGE_MAP = {
  en: "en",
  zh: "zh-cn",
};

export function parseArgs(argv) {
  const options = { repoDir: "", outRoot: ROOT, failOnLangMismatch: false };
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--repo-dir") options.repoDir = argv[++index] || "";
    else if (argv[index] === "--out-root") options.outRoot = resolve(argv[++index] || ROOT);
    else if (argv[index] === "--fail-on-lang-mismatch") options.failOnLangMismatch = true;
    else throw new Error(`Unknown argument: ${argv[index]}`);
  }
  return options;
}

function quoteYaml(value) {
  return `"${String(value)
    .replaceAll("\\", "\\\\")
    .replaceAll('"', '\\"')
    .replaceAll("\r", "\\r")
    .replaceAll("\n", "\\n")}"`;
}

function firstHeading(markdown) {
  const match = markdown.match(/^#\s+(.+?)\s*$/m);
  return match?.[1]?.trim() || "";
}

function objectiveDescription(markdown) {
  const lines = markdown.split("\n");
  const headingIndex = lines.findIndex((line) => /^##\s+(?:🎯\s*)?(?:Objective|目标)\s*$/.test(line.trim()));
  if (headingIndex === -1) return "";
  for (const line of lines.slice(headingIndex + 1)) {
    const value = line.trim();
    if (/^##\s|^---$/.test(value)) break;
    if (value) return value;
  }
  return "";
}

export function selectFullPrompt(files, version, context = "prompt directory") {
  const markdownFiles = files.filter((file) => file.endsWith(".md") && basename(file) !== "README.md");
  const candidates = markdownFiles.filter((file) => {
    if (/(?:_|-)(?:lite|lean)(?:[-_.]|$)/i.test(file)) return false;
    if (/(?:-|_)(?:mobile|web|all_round)\.md$/i.test(file)) return false;
    if (version === "Standard") return /prompt\.md$/i.test(file);
    return /-full\.md$/i.test(file);
  });

  if (candidates.length !== 1) {
    throw new Error(
      `Expected exactly one canonical Full prompt in ${context} for ${version}; found ${candidates.length}: ${candidates.join(", ") || "none"}`,
    );
  }
  return candidates[0];
}

export function buildPromptDocument({ body, lang, testingType, promptVersion, title, order }) {
  if (!body.trim()) throw new Error(`Empty prompt body: ${lang}/${testingType}/${promptVersion}`);
  const description = lang === "zh-cn"
    ? `${title}${promptVersion === "Standard" ? "标准" : ` ${promptVersion} 框架`}提示词`
    : `${promptVersion === "Standard" ? "Standard" : `${promptVersion} framework`} prompt for ${title}`;
  const frontmatter = [
    "---",
    `title: ${quoteYaml(`${promptVersion} - ${title}`)}`,
    `description: ${quoteYaml(description)}`,
    `testingType: ${quoteYaml(testingType)}`,
    `promptVersion: ${quoteYaml(promptVersion)}`,
    `lang: ${quoteYaml(lang)}`,
    `order: ${order}`,
    "---",
    "",
  ].join("\n");
  return `${frontmatter}${body.replace(/\s+$/, "")}\n`;
}

export function rewriteWorkflowLinks(markdown, lang) {
  return markdown.replace(
    /\((?:\.\.\/)+testing-types\/([^/\s)]+)\/[^)\s]+\)/g,
    `(/${lang}/prompts/$1/)`,
  );
}

export function buildWorkflowDocument({ body, lang, workflowType, order }) {
  if (!body.trim()) throw new Error(`Empty workflow body: ${lang}/${workflowType}`);
  const title = firstHeading(body);
  const description = objectiveDescription(body);
  if (!title || !description) {
    throw new Error(`Workflow ${lang}/${workflowType} requires a title and Objective description`);
  }
  const frontmatter = [
    "---",
    `title: ${quoteYaml(title)}`,
    `description: ${quoteYaml(description)}`,
    `workflowType: ${quoteYaml(workflowType)}`,
    `lang: ${quoteYaml(lang)}`,
    `order: ${order}`,
    "---",
    "",
  ].join("\n");
  return `${frontmatter}${body.replace(/\s+$/, "")}\n`;
}

function directoriesAt(directory) {
  return readdirSync(directory)
    .filter((name) => statSync(join(directory, name)).isDirectory())
    .sort();
}

function filesAt(directory) {
  return readdirSync(directory)
    .filter((name) => statSync(join(directory, name)).isFile())
    .sort();
}

function writeUnique(outputs, path, content) {
  if (outputs.has(path)) throw new Error(`Duplicate output path: ${path}`);
  outputs.add(path);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, content, "utf8");
}

function listMarkdownFiles(directory, base = directory) {
  if (!existsSync(directory)) return [];
  const results = [];
  for (const name of readdirSync(directory)) {
    const path = join(directory, name);
    if (statSync(path).isDirectory()) results.push(...listMarkdownFiles(path, base));
    else if (name.endsWith(".md") && name !== "README.md") results.push(relative(base, path));
  }
  return results.sort();
}

function replaceMarkdownTree(generatedDirectory, outputDirectory) {
  mkdirSync(outputDirectory, { recursive: true });
  const generated = new Set(listMarkdownFiles(generatedDirectory));
  const existing = listMarkdownFiles(outputDirectory);
  const removed = existing.filter((path) => !generated.has(path));
  for (const path of removed) rmSync(join(outputDirectory, path), { force: true });
  for (const path of generated) {
    const destination = join(outputDirectory, path);
    mkdirSync(dirname(destination), { recursive: true });
    cpSync(join(generatedDirectory, path), destination);
  }
  return removed;
}

function compareLanguageKeys(keys, label, options) {
  const en = new Set(keys.en);
  const zh = new Set(keys["zh-cn"]);
  const onlyEn = [...en].filter((key) => !zh.has(key));
  const onlyZh = [...zh].filter((key) => !en.has(key));
  if (!onlyEn.length && !onlyZh.length) return;
  const message = `[prompts:sync] language mismatch for ${label}: only en=${onlyEn.join(",") || "none"}; only zh-cn=${onlyZh.join(",") || "none"}`;
  if (options.failOnLangMismatch) throw new Error(message);
  console.warn(message);
}

export function syncFromRepo(repoRoot, outRoot = ROOT, options = {}) {
  const normalizedOptions = { failOnLangMismatch: false, ...options };
  const temporaryRoot = mkdtempSync(join(tmpdir(), "awesome-qa-prompt-output-"));
  const generatedRoot = join(temporaryRoot, "src/content");
  const outputs = new Set();
  const promptKeys = { en: [], "zh-cn": [] };
  const workflowKeys = { en: [], "zh-cn": [] };

  try {
    for (const [sourceLang, siteLang] of Object.entries(LANGUAGE_MAP)) {
      const testingRoot = join(repoRoot, "testing-types", sourceLang);
      const workflowRoot = join(repoRoot, "Workflows", sourceLang);
      if (!existsSync(testingRoot)) throw new Error(`Missing upstream directory: ${testingRoot}`);
      if (!existsSync(workflowRoot)) throw new Error(`Missing upstream directory: ${workflowRoot}`);

      for (const testingType of directoriesAt(testingRoot)) {
        const typeRoot = join(testingRoot, testingType);
        const readmePath = join(typeRoot, "README.md");
        if (!existsSync(readmePath)) throw new Error(`Missing testing type README: ${readmePath}`);
        const title = firstHeading(readFileSync(readmePath, "utf8"));
        if (!title) throw new Error(`Missing testing type title: ${readmePath}`);

        const discoveredVersionDirs = directoriesAt(typeRoot).filter((name) => name.endsWith("-version"));
        const knownVersionDirs = new Set(PROMPT_VERSIONS.map(({ dir }) => dir));
        const unknownVersionDirs = discoveredVersionDirs.filter((name) => !knownVersionDirs.has(name));
        if (unknownVersionDirs.length) {
          throw new Error(`Unknown prompt framework directories in ${typeRoot}: ${unknownVersionDirs.join(", ")}`);
        }

        for (const version of PROMPT_VERSIONS) {
          const versionRoot = join(typeRoot, version.dir);
          if (!existsSync(versionRoot)) continue;
          const sourceFile = selectFullPrompt(filesAt(versionRoot), version.value, versionRoot);
          const body = readFileSync(join(versionRoot, sourceFile), "utf8");
          const destination = join(generatedRoot, "prompts", siteLang, testingType, `${version.value}.md`);
          writeUnique(outputs, destination, buildPromptDocument({
            body,
            lang: siteLang,
            testingType,
            promptVersion: version.value,
            title,
            order: version.order,
          }));
          promptKeys[siteLang].push(`${testingType}/${version.value}`);
        }
      }

      for (const [sourceName, workflow] of Object.entries(WORKFLOWS)) {
        const sourcePath = join(workflowRoot, sourceName);
        if (!existsSync(sourcePath)) continue;
        const body = rewriteWorkflowLinks(readFileSync(sourcePath, "utf8"), siteLang);
        const destination = join(generatedRoot, "workflows", siteLang, `${workflow.type}.md`);
        writeUnique(outputs, destination, buildWorkflowDocument({
          body,
          lang: siteLang,
          workflowType: workflow.type,
          order: workflow.order,
        }));
        workflowKeys[siteLang].push(workflow.type);
      }
    }

    compareLanguageKeys(promptKeys, "prompts", normalizedOptions);
    compareLanguageKeys(workflowKeys, "workflows", normalizedOptions);

    const removed = {
      prompts: {
        en: replaceMarkdownTree(join(generatedRoot, "prompts/en"), join(outRoot, "src/content/prompts/en")),
        "zh-cn": replaceMarkdownTree(join(generatedRoot, "prompts/zh-cn"), join(outRoot, "src/content/prompts/zh-cn")),
      },
      workflows: {
        en: replaceMarkdownTree(join(generatedRoot, "workflows/en"), join(outRoot, "src/content/workflows/en")),
        "zh-cn": replaceMarkdownTree(join(generatedRoot, "workflows/zh-cn"), join(outRoot, "src/content/workflows/zh-cn")),
      },
    };

    return {
      promptCounts: { en: promptKeys.en.length, "zh-cn": promptKeys["zh-cn"].length },
      workflowCounts: { en: workflowKeys.en.length, "zh-cn": workflowKeys["zh-cn"].length },
      removed,
    };
  } finally {
    rmSync(temporaryRoot, { recursive: true, force: true });
  }
}

function ensureRepo(repoDir) {
  if (repoDir) return { path: resolve(repoDir), cleanup: false };
  const directory = mkdtempSync(join(tmpdir(), "awesome-qa-prompt-sync-"));
  const clone = spawnSync(
    "git",
    ["clone", "--depth", "1", "--branch", "main", REPO_URL, directory],
    { encoding: "utf8" },
  );
  if (clone.status !== 0) {
    rmSync(directory, { recursive: true, force: true });
    throw new Error(`git clone failed: ${clone.stderr || clone.stdout}`);
  }
  return { path: directory, cleanup: true };
}

function main() {
  const options = parseArgs(process.argv.slice(2));
  let repo;
  try {
    repo = ensureRepo(options.repoDir);
    const result = syncFromRepo(repo.path, options.outRoot, options);
    console.log(
      `[prompts:sync] synced prompts en=${result.promptCounts.en} zh-cn=${result.promptCounts["zh-cn"]}; workflows en=${result.workflowCounts.en} zh-cn=${result.workflowCounts["zh-cn"]}; removed=${JSON.stringify(result.removed)}`,
    );
  } finally {
    if (repo?.cleanup) rmSync(repo.path, { recursive: true, force: true });
  }
}

const isDirectRun = process.argv[1] && fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isDirectRun) main();
