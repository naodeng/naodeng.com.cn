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

export interface DshQaShowcaseItem {
  image: string;
  width: number;
  height: number;
  alt: string;
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
  hero: { eyebrow: string; title: string; summary: string; actions: DshQaLink[]; latestRelease: DshQaReleaseFact };
  labels: {
    features: string;
    showcase: string;
    flow: string;
    install: string;
    ecosystem: string;
    releaseNotes: string;
    releaseLink: string;
    commandLabel: string;
  };
  features: DshQaFeature[];
  showcase: DshQaShowcaseItem[];
  deliveryFlow: DshQaFlowStage[];
  installModes: DshQaInstallMode[];
  ecosystemLinks: DshQaLink[];
  releases: DshQaRelease[];
}

export const DSH_QA_RELEASE_FACTS: DshQaReleaseFact[] = [
  { version: "v0.5.3", publishedAt: "2026-09-23", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.3" },
  { version: "v0.5.2", publishedAt: "2026-09-23", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.2" },
  { version: "v0.5.1", publishedAt: "2026-09-22", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.1" },
  { version: "v0.5.0", publishedAt: "2026-09-21", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.5.0" },
  { version: "v0.4.1", publishedAt: "2026-09-15", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.1" },
  { version: "v0.4.0", publishedAt: "2026-09-15", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.4.0" },
  { version: "v0.3.1", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.1" },
  { version: "v0.3.0", publishedAt: "2026-09-11", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.3.0" },
  { version: "v0.2.0", publishedAt: "2026-09-01", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.2.0" },
  { version: "v0.1.8", publishedAt: "2026-08-26", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.8" },
  { version: "v0.1.7", publishedAt: "2026-08-25", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.7" },
  { version: "v0.1.6", publishedAt: "2026-08-25", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.6" },
  { version: "v0.1.5", publishedAt: "2026-08-24", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.5" },
  { version: "v0.1.4", publishedAt: "2026-08-20", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.4" },
  { version: "v0.1.3", publishedAt: "2026-08-19", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.3" },
  { version: "v0.1.2", publishedAt: "2026-08-19", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.2" },
  { version: "v0.1.1", publishedAt: "2026-08-19", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.1" },
  { version: "v0.1.0", publishedAt: "2026-08-19", url: "https://github.com/naodeng/dsh-qa/releases/tag/v0.1.0" },
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
      latestRelease: DSH_QA_RELEASE_FACTS[0],
    },
    labels: { features: "Capability map", showcase: "QA Workbench in practice", flow: "Evidence-led delivery flow", install: "Install and run", ecosystem: "Explore the QA ecosystem", releaseNotes: "Release notes", releaseLink: "View GitHub Release", commandLabel: "Command" },
    features: [
      { icon: "account_tree", title: "Projects and iterations", description: "Organize projects, iterations, milestones, kanban work, calendars, and local QA materials in one workspace." },
      { icon: "smart_toy", title: "AI collaboration", description: "Use native DSH sessions to draft requirements, cases, defects, reports, and QA knowledge without a second model configuration." },
      { icon: "folder_lock", title: "Local-first evidence", description: "Keep operational QA data on your machine and preserve traceable source snapshots, plans, runs, and evidence packages." },
      { icon: "verified_user", title: "Quality control", description: "Review risks, controlled execution, evidence, regressions, and delivery gates with accountable human decisions." },
    ],
    showcase: [
      { image: "/images/projects/dsh-qa/home.webp", width: 1200, height: 715, alt: "dsh-qa home dashboard", title: "Home dashboard", description: "See active projects, overdue work, schedules, and recent QA activity at a glance." },
      { image: "/images/projects/dsh-qa/board.webp", width: 1200, height: 583, alt: "dsh-qa project board", title: "Project board", description: "Move projects through QA stages with a visual board that keeps risks and ownership visible." },
      { image: "/images/projects/dsh-qa/project-detail.webp", width: 1200, height: 604, alt: "dsh-qa project detail", title: "Project detail", description: "Keep scope, stages, local files, team context, and the project timeline together." },
      { image: "/images/projects/dsh-qa/calendar.webp", width: 1200, height: 583, alt: "dsh-qa work calendar", title: "Work calendar", description: "Plan reviews, releases, and milestones on a calendar that stays tied to QA work." },
      { image: "/images/projects/dsh-qa/test-mode.webp", width: 1200, height: 583, alt: "dsh-qa test mode", title: "Test mode", description: "Work with native DSH sessions, project context, and installed capabilities in one testing surface." },
      { image: "/images/projects/dsh-qa/skills.webp", width: 1200, height: 583, alt: "dsh-qa QA Skills catalog", title: "QA Skills", description: "Browse, install, and manage task-focused QA capabilities directly from the workbench." },
    ],
    deliveryFlow: [
      { title: "Scope", description: "Capture requirements, risks, source snapshots, and acceptance criteria.", status: "NEUTRAL" },
      { title: "Plan", description: "Review a test plan and an immutable execution configuration.", status: "NEUTRAL" },
      { title: "Execute", description: "Run the approved plan in a controlled local environment.", status: "NEUTRAL" },
      { title: "Evidence", description: "Archive verified evidence, analyse failures, and compare regressions.", status: "NEUTRAL" },
      { title: "Gate", description: "PASS can proceed; WARN and BLOCK require review. Exceptions never turn BLOCK into PASS.", status: "PASS" },
    ],
    installModes: [
      { id: "install-plugin", title: "Use inside DeepSeek Harness", description: "Install dsh-qa into the same DSH web profile you use, then restart the DSH Web UI so the plugin loads.", commands: ["npx @deepseek-ai/dsh plugin --profile web add dsh-qa"] },
      { id: "install-standalone", title: "Install the local workbench", description: "Install the standalone workbench for local projects, boards, and calendars. Native DSH sessions, models, skills, and commands remain available through the plugin mode.", commands: ["npm install -g dsh-qa"] },
    ],
    ecosystemLinks: [
      { label: "dsh-qa on GitHub", href: "https://github.com/naodeng/dsh-qa", external: true },
      { label: "QA Skills", href: "/en/qaskills/" },
      { label: "QA Prompts", href: "/en/prompts/" },
      { label: "Compatibility postmortem", href: "/en/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" },
    ],
    releases: releases([
      { summary: "Polished the Quiet Studio workbench, organized test assets, and preserved the page selected during initialization.", changes: ["Polished the workbench as the Quiet Studio visual system, improving information hierarchy and light-surface readability.", "Consolidated test configuration, test guidance, and result entry points under test/, while organizing project documentation and workflow diagrams.", "Preserved the page selected by the user while the application initialization request is in flight.", "Removed obsolete README showcase imagery and verified 162 unit/API tests, 32 Chromium E2E tests, and npm pack --dry-run."] },
      { summary: "Added bilingual settings, installed-version visibility, and a release history inside the QA Workbench.", changes: ["Added a settings dialog with bilingual switching, installed and latest versions, compatible DSH version, GitHub repository, and project website links.", "Added the installed-version indicator beside the brand and paginated newest-first release history with localized summaries and GitHub detail links.", "Improved settings-button contrast on light backgrounds and removed unused theme and workspace-width presets.", "Verified 160 unit/API tests and 25 Chromium E2E tests passed."] },
      { summary: "Migrated the QA profile to Harness 0.1.7 bundles and stabilized embedded Workbench lifecycle handling.", changes: ["Migrated the qa preset to the Harness 0.1.7 declarative profile-bundle model and made quality-control an independent profile bundle.", "Fixed same-origin Workbench popout cleanup and remounted-iframe frame-readiness timing; updated Host Smoke to dsh-v0.1.7-alpha.1.", "Verified 159 unit/API tests, 23 standalone Chromium E2E tests, and 6 real qa-bundle Host Smoke cases. The independent quality-control bundle is statically verified; its separate runtime Host Smoke is outside this release evidence."] },
      { summary: "Moved the QA Workbench onto Harness's native Panel contract.", changes: ["Mounted the workbench through official sidebar.panellist and root-scoped keyed main slots, removing host DOM selectors, MutationObserver, and custom Panel activation.", "Preserved iframe, popout, Panel-close, and postMessage return flows with idempotent cleanup and lifecycle regression coverage.", "Restored project titles after host refresh and closed popouts when their Panel closes or unloads."] },
      { summary: "Hardened DeepSeek Harness compatibility and verified the embedded workbench host path.", changes: ["Locked the current client-request and session/follow WebSocket envelopes, standardized snapshot.records and cursor handling, and routed follow through the Remote mux.", "Added bounded error, close, timeout, and duplicate-frame handling for Session follow so host capability failures remain visible.", "Aligned the dsh-v0.1.6-alpha.1 QA preset workflow, persona prefix, skills/list envelope, and commands/execute submittedAttachments argument.", "Added an explicit opt-in Harness host smoke and verified the embedded Workbench client's refresh and reconnect path."] },
      { summary: "Introduced verifiable evidence bundles and quality-workbench execution flows.", changes: ["Added terminal-run finalization, canonical manifest hashes, per-file SHA-256 digests, evidence types, MIME metadata, capture timestamps, and text/image previews.", "Added tamper detection, invalid-evidence quarantine, interrupted-finalization recovery, gate and open-defect reference protection, quotas, and path hardening.", "Added structured failure analysis, human-confirmed defect promotion, deterministic calculated regression sets, recalculation, and before/after test-run comparison.", "Bound test runs to source digests and Git commits, and completed evidence list, per-run evidence, download, and quality-workbench UI flows.", "Fixed stale or invalid evidence entering gates, restart recovery, referenced-evidence cleanup, MIME handling, traversal and symlink protection, unknown regression cases, and comparison validation."] },
      { summary: "Clearer DSH plugin and standalone installation guidance.", changes: ["Documented npx and source-checkout plugin installation paths.", "Added standalone npm installation, update, and qabench startup guidance."] },
      { summary: "DeepSeek Harness RPC compatibility and a narrower product boundary.", changes: ["Updated RPC endpoints and request envelopes for current DSH APIs.", "Removed retired Remote pairing checks while retaining local workbench and native session support."] },
      { summary: "Introduced the QA control workbench and computed delivery gates.", changes: ["Added traceable quality tasks, controlled runs, evidence bundles, and regression workflows.", "Added PASS, WARN, and BLOCK delivery decisions with controlled exceptions."] },
      { summary: "Refined recommendations and installation-state behaviour in the QA Skill catalog.", changes: ["Improved recommended-skill presentation for installed QA Skills.", "Updated bilingual README image assets."] },
      { summary: "Added safe QA Skill removal from the workbench.", changes: ["Showed installed state in the Skill list and added confirmed uninstall support.", "Added bilingual removal actions, confirmation, and completion feedback."] },
      { summary: "Added the language-aware QA Skill installer and completed QA preset workflow coverage.", changes: ["Added the QA Skill installation page and language categories.", "Completed the Quality Control Room preset and E2E workflow coverage, and fixed dynamic English UI text."] },
      { summary: "Refined desktop workbench interactions, branding, and triage views.", changes: ["Added the QA Workbench logo and improved header branding.", "Polished the Quality Control Room and triage dashboard, extending the card treatment across workspaces."] },
      { summary: "Completed English localization and introduced an automated test suite.", changes: ["Filled missing English UI strings for more complete language switching.", "Added npm test coverage for unit and Playwright end-to-end tests, with GitHub Actions automation."] },
      { summary: "Added persistent Chinese/English UI switching.", changes: ["Added a top-bar language control and local browser persistence.", "Localized navigation, dashboard, kanban, calendar, radar, chat, drawers, and modal titles."] },
      { summary: "Added the Test Mode QA preset and its one-command installer.", changes: ["Created the qa preset from DSH standard with test-quality principles.", "Added an installer and clearer guidance when the preset is missing."] },
      { summary: "Fixed workbench header layout and added return-to-DSH navigation.", changes: ["Prevented title and search overlap and corrected the terminal watermark alignment.", "Added the embedded-only Back to DSH action through postMessage."] },
      { summary: "Introduced the original QA Workbench.", changes: ["Added projects and iterations, a six-column QA kanban, AI tools, gate governance, and four QA themes.", "Added companion QA Skills installation and zero-dependency standalone or DSH-plugin operation."] },
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
      latestRelease: DSH_QA_RELEASE_FACTS[0],
    },
    labels: { features: "能力地图", showcase: "QA 工作台一览", flow: "证据驱动的交付流程", install: "安装与运行", ecosystem: "探索 QA 生态", releaseNotes: "版本变更", releaseLink: "查看 GitHub Release", commandLabel: "命令" },
    features: [
      { icon: "account_tree", title: "项目与迭代", description: "在一个工作区中管理项目、迭代、里程碑、看板、日历与本地 QA 材料。" },
      { icon: "smart_toy", title: "AI 协作", description: "通过 DSH 原生会话整理需求、用例、缺陷、报告和测试知识，不维护第二套模型配置。" },
      { icon: "folder_lock", title: "本地优先证据", description: "将运行中的 QA 数据保存在本机，并保留可追溯的来源快照、计划、执行与证据包。" },
      { icon: "verified_user", title: "质量控制", description: "围绕风险、受控执行、证据、回归与交付门禁开展可追责的人工决策。" },
    ],
    showcase: [
      { image: "/images/projects/dsh-qa/home.webp", width: 1200, height: 715, alt: "dsh-qa 测试首页", title: "测试首页", description: "一眼查看在办项目、超期事项、日程与最近 QA 动态。" },
      { image: "/images/projects/dsh-qa/board.webp", width: 1200, height: 583, alt: "dsh-qa 项目看板", title: "项目看板", description: "用可视化看板推进 QA 阶段，让风险和负责人始终清晰可见。" },
      { image: "/images/projects/dsh-qa/project-detail.webp", width: 1200, height: 604, alt: "dsh-qa 项目详情", title: "项目详情", description: "在同一处维护范围、阶段、本地文件、团队上下文和项目时间线。" },
      { image: "/images/projects/dsh-qa/calendar.webp", width: 1200, height: 583, alt: "dsh-qa 工作日历", title: "工作日历", description: "将评审、发布和里程碑安排在与 QA 工作直接关联的日历中。" },
      { image: "/images/projects/dsh-qa/test-mode.webp", width: 1200, height: 583, alt: "dsh-qa 测试模式", title: "测试模式", description: "在一个测试界面中使用原生 DSH 会话、项目上下文和已安装能力。" },
      { image: "/images/projects/dsh-qa/skills.webp", width: 1200, height: 583, alt: "dsh-qa QA Skills 目录", title: "QA Skills", description: "直接从工作台浏览、安装和管理面向任务的 QA 能力。" },
    ],
    deliveryFlow: [
      { title: "范围", description: "登记需求、风险、来源快照与验收标准。", status: "NEUTRAL" },
      { title: "计划", description: "评审测试计划与不可变执行配置。", status: "NEUTRAL" },
      { title: "执行", description: "在受控本地环境中运行已批准的计划。", status: "NEUTRAL" },
      { title: "证据", description: "归档已验证证据、分析失败并对比回归。", status: "NEUTRAL" },
      { title: "门禁", description: "PASS 可以进入交付；WARN 与 BLOCK 必须评审。例外不能把 BLOCK 变为 PASS。", status: "PASS" },
    ],
    installModes: [
      { id: "install-plugin", title: "在 DeepSeek Harness 中使用", description: "安装到当前使用的 DSH Web profile；插件变动后需重启 DSH Web UI 才会加载。", commands: ["npx @deepseek-ai/dsh plugin --profile web add dsh-qa"] },
      { id: "install-standalone", title: "安装本地工作台", description: "安装独立工作台以管理本地项目、看板与日历；DSH 原生会话、模型、技能和命令仍需通过插件模式使用。", commands: ["npm install -g dsh-qa"] },
    ],
    ecosystemLinks: [
      { label: "dsh-qa GitHub 仓库", href: "https://github.com/naodeng/dsh-qa", external: true },
      { label: "QA Skills", href: "/zh-cn/qaskills/" },
      { label: "QA Prompts", href: "/zh-cn/prompts/" },
      { label: "兼容性复盘文章", href: "/zh-cn/blog/ai-testing/dsh-qa-harness-api-compatibility-404/" },
    ],
    releases: releases([
      { summary: "完成 Quiet Studio 工作台视觉整理、测试资产归类，并保留初始化期间用户已选择的页面。", changes: ["完成 Quiet Studio「安静工作室」视觉整理，优化工作台的信息层级与浅色界面可读性。", "整理项目目录，将测试配置、测试说明和结果入口统一到 test/，并同步项目文档与流程图目录。", "修复应用初始化请求覆盖用户已选择页面的问题。", "移除 README 中过时的展示图片；验证通过 162 个单元/API 测试、32 个 Chromium E2E 测试和 npm pack --dry-run。"] },
      { summary: "新增双语设置、已安装版本展示与工作台内的版本历史。", changes: ["新增设置弹窗，包含双语切换、已安装与最新版本、兼容 DSH 版本、GitHub 仓库和项目官网链接。", "在品牌旁显示已安装版本与更新提示，并新增按最新优先分页的版本历史、随当前语言变化的摘要和 GitHub 详情入口。", "改善浅色背景下设置按钮的对比度，并移除未使用的主题与工作区宽度预设。", "验证通过 160 个单元/API 测试和 25 个 Chromium E2E 测试。"] },
      { summary: "将 QA profile 迁移到 Harness 0.1.7 bundle 模型，并稳定嵌入式 Workbench 生命周期。", changes: ["将 qa preset 迁移至 Harness 0.1.7 声明式 profile bundle 模型，并将 quality-control 改为独立 profile bundle。", "修复同源 Workbench popout 清理和重新挂载 iframe 的 frame readiness 时序，并将 Host Smoke 更新到 dsh-v0.1.7-alpha.1。", "验证通过 159 个单元/API 测试、23 个独立 Chromium E2E 和 6 个真实 qa bundle Host Smoke；独立 quality-control bundle 已静态验证，但其单独运行时 Host Smoke 不属于本次发布证据。"] },
      { summary: "将 QA 工作台迁移至 Harness 原生 Panel 契约。", changes: ["通过官方 sidebar.panellist 与 root 作用域 keyed main slot 挂载工作台，移除宿主 DOM selector、MutationObserver 和自定义 Panel 激活依赖。", "保留 iframe、弹窗、Panel 关闭和 postMessage 返回链路，并增加幂等清理与生命周期回归覆盖。", "宿主刷新后恢复项目标题；Panel 关闭或卸载时同步关闭弹窗。"] },
      { summary: "加固 DeepSeek Harness 兼容性，并完成嵌入式工作台宿主链路验证。", changes: ["固化当前 client-request 与 session/follow WebSocket 封装，统一读取 snapshot.records 与 cursor，并通过 Remote mux 处理 follow。", "补充 Session follow 的错误、关闭、超时与重复 frame 边界处理，避免宿主能力列表失败时静默显示为空。", "对齐 dsh-v0.1.6-alpha.1 的 QA preset workflow、persona prefix、skills/list 请求封装和 commands/execute 的 submittedAttachments 参数。", "新增显式 opt-in 的 Harness host smoke，并验证嵌入式 Workbench client 的刷新与重连路径。"] },
      { summary: "引入可验证的质量证据包与质量工作台执行链路。", changes: ["新增终态运行 finalize、规范 manifest hash、逐文件 SHA-256、证据类型、MIME、捕获时间和文本/图片预览。", "新增篡改检测、无效证据隔离、中断 finalize 恢复、门禁与未关闭缺陷引用保护、配额和路径安全检查。", "新增结构化失败分析、人工确认后的缺陷升级、确定性计算回归集、回归集重算和测试运行前后对比。", "将测试运行绑定到源文件摘要与 Git commit，并补齐证据列表、单次运行证据、下载和质量工作台 UI。", "修复无效或过期证据进入门禁、重启恢复、引用中证据清理、MIME、路径越界、符号链接、未知回归用例和运行对比参数校验问题。"] },
      { summary: "补充 DSH 插件与独立运行的安装说明。", changes: ["说明 npx 与源码工作区的插件安装路径。", "补充独立模式的 npm 安装、更新与 qabench 启动方式。"] },
      { summary: "适配 DeepSeek Harness RPC，并收敛产品边界。", changes: ["更新当前 DSH API 的 RPC 端点与请求封装。", "移除废弃的 Remote 配对检查，保留本地工作台与原生会话支持。"] },
      { summary: "引入研发质量控制工作台与计算型交付门禁。", changes: ["新增可追溯的质量任务、受控运行、证据包与回归工作流。", "新增 PASS、WARN、BLOCK 交付决策与受控例外。"] },
      { summary: "优化 QA Skill 目录的推荐与安装状态展示。", changes: ["改进已安装 QA Skill 的推荐展示。", "更新中英文 README 图片资源。"] },
      { summary: "增加工作台内的安全 QA Skill 卸载能力。", changes: ["Skill 列表展示安装状态，并支持确认后卸载。", "补充中英文卸载操作、确认与完成反馈。"] },
      { summary: "增加按语言分类的 QA Skill 安装页，并完善 QA preset 流程覆盖。", changes: ["新增 QA Skill 安装页和语言分类。", "完善质量控制室 preset 与端到端流程覆盖，并修复动态 UI 的英文本地化。"] },
      { summary: "优化桌面工作台交互、品牌与 triage 视图。", changes: ["新增 QA Workbench Logo，并改进顶部品牌标识。", "细化质量控制室与 triage 看板，并将卡片视觉延展到各工作区。"] },
      { summary: "完善英文界面本地化，并引入自动化测试体系。", changes: ["补齐遗漏英文文案，提升语言切换完整性。", "新增 npm test 的单元与 Playwright 端到端测试，并由 GitHub Actions 自动运行。"] },
      { summary: "新增可持久化的中英文界面切换。", changes: ["增加顶栏语言控制与本地浏览器持久化。", "覆盖导航、首页、看板、日历、雷达、对话、抽屉和模态框标题。"] },
      { summary: "新增测试模式 QA preset 及一键安装器。", changes: ["基于 DSH standard 创建 qa preset，并内置测试质量原则。", "新增安装脚本，以及 preset 缺失时的明确引导。"] },
      { summary: "修复工作台顶部布局，并增加返回 DSH 的导航。", changes: ["修复标题与搜索框重叠及终端水印对齐问题。", "通过 postMessage 增加仅嵌入模式显示的返回 DSH 操作。"] },
      { summary: "发布最初版本的 QA 工作台。", changes: ["新增项目与迭代、六列 QA 看板、AI 工具、门禁治理和四套 QA 主题。", "新增配套 QA Skills 安装，并支持零依赖独立运行或作为 DSH 插件安装。"] },
    ]),
  },
};
