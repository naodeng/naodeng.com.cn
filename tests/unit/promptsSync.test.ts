import { afterEach, describe, expect, it, vi } from "vitest";
import {
  existsSync,
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";
import {
  buildPromptDocument,
  buildWorkflowDocument,
  rewriteWorkflowLinks,
  selectFullPrompt,
  syncFromRepo,
} from "../../scripts/sync-prompts-from-repo.mjs";

const temporaryDirectories: string[] = [];

function makeTemporaryDirectory(prefix: string) {
  const directory = mkdtempSync(join(tmpdir(), prefix));
  temporaryDirectories.push(directory);
  return directory;
}

function writeFixtureFile(root: string, relativePath: string, content: string) {
  const filePath = join(root, relativePath);
  mkdirSync(join(filePath, ".."), { recursive: true });
  writeFileSync(filePath, content, "utf8");
}

function createUpstreamFixture() {
  const root = makeTemporaryDirectory("awesome-qa-prompt-fixture-");
  const versions = ["Standard", "ROSES", "LangGPT", "ICIO", "CRISPE", "RISE"];

  for (const sourceLang of ["en", "zh"] as const) {
    const title = sourceLang === "en" ? "API Testing" : "API 测试";
    writeFixtureFile(root, `testing-types/${sourceLang}/api-testing/README.md`, `# ${title}\n`);

    for (const version of versions) {
      const directory = `${version}-version`;
      const canonical = version === "Standard" ? "APITestingPrompt.md" : `APITesting-${version}-Full.md`;
      writeFixtureFile(
        root,
        `testing-types/${sourceLang}/api-testing/${directory}/${canonical}`,
        `# ${title} ${version}\n\n${sourceLang} canonical ${version}.\n`,
      );
      writeFixtureFile(
        root,
        `testing-types/${sourceLang}/api-testing/${directory}/APITesting-${version}-Lite.md`,
        "Lite variant must not be synchronized.\n",
      );
    }

    for (const [name, heading] of [
      ["daily-testing-workflow.md", sourceLang === "en" ? "Daily Testing Workflow" : "日常测试工作流"],
      ["sprint-testing-workflow.md", sourceLang === "en" ? "Sprint Testing Workflow" : "迭代测试工作流"],
      ["release-testing-workflow.md", sourceLang === "en" ? "Release Testing Workflow" : "发布测试工作流"],
    ]) {
      writeFixtureFile(
        root,
        `Workflows/${sourceLang}/${name}`,
        `# ${heading}\n\n## 🎯 Objective\n${heading} objective.\n\n[API](../testing-types/api-testing/APITestingPrompt_EN.md)\n`,
      );
    }
  }

  return root;
}

afterEach(() => {
  vi.restoreAllMocks();
  while (temporaryDirectories.length > 0) {
    rmSync(temporaryDirectories.pop()!, { recursive: true, force: true });
  }
});

describe("prompt source selection", () => {
  it("selects the sole full prompt and ignores Lite and platform variants", () => {
    expect(selectFullPrompt([
      "FunctionalTesting-CRISPE-Full.md",
      "FunctionalTesting-CRISPE-Lite.md",
      "FunctionalTesting-CRISPE-Full-Web.md",
    ], "CRISPE")).toBe("FunctionalTesting-CRISPE-Full.md");
  });

  it("selects the canonical Standard prompt", () => {
    expect(selectFullPrompt(
      ["APITestingPrompt.md", "APITestingPrompt_Lite.md"],
      "Standard",
    )).toBe("APITestingPrompt.md");
  });

  it("does not treat a testing-type name as a platform suffix", () => {
    expect(selectFullPrompt(
      ["MobileTestingPrompt.md", "MobileTestingPrompt_Lite.md", "MobileTestingPrompt-Mobile.md"],
      "Standard",
    )).toBe("MobileTestingPrompt.md");
  });

  it("throws instead of guessing when two canonical candidates remain", () => {
    expect(() => selectFullPrompt(["A-Full.md", "B-Full.md"], "ROSES"))
      .toThrow(/expected exactly one canonical full prompt/i);
  });
});

describe("site document mapping", () => {
  it("adds prompt schema fields without changing the body", () => {
    const body = "# API Testing Prompt\n\nOriginal body.";
    const output = buildPromptDocument({
      body,
      lang: "en",
      testingType: "api-testing",
      promptVersion: "Standard",
      title: "API Testing",
      order: 1,
    });

    expect(output).toContain('title: "Standard - API Testing"');
    expect(output).toContain('testingType: "api-testing"');
    expect(output).toContain('promptVersion: "Standard"');
    expect(output.endsWith(`${body}\n`)).toBe(true);
  });

  it("maps workflows and rewrites upstream relative prompt links", () => {
    const body = "# Daily Testing Workflow\n\n## 🎯 Objective\nDaily guide.\n\n[API](../testing-types/api-testing/APITestingPrompt_EN.md)";
    const rewritten = rewriteWorkflowLinks(body, "en");
    expect(rewritten).toContain("[API](/en/prompts/api-testing/)");

    const output = buildWorkflowDocument({
      body: rewritten,
      lang: "en",
      workflowType: "daily",
      order: 1,
    });
    expect(output).toContain('workflowType: "daily"');
    expect(output).toContain('description: "Daily guide."');
    expect(output).toContain('order: 1');
  });
});

describe("repository synchronization", () => {
  it("writes bilingual prompts and workflows, removes orphans, and is idempotent", () => {
    const repoRoot = createUpstreamFixture();
    const siteRoot = makeTemporaryDirectory("qa-site-output-");
    writeFixtureFile(siteRoot, "src/content/prompts/en/orphan/Standard.md", "orphan\n");
    writeFixtureFile(siteRoot, "src/content/workflows/en/orphan.md", "orphan\n");

    const first = syncFromRepo(repoRoot, siteRoot, { failOnLangMismatch: true });
    expect(first.promptCounts).toEqual({ en: 6, "zh-cn": 6 });
    expect(first.workflowCounts).toEqual({ en: 3, "zh-cn": 3 });
    expect(first.removed.prompts.en).toContain("orphan/Standard.md");
    expect(first.removed.workflows.en).toContain("orphan.md");
    expect(existsSync(join(siteRoot, "src/content/prompts/en/api-testing/Standard.md"))).toBe(true);
    expect(existsSync(join(siteRoot, "src/content/workflows/zh-cn/daily.md"))).toBe(true);

    const snapshot = readFileSync(
      join(siteRoot, "src/content/prompts/en/api-testing/Standard.md"),
      "utf8",
    );
    const second = syncFromRepo(repoRoot, siteRoot, { failOnLangMismatch: true });
    expect(second.removed).toEqual({
      prompts: { en: [], "zh-cn": [] },
      workflows: { en: [], "zh-cn": [] },
    });
    expect(readFileSync(
      join(siteRoot, "src/content/prompts/en/api-testing/Standard.md"),
      "utf8",
    )).toBe(snapshot);
  });

  it("warns on language mismatch by default and fails in strict mode", () => {
    const repoRoot = createUpstreamFixture();
    const siteRoot = makeTemporaryDirectory("qa-site-output-");
    rmSync(join(repoRoot, "testing-types/zh/api-testing/RISE-version"), { recursive: true });
    const warn = vi.spyOn(console, "warn").mockImplementation(() => undefined);

    expect(() => syncFromRepo(repoRoot, siteRoot, { failOnLangMismatch: false })).not.toThrow();
    expect(warn).toHaveBeenCalledWith(expect.stringMatching(/language mismatch/i));
    expect(() => syncFromRepo(repoRoot, siteRoot, { failOnLangMismatch: true }))
      .toThrow(/language mismatch/i);
  });

  it("runs through the public npm prompts:sync command", () => {
    const repoRoot = createUpstreamFixture();
    const siteRoot = makeTemporaryDirectory("qa-site-output-");
    const projectRoot = resolve(process.cwd(), "..");
    const result = spawnSync(
      "npm",
      [
        "run",
        "prompts:sync",
        "--",
        "--repo-dir",
        repoRoot,
        "--out-root",
        siteRoot,
        "--fail-on-lang-mismatch",
      ],
      { cwd: projectRoot, encoding: "utf8" },
    );

    expect(result.status, result.stderr || result.stdout).toBe(0);
    expect(readFileSync(
      join(siteRoot, "src/content/prompts/en/api-testing/Standard.md"),
      "utf8",
    )).toContain("en canonical Standard.");
  });

  it("keeps corrected upstream wording free of overreaching claims after sync", () => {
    const repoRoot = createUpstreamFixture();
    const corrected =
      "能够辅助设计功能测试步骤，并根据真实执行结果整理定位线索。";
    writeFixtureFile(
      repoRoot,
      "testing-types/zh/api-testing/CRISPE-version/APITesting-CRISPE-Full.md",
      `# API 测试 CRISPE\n\n${corrected}\n`,
    );
    const siteRoot = makeTemporaryDirectory("qa-site-output-");

    syncFromRepo(repoRoot, siteRoot, { failOnLangMismatch: true });

    const generated = readFileSync(
      join(siteRoot, "src/content/prompts/zh-cn/api-testing/CRISPE.md"),
      "utf8",
    );
    expect(generated).toContain(corrected);
    expect(generated).not.toMatch(/高效执行功能测试|执行功能测试|生成高覆盖率|检测安全漏洞|生成测试执行报告/);
  });
});
