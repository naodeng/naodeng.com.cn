# Apple Design 改版规范（后期参考）

**状态：** 探索已完成（分支 `explore-apple-design`）；合并 `main` / 正式上线前需另审  
**日期：** 2026-07-31（探索落地） / 2026-08-03（本文整理）  
**外部参考：** [VoltAgent awesome-design-md · Apple DESIGN.md](https://github.com/VoltAgent/awesome-design-md/blob/main/design-md/apple/DESIGN.md)  
**关联文档：** `docs/superpowers/specs/2026-07-31-apple-design-exploration-design.md`、`docs/superpowers/plans/2026-07-31-apple-design-exploration.md`

本文是对本站一次 Apple 风格探索改版的**成稿规范**：写清决策、token、壳层、首页、广告与导航约定，供后续全站或栏目改版复用，而不是复述「怎么一步步做出来的」。

---

## 1. 目标与范围

### 1.1 目标

在保留现有信息架构（IA）与双语路径的前提下，验证站点能否用 Apple 式视觉语言表达：

- 浅色主导、单一 Action 蓝交互
- 全幅色带节奏、极简 elevation
- 品牌橙只做点缀，不做按钮/链接主色

### 1.2 本次实际范围（已落地）

| 层 | 做了什么 |
| --- | --- |
| Design tokens | `src/styles/base.css` 统一色、字、圆角、阴影规则；强制浅色 |
| 全局壳 | `Header.astro` 黑顶栏；`Footer.astro` 羊皮纸页脚 |
| 首页 | `src/pages/[lang]/index.astro` Hero + 探索卡片 + 多栏目色带 |
| 广告 | 全站「有填充才展开」 |
| 内容页 | 只继承 token；不重排阅读栏 / 侧栏 IA |

### 1.3 明确非目标

- 博客 / Wiki / Docs / Guild 等阅读页整页重设计
- 系统级 `prefers-color-scheme: dark` 双主题
- 部署、域名、内容文案批量改写
- 像素级复刻 apple.com

后续若做「全站阅读页改版」，应另开规格；本文只约束视觉语言与壳层约定。

---

## 2. 核心设计原则

1. **Token 先行**  
   先改 CSS 变量，再改壳，再改首页。内容页自然继承，减少双轨样式。

2. **单一交互色**  
   链接、CTA、焦点环统一用 Action Blue。橙色（`--color-brand-mark`）仅品牌点缀。

3. **色带叙事，少卡片堆砌**  
   首页用白 / 羊皮纸全宽色带交替；卡片只在「可点入口」出现，Hero 内不用卡片。

4. **Hairline，少阴影**  
   卡片用 1px 边框 + 圆角；装饰阴影默认关掉。封面/插图可用唯一 soft shadow。

5. **IA 不变，只换皮肤与密度**  
   导航分组、外链规则、页脚链接集合不因改版重排。

6. **中英结构对称**  
   同一区块两边都要有对应入口；文案走 `src/consts.ts` i18n。

7. **空状态不占位**  
   广告未填充不占空白；避免「大灰条」破坏节奏。

---

## 3. Design Token 契约

源文件：`src/styles/base.css`  
契约测试：`tests/unit/appleDesignTokens.test.ts`（改 token 后应保持通过或同步改测试）

### 3.1 颜色

| 角色 | Token / 值 | 用途 |
| --- | --- | --- |
| Action | `--color-theme: #0066cc` | 链接、主 CTA、焦点 |
| Action focus | `--color-theme-focus: #0071e3` | 聚焦态 |
| On-dark link | `--color-theme-on-dark: #2997ff` | 深色表面上的链接（如需要） |
| Brand mark | `--color-brand-mark: #ef4d1a` | Logo 旁橙点等，禁止当按钮主色 |
| Canvas 白 | `--color-canvas: #ffffff` | 白底色带、卡片面 |
| Parchment | `--color-base: #f5f5f7` | 页底、羊皮纸色带、页脚 |
| Ink | `--color-main: #1d1d1f` | 正文 |
| Muted | `#333333` / `#7a7a7a` | 次要 / 三级文案 |
| Hairline | `--color-border: #e0e0e0` | 卡片描边 |
| Soft theme | `--color-theme-soft` 等 | 浅蓝底标签/chip |

**禁止：**

- 默认页背景点阵（`background-size: 16px 16px` 一类）
- 装饰性 Hero 渐变（`--gradient-hero` 保持 `none`）
- 第二套交互强调色（不要再把橙当地链主色）

### 3.2 字体与字号

- 栈：`--font-sans` → `system-ui, -apple-system, BlinkMacSystemFont, "Inter", …`
- 正文字号：`--text-base: 1.0625rem`（约 17px）
- 展示标题：`--text-display: 2.5rem`（首页 Hero 等）
- 内容页标题勿误用 display：`--text-xl` 保持约 `1.25rem`，与 `--text-display` 分离
- 顶栏导航：约 12px / 400
- 字重以 400 / 600 为主，少用 500 当默认强调

### 3.3 圆角与阴影

| Token | 值 | 用途 |
| --- | --- | --- |
| `--radius-lg` | `18px` | Utility card |
| `--radius-xl` | `9999px` | Pill CTA |
| `--shadow-sm/md/lg` | `none` | 默认不加装饰阴影 |
| `--shadow-product` | `rgba(0,0,0,0.22) 3px 5px 30px` | 仅封面/插图 resting |

### 3.4 色彩模式

- 探索结论：**强制浅色**
- `meta name="color-scheme" content="light"`
- 单一 `theme-color`（羊皮纸 `#f5f5f7`），不要再挂 dark/light 两套
- 深色只作为页面内表面：黑顶栏 `#000`、下拉面板 `#1d1d1f`，不是系统 dark theme

---

## 4. 全局壳层

### 4.1 Header（黑顶栏）

**文件：** `src/components/Header.astro`

| 项 | 约定 |
| --- | --- |
| 高度 | 桌面 44px；窄屏可展开抽屉 |
| 背景 | `#000`，无渐变、无底部分隔线装饰 |
| 品牌 | 橙点 `.brand-mark` + logo + 标题；slogan 默认隐藏 |
| 导航 IA | 首页 / 博客 / 分组（百科、指南、AI 测试、更多）/ 关于 |
| Utility | 语言切换 + 搜索；窄屏另加汉堡 |
| 断点 | `< 834px`：品牌 + 语言/搜索 + 汉堡；导航收进抽屉 |

**交互约定：**

- **桌面（hover + fine pointer）：** 分组下拉悬停约 80ms 后展开，移出短延迟关闭；点空白 / `Esc` 关闭
- **勿**在「当前栏目」上默认 `details[open]`，避免顶栏常挂下拉
- **单项分组**（如「指南」只有 Guild）：做成顶栏直达链接，少一次点开
- **移动：** 抽屉展开动画 + 半透明遮罩 + `html.nav-drawer-open` 锁滚动；遮罩 / `Esc` / 点链接关闭
- 当前页：顶栏项可用细白线下划线标识，勿用粗底色块

### 4.2 Footer（羊皮纸）

**文件：** `src/components/Footer.astro`

- 背景：parchment（`--color-base`）
- 多列链接、宽松行高；链接集、社交、版权不变，只换样式
- 交互色跟 token 蓝，不要写死旧橙

---

## 5. 首页结构规范

**文件：** `src/pages/[lang]/index.astro`  
**文案：** `src/consts.ts`（Hero / Explore 等常量）

### 5.1 全宽色带

- 用 `:global(main.l-main:has(.home-page))` 等方式挣脱窄栏，色带贴边
- 交替：`home-band--white` / `home-band--parchment`
- 每段一个主标题 + 一句副文；内边距、标题字号全站首页统一

### 5.2 推荐区块顺序（成稿）

1. **Hero（白）** — 大标题 + 副文 + 双 pill CTA（实心 / 描边）
2. **探索网格（羊皮纸）** — 约 6 张 utility card（Wiki / AI Wiki / Guild / Prompts / QA Skills / Projects）
3. **最新文章（白）** — 列表 +「查看全部」
4. **广告色带（可选）** — `<GoogleAd variant="band" />`，无填充则不占位
5. **Prompts / QA Skills / Projects / Guild / Wiki chips / Tags** — 按现网信息密度保留，但视觉语言与上方色带一致

中文探索卡避免两张都叫「AI Wiki」：第一张用「测试百科」或「QA Wiki」。

### 5.3 卡片与 CTA 配方

| 元素 | 规则 |
| --- | --- |
| Utility card | 白底（羊皮纸区）或 pearl（白底区）、`18px` 圆角、`1px` hairline、无阴影 |
| 卡片内容 | 标题 + 短说明 + Action Blue 文字链 |
| Pill CTA | `border-radius: 9999px`；主色实心蓝 / 次要描边蓝；`:active { transform: scale(0.95) }` |
| Chip | Wiki / Tags 等同系 chip，勿混多套圆角与边框 |

### 5.4 首屏预算

- 首屏优先 Hero + CTA；广告与次要栏目不要挤进第一视口抢构图
- 缺摄影大图时用排版与留白撑，不强行堆假图

---

## 6. 内容页继承规则

| 跟随改版 | 不跟随（另开项目再做） |
| --- | --- |
| 画布色、正文色、链接蓝 | Article / Docs / Wiki 栏宽与侧栏 IA |
| 按钮 / pill / 去点阵与装饰渐变 | Markdown 内容结构与目录逻辑 |
| Header / Footer | 列表页信息密度大改 |

内容页允许短期「半新旧」：壳新、正文区旧版式。扫尾只修阻塞问题（对比度、不可点、标题误用 display 字号等）。

---

## 7. 广告展示规范

**组件：** `GoogleAd.astro`、`GoogleAdThin.astro`、`SidebarAd.astro`  
**脚本：** `Base.astro` 生产环境统一监听 `[data-ad-collapse]`

### 7.1 约定

1. 广告根节点带 `data-ad-collapse`，默认 `hidden`
2. 仅当 `data-ad-status="filled"`、出现 iframe、或高度足够时再展开
3. 未填充则保持收起，不占 margin/padding
4. 首页全宽广告用 `variant="band"`（羊皮纸/浅灰色带 + 内宽居中）
5. 固定高度槽（如 `.ad-slot-250`）用 `:has([data-ad-collapse][hidden])` 一并收掉空白
6. 开发环境可不渲染广告节点；逻辑以生产 / preview 为准

### 7.2 新增广告位时

- 优先复用上述组件，不要再写裸 `ins.adsbygoogle` 而不加 collapse
- 不要给空广告外包一层强制 `height: 250px` 却不处理 hidden 态

---

## 8. 双语与响应式

- 语言路径：`en` / `zh-cn`；改导航或首页区块时两边都要可达
- 断点参考：顶栏 `< 834px`；首页卡片约 `< 720px` / `< 900px` 换列（以源码为准）
- 验证至少覆盖：桌面 + 窄屏顶栏、中英首页、一篇博客、一页 Wiki

---

## 9. 关键文件地图

| 路径 | 职责 |
| --- | --- |
| `src/styles/base.css` | Token 与全局基础样式 |
| `src/components/Header.astro` | 黑顶栏 + 导航交互 |
| `src/components/Footer.astro` | 羊皮纸页脚 |
| `src/pages/[lang]/index.astro` | 首页色带与区块 |
| `src/consts.ts` | 首页 / 导航双语文案 |
| `src/layouts/Base.astro` | `color-scheme`、广告 collapse 脚本 |
| `src/components/GoogleAd*.astro` / `SidebarAd.astro` | 按需展开广告 |
| `tests/unit/appleDesignTokens.test.ts` | Token 契约 |
| `tests/e2e/specs/apple-home.spec.ts` | 首页结构 |
| `tests/e2e/specs/header.spec.ts` / `responsive.spec.ts` / `navigation.spec.ts` | 壳与导航 |

---

## 10. 验证清单（改版后必跑）

```bash
npm run build
cd tests && npm run test:unit -- appleDesignTokens
# 导航/首页相关（本地常需 PLAYWRIGHT_CHANNEL=chrome）
cd tests && PLAYWRIGHT_CHANNEL=chrome npx playwright test \
  e2e/specs/apple-home.spec.ts \
  e2e/specs/header.spec.ts \
  e2e/specs/navigation.spec.ts \
  e2e/specs/responsive.spec.ts
```

手动抽样：

- `/zh-cn/`、`/en/` 首页色带与 CTA
- 桌面悬停下拉、窄屏汉堡开合
- 生产/preview 下广告无填充时不留大空白
- 一篇博客 + 一页中文 Wiki 可读、链接色正确

---

## 11. 后续改版建议

若要把探索合并为正式视觉，或继续深化：

1. **合并前审**  
   内容页「半新旧」是否可接受；不可接受则先做阅读页第二阶段规格。

2. **第二阶段候选**  
   文章页排版（字号阶梯、引用、代码块）、Wiki/Docs 侧栏密度、列表页卡片统一成 `--radius-lg` hairline 体系。

3. **不要做的回退**  
   不要恢复橙主题链、点阵底、系统 dark 双画布，除非另立「主题开关」产品决策。

4. **保持可测**  
   改 Header 选择器或首页 class 时同步 e2e；改 token 时同步 `appleDesignTokens` 测试。

5. **提交与分支**  
   探索实现参考分支：`explore-apple-design`（相对 `main` 的 Apple 改版提交序列）。

---

## 12. 一句话摘要

**Token 定语言，黑顶栏 + 羊皮纸定壳，白/羊皮纸色带定首页节奏；蓝交互、橙点缀；内容页只继承；广告无填充不占位。**

后续任何视觉改版，优先对照本文，而不是从零发明第二套色板与导航行为。
