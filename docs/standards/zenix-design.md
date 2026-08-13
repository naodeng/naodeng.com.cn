# Zenix 设计规范（现行）

**状态：** 现行规范，取代 `docs/standards/apple-design-redesign.md`（该文档已标注废弃，仅供追溯）
**日期：** 2026-08-13（`design-zenix-consolidation` 分支收敛落定）
**源文件：** `src/styles/base.css`（token 契约）、`tests/unit/zenixDesignTokens.test.ts`（契约测试）

本文是本站现行视觉语言的成稿规范：写清 token、表面材质、圆角、首页与内容页约定。改视觉先改这里。

---

## 1. 设计语言定位

- **Zenix 冷色 SaaS 知识库风**：indigo 单一主色 + 冷灰 canvas + 细网格背景 + 玻璃页脚
- 浅色主导（唯一主题）；暗色模式为明确非目标，见 §6
- 内容优先：内容页（博客/Wiki/Guild/Docs）排版克制，不卡片化；视觉语言主要作用在壳层（顶栏/页脚）与首页

## 2. Design Token 契约

契约测试：`tests/unit/zenixDesignTokens.test.ts`。改 token 必须同步改测试。

### 2.1 颜色

| 角色 | Token | 值 | 用途 |
| --- | --- | --- | --- |
| 主色（唯一 accent） | `--color-theme` | `#4f46e5` | 链接、主 CTA、焦点环、强调 |
| 主色深 | `--color-theme-focus` | `#4338ca` | 聚焦态、渐变深端 |
| 主色浅 | `--color-theme-light` | `#818cf8` | 渐变浅端、装饰 |
| 深色表面链接 | `--color-theme-on-dark` | `#a5b4fc` | 顶栏等深色表面上的链接 |
| 页面底 | `--color-base` | `#f8fafc` | 全站画布 |
| 墨色 | `--color-main` | `#0f172a` | 正文文字、顶栏背景（off-black） |
| 表面 | `--color-surface` / `--color-canvas` | `#ffffff` | 卡片、输入框底 |
| 次级文字 | `--color-text-secondary` / `--text-tertiary` | `#334155` / `#64748b` | 说明文字、元信息 |
| 弱表面 | `--color-surface-muted` | `#f1f5f9` | 冷灰色带 tint |
| 边框 | `--color-border` / `--color-border-strong` | `#e2e8f0` / indigo 16% | 卡片边框 / 强调边框 |
| 语义色 | `--color-caution` / `--color-warn` | `#be123c` / `#f59e0b` | 错误 / 警告，仅语义场景 |

**单一主色规则**：indigo 是唯一 accent。禁止新增第二个 accent 色（原 teal `--color-accent` 已删除）。渐变一律 indigo 系（theme → theme-focus 或 theme → theme-light）。

### 2.2 渐变

| Token | 值 | 用途 |
| --- | --- | --- |
| `--gradient-theme` | `linear-gradient(135deg, theme, theme-light)` | 品牌渐变（徽章、装饰、hero 局部） |
| `--gradient-hero` | indigo 双角淡渐变 + 白→base 纵向 | 首页 hero 背景 |

### 2.3 圆角（四档 + 例外，硬规则）

| 档位 | Token | 适用 |
| --- | --- | --- |
| 小 | `--radius-sm` = 8px | 控件、徽章、标签、输入框 |
| 中 | `--radius-md` = 12px | 常规卡片、面板 |
| 大 | `--radius-lg` = 18px | 大容器（页脚玻璃卡、hero 面板） |
| 药丸 | `--radius-xl` = 9999px | 交互药丸（pill-cta、chip、filter-pill） |

例外（允许）：头像/圆形图标 `50%`；滚动条滑块 `2-3px`；直角 `0`（如跳转链接角标）。**新增界面不得出现这四档之外的散值**；统一写 `var(--radius-*)`。

### 2.4 阴影 / 间距 / 字体

- 阴影：`--shadow-sm/md/lg`（slate 色相，禁纯黑阴影）；产品感 `--shadow-product`（indigo 16%）
- 间距：`--sp-xl/l/m/s/xs`（64/32/16/8px，<480px 收紧）+ `--space-*` 微间距；区块间距 `--spacing-section: 80px`
- 字体：`--font-heading`（Sora，标题/强调数字）、`--font-sans`（Noto Sans，正文）。中文字体走系统栈。Google Fonts 用 preload + 异步换载模式加载
- 背景网格：indigo 3.5% 双向网格，42px 格；禁止改回 16px 点阵（有测试守护）

## 3. 表面材质（壳层）

| 表面 | 规则 |
| --- | --- |
| 顶栏 | 白色磨砂玻璃（`color-mix(canvas 78%)` + `backdrop-filter: blur(22px)` + hairline 底边），深色文字；子菜单/语言面板为浅色玻璃面板 |
| 页脚 | 冷灰渐变底 + 白色玻璃卡（`backdrop-filter: blur(22px)`，18px 圆角），社交图标悬浮卡片顶边 |
| 首页色带 | 全宽透明带 + `:nth-of-type(even)` 白→冷灰淡渐变交替；色带类名 `home-band--white` / `home-band--muted` |
| 卡片 | 1px hairline 边框 + 白/淡白渐变底 + `--shadow-sm`；hover 上浮 2-4px + indigo 边框，不用重阴影 |

## 4. 首页约定

- **Hero 构成**：标题 + 副标题 + 至多 2 个 CTA（pill-cta）。不得在 hero 里堆入口卡、伪窗口或装饰条
- **入口职责**：所有内容入口集中在 Explore 区块（`HOME_EXPLORE_CARDS`，zh 7 卡 / en 6 卡）
- **布局家族不连用**：连续区块不得重复同一布局。首页现有分布：卡片阵列（Explore/Prompts/QA Skills）、行列表（最新文章）、紧凑双列列表（精选项目）、chip cloud（wiki/AIWiki/tags）、任务网格（HomeTaskNavigator）、能力卡（CoreCapabilities）、示例行（HomeProofAndCases）
- **埋点契约**：首页必须保留 `/blog`、`/wiki`(zh) 或 `/AIWiki`、`/guild`、`/prompts`、`/qaskills` 的链接（`TrackingEvents` 按路径埋点，删区块时检查链接仍可达）

## 5. 图标与文案约定

- **图标**：统一 Material Icons Sharp（`<span class="material-icons-sharp" aria-hidden="true">连字名</span>`），字体已在 Base 布局加载。**禁止 emoji 当图标**（Guild/prompts 已全部替换）
- **英文破折号**：UI 与英文文案禁用 em-dash（—）与 en-dash 作分隔符；用冒号、逗号或句号。中文正文的标准「——」保留
- **文案**：中英结构对称，文案统一走 `src/consts.ts` / 页面 i18n 对象，不在模板里散写

## 6. 明确非目标（决策记录）

- 暗色模式（`prefers-color-scheme: dark`）：浅色唯一，契约测试锁定
- 内容页（博客/Wiki/Guild/Docs 阅读页）版式重排：只继承 token
- 像素级复刻任何第三方设计

## 7. 变更流程

1. 先改本文件与 `base.css` token，再改壳层/页面
2. 同步 `tests/unit/zenixDesignTokens.test.ts`
3. 涉及首页结构时同步 `tests/e2e/specs/apple-home.spec.ts`、`tracking-contract.spec.ts`、`navigation.spec.ts`
4. `npm run build` + 相关 e2e 通过后方可合入

---

关联文档：
- 实施记录：`docs/tasks/zenix-design-consolidation-v1.md`
- 废弃规范：`docs/standards/apple-design-redesign.md`（仅供追溯）
- 广告位规范：`docs/standards/ads-inventory.md`
