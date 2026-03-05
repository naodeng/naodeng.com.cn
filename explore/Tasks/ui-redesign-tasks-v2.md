# UI Redesign Tasks v2

## Milestones
- M0 需求冻结：PRD/Design/Tasks 三文档冻结，指标口径冻结。
- M1 基础样式完成：token 与基础组件统一完成。
- M2 首页完成：首页首屏与信息补充模块上线就绪。
- M3 详情页完成：TOC/作者卡/相关词条稳定。
- M4 频道完成：Wiki/AIWiki/Guild 风格与广告规则统一。
- M5 发布完成：回归通过并一次性发布。

## Phase 0: Alignment（需求定稿）
- [ ] T0.1 评审并确认 `ui-redesign-prd-v2.md` 的范围与非范围。
- [x] 视觉方向确认：偏文档克制（信息优先、弱装饰）。
- [x] 卡片封面策略确认：弱化封面（信息优先）。
- [x] 确认广告位密度规则：每页>=1；列表页每屏<=1；详情页正文中部<=1。
- [x] 确认上线节奏：一次性发布。
- [ ] T0.2 建立指标基线（上线前 28 天：CTR/滚动深度/二跳率/Lighthouse）。

### Execution Meta
- Owner: Product + Design + Frontend + QA
- Estimate: 0.5-1 天
- Depends On: 无
- Exit Criteria: 决策项全确认，基线数据已记录

### Outputs
- `explore/Requirements/ui-redesign-prd-v2.md`（冻结版本）
- `explore/Design/ui-redesign-design-v2.md`（冻结版本）
- 基线数据记录（文档或表格链接）

## Phase 1: Design Tokens & Base（基础层）
### Execution Meta
- Owner: Design System + Frontend
- Estimate: 2-3 天
- Depends On: Phase 0
- Exit Criteria: token 与全局样式统一完成，基础页面无明显回归

### Tasks
- [ ] T1.1 收敛全局 token（color/typography/spacing/radius/shadow/motion）。
- [ ] T1.2 定义组件密度档位（default/compact）。
- [ ] T1.3 统一按钮、链接、输入、标签、卡片基础样式。
- [ ] T1.4 完成 dark/light + reduced-motion 兼容。

### Deliverables
- [ ] `src/styles/base.css` token 清单与注释完善。
- [ ] 设计规范速查表（可附在 `explore/Design`）。

### Acceptance
- [ ] 基础组件在 Blog/Wiki/AIWiki/Guild 外观一致。
- [ ] 无明显颜色与间距漂移。
- [ ] 键盘焦点可见，且不依赖鼠标悬停状态。

## Phase 2: Homepage Experience（首页体验）
### Execution Meta
- Owner: Frontend + Design
- Estimate: 2-4 天
- Depends On: Phase 1
- Exit Criteria: 首页首屏与卡片规范生效，中英文首页一致

### Tasks
- [ ] T2.1 重构 Hero：2-3 行摘要 + 主/次 CTA。
- [ ] T2.2 在 Hero 下方新增“信息补充模块”（能力点/专题入口/关键数据）。
- [ ] T2.3 增加/优化快速入口区（Blog/Wiki/AIWiki/Guild）。
- [ ] T2.4 统一首页卡片样式（弱化封面、标题/摘要优先、标签/动作统一）。
- [ ] T2.5 调整区块垂直间距，压缩非必要留白。

### Deliverables
- [ ] `/[lang]/index.astro` 改造。
- [ ] 首页卡片样式与交互规范。

### Acceptance
- [ ] 首屏关键路径可在 3 秒内识别并点击。
- [ ] 中英首页视觉一致且无溢出问题。
- [ ] 首屏文案控制在 2-3 行，信息丰富度由次级模块承担。
- [ ] 卡片封面不抢占注意力，标题与摘要在首屏可优先扫读。
- [ ] 列表页广告密度满足每屏最多 1 个，且不遮挡主要信息。

## Phase 3: Detail Reading Flow（详情页阅读流）
### Execution Meta
- Owner: Frontend + QA
- Estimate: 3-5 天
- Depends On: Phase 1
- Exit Criteria: TOC/侧栏/相关词条稳定，详情阅读体验达标

### Tasks
- [ ] T3.1 TOC 高亮策略统一（h2/h3、页底兜底、滚动跟随）。
- [ ] T3.2 右侧栏高度限制在正文范围内。
- [ ] T3.3 作者卡高度压缩并保持信息完整。
- [ ] T3.4 统一“相关词条/相关文章”模块样式与位置。
- [ ] T3.5 代码块工具条（语言标识 + 复制）统一。

### Deliverables
- [ ] `TableOfContents.astro`、作者卡、相关词条组件改造。
- [ ] Blog/Wiki/AIWiki/Guild 详情页样式一致化。

### Acceptance
- [ ] 滚动过程中 TOC 不丢焦、不乱跳。
- [ ] 移动端折叠导航可正常使用。
- [ ] TOC 仅在正文可视高度范围内展示，不侵入评论/页脚区域。

## Phase 4: Wiki + AIWiki + Guild（内容发现层）
### Execution Meta
- Owner: Frontend + Content + QA
- Estimate: 3-5 天
- Depends On: Phase 2, Phase 3
- Exit Criteria: 三频道统一与广告低干扰规则全部落地

### Tasks
- [ ] T4.1 Wiki/AIWiki 首页卡片密度统一，筛选与字母导航增强。
- [ ] T4.2 Guild 详情页补齐相关词条或相关文章推荐。
- [ ] T4.3 统一详情页广告槽视觉与占位策略。
- [ ] T4.4 按规则实现广告密度控制（每页>=1、列表页每屏<=1、详情页正文中部<=1）。
- [ ] T4.5 实现广告“低干扰”约束（禁入 H1-首段区、弱视觉样式、稳定占位高度）。
- [ ] T4.6 为广告例外页建立白名单逻辑（404、条款、短内容页）。

### Deliverables
- [ ] `wiki/*`, `AIWiki/*`, `guild/*` 页面风格统一清单。
- [ ] 相关词条推荐规则说明（来源与优先级）。

### Acceptance
- [ ] 三类频道可互相导流，二跳路径清晰。
- [ ] 侧栏、目录、正文三栏在桌面端布局稳定。
- [ ] 广告位数量与位置满足密度规则，且不破坏阅读节奏。
- [ ] 广告不插入 H1 与首段正文之间，正文主链路连续。
- [ ] 广告渲染不引起明显 CLS 波动（占位生效）。
- [ ] 例外页可按策略不展示广告位且不影响布局。

## Phase 5: QA, Metrics & Launch（验证与发布）
### Execution Meta
- Owner: QA + Frontend + Ops
- Estimate: 2-3 天
- Depends On: Phase 2, Phase 3, Phase 4
- Exit Criteria: 指标与回归达标，满足一次性发布条件

### Tasks
- [ ] T5.1 增补 E2E：TOC、筛选、搜索、复制、相关词条、移动端导航。
- [ ] T5.2 跑 Lighthouse 与 Web Vitals 对比基线。
- [ ] T5.3 增加广告低干扰专项检查（位置、误触风险、视觉层级、CLS）。
- [ ] T5.4 进行双语页面抽样视觉回归（至少 10 页）。
- [ ] T5.5 制定回滚方案（样式开关/组件开关）。
- [ ] T5.6 发布前冻结 UI 变更窗口，完成一次性切换演练。

### Deliverables
- [ ] 测试报告与问题清单。
- [ ] 发布说明与回滚手册。

### Acceptance
- [ ] 无 P1/P2 回归。
- [ ] 指标达到 PRD 目标或给出偏差说明。
- [ ] 可访问性硬指标通过（对比度/触控面积/最小字号）。
- [ ] CLS <= 0.1，广告低干扰专项检查通过。

## Day-by-Day Suggested Sequence（8-12 天）
- Day 1: 完成 Phase 0 与基线采集（T0.1/T0.2）。
- Day 2-3: 完成 Phase 1（T1.1-T1.4）。
- Day 4-5: 完成 Phase 2（T2.1-T2.5）。
- Day 6-8: 完成 Phase 3（T3.1-T3.5）。
- Day 9-10: 完成 Phase 4（T4.1-T4.6）。
- Day 11-12: 完成 Phase 5（T5.1-T5.6）并准备一次性发布。

## 依赖与阻塞项
- [ ] SEO 改造项与 UI 改造项冲突排期。
- [ ] 内容团队确认中英文文案长度边界。
- [ ] 广告位实现与 CLS 监控联调（防止影响体验与稳定性）。

## 优先级建议
1. P0：TOC 稳定性、正文可读性、首页首屏路径。
2. P1：卡片统一、相关词条统一、移动端折叠交互。
3. P2：微动效与视觉细节（保持克制，不做品牌强化装饰）。
