# 全站设计审计报告 v1（design-taste-frontend）

- 分支：`explore`（已快进同步 `origin/main` @ `7a2732d17`）
- 日期：2026-08-13
- 审计依据：`docs/standards/zenix-design.md`（现行规范）+ design-taste-frontend 技能（anti-slop 审计模式）
- 审计范围：首页、Header/Footer 壳层、Guild 全体系、Prompts 两页、QA Skills 两页、Blog 详情/列表、Wiki/AIWiki、Docs 布局、广告组件

## 背景与设计读判

**读判：** 双语 QA 知识库/个人博客站，面向测试工程师群体，采用自建「Zenix 冷色 SaaS」视觉语言（indigo 单一主色 + 冷灰画布 + 42px 细网格），内容页克制、视觉语言集中在壳层与首页。

**三档旋钮读数（现状）：**

| 旋钮 | 读数 | 依据 |
| --- | --- | --- |
| DESIGN_VARIANCE | 3-4 | 全站居中布局、等分 3 列网格、对称间距 |
| MOTION_INTENSITY | 3 | 仅 CSS hover 位移 + 页面淡入 + 下拉动画，reduced-motion 有全局降级 |
| VISUAL_DENSITY | 4-5 | 首页中等密度；Guild 内容页偏 6 |

**结论先行：规范本身（zenix-design.md）写得很好，但代码合规度只有约 60%。** 三大重灾区：旧皮肤死代码（Header/首页双样式系统）、glow 发光阴影（12 个文件）、圆角散值（54+ 处硬编码 + 3 处非法档位）。

## 问题清单

### P0 必须修复（功能性 / 可见 bug）

1. **移动端导航抽屉：白字白底，不可读** — `src/components/Header.astro:1013-1025`。旧黑色顶栏皮肤里 `.mobile-priority-nav a` 定义 `color: #fff` + `background: color-mix(white 8%)`，Zenix 覆盖块（1078 行起）只改了 `ul` 面板为 `rgba(255,255,255,0.82)`，没有重新给三个优先入口链接上色。移动端打开抽屉后「博客 / Wiki / 提示词」白字白底，icon 也是 `white 78%`。这是双皮肤死代码模式的直接代价。
2. **Guild 筛选 pill 显示原始 ligature 文本** — `src/components/guild/GuildOverviewPage.astro:64-65`。`{t.icon && <span aria-hidden="true">{t.icon}</span>}` 的 span 缺少 `material-icons-sharp` class，ligature 不生效。已在构建产物确认：pill 上渲染出字面文本「power 接口自动化测试」「bolt 性能测试」。
3. **危险残留（当前无害，需删除）** — `src/pages/[lang]/blog/[...id].astro:240` 的 `<Content class="material-icons" />`。已验证 dist 构建产物：该 class 未落到任何 DOM 节点（Astro Content 组件不转发此 prop），线上正文正常。但 base.css 的 `[class^="material-icons"]` 规则会施加 `width:1em; height:1em; overflow:hidden`，一旦 Astro 升级后开始转发 props，整篇正文会被裁剪成 16px 方块。删除该无意义 class。

### P1 违反自身 Zenix 规范

4. **glow 发光阴影泛滥（违反 §2.4 阴影体系）** — `--glow-theme` 本身不应存在（§2.4 规定阴影是 slate 色相的 `--shadow-sm/md/lg`）。全站 12 个文件在用 `box-shadow: 0 0 12/20px var(--glow-theme)`：Guild 体系 6 处（GuildFeatures、TestTypeSection、FrameworkCard、LearningWorkflow、FrameworkWorkflow、guild/[testType]）、blog/index、wiki/index、AIWiki/index 各 1 处；另 prompts/index:387、qaskills/index:508 主按钮用 `0 14px 28px rgba(79,70,229,0.2)` 发光投影。
5. **圆角散值（违反 §2.3 四档硬规则）** — 首页三个新组件：HomeTaskNavigator 22px、CoreCapabilities 24px、HomeProofAndCases 20px，全部不在 8/12/18/9999 档内，且恰好是 Zenix 规范生效当天新增的界面；另有 54+ 处硬编码 `8px/12px/18px` 字面值（应为 `var(--radius-sm/md/lg)`）、`Article.astro:114` 回退值 4px、tab 按钮 0 圆角。
6. **英文 em-dash（违反 §5）** — `src/consts.ts:345` 首页 hero 副标题（可见 UI 文案）"Testing wiki, essays, prompts, and workflows — a readable knowledge base."；`consts.ts:688/744/756` 三处英文 meta description。
7. **emoji 当图标（违反 §5）** — `prompts/[testingType].astro:231` 的 💡 用作「使用说明」图标（规范称「已全部替换」，实际未清干净）。
8. **手写 SVG 图标（违反 §5 统一 Material Icons Sharp）** — TestTypeSection/LearningWorkflow 箭头、FrameworkCard 与 guild 详情的 GitHub/Docs 图标、blog 详情的 meta 四图标、prompts 页的 chevron/copy。偏离最集中的区域是 Guild 体系。
9. **单一主色被框架品牌色击穿（违反 §2.1）** — `TestTypeSection:53` / `guild/[testType]:86` / `FrameworkCard:28` 用 `--fw-color` 给框架卡上品牌色顶条（Playwright 绿、Postman 橙等）+ `#6366f1` 硬编码回退。token 契约说 indigo 是唯一 accent，但卡片 hover 时会冒出六七个颜色。
10. **旧皮肤死代码（双样式系统叠加）** — Header.astro 前约 610 行整套 Apple 黑色顶栏皮肤被 Zenix 块覆盖（P0-1 的抽屉白字 bug 正是漏网之鱼）；`src/pages/[lang]/index.astro` 约 200 行 Apple 时代样式（`#1d1d1f`、`#e0e0e0`、`#6e6e73`、`#fafafc`）被后续 Zenix 块覆盖；prompts/qaskills 两页的 `rgba(148,163,184,…)` slate 边框体系、`#1a1a1f`、`text-shadow: 0 1px 2px rgba(0,0,0,0.2)`（FrameworkCard）、`-webkit-overflow-scrolling: touch` 等旧风格残留。
11. **超小字号（<12px 不可读线）** — Guild 框架卡 `__lang` 0.65rem（10.4px）、`__count` 0.68rem、`__desc` 0.73rem；qaskills `.lifecycle-plus-tag` 0.68rem、`.tag` 0.72rem；prompts `.prompt-detail-badge` 0.72rem；Article `.code-copy-btn` 0.7rem。
12. **首页文案散写模板（违反 §5 文案治理）** — `index.astro:308/358/370-377/479/493-499/518`「按测试类型精选提示词」「查看全部提示词」「专业质量保证技能库」「进入百科」「AI 百科」等 8+ 处三元表达式散写，未走 consts.ts。

### P2 设计质量

13. **首页布局家族连用（违反 §4「布局家族不连用」）** — Wiki → AIWiki → Tags 三个区块是连续三个 chip cloud，布局完全重复；卡片阵列家族出现 5 次（Explore、Prompts 两个网格、QA Skills + 任务网格/能力网格同构）。
14. **色带机制双轨、class 说谎** — `home-band--white/muted` 两个 class 在 Zenix 块中被置为 `background: transparent`（视觉上无效），实际节奏全靠 `:nth-of-type(even)::before` 按 DOM 序号驱动。加/删任意区块全页色带整体错位，且 class 名与实际渲染的色带不对应。
15. **CTA 标签重复** — 首页 13+ 张卡全部写「了解更多」，任务卡全部写「开始任务 →」；同一意图「浏览百科」出现 3 次（hero 幽灵按钮 + 百科区 + AI 百科区）。
16. **渐变文字 ×2** — Header 品牌名 gradient clip-text（wordmark 可接受）+ Guild hero 大标题 `background-clip: text`（建议改纯 `--color-main`）。
17. **性能：72 个 chip 各带 `backdrop-filter: blur(14px)`** — 首页 Wiki 24 + AIWiki 18 + Tags 30 个 chip 全部 backdrop-filter，移动端 GPU 合成开销可观；chip 底色已是半透明白，删掉 blur 视觉几乎无差异。
18. **hover 体系不统一** — 首页卡 -4px + indigo 边框有 hover、任务卡/能力卡无 hover、Guild 体系 -4px + glow；`:active` 触觉反馈（scale 0.98）几乎全站缺失。
19. **死数据** — `HOME_PRIMARY_MODES`（`src/data/homeTaskEntries.ts:29`）仅单元测试引用，无页面消费。
20. **小 a11y 欠账** — qaskills 首页搜索框无 label/aria-label 仅 placeholder；prompts/qaskills 详情页 tab 无键盘方向键导航、无 roving tabindex；LocaleSelect `aria-label="Language"` 未本地化；Footer tech-stack `opacity: 0.7` 叠加后对比度约 3.4:1 低于小字 AA 4.5:1；页脚社交图标 `position: absolute` 挂在 `.l-footer` 上而非卡片容器（footer-container 无 `position: relative`），结构脆弱。

## 值得保留（不要动）

- Token 契约 + 契约测试（`tests/unit/zenixDesignTokens.test.ts`）——治理模型本身是优秀的
- 全局 + 分组件 `prefers-reduced-motion` 降级
- 广告「无填充不占位」`data-ad-collapse` 体系
- skip-link、focus-visible、`role="list"`、aria-labelledby 基础扎实；30 个 e2e spec 覆盖广
- 中文文案具体克制（「分析需求 / 制定测试策略」等），无 AI 味、无假数字
- 玻璃顶栏/页脚壳层符合规范且克制

## 优化方案

### 阶段 1 · 修 bug（约 0.5 天）

1. Header 抽屉：为 `.mobile-priority-nav a` 及 icon 补 Zenix 深色文字样式（顺手删掉整个旧皮肤块）
2. GuildOverviewPage 筛选 pill：span 补 `material-icons-sharp` class
3. 删 blog `Content` 上的 `material-icons` class

### 阶段 2 · 规范收敛（2-3 天）

4. 删除 Header（约 610 行）与首页（约 200 行）旧皮肤死代码，单套样式系统
5. `--glow-theme` 全量替换为 `--shadow-md`（或删 token）；同步改 zenixDesignTokens 测试锁定「禁 glow」
6. 圆角全量走 `var(--radius-*)`；22/24/20px 三处并入 `--radius-lg` 档；把「禁散写圆角」写进契约测试（扫 .astro 文件断言）
7. 修 consts.ts 3 处 em-dash、prompts 💡、Guild 体系手写 SVG → Material ligature
8. 框架品牌色顶条收敛：保留 logo 原色（合理），删 `--fw-color` 顶条或统一为 indigo
9. 修复全部 <12px 字号（最小 0.75rem/12px）

### 阶段 3 · 设计质量（1-2 天）

10. 首页去重布局家族：Wiki + AIWiki 合并为一个区块（或 Wiki 列表化、AIWiki 保留 chip）；三连 chip cloud 必须打破
11. 色带机制归一：把 `:nth-of-type(even)::before` 改为按 class 渲染，`home-band--white/muted` 恢复真实语义
12. chip 删 backdrop-filter；「了解更多」类标签去重（卡片底部文字链可全部移除，整卡已是链接）；「浏览百科」意图收敛为一个标签
13. 统一 hover 体系（-2~4px + indigo 边框 + `:active` scale 0.98），Guild hero 标题去渐变文字
14. 页脚社交图标容器补 `position: relative`

### 阶段 4 · 治理固化（持续）

15. 扩展 token 契约测试为「样式 lint」：扫描 .astro 断言禁 glow、禁散写圆角、禁 emoji、禁英文 em-dash（现有契约测试模式天然可扩展）
16. e2e 补两条：移动端抽屉优先入口对比度、guild 筛选 pill 不含裸文本（防 P0 回归）

## 验证方式（本次审计）

- 代码级：对照 `zenix-design.md` 逐条核对 token / 圆角 / 图标 / 文案约定；grep 扫描散写圆角、glow、旧色残留
- 产物级：读取 `dist/`（当日构建）验证 Guild 筛选 pill 裸文本、blog `Content` class 未落 DOM、移动端优先入口结构
- 测试覆盖核对：`tests/e2e/specs/`（responsive / accessibility-contrast / apple-home 等）已覆盖桌面与 390px 横向溢出，未覆盖移动抽屉对比度与筛选 pill 渲染
