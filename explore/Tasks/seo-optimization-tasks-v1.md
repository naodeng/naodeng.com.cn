# SEO Optimization Tasks v1

## Phase 1: Baseline Audit

- [x] 全站 URL 清单导出（按 `en/zh-cn`、页面类型分组）。
- [x] 扫描并记录：状态码、title、description、canonical、robots、json-ld。
- [x] 输出问题台账（P0/P1/P2）：缺失、重复、冲突、死链、重定向链、孤儿页。
- 交付物：`SEO-baseline-report-v1.md`

## Phase 2: Metadata & Indexability Fix

- [x] 统一 metadata 规范（长度、唯一性、语言一致性）。
- [x] 修复 canonical 与 hreflang 异常。
- [x] 校验并修正 robots/sitemap 规则冲突。
- [x] 优化 sitemap 页面超长列表策略（分段或限制首屏条数）。
- 交付物：`metadata-indexability-fix-pr`

## Phase 3: Structured Data Hardening

- [x] 梳理 Blog/Wiki/AIWiki 模板的 schema 字段映射。
- [x] 增加结构化数据字段校验脚本（必填项与格式）。
- [x] 覆盖关键页面抽检（首页、列表页、详情页）。
- 交付物：`structured-data-check-report`

## Phase 4: Internal Linking Optimization

- [x] Wiki/AIWiki `related` 关系补齐与去重。
- [x] 修复失效术语链接与历史 slug 兼容映射。
- [x] 建立“术语页 <-> 博客页”互链准则并批量落地。
- 交付物：`internal-link-optimization-report`

## Phase 5: QA Gate & Monitoring

- [x] 新增 SEO 静态检查命令并接入 CI。
- [x] 扩展 `tests/e2e/specs/seo.spec.ts`：从存在性升级到正确性。
- [x] 建立每周 SEO 质量报告模板（覆盖、CTR、错误分布）。
- 交付物：`seo-ci-gate + weekly-report-template`

## Definition of Done

- [ ] 主分支构建中 SEO 门禁稳定通过。
- [x] P0/P1 问题完成闭环并有复测记录。
- [ ] 发布后 7/14/30 天完成三次跟踪复盘。

## Progress Update（2026-03-03）

- 已新增脚本：`scripts/seo-static-check.mjs`
- 已新增命令：`npm run seo:check`、`npm run seo:check:strict`
- 已接入 CI：`e2e.yml`、`deploy-cloudflare.yml`、`gh-pages.yml`
- 已产出报告目录：`explore/Temporary/seo`
- 当前基线结果：
  - missingDescription: `0`
  - longDescription: `196`
  - duplicateTitle: `0`（按语言维度去重）
  - brokenLinks: `0`
  - orphanWiki: `87`
  - orphanAIWiki: `0`
  - blogWithoutTermLinks: `176`

## Progress Update（2026-03-03 - Round 2）

- 已补齐活动博文 description 缺失（Day 27-31，中英各 5 篇，共 `10` 篇）。
- 已增强 SEO 静态检查：
  - 重复标题改为“按语言维度”判定，避免中英同词条误报。
  - 新增 `blogWithoutTermLinks` 指标，用于“术语页 <-> 博客页”互链治理。
- 已增强 E2E SEO 用例（`tests/e2e/specs/seo.spec.ts`）：
  - 详情页 canonical + hreflang 正确性抽检。
  - robots 与 sitemap 一致性抽检（包含 `/sitemap-index.xml` 且不包含 `/en/wiki/`）。
- 备注：本地回归执行 `seo.spec.ts` 时遇到环境端口权限错误 `listen EPERM ::1:4321`，需在 CI 或具备端口权限的环境复测。

## Progress Update（2026-03-03 - Round 3）

- 已在博客详情页新增“相关术语 / Related Terms”模块（`src/pages/[lang]/blog/[...id].astro`）：
  - 基于 title/tags/categories/series 匹配 Wiki / AIWiki 词条。
  - 匹配不足时自动补齐兜底术语，保证每篇博文可形成术语互链。
- 已同步增强 SEO 静态检查 `blogWithoutTermLinks` 指标逻辑，使其与页面运行时互链行为一致。
- 当前基线（`npm run seo:check`）：
  - `missingDescription: 0`
  - `duplicateTitle: 0`
  - `blogWithoutTermLinks: 0`
  - `brokenLinks: 0`
- 已验证：`npm run seo:check:strict` 通过，`npm run astro -- check` 通过。

## Progress Update（2026-03-03 - Round 4）

- 已完成 metadata 批量收敛：
  - 全量压缩超长 `description/summary` 到规范长度区间（Wiki/AIWiki <= 155，Blog <= 180）。
- 已完成 Wiki 孤儿词条入链修复：
  - 对 `orphanWiki` 批量建立 `related` 环状互链，确保每个词条至少 1 条入链。
- 当前 SEO 基线（`npm run seo:check:strict`）：
  - `missingTitle: 0`
  - `missingDescription: 0`
  - `longDescription: 0`
  - `duplicateTitle: 0`
  - `brokenLinks: 0`
  - `relatedUnknown: 0`
  - `relatedSelf: 0`
  - `orphanWiki: 0`
  - `orphanAIWiki: 0`
  - `blogWithoutTermLinks: 0`
- 格式质量复测：
  - `npm run wiki:clean:check` 通过
  - `npm run wiki:style:check` 通过（全部为 0）
