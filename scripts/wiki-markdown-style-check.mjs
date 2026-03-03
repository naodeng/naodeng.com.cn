/**
 * Wiki markdown style check (non-structural)
 *
 * Checks:
 * 1) Space before English punctuation after Chinese char, e.g. "中文 ,"
 * 2) Indented code fences outside list context
 * 3) Inconsistent fenced code indent width inside list context (per file)
 *
 * Usage:
 *   node scripts/wiki-markdown-style-check.mjs
 *   node scripts/wiki-markdown-style-check.mjs --json
 */
import fs from "fs";
import path from "path";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");
const JSON_OUT = process.argv.includes("--json");

function parseBody(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---\n", 4);
  if (end === -1) return null;
  return content.slice(end + 5);
}

function getPrevNonEmpty(lines, i) {
  for (let p = i - 1; p >= 0; p -= 1) {
    if (lines[p].trim() !== "") return lines[p];
  }
  return "";
}

function isLikelyListContext(prevLine) {
  return /^\s*(?:[-*]|\d+\.)\s+/.test(prevLine) || /^\s{2,}\S/.test(prevLine);
}

function main() {
  const files = fs.readdirSync(WIKI_DIR).filter((f) => f.endsWith(".md")).sort();

  const result = {
    files: files.length,
    issues: {
      cnSpaceBeforePunct: 0,
      indentedFenceOutsideList: 0,
      inconsistentListFenceIndent: 0,
    },
    samples: {
      cnSpaceBeforePunct: [],
      indentedFenceOutsideList: [],
      inconsistentListFenceIndent: [],
    },
  };

  for (const file of files) {
    const full = path.join(WIKI_DIR, file);
    const raw = fs.readFileSync(full, "utf-8");
    const body = parseBody(raw);
    if (body == null) continue;

    const lines = body.split(/\r?\n/);
    const listFenceIndents = new Set();
    let inFence = false;

    for (let i = 0; i < lines.length; i += 1) {
      const line = lines[i];

      if (!inFence) {
        // Space before punctuation in mixed-language text, e.g.:
        // "中文 ," / "SpecFlow ："
        const punctRegex = /([\u4e00-\u9fffA-Za-z0-9\]\)])\s+([,.;:!?，。！？；：])/g;
        let match;
        while ((match = punctRegex.exec(line)) !== null) {
          const punct = match[2];
          const afterPunct = line[match.index + match[0].length] || "";
          // Keep ".NET/.com/1.23" style tokens.
          if (punct === "." && /[A-Za-z0-9]/.test(afterPunct)) continue;

          result.issues.cnSpaceBeforePunct += 1;
          if (result.samples.cnSpaceBeforePunct.length < 30) {
            result.samples.cnSpaceBeforePunct.push({
              file,
              line: i + 1,
              text: line.trim().slice(0, 160),
            });
          }
        }
      }

      const fenceMatch = line.match(/^(\s*)```/);
      if (!fenceMatch) continue;

      const indent = fenceMatch[1].length;
      const prev = getPrevNonEmpty(lines, i);
      const inListContext = isLikelyListContext(prev);

      if (indent > 0 && !inListContext) {
        result.issues.indentedFenceOutsideList += 1;
        if (result.samples.indentedFenceOutsideList.length < 30) {
          result.samples.indentedFenceOutsideList.push({
            file,
            line: i + 1,
            indent,
            text: line.trim(),
          });
        }
      }

      if (indent > 0 && inListContext) listFenceIndents.add(indent);
      inFence = !inFence;
    }

    if (listFenceIndents.size > 1) {
      result.issues.inconsistentListFenceIndent += 1;
      if (result.samples.inconsistentListFenceIndent.length < 30) {
        result.samples.inconsistentListFenceIndent.push({
          file,
          indents: [...listFenceIndents].sort((a, b) => a - b),
        });
      }
    }
  }

  const totalIssues =
    result.issues.cnSpaceBeforePunct +
    result.issues.indentedFenceOutsideList +
    result.issues.inconsistentListFenceIndent;

  if (JSON_OUT) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log("Wiki style check summary");
    console.log(`Files scanned: ${result.files}`);
    console.log(`- cnSpaceBeforePunct: ${result.issues.cnSpaceBeforePunct}`);
    console.log(`- indentedFenceOutsideList: ${result.issues.indentedFenceOutsideList}`);
    console.log(`- inconsistentListFenceIndent(files): ${result.issues.inconsistentListFenceIndent}`);
    if (totalIssues > 0) {
      console.log("\nSample issues:");
      result.samples.cnSpaceBeforePunct.slice(0, 10).forEach((x) =>
        console.log(`- [punct] ${x.file}:${x.line} ${x.text}`)
      );
      result.samples.indentedFenceOutsideList.slice(0, 10).forEach((x) =>
        console.log(`- [fence] ${x.file}:${x.line} indent=${x.indent}`)
      );
      result.samples.inconsistentListFenceIndent.slice(0, 10).forEach((x) =>
        console.log(`- [indent-set] ${x.file} -> ${x.indents.join(",")}`)
      );
    }
  }

  if (totalIssues > 0) process.exitCode = 1;
}

main();
