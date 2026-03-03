# SEO Optimization Tasks v1

## Phase 1: Baseline Audit

- [ ] 全站 URL 清单导出（按 `en/zh-cn`、页面类型分组）。
- [ ] 扫描并记录：状态码、title、description、canonical、robots、json-ld。
- [ ] 输出问题台账（P0/P1/P2）：缺失、重复、冲突、死链、重定向链、孤儿页。
- 交付物：`SEO-baseline-report-v1.md`

## Phase 2: Metadata & Indexability Fix

- [ ] 统一 metadata 规范（长度、唯一性、语言一致性）。
- [ ] 修复 canonical 与 hreflang 异常。
- [ ] 校验并修正 robots/sitemap 规则冲突。
- [ ] 优化 sitemap 页面超长列表策略（分段或限制首屏条数）。
- 交付物：`metadata-indexability-fix-pr`

## Phase 3: Structured Data Hardening

- [ ] 梳理 Blog/Wiki/AIWiki 模板的 schema 字段映射。
- [ ] 增加结构化数据字段校验脚本（必填项与格式）。
- [ ] 覆盖关键页面抽检（首页、列表页、详情页）。
- 交付物：`structured-data-check-report`

## Phase 4: Internal Linking Optimization

- [ ] Wiki/AIWiki `related` 关系补齐与去重。
- [ ] 修复失效术语链接与历史 slug 兼容映射。
- [ ] 建立“术语页 <-> 博客页”互链准则并批量落地。
- 交付物：`internal-link-optimization-report`

## Phase 5: QA Gate & Monitoring

- [ ] 新增 SEO 静态检查命令并接入 CI。
- [ ] 扩展 `tests/e2e/specs/seo.spec.ts`：从存在性升级到正确性。
- [ ] 建立每周 SEO 质量报告模板（覆盖、CTR、错误分布）。
- 交付物：`seo-ci-gate + weekly-report-template`

## Definition of Done

- [ ] 主分支构建中 SEO 门禁稳定通过。
- [ ] P0/P1 问题完成闭环并有复测记录。
- [ ] 发布后 7/14/30 天完成三次跟踪复盘。

