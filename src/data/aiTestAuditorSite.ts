import type { Lang } from "@/i18n";

export interface AuditorLink { label: string; href: string; external?: boolean }
export interface AuditorFeature { icon: string; title: string; description: string }
export interface AuditorRule { title: string; description: string; status: "FAKE" | "WEAK" | "UNASSESSED" }
export interface AuditorInstallMode { id: string; title: string; description: string; commands: string[] }
export interface AuditorRelease { version: string; publishedAt: string; summary: string; changes: string[]; url: string }
export interface AuditorSiteCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; summary: string; actions: AuditorLink[] };
  labels: { features: string; rules: string; install: string; ecosystem: string; releaseNotes: string; releaseLink: string; commandLabel: string };
  features: AuditorFeature[]; rules: AuditorRule[]; installModes: AuditorInstallMode[]; ecosystemLinks: AuditorLink[]; releases: AuditorRelease[];
}

const RELEASE_HISTORY = ["1.1.1|2026-09-10", "1.1.0|2026-09-10", "1.0.3|2026-09-09", "1.0.2|2026-09-09", "1.0.1|2026-09-09", "1.0.0|2026-09-09", "0.9.0|2026-09-09", "0.8.0|2026-09-08", "0.7.0|2026-09-08", "0.6.0|2026-09-08", "0.5.0|2026-09-06", "0.4.0|2026-09-06", "0.3.0|2026-09-05", "0.2.0|2026-09-05", "0.1.0|2026-09-05"].map((entry) => {
  const [version, publishedAt] = entry.split("|");
  return { version: `v${version}`, publishedAt, url: `https://github.com/naodeng/ai-test-auditor/releases/tag/v${version}` };
});

export const AI_TEST_AUDITOR_SITE: Record<Lang, AuditorSiteCopy> = {
  en: {
    meta: { title: "AI Test Auditor · Static Test Audit", description: "A local-first, source-only auditor for deterministic signs of ineffective JavaScript and TypeScript tests." },
    hero: { eyebrow: "SOURCE-ONLY TEST EVIDENCE", title: "AI Test Auditor", summary: "Do not trust AI-generated tests. Verify their static evidence before your team relies on them.", actions: [{ label: "View on GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true }, { label: "Install and run", href: "#install-cli" }] },
    labels: { features: "Audit capability", rules: "Evidence boundaries", install: "Install and run", ecosystem: "Explore the QA ecosystem", releaseNotes: "Release notes", releaseLink: "View GitHub Release", commandLabel: "Command" },
    features: [
      { icon: "search", title: "Source-backed findings", description: "Read JavaScript and TypeScript test source without importing or executing it, then locate deterministic findings in the file." },
      { icon: "rule", title: "FAKE and WEAK rules", description: "Extract direct Jest, Vitest, and Playwright callbacks and report narrow findings with remediation guidance." },
      { icon: "difference", title: "Change-aware review", description: "Review supported test files changed since a local ref, compare against a baseline, or add optional mutation evidence." },
      { icon: "gavel", title: "Explicit quality boundaries", description: "Keep static audit, runtime quality, coverage, mutation score, and release readiness as separate decisions." },
    ],
    rules: [
      { title: "FAKE", description: "Deterministic syntactic evidence that a test does not verify an observable behavior.", status: "FAKE" },
      { title: "WEAK", description: "A non-blocking signal that deserves review but does not decide a release by itself.", status: "WEAK" },
      { title: "UNASSESSED", description: "An unflagged test is not proven strong; runtime behavior and production relevance remain outside this audit.", status: "UNASSESSED" },
    ],
    installModes: [{ id: "install-cli", title: "Run from a source checkout", description: "Build the local CLI, then review a test directory and inspect the JSON evidence.", commands: ["npm install", "npm run build", "node dist/cli.js review ./tests --format json"] }, { id: "install-package", title: "Use the packaged command", description: "The installed package exposes the same workflow through the ata command.", commands: ["npm install -g ai-test-auditor", "ata review ./tests --format html"] }],
    ecosystemLinks: [{ label: "ai-test-auditor on GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true }, { label: "AI Testing articles", href: "/en/blog/ai-testing/" }, { label: "QA Skills", href: "/en/qaskills/" }, { label: "QA Prompts", href: "/en/prompts/" }],
    releases: RELEASE_HISTORY.map((release) => ({ ...release, summary: `${release.version} release · See the GitHub release notes for the detailed changes.`, changes: ["Version history is maintained in the upstream GitHub release."] })),
  },
  "zh-cn": {
    meta: { title: "AI Test Auditor · 测试静态审计", description: "一个本地优先、仅分析源码的工具，用于识别 JavaScript 与 TypeScript 测试中的确定性无效信号。" },
    hero: { eyebrow: "仅分析源码的测试证据", title: "AI Test Auditor", summary: "不要直接相信 AI 生成的测试，先验证它们留下的静态证据。", actions: [{ label: "查看 GitHub", href: "https://github.com/naodeng/ai-test-auditor", external: true }, { label: "安装与运行", href: "#install-cli" }] },
    labels: { features: "审计能力", rules: "证据边界", install: "安装与运行", ecosystem: "探索 QA 生态", releaseNotes: "版本变更", releaseLink: "查看 GitHub Release", commandLabel: "命令" },
    features: [{ icon: "search", title: "源码定位的发现", description: "读取 JavaScript 与 TypeScript 测试源码，不导入、不执行，并将确定性发现定位到具体文件。" }, { icon: "rule", title: "FAKE 与 WEAK 规则", description: "提取 Jest、Vitest 与 Playwright 的直接回调，输出范围明确、带修复建议的发现。" }, { icon: "difference", title: "变更感知审查", description: "审查相对本地引用变更的测试文件，支持基线对比与可选的 mutation 证据。" }, { icon: "gavel", title: "明确的质量边界", description: "将静态审计、运行时质量、覆盖率、mutation score 与发布就绪度作为不同决策。" }],
    rules: [{ title: "FAKE", description: "确定性的语法证据，说明测试没有验证可观察行为。", status: "FAKE" }, { title: "WEAK", description: "需要复核但不直接阻断发布的信号。", status: "WEAK" }, { title: "UNASSESSED", description: "没有被标记的测试不等于强测试；运行时行为与生产代码关联性不在审计范围内。", status: "UNASSESSED" }],
    installModes: [{ id: "install-cli", title: "从源码工作区运行", description: "构建本地 CLI，然后审查测试目录并查看 JSON 证据。", commands: ["npm install", "npm run build", "node dist/cli.js review ./tests --format json"] }, { id: "install-package", title: "使用已安装命令", description: "安装包提供 ata 命令，可执行相同的审查流程。", commands: ["npm install -g ai-test-auditor", "ata review ./tests --format html"] }],
    ecosystemLinks: [{ label: "ai-test-auditor GitHub 仓库", href: "https://github.com/naodeng/ai-test-auditor", external: true }, { label: "AI 测试文章", href: "/zh-cn/blog/ai-testing/" }, { label: "QA Skills", href: "/zh-cn/qaskills/" }, { label: "QA Prompts", href: "/zh-cn/prompts/" }],
    releases: RELEASE_HISTORY.map((release) => ({ ...release, summary: `${release.version} 版本 · 详细变更请查看 GitHub Release。`, changes: ["版本历史以 GitHub 上游 Release 为准。"] })),
  },
};
