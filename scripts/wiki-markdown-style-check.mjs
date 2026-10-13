/**
 * Check Wiki-specific Markdown issues.
 *
 * Checks punctuation spacing outside code fences and catches Markdown blocks
 * that the Markdown parser rendered as indented code, Wiki question-section
 * heading depth, and relationship labels incorrectly marked as headings.
 * Fenced-code indentation is left to the CommonMark parser because valid
 * indentation varies inside lists.
 */
import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const WIKI_DIR = path.join(process.cwd(), "src", "content", "wiki");
const JSON_OUT = process.argv.includes("--json");
const STRICT = process.argv.includes("--strict");
const RELATIONSHIP_LABEL = /^(?:related\s*terms|related\s*concepts|see\s*also|相关术语|相关概念|另请参阅|也可以看看|也可参阅|参见|相关词条|相关内容)\s*[:：]?$/i;
const EN_QUESTION_ROOT = /^questions?\s+(?:about|on|regarding|related to)\b/i;
const ZH_QUESTION_ROOT = /^(?:关于|有关|对|有没有|是否有).*(?:问题|疑问)/;
const EN_QUESTION_PROMPT = /\?$|^(?:what|why|how|who|when|where|which|can|could|does|is|are|should|will|would|has|have|do)\b/i;
const ZH_QUESTION_PROMPT = /[？?]$|^(?:什么|为何|为什么|如何|哪些|哪种|哪类|是否|怎样|怎么|能否|可以|谁|何时)/;

function parseBody(content) {
  if (!content.startsWith("---\n")) return null;
  const end = content.indexOf("\n---\n", 4);
  return end < 0 ? null : content.slice(end + 5);
}

function listMarkdownFiles(dir, relative = "") {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const nextRelative = path.join(relative, entry.name);
    if (entry.isDirectory()) files.push(...listMarkdownFiles(path.join(dir, entry.name), nextRelative));
    else if (entry.isFile() && entry.name.endsWith(".md")) files.push(nextRelative);
  }
  return files;
}

function isMarkdownFragmentRenderedAsCode(text) {
  const lines = text.split(/\r?\n/);
  if (lines.some((line) => /^\s*(?:`{3,}|~{3,})\s*$/.test(line))) return true;
  if (lines.some((line) => /^ {0,3}#{1,6}\s+\S/.test(line))) return true;
  const listItems = lines.filter((line) => /^ {0,3}(?:[-+*]\s+|\d+[.)]\s+)/.test(line));
  return listItems.length > 1;
}

function collectIndentedMarkdown(tokens, body, file, result) {
  const visited = new Set();
  let searchFrom = 0;

  function visit(tokenList) {
    for (const token of tokenList ?? []) {
      if (!token || typeof token !== "object" || visited.has(token)) continue;
      visited.add(token);

      if (token.type === "code" && token.codeBlockStyle === "indented" && isMarkdownFragmentRenderedAsCode(token.text ?? "")) {
        const position = token.raw ? body.indexOf(token.raw, searchFrom) : -1;
        if (position >= 0) searchFrom = position + token.raw.length;
        const line = position < 0 ? null : body.slice(0, position).split("\n").length;
        result.issues.markdownRenderedAsIndentedCode += 1;
        if (result.samples.markdownRenderedAsIndentedCode.length < 30) {
          result.samples.markdownRenderedAsIndentedCode.push({
            file,
            ...(line === null ? {} : { line }),
            text: (token.text ?? "").trim().slice(0, 160),
          });
        }
      }

      if (Array.isArray(token.tokens)) visit(token.tokens);
      if (Array.isArray(token.items)) {
        for (const item of token.items) visit(item?.tokens ?? []);
      }
    }
  }

  visit(tokens);
}

function scanHeadingHierarchy(body, file, result) {
  const headings = marked.lexer(body).filter((token) => token.type === "heading");
  const isEnglish = file.startsWith("en" + path.sep);

  for (const heading of headings) {
    if (!RELATIONSHIP_LABEL.test(heading.text.trim())) continue;
    result.issues.relationshipLabelsAsHeadings += 1;
    if (result.samples.relationshipLabelsAsHeadings.length < 30) {
      result.samples.relationshipLabelsAsHeadings.push({
        file,
        text: heading.text.trim(),
        level: heading.depth,
      });
    }
  }

  const rootPattern = isEnglish ? EN_QUESTION_ROOT : ZH_QUESTION_ROOT;
  const questionRootIndex = headings.findIndex(
    (heading) => heading.depth === 2 && rootPattern.test(heading.text.trim()),
  );
  if (questionRootIndex < 0) return;

  const promptPattern = isEnglish ? EN_QUESTION_PROMPT : ZH_QUESTION_PROMPT;
  for (const heading of headings.slice(questionRootIndex + 1)) {
    if (heading.depth === 1) break;
    if (RELATIONSHIP_LABEL.test(heading.text.trim())) continue;

    const expectedDepth = promptPattern.test(heading.text.trim()) ? 4 : 3;
    if (heading.depth === expectedDepth) continue;

    result.issues.questionHeadingHierarchy += 1;
    if (result.samples.questionHeadingHierarchy.length < 30) {
      result.samples.questionHeadingHierarchy.push({
        file,
        text: heading.text.trim(),
        level: heading.depth,
        expectedLevel: expectedDepth,
      });
    }
  }
}

function scanPunctuation(body, file, result) {
  const lines = body.split(/\r?\n/);
  let fence = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const marker = line.match(/^\s*(`{3,}|~{3,})(.*)$/);

    if (fence) {
      const closing = line.match(/^\s*(`+|~+)\s*$/);
      if (closing && closing[1][0] === fence.character && closing[1].length >= fence.length) fence = null;
      continue;
    }

    if (marker && !(marker[1][0] === "`" && marker[2].includes("`"))) {
      fence = { character: marker[1][0], length: marker[1].length };
      continue;
    }

    const punctuation = /([\u4e00-\u9fffA-Za-z0-9\]\)])\s+([,.;:!?，。！？；：])/g;
    let match;
    while ((match = punctuation.exec(line)) !== null) {
      const following = line[punctuation.lastIndex] ?? "";
      if (match[2] === "." && /[A-Za-z0-9]/.test(following)) continue;
      result.issues.cnSpaceBeforePunct += 1;
      if (result.samples.cnSpaceBeforePunct.length < 30) {
        result.samples.cnSpaceBeforePunct.push({ file, line: index + 1, text: line.trim().slice(0, 160) });
      }
    }
  }
}

function main() {
  const files = listMarkdownFiles(WIKI_DIR).sort();
  const result = {
    files: files.length,
    issues: {
      cnSpaceBeforePunct: 0,
      markdownRenderedAsIndentedCode: 0,
      questionHeadingHierarchy: 0,
      relationshipLabelsAsHeadings: 0,
    },
    samples: {
      cnSpaceBeforePunct: [],
      markdownRenderedAsIndentedCode: [],
      questionHeadingHierarchy: [],
      relationshipLabelsAsHeadings: [],
    },
  };

  for (const file of files) {
    const raw = fs.readFileSync(path.join(WIKI_DIR, file), "utf8");
    const body = parseBody(raw);
    if (body === null) continue;
    scanPunctuation(body, file, result);
    scanHeadingHierarchy(body, file, result);
    collectIndentedMarkdown(marked.lexer(body), body, file, result);
  }

  const totalIssues = Object.values(result.issues).reduce((total, count) => total + count, 0);
  if (JSON_OUT) {
    console.log(JSON.stringify(result, null, 2));
  } else {
    console.log("Wiki style check summary");
    console.log(`Files scanned: ${result.files}`);
    console.log(`- cnSpaceBeforePunct: ${result.issues.cnSpaceBeforePunct}`);
    console.log(`- markdownRenderedAsIndentedCode: ${result.issues.markdownRenderedAsIndentedCode}`);
    console.log(`- questionHeadingHierarchy: ${result.issues.questionHeadingHierarchy}`);
    console.log(`- relationshipLabelsAsHeadings: ${result.issues.relationshipLabelsAsHeadings}`);
    if (totalIssues > 0) {
      console.log("\nSample issues:");
      result.samples.cnSpaceBeforePunct.slice(0, 10).forEach((item) =>
        console.log(`- [punct] ${item.file}:${item.line} ${item.text}`)
      );
      result.samples.markdownRenderedAsIndentedCode.slice(0, 10).forEach((item) =>
        console.log(`- [markdown-as-code] ${item.file}${item.line ? `:${item.line}` : ""} ${item.text.replace(/\n/g, " ")}`)
      );
      result.samples.questionHeadingHierarchy.slice(0, 10).forEach((item) =>
        console.log(`- [heading-hierarchy] ${item.file} H${item.level} should be H${item.expectedLevel}: ${item.text}`)
      );
      result.samples.relationshipLabelsAsHeadings.slice(0, 10).forEach((item) =>
        console.log(`- [label-heading] ${item.file} H${item.level}: ${item.text}`)
      );
    }
  }

  if (STRICT && totalIssues > 0) process.exitCode = 1;
}

main();
