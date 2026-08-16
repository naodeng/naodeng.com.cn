# UI Redesign Design v2

## 参考站点

- https://astro.build
- https://docs.astro.build/en/getting-started/ 
- https://astro.new/latest/

## 设计目标
- 建立统一视觉系统与组件规范，减少页面风格漂移。
- 参考 Astro 生态站点的“高信息密度 + 强引导”模式，提升内容发现效率。
- 保持低侵入改造：尽量复用现有组件与页面结构。

## 设计原则
- Token-first：所有视觉决策先沉淀到 design tokens。
- Content-first：阅读与信息扫读优先于装饰动效。
- Progressive enhancement：核心功能无 JS 也可用，JS 只做增强。
- Consistency over novelty：跨 Blog/Wiki/AIWiki/Guild 一致优先。
- Document-like restraint：弱阴影、弱渐变、弱动效，强调信息层级和可读性。

## 信息架构与页面模式
### A. 首页模式（参考 astro.build + astro.new）
- Hero：2-3 行摘要 + 主/次 CTA（首屏文案不超过 2-3 行）。
- Hero 下方补充模块：用结构化信息补充内容丰富度（要点列表/专题入口/关键指标）。
- 快速入口：Blog / Wiki / AIWiki / Guild。
- 内容卡片区：统一卡片结构（日期、标题、摘要、标签、动作）。
- 继续探索区：系列/标签/专题。

### B. 文档详情模式（参考 docs.astro.build）
- 左侧：站点/频道导航（Wiki/AIWiki/Guild）。
- 中间：正文（排版统一）。
- 右侧：目录与作者信息（sticky + 正文高度边界限制）。

## 组件与文件落点
### 全局层
- `src/styles/base.css`
  - 新增或收敛 token：颜色、文字级别、spacing、radius、shadow、motion。
  - 统一 `:focus-visible`、`prefers-reduced-motion`、链接状态、按钮状态。

### Token 命名规范（建议）
- 分层：
  - Global Tokens：`--color-gray-900`、`--space-16`、`--radius-md`
  - Alias Tokens：`--color-text-primary`、`--color-surface-base`
  - Component Tokens：`--card-bg`、`--toc-active-color`
- 约束：
  - 组件样式优先使用 Alias/Component token；
  - 禁止在业务页面直接写死品牌色值；
  - Token 变更需附带影响范围说明与回归截图。

### 布局层
- `src/layouts/Base.astro`
  - 统一全站元信息块样式规则。
  - 保留统计/广告/分析脚本注入边界（生产域白名单）。
- `src/layouts/Article.astro`（或对应文章布局文件）
  - 正文排版参数：行长、行高、标题间距、列表样式。

### 组件层
- `src/components/PageHeadline.astro`
  - 提供 `compact/default` 两档密度。
- `src/components/TableOfContents.astro`
  - h2/h3 高亮策略、滚动容器可见性、边界限制。
- `src/components/AuthorStatsCard.astro`
  - 紧凑版信息布局，避免占用过高。
- `src/components/ArticleShare.astro`
  - 详情页分享入口样式与密度统一。
- `src/components/GoogleAd.astro` / `src/components/GoogleAdThin.astro` / `src/components/SidebarAd.astro`
  - 广告槽位统一占位、低干扰视觉与加载策略。

## 组件映射表（需求 -> 实现）
- TOC 导航：`src/components/TableOfContents.astro`
- 作者信息卡：`src/components/AuthorStatsCard.astro`
- 分享区：`src/components/ArticleShare.astro`
- 评论区：`src/components/Giscus.astro`
- 广告区：`src/components/GoogleAd.astro`、`src/components/GoogleAdThin.astro`、`src/components/SidebarAd.astro`
- 博客详情页容器：`src/pages/[lang]/blog/[...id].astro`
- Wiki 详情页容器：`src/pages/[lang]/wiki/[...slug].astro`
- AIWiki 详情页容器：`src/pages/[lang]/AIWiki/[...slug].astro`
- Guild 详情页容器：`src/pages/[lang]/guild/[...slug].astro`

### 页面层
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/blog/index.astro`
- `src/pages/[lang]/blog/[...id].astro`
- `src/pages/[lang]/wiki/index.astro`
- `src/pages/[lang]/wiki/[...id].astro`
- `src/pages/[lang]/AIWiki/index.astro`
- `src/pages/[lang]/AIWiki/[...id].astro`
- `src/pages/[lang]/guild/index.astro`
- `src/pages/[lang]/guild/[...id].astro`

## 核心交互设计
### 1. TOC 激活策略
- 优先显示“阅读区内”标题。
- 支持 h2/h3，必要时降级到 h2。
- 到页底时兜底激活最后一个标题。
- TOC 容器滚动跟随当前激活项，避免失焦。

### 2. 卡片封面策略
- 降低封面高度与遮罩强度，强调标题信息。
- 保留分类 badge 与关键 meta。
- 小屏优先信息密度，大屏保持视觉平衡。

### 3. 区块密度策略
- Hero、作者卡、目录区提供紧凑版间距档位。
- 关键区块支持按页面覆写（避免“一刀切”）。
- 信息丰富度通过“模块数量与结构”提升，不通过拉长首屏段落实现。

## Component State Matrix
- 按钮类：`default/hover/focus/active/disabled/loading`
- 卡片类：`default/hover/focus-within/active`
- TOC 链接：`default/hover/active/current`
- 搜索筛选：`default/focus/error/disabled`
- 广告容器：`placeholder/loading/loaded/fallback-hidden`
- 所有状态必须有可访问替代反馈（非仅颜色变化）。

## 视觉规范（v2 建议值）
- 内容最大宽度：`68ch`（正文）+ 侧栏固定区。
- 卡片圆角：`12/16` 双档。
- 组件垂直间距：`8/12/16/24/32` 五级。
- 阴影强度：默认 `low`，仅关键悬浮态允许 `medium`。
- 动效时长：`120ms/180ms`，禁止大位移动画。
- 标题层级：
  - H1: 32/36
  - H2: 24/28
  - H3: 20/24
  - Body: 16/28

## 品牌视觉锚点（Document-like, Not Plain）
- 字体策略：
  - 中文正文：保持高可读无衬线；
  - 标题：允许更强字重或字宽对比，形成品牌识别点；
  - 英文标题与中文标题保持同级视觉权重，不出现一端明显偏弱。
- 强调色策略：
  - 主强调色仅用于 H1/关键 CTA/当前激活态；
  - 页面强调色面积建议 < 12%，避免“满屏高亮”。
- Hero 语法：
  - 2-3 行摘要 + 主次 CTA + 一组结构化补充信息；
  - 禁止把信息丰富度通过加长首屏段落实现。
- 广告位规则：
  - 每页至少保留 1 个广告位；
  - 列表页按“视口”控制为每屏最多 1 个；
  - 详情页正文中部广告位最多 1 个（避免切断阅读节奏）。
  - 禁止放置在 H1 与首段正文之间；
  - 广告容器采用稳定占位高度（Skeleton/placeholder），避免布局跳动；
  - 广告卡样式降噪：弱边框、低对比背景、小标题，不使用高饱和强调色。
  - 正文中广告与相邻标题最小间距：`>= 64px`；
  - 正文中广告最大高度：桌面 `<= 280px`、移动 `<= 220px`；
  - 例外页可不放广告：`404`、`隐私/条款`、短内容页（正文高度 < 800px）。

## 可访问性与国际化
- 中英文标题与按钮长度差异需通过最小宽度与折行规则兜底。
- 目录、筛选、搜索、分享入口均需键盘可达。
- 色彩对比满足 WCAG AA。
- 硬指标：
  - 普通文本对比度 >= 4.5:1；
  - 触控目标 >= 44x44px；
  - 移动端正文最小字号 >= 16px；
  - 焦点样式在键盘导航下必须可见。

## Responsive Spec
- 断点：
  - `>=1440`：宽屏三栏（导航/正文/目录）；
  - `1024-1439`：标准三栏；
  - `768-1023`：双栏（目录可折叠）；
  - `<768`：单栏，目录与筛选采用抽屉/折叠。
- 约束：
  - 移动端禁止横向滚动；
  - 卡片内容优先保证标题与摘要可读，封面可进一步压缩。

## Content Density Rules
- H1 下说明文控制 2-3 行，超出部分转移到补充模块。
- 卡片标题建议最多 2 行，摘要建议最多 2-3 行。
- 中英文均需设置稳定截断与换行策略，避免布局抖动。

## 性能策略
- 不新增重量依赖。
- 交互优先原生 API + 小脚本。
- 延迟加载非关键模块（评论、统计、部分广告脚本）。
- 广告延迟策略：首屏阅读主内容优先，非首屏广告使用懒加载与视口触发。

## 验证方案
### 视觉回归
- 基准页：
  - 首页
  - 博客详情页
  - Wiki 详情页
  - AIWiki 详情页
  - Guild 详情页

### 功能回归
- TOC 高亮与定位
- 搜索/筛选
- 相关词条跳转
- 代码块复制
- 移动端折叠导航

### 指标回归
- Lighthouse 四项评分
- Web Vitals（LCP/CLS/INP）
- 关键点击链路 CTR

## 发布与回滚
- 开发顺序分阶段：
  1. 首页与列表页
  2. 详情页阅读体验
  3. 组件统一与细节收尾
- 发布策略：一次性发布（同一版本切换）。
- 回滚策略：
  - 样式层：旧 token 兼容映射
  - 组件层：`compact/default` 配置可逆
