import { describe, expect, it } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { PROMPTS_FLOW_TITLE, PROMPTS_PAGE_TITLE } from "../../src/consts";

const REPO_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

/** 能力边界禁用表达：不得声称真实执行测试、扫描漏洞或无依据的高覆盖率。 */
const FORBIDDEN_PATTERNS: RegExp[] = [
  /生成高覆盖率/,
  /执行功能测试/,
  /检测安全漏洞/,
  /生成测试执行报告/,
  /高效执行功能测试/,
  /Generate high-coverage/i,
  /Execute functional tests/i,
  /Detect vulnerabilities/i,
  /Generate test execution reports/i,
  /Efficiently execute functional test/i,
];

function readAllFiles(dir: string): string[] {
  const files: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...readAllFiles(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

function collectSourcePaths(): string[] {
  return [
    join(REPO_ROOT, "src", "pages", "[lang]", "prompts", "index.astro"),
    join(REPO_ROOT, "src", "data", "promptLibrary.ts"),
    join(REPO_ROOT, "src", "consts.ts"),
    ...readAllFiles(join(REPO_ROOT, "src", "content", "prompts")),
  ];
}

describe("prompts capability boundaries", () => {
  it("uses no overreaching claims in published Prompt sources", () => {
    const offenders: string[] = [];
    for (const file of collectSourcePaths()) {
      const content = readFileSync(file, "utf8");
      for (const pattern of FORBIDDEN_PATTERNS) {
        if (pattern.test(content)) {
          offenders.push(`${file.replace(REPO_ROOT + "/", "")}: ${pattern}`);
        }
      }
    }
    expect(offenders, offenders.join("\n")).toEqual([]);
  });

  it("frames the flow section as AI-assisted", () => {
    expect(PROMPTS_FLOW_TITLE["zh-cn"]).toContain("辅助");
    expect(PROMPTS_FLOW_TITLE.en.toLowerCase()).toContain("assisted");
  });

  it("unifies the page name across both languages", () => {
    expect(PROMPTS_PAGE_TITLE["zh-cn"]).toBe("软件测试提示词库");
    expect(PROMPTS_PAGE_TITLE.en).toBe("Software Testing Prompt Library");
  });
});
