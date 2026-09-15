import type { Lang } from "@/i18n";

export interface DshQaLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface DshQaFeature {
  icon: string;
  title: string;
  description: string;
}

export interface DshQaFlowStage {
  title: string;
  description: string;
  status: "NEUTRAL" | "PASS" | "WARN" | "BLOCK";
}

export interface DshQaInstallMode {
  id: "install-plugin" | "install-standalone";
  title: string;
  description: string;
  commands: string[];
}

export interface DshQaReleaseFact {
  version: string;
  publishedAt: string;
  url: string;
}

export interface DshQaReleaseContent {
  summary: string;
  changes: string[];
}

export type DshQaRelease = DshQaReleaseFact & DshQaReleaseContent;

export interface DshQaSiteCopy {
  meta: { title: string; description: string };
  hero: { eyebrow: string; title: string; summary: string; actions: DshQaLink[] };
  labels: {
    features: string;
    flow: string;
    install: string;
    ecosystem: string;
    releaseNotes: string;
    releaseLink: string;
    commandLabel: string;
  };
  features: DshQaFeature[];
  deliveryFlow: DshQaFlowStage[];
  installModes: DshQaInstallMode[];
  ecosystemLinks: DshQaLink[];
  releases: DshQaRelease[];
}

export const DSH_QA_RELEASE_FACTS: DshQaReleaseFact[] = [
  { version: "v0.4.1", publishedAt: "2026-09-15", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.1" },
  { version: "v0.4.0", publishedAt: "2026-09-15", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.0" },
  { version: "v0.3.1", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1" },
  { version: "v0.3.0", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.0" },
  { version: "v0.2.0", publishedAt: "2026-09-01", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.2.0" },
];

function releases(content: DshQaReleaseContent[]): DshQaRelease[] {
  return DSH_QA_RELEASE_FACTS.map((fact, index) => ({ ...fact, ...content[index] }));
}

export const DSH_QA_SITE: Record<Lang, DshQaSiteCopy> = {
  en: {
    meta: { title: "dsh-qa · QA Workbench", description: "A local-first QA workbench for DeepSeek Harness, from planning and execution to evidence and delivery decisions." },
    hero: {
      eyebrow: "LOCAL-FIRST QUALITY DELIVERY",
      title: "dsh-qa · QA Workbench",
      summary: "Bring projects, test work, evidence, and delivery decisions into one local workspace—while keeping DeepSeek Harness sessions native.",
      actions: [
        { label: "View on GitHub", href: "https://github.com/naodeng/dsh-qa", external: true },
        { label: "Install DSH plugin", href: "#install-plugin" },
        { label: "Run standalone", href: "#install-standalone" },
      ],
    },
    labels: { features: "Capability map", flow: "Evidence-led delivery flow", install: "Install and run", ecosystem: "Explore the QA ecosystem", releaseNotes: "Release notes", releaseLink: "View GitHub Release", commandLabel: "Command" },
    features: [
      { icon: "account_tree", title: "Projects and iterations", description: "Organize projects, iterations, milestones, kanban work, calendars, and local QA materials in one workspace." },
      { icon: "smart_toy", title: "AI collaboration", description: "Use native DSH sessions to draft requirements, cases, defects, reports, and QA knowledge without a second model configuration." },
      { icon: "folder_lock", title: "Local-first evidence", description: "Keep operational QA data on your machine and preserve traceable source snapshots, plans, runs, and evidence packages." },
      { icon: "verified_user", title: "Quality control", description: "Review risks, controlled execution, evidence, regressions, and delivery gates with accountable human decisions." },
    ],
    deliveryFlow: [
      { title: "Scope", description: "Capture requirements, risks, source snapshots, and acceptance criteria.", status: "NEUTRAL" },
      { title: "Plan", description: "Review a test plan and an immutable execution configuration.", status: "NEUTRAL" },
      { title: "Execute", description: "Run the approved plan in a controlled local environment.", status: "NEUTRAL" },
      { title: "Evidence", description: "Archive verified evidence, analyse failures, and compare regressions.", status: "NEUTRAL" },
      { title: "Gate", description: "PASS can proceed; WARN and BLOCK require review. Exceptions never turn BLOCK into PASS.", status: "PASS" },
    ],
    installModes: [
      { id: "install-plugin", title: "Use inside DeepSeek Harness", description: "Install dsh-qa into the same DSH web profile you use, then restart the DSH Web UI so the plugin loads.", commands: ["npx @deepseek-ai/dsh plugin --profile web add dsh-qa", "npx @deepseek-ai/dsh web"] },
      { id: "install-standalone", title: "Run as a local workbench", description: "Use standalone mode for local projects, boards, and calendars. Native DSH sessions, models, skills, and commands remain available through the plugin mode.", commands: ["npm install -g dsh-qa", "qabench"] },
    ],
    ecosystemLinks: [
      { label: "dsh-qa on GitHub", href: "https://github.com/naodeng/dsh-qa", external: true },
      { label: "QA Skills", href: "/en/qaskills/" },
      { label: "QA Prompts", href: "/en/prompts/" },
      { label: "Compatibility postmortem", href: "/en/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" },
    ],
    releases: releases([
      { summary: "Hardened DeepSeek Harness compatibility and verified the embedded workbench host path.", changes: ["Locked the current client-request and session/follow WebSocket envelopes, standardized snapshot.records and cursor handling, and routed follow through the Remote mux.", "Added bounded error, close, timeout, and duplicate-frame handling for Session follow so host capability failures remain visible.", "Aligned the dsh-v0.1.6-alpha.1 QA preset workflow, persona prefix, skills/list envelope, and commands/execute submittedAttachments argument.", "Added an explicit opt-in Harness host smoke and verified the embedded Workbench client's refresh and reconnect path."] },
      { summary: "Introduced verifiable evidence bundles and quality-workbench execution flows.", changes: ["Added terminal-run finalization, canonical manifest hashes, per-file SHA-256 digests, evidence types, MIME metadata, capture timestamps, and text/image previews.", "Added tamper detection, invalid-evidence quarantine, interrupted-finalization recovery, gate and open-defect reference protection, quotas, and path hardening.", "Added structured failure analysis, human-confirmed defect promotion, deterministic calculated regression sets, recalculation, and before/after test-run comparison.", "Bound test runs to source digests and Git commits, and completed evidence list, per-run evidence, download, and quality-workbench UI flows.", "Fixed stale or invalid evidence entering gates, restart recovery, referenced-evidence cleanup, MIME handling, traversal and symlink protection, unknown regression cases, and comparison validation."] },
      { summary: "Clearer DSH plugin and standalone installation guidance.", changes: ["Documented npx and source-checkout plugin installation paths.", "Added standalone npm installation, update, and qabench startup guidance."] },
      { summary: "DeepSeek Harness RPC compatibility and a narrower product boundary.", changes: ["Updated RPC endpoints and request envelopes for current DSH APIs.", "Removed retired Remote pairing checks while retaining local workbench and native session support."] },
      { summary: "Introduced the QA control workbench and computed delivery gates.", changes: ["Added traceable quality tasks, controlled runs, evidence bundles, and regression workflows.", "Added PASS, WARN, and BLOCK delivery decisions with controlled exceptions."] },
    ]),
  },
  "zh-cn": {
    meta: { title: "dsh-qa · 质量工作台", description: "面向 DeepSeek Harness 的本地优先 QA 工作台，贯通计划、执行、证据与交付决策。" },
    hero: {
      eyebrow: "本地优先的质量交付",
      title: "dsh-qa · 质量工作台",
      summary: "把测试项目、执行、证据与交付决策汇集到一个本地工作区，同时复用 DeepSeek Harness 原生会话。",
      actions: [
        { label: "查看 GitHub", href: "https://github.com/naodeng/dsh-qa", external: true },
        { label: "安装 DSH 插件", href: "#install-plugin" },
        { label: "独立运行", href: "#install-standalone" },
      ],
    },
    labels: { features: "能力地图", flow: "证据驱动的交付流程", install: "安装与运行", ecosystem: "探索 QA 生态", releaseNotes: "版本变更", releaseLink: "查看 GitHub Release", commandLabel: "命令" },
    features: [
      { icon: "account_tree", title: "项目与迭代", description: "在一个工作区中管理项目、迭代、里程碑、看板、日历与本地 QA 材料。" },
      { icon: "smart_toy", title: "AI 协作", description: "通过 DSH 原生会话整理需求、用例、缺陷、报告和测试知识，不维护第二套模型配置。" },
      { icon: "folder_lock", title: "本地优先证据", description: "将运行中的 QA 数据保存在本机，并保留可追溯的来源快照、计划、执行与证据包。" },
      { icon: "verified_user", title: "质量控制", description: "围绕风险、受控执行、证据、回归与交付门禁开展可追责的人工决策。" },
    ],
    deliveryFlow: [
      { title: "范围", description: "登记需求、风险、来源快照与验收标准。", status: "NEUTRAL" },
      { title: "计划", description: "评审测试计划与不可变执行配置。", status: "NEUTRAL" },
      { title: "执行", description: "在受控本地环境中运行已批准的计划。", status: "NEUTRAL" },
      { title: "证据", description: "归档已验证证据、分析失败并对比回归。", status: "NEUTRAL" },
      { title: "门禁", description: "PASS 可以进入交付；WARN 与 BLOCK 必须评审。例外不能把 BLOCK 变为 PASS。", status: "PASS" },
    ],
    installModes: [
      { id: "install-plugin", title: "在 DeepSeek Harness 中使用", description: "安装到当前使用的 DSH Web profile；插件变动后需重启 DSH Web UI 才会加载。", commands: ["npx @deepseek-ai/dsh plugin --profile web add dsh-qa", "npx @deepseek-ai/dsh web"] },
      { id: "install-standalone", title: "作为本地工作台独立运行", description: "独立模式可管理本地项目、看板与日历；DSH 原生会话、模型、技能和命令仍需通过插件模式使用。", commands: ["npm install -g dsh-qa", "qabench"] },
    ],
    ecosystemLinks: [
      { label: "dsh-qa GitHub 仓库", href: "https://github.com/naodeng/dsh-qa", external: true },
      { label: "QA Skills", href: "/zh-cn/qaskills/" },
      { label: "QA Prompts", href: "/zh-cn/prompts/" },
      { label: "兼容性复盘文章", href: "/zh-cn/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" },
    ],
    releases: releases([
      { summary: "加固 DeepSeek Harness 兼容性，并完成嵌入式工作台宿主链路验证。", changes: ["固化当前 client-request 与 session/follow WebSocket 封装，统一读取 snapshot.records 与 cursor，并通过 Remote mux 处理 follow。", "补充 Session follow 的错误、关闭、超时与重复 frame 边界处理，避免宿主能力列表失败时静默显示为空。", "对齐 dsh-v0.1.6-alpha.1 的 QA preset workflow、persona prefix、skills/list 请求封装和 commands/execute 的 submittedAttachments 参数。", "新增显式 opt-in 的 Harness host smoke，并验证嵌入式 Workbench client 的刷新与重连路径。"] },
      { summary: "引入可验证的质量证据包与质量工作台执行链路。", changes: ["新增终态运行 finalize、规范 manifest hash、逐文件 SHA-256、证据类型、MIME、捕获时间和文本/图片预览。", "新增篡改检测、无效证据隔离、中断 finalize 恢复、门禁与未关闭缺陷引用保护、配额和路径安全检查。", "新增结构化失败分析、人工确认后的缺陷升级、确定性计算回归集、回归集重算和测试运行前后对比。", "将测试运行绑定到源文件摘要与 Git commit，并补齐证据列表、单次运行证据、下载和质量工作台 UI。", "修复无效或过期证据进入门禁、重启恢复、引用中证据清理、MIME、路径越界、符号链接、未知回归用例和运行对比参数校验问题。"] },
      { summary: "补充 DSH 插件与独立运行的安装说明。", changes: ["说明 npx 与源码工作区的插件安装路径。", "补充独立模式的 npm 安装、更新与 qabench 启动方式。"] },
      { summary: "适配 DeepSeek Harness RPC，并收敛产品边界。", changes: ["更新当前 DSH API 的 RPC 端点与请求封装。", "移除废弃的 Remote 配对检查，保留本地工作台与原生会话支持。"] },
      { summary: "引入研发质量控制工作台与计算型交付门禁。", changes: ["新增可追溯的质量任务、受控运行、证据包与回归工作流。", "新增 PASS、WARN、BLOCK 交付决策与受控例外。"] },
    ]),
  },
};
