import { readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";

const ROOT = resolve(new URL("..", import.meta.url).pathname);
const PROMPTS_DIR = join(ROOT, "src", "content", "prompts");

function collectMarkdownFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const file = join(dir, entry.name);
    return entry.isDirectory() ? collectMarkdownFiles(file) : file.endsWith(".md") ? [file] : [];
  });
}

function tableSeparator(line) {
  return /^\s*\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)+\|?\s*$/.test(line);
}

function inspect(file) {
  const source = readFileSync(file, "utf8");
  const lines = source.split(/\r?\n/);
  const issues = [];
  const label = relative(ROOT, file);
  let inFence = false;
  let previousHeading = 1;

  if (lines[0] !== "---") issues.push("missing frontmatter start");
  const frontmatterEnd = lines.findIndex((line, index) => index > 0 && line === "---");
  if (frontmatterEnd < 0) issues.push("missing frontmatter end");
  if (lines.some((line) => /^##\s+📋\s*Change Log\s*$/i.test(line))) issues.push("contains Change Log");
  if (!source.endsWith("\n")) issues.push("missing final newline");

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^\s*```/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    if (/[ \t]+$/.test(line)) issues.push(`line ${index + 1}: trailing whitespace`);
    if (line === "" && lines[index + 1] === "") issues.push(`line ${index + 1}: consecutive blank lines`);

    const heading = line.match(/^(#{1,6})\s+(.+?)\s*#*$/);
    if (heading) {
      const level = heading[1].length;
      if (/^#+\s+/.test(heading[2])) issues.push(`line ${index + 1}: nested heading marker`);
      if (level > previousHeading + 1) issues.push(`line ${index + 1}: heading jumps from ${previousHeading} to ${level}`);
      previousHeading = level;
    }

    if (/^\s*\|.*\|\s*$/.test(line) && tableSeparator(lines[index + 1] ?? "")) {
      const columns = line.split("|").slice(1, -1).length;
      const separatorColumns = lines[index + 1].split("|").slice(1, -1).length;
      if (columns !== separatorColumns) issues.push(`line ${index + 1}: table header column count differs from separator`);
    }
  }

  if (inFence) issues.push("unclosed fenced code block");
  return issues.map((issue) => `${label}: ${issue}`);
}

const files = collectMarkdownFiles(PROMPTS_DIR);
const issues = files.flatMap(inspect);
if (issues.length > 0) {
  console.error(issues.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`Prompt Markdown check passed: ${files.length} files`);
}
