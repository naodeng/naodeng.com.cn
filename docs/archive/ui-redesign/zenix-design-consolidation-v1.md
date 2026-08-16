# Zenix 设计收敛实施记录 v1

- 分支：`design-zenix-consolidation`（基于 `ads-entry-optimization`）
- 日期：2026-08-13
- 规范落点：`docs/standards/zenix-design.md`（现行）、`docs/standards/apple-design-redesign.md`（已标注废弃）

## 背景

站点实际已是 Zenix 风格（indigo + 冷灰 + 玻璃页脚），但设计文档仍是 Apple 版且描述不存在的品牌橙 token。审计发现：双主色、圆角散值 10+ 种、首页 hero 过载 + 伪控制台、首页连续 5 区块同布局、纯黑顶栏、emoji 图标、英文破折号、页脚双 CSS。

用户确认方向：indigo 唯一主色；顶栏保持 Zenix 白玻璃（审计误判为纯黑，实测白玻璃与整体语言自洽）；首页 hero 精简、入口并入 Explore。

## 改动清单

### Token（`src/styles/base.css` + 全站）

- 删除 `--color-accent`（teal #14b8a6），新增 `--color-theme-light`（#818cf8，渐变浅端）
- `--gradient-theme` / `--gradient-hero` / 背景网格收敛为 indigo 系
- 全站 15+ 处 teal 引用替换：PageHeadline、Footer、Header、FrameworkCard、guild 文章页、prompts 首页、qaskills 首页、首页（含硬编码 rgba）
- 圆角归一：四档 token（8/12/18/pill）+ 50% 圆形 + 滚动条豁免；全站约 30 个文件的散值（2/3/4/5/6/7/9/10/14/16/20/22/24/28/50px、0.5/0.75rem）机械归一到 `var(--radius-*)`
- `tests/unit/zenixDesignTokens.test.ts`：断言改为「indigo 单一主色、teal accent 不存在」

### 首页重组（`src/pages/[lang]/index.astro` + `consts.ts` + 2 个首页组件）

- Hero 精简：只留标题/副标题/2 个 CTA；删除 home-primary-entries（含内联数据）与伪控制台 home-hero-console（含全部 console 样式与移动端规则）；类名 `home-apple-hero` → `home-hero`
- 入口并入 Explore：`HOME_EXPLORE_CARDS` zh 补 blog 卡（7 张）；en 保持 6 张（blog 已有，wiki 语义由 AIWiki 卡覆盖，en 站内无 /wiki 路径）
- 布局多样化：最新文章改纵向行列表（5 篇，新增 `.home-post-list` 样式）；精选项目改紧凑双列列表（`.home-project-list`，移动单列）
- 色带类名 `home-band--parchment` → `home-band--muted`（index、HomeTaskNavigator、HomeProofAndCases）；首页样式块清理死代码
- 测试同步：`apple-home.spec.ts`（删 console/primary-entry 测试，新增 hero CTA 测试，explore 卡数 zh 7 / en 6，hero 类名）；`tracking-contract.spec.ts`（blog 入口选择器改 hero CTA）；`navigation.spec.ts`（hero 类名）
- 埋点契约保持：hero CTA 覆盖 /blog 与 /wiki|/AIWiki，Explore 卡覆盖其余路径

### 细节清理

- 顶栏：保持 Zenix 白玻璃 skin（实测生效样式），清理第一块中被覆盖的黑色死样式（原 #000 纯黑规则）
- emoji → Material Icons Sharp：prompts 首页流程卡 9 个、GuildFeatures（徽章 + 12 图标）、GuildHero、GuildOverviewPage、LearningWorkflow、FrameworkWorkflow、框架页学习路径标题、guild.config.ts 3 个 testType 图标 + 3 处渲染点（TestTypeSection×2、framework 页 badge）、sponsor
- 英文破折号：copyright 页分隔符改冒号、sponsor 英文句重组、guild 框架页 meta description 改逗号；中文「——」保留
- 页脚：`Footer.astro` 两套 CSS 合并为单一块（Zenix 玻璃卡为底，保留旧块独有的 lang-toggle/lang-label/footer-nav-group/copyright/tech-* 选择器并 token 化旧色，保留 `position: relative` 与移动端 2 列导航）

### 文档

- 新建 `docs/standards/zenix-design.md`：token 契约、四档圆角硬规则、表面材质、首页约定、图标/文案约定、浅色唯一决策、变更流程
- `docs/standards/apple-design-redesign.md` 头部标注废弃并指向新规范
- 本文档（实施记录）

## 验证

- [x] `npm run build`（875 页，exit 0）
- [x] `npm test`（76/76）+ `cd tests && npm run test:unit`（76/76，含 zenix token 契约测试）
- [x] e2e：`apple-home`、`tracking-contract`、`navigation`、`header`、`accessibility-contrast`、`accessibility-hard-metrics`、`responsive`、`ad-low-intrusion` 共 92/92 通过
- [x] preview 程序化目检（Playwright 计算样式断言）：首页 hero 380px、伪控制台/入口卡已移除、Explore zh 7 / en 6、文章行列表 5 行、项目列表桌面 2 列/移动 1 列、白玻璃顶栏（78% 白 + 22px blur + hairline）、页脚玻璃卡 18px、全站无 teal、无 emoji、无横向溢出
