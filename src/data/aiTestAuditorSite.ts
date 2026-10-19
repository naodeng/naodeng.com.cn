import type { Lang } from "@/i18n";

export interface AuditorLink { label: string; href: string; external?: boolean }
export interface AuditorFeature { icon: string; title: string; description: string }
export interface AuditorRule { title: string; description: string; status: "FAKE" | "WEAK" | "UNASSESSED" }
export interface AuditorInstallMode { id: string; title: string; description: string; commands: string[] }
export interface AuditorRelease { version: string; publishedAt: string; summary: string; changes: string[]; url: string }
export interface AuditorDemoFinding {
  ruleId: string;
  classification: "FAKE" | "WEAK";
  line: number;
  code: string;
  title: string;
  description: string;
  remediation: string;
}
export interface AuditorSiteCopy {
  meta: { title: string; description: string };
  hero: { title: string; summary: string; actions: AuditorLink[] };
  labels: {
    features: string;
    rules: string;
    install: string;
    ecosystem: string;
    releaseNotes: string;
    releaseLink: string;
    commandLabel: string;
    sampleReport: string;
    benchmarkFixture: string;
    sourceOnlyNotice: string;
    filterAll: string;
    filterFake: string;
    filterWeak: string;
    tests: string;
    fake: string;
    weak: string;
    unassessed: string;
    licenseNotice: string;
  };
  demo: {
    source: string;
    total: number;
    assessed: number;
    fake: number;
    weak: number;
    unassessed: number;
    findings: AuditorDemoFinding[];
  };
  features: AuditorFeature[];
  rules: AuditorRule[];
  installModes: AuditorInstallMode[];
  ecosystemLinks: AuditorLink[];
  releases: AuditorRelease[];
}

const RELEASE_HISTORY = [
  "1.2.1|2026-09-20",
  "1.2.0|2026-09-20",
  "1.1.1|2026-09-10",
  "1.1.0|2026-09-10",
  "1.0.3|2026-09-09",
  "1.0.2|2026-09-09",
  "1.0.1|2026-09-09",
  "1.0.0|2026-09-09",
  "0.9.0|2026-09-09",
  "0.8.0|2026-09-08",
  "0.7.0|2026-09-08",
  "0.6.0|2026-09-08",
  "0.5.0|2026-09-06",
  "0.4.0|2026-09-06",
  "0.3.0|2026-09-05",
  "0.2.0|2026-09-05",
  "0.1.0|2026-09-05",
].map((entry) => {
  const [version, publishedAt] = entry.split("|");
  return { version: `v${version}`, publishedAt, url: `https://github.com/naodeng/ai-test-auditor/releases/tag/v${version}` };
});

export const AI_TEST_AUDITOR_SITE: Record<Lang, AuditorSiteCopy> = {
  en: {
    meta: {
      title: "AI Test Auditor · Source-only Test Audit",
      description: "A local-first CLI that reads JavaScript and TypeScript test source without executing it, then reports source-located FAKE and WEAK findings.",
    },
    hero: {
      title: "AI Test Auditor",
      summary: "A local-first CLI that reads JavaScript and TypeScript test source without executing it, then reports source-located FAKE and WEAK findings.",
      actions: [
        { label: "View on GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true },
        { label: "Install and run", href: "#install-cli" },
      ],
    },
    labels: {
      features: "Audit capabilities",
      rules: "Evidence boundaries",
      install: "Install and run",
      ecosystem: "Explore the QA ecosystem",
      releaseNotes: "Release notes",
      releaseLink: "View GitHub Release",
      commandLabel: "Command",
      sampleReport: "Benchmark report sample",
      benchmarkFixture: "Built-in v1 benchmark fixture",
      sourceOnlyNotice: "Static source analysis only. The fixture tests were not executed.",
      filterAll: "All findings",
      filterFake: "FAKE",
      filterWeak: "WEAK",
      tests: "Extracted test cases",
      fake: "FAKE findings",
      weak: "WEAK signals",
      unassessed: "UNASSESSED",
      licenseNotice: "PolyForm Noncommercial 1.0.0 · Commercial use is not permitted.",
    },
    demo: {
      source: "benchmarks/v1/unit-enhancements.test.ts",
      total: 5,
      assessed: 4,
      fake: 2,
      weak: 2,
      unassessed: 1,
      findings: [
        {
          ruleId: "UT012",
          classification: "FAKE",
          line: 4,
          code: "expect(result);",
          title: "Bare expect call",
          description: "Calls expect without a matcher assertion.",
          remediation: "Use a matcher that compares an observed value with an independently derived expectation.",
        },
        {
          ruleId: "UT013",
          classification: "FAKE",
          line: 8,
          code: "expect.assertions(0);",
          title: "Contradictory assertion count",
          description: "Declares zero expected assertions while the test also contains a matcher assertion.",
          remediation: "Set the assertion count to the actual number of assertions or remove the contradictory guard.",
        },
        {
          ruleId: "UT014",
          classification: "WEAK",
          line: 13,
          code: "expect(mock).toHaveBeenCalled();",
          title: "Mock interaction only",
          description: "Verifies mock interaction without showing a value or state outcome.",
          remediation: "Add a value, state, or observable effect assertion when the interaction alone is not the intended contract.",
        },
        {
          ruleId: "UT015",
          classification: "WEAK",
          line: 17,
          code: "expect(value).toMatchSnapshot();",
          title: "Snapshot only",
          description: "Static analysis cannot determine whether the snapshot is an adequate oracle.",
          remediation: "Add an independently meaningful value, state, or effect assertion when snapshot coverage alone is insufficient.",
        },
      ],
    },
    features: [
      { icon: "search", title: "Source-backed findings", description: "Read JavaScript and TypeScript test source without importing or executing it, then locate deterministic findings in the file." },
      { icon: "rule", title: "FAKE and WEAK rules", description: "Inspect direct Jest, Vitest, Playwright, and Node node:test callbacks, then report narrow findings with remediation guidance." },
      { icon: "difference", title: "Change-aware review", description: "Review supported test files changed since a local ref, compare against a baseline, or add optional mutation evidence." },
      { icon: "gavel", title: "Explicit quality boundaries", description: "Keep static audit, runtime quality, coverage, mutation score, and release readiness as separate decisions." },
    ],
    rules: [
      { title: "FAKE", description: "Deterministic syntactic evidence that a test does not verify an observable behavior.", status: "FAKE" },
      { title: "WEAK", description: "A non-blocking signal that deserves review but does not decide a release by itself.", status: "WEAK" },
      { title: "UNASSESSED", description: "An unflagged test is not proven strong; runtime behavior and production relevance remain outside this audit.", status: "UNASSESSED" },
    ],
    installModes: [
      { id: "install-cli", title: "Run from a source checkout", description: "Build the local CLI, then review a test directory and inspect the JSON evidence.", commands: ["npm install", "npm run build", "node dist/cli.js review ./tests --format json"] },
      { id: "install-package", title: "Use the packaged command", description: "The installed package exposes the same workflow through the ata command.", commands: ["npm install -g ai-test-auditor", "ata review ./tests --format html"] },
    ],
    ecosystemLinks: [
      { label: "ai-test-auditor on GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true },
      { label: "AI Testing articles", href: "/en/blog/ai-testing/" },
      { label: "QA Skills", href: "/en/qaskills/" },
      { label: "QA Prompts", href: "/en/prompts/" },
    ],
    releases: RELEASE_HISTORY.map((release, index) => ({
      ...release,
      summary: index === 0
        ? "Corrected advisory GitHub Actions workflow exit semantics; FAKE and WEAK findings remain non-blocking in advisory mode."
        : `${release.version} release · See GitHub for the detailed changes.`,
      changes: index === 0
        ? ["Advisory workflow findings no longer fail the job; invalid input and the explicit FAKE-only gate keep their existing exit behavior."]
        : ["Version history is maintained in the upstream GitHub release."],
    })),
  },
  "zh-cn": {
    meta: {
      title: "AI Test Auditor · 测试源码静态审计",
      description: "一个本地优先的 CLI，只读取 JavaScript 与 TypeScript 测试源码，不执行测试，并输出可定位的 FAKE 与 WEAK 发现。",
    },
    hero: {
      title: "AI Test Auditor",
      summary: "一个本地优先的 CLI，只读取 JavaScript 与 TypeScript 测试源码，不执行测试，并输出可定位的 FAKE 与 WEAK 发现。",
      actions: [
        { label: "查看 GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true },
        { label: "安装与运行", href: "#install-cli" },
      ],
    },
    labels: {
      features: "审计能力",
      rules: "证据边界",
      install: "安装与运行",
      ecosystem: "探索 QA 生态",
      releaseNotes: "版本变更",
      releaseLink: "查看 GitHub Release",
      commandLabel: "命令",
      sampleReport: "基准样例审计报告",
      benchmarkFixture: "内置 v1 benchmark 样例",
      sourceOnlyNotice: "仅做源码静态分析，未执行样例中的测试。",
      filterAll: "全部发现",
      filterFake: "FAKE",
      filterWeak: "WEAK",
      tests: "提取到的测试用例",
      fake: "FAKE 发现",
      weak: "WEAK 信号",
      unassessed: "UNASSESSED",
      licenseNotice: "PolyForm Noncommercial 1.0.0 · 不允许商业使用。",
    },
    demo: {
      source: "benchmarks/v1/unit-enhancements.test.ts",
      total: 5,
      assessed: 4,
      fake: 2,
      weak: 2,
      unassessed: 1,
      findings: [
        {
          ruleId: "UT012",
          classification: "FAKE",
          line: 4,
          code: "expect(result);",
          title: "只调用 expect",
          description: "调用了 expect，但没有 matcher 断言。",
          remediation: "使用 matcher 比较观察值与独立推导的期望值。",
        },
        {
          ruleId: "UT013",
          classification: "FAKE",
          line: 8,
          code: "expect.assertions(0);",
          title: "断言数量互相矛盾",
          description: "声明期望断言数量为 0，但测试中同时存在 matcher 断言。",
          remediation: "将断言数量设为实际数量，或移除矛盾的校验。",
        },
        {
          ruleId: "UT014",
          classification: "WEAK",
          line: 13,
          code: "expect(mock).toHaveBeenCalled();",
          title: "仅验证 mock 调用",
          description: "只验证了 mock 交互，没有展示值或状态结果。",
          remediation: "如果交互本身不是预期契约，请补充值、状态或可观察效果断言。",
        },
        {
          ruleId: "UT015",
          classification: "WEAK",
          line: 17,
          code: "expect(value).toMatchSnapshot();",
          title: "仅验证快照",
          description: "静态分析无法判断快照是否构成充分的判断依据。",
          remediation: "如果快照覆盖不足，请补充有独立意义的值、状态或效果断言。",
        },
      ],
    },
    features: [
      { icon: "search", title: "源码定位的发现", description: "读取 JavaScript 与 TypeScript 测试源码，不导入、不执行，并将确定性发现定位到具体文件。" },
      { icon: "rule", title: "FAKE 与 WEAK 规则", description: "分析 Jest、Vitest、Playwright 与 Node node:test 的直接回调，输出范围明确、带修复建议的发现。" },
      { icon: "difference", title: "变更感知审查", description: "审查相对本地引用变更的测试文件，支持基线对比与可选的 mutation 证据。" },
      { icon: "gavel", title: "明确的质量边界", description: "将静态审计、运行时质量、覆盖率、mutation score 与发布就绪度作为不同决策。" },
    ],
    rules: [
      { title: "FAKE", description: "确定性的语法证据，说明测试没有验证可观察行为。", status: "FAKE" },
      { title: "WEAK", description: "需要复核但不直接阻断发布的信号。", status: "WEAK" },
      { title: "UNASSESSED", description: "没有被标记的测试不等于强测试；运行时行为与生产代码关联性不在审计范围内。", status: "UNASSESSED" },
    ],
    installModes: [
      { id: "install-cli", title: "从源码工作区运行", description: "构建本地 CLI，然后审查测试目录并查看 JSON 证据。", commands: ["npm install", "npm run build", "node dist/cli.js review ./tests --format json"] },
      { id: "install-package", title: "使用已安装命令", description: "安装包提供 ata 命令，可执行相同的审查流程。", commands: ["npm install -g ai-test-auditor", "ata review ./tests --format html"] },
    ],
    ecosystemLinks: [
      { label: "ai-test-auditor GitHub 仓库", href: "https://github.com/naodeng/ai-test-auditor", external: true },
      { label: "AI 测试文章", href: "/zh-cn/blog/ai-testing/" },
      { label: "QA Skills", href: "/zh-cn/qaskills/" },
      { label: "QA Prompts", href: "/zh-cn/prompts/" },
    ],
    releases: RELEASE_HISTORY.map((release, index) => ({
      ...release,
      summary: index === 0
        ? "修正 advisory GitHub Actions workflow 的退出语义；FAKE 与 WEAK 发现仍不会阻断 advisory 流程。"
        : `${release.version} 版本 · 详细变更请查看 GitHub Release。`,
      changes: index === 0
        ? ["advisory workflow 不再因静态发现项导致任务失败；无效输入与显式 FAKE-only 门禁保留原有退出语义。"]
        : ["版本历史以 GitHub 上游 Release 为准。"],
    })),
  },
};
