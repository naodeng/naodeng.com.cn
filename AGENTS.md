# AGENTS.md

面向编码 agent 的项目说明。给人看的介绍、贡献指南见 `README.md`。

## 项目概述

这是基于 Astro 的个人双语内容站，主站为 `https://inaodeng.com`。

仓库不只是页面模板，还包含博客、Wiki、AI Wiki、Guild、提示词、工作流、封面生成、内容检查、自动化测试和部署相关内容。核心目标是长期稳定维护双语内容，而不是“把页面跑起来就算完”。

做改动时同时考虑：

- 桌面端和移动端是否正常
- 中文、英文路径、内容和导航是否一致
- 内容是否仍适合搜索、归档、引用和继续维护
- 现有脚本、检查项和测试是否会被破坏

## 开发环境

- Node.js `>=22.12.0`
- npm `10+`
- 包管理：npm（不要换成 pnpm / yarn，除非用户明确要求）

首次准备：

```bash
npm install
cd tests && npm install
```

常用命令：

| 目的 | 命令 |
| --- | --- |
| 本地开发 | `npm run dev` |
| 类型检查 + 构建 | `npm run build` |
| 本地预览构建结果 | `npm run preview` |
| 根目录跑单元测试 | `npm test` |
| SEO 静态检查 | `npm run seo:check` |
| Wiki 样式检查 | `npm run wiki:style:check` |
| Wiki / AI Wiki 完整性检查 | `npm run wiki:integrity:check` |

E2E 在 `tests/` 内运行，默认会先构建并预览站点；也可设置 `PLAYWRIGHT_BASE_URL` 指向已有服务。

## 目录地图

动手前先判断改动属于哪一层，不要为了“先跑通”塞错目录。

| 路径 | 用途 |
| --- | --- |
| `src/pages/` | 路由与落地页（含 `en/`、`zh-cn/`、`[lang]/`） |
| `src/components/` | 可复用组件 |
| `src/layouts/` | 页面骨架与通用布局 |
| `src/styles/` | 样式 |
| `src/utils/` | 纯工具逻辑；适合补单元测试 |
| `src/config/`、`src/data/` | 站点配置与导航/数据 |
| `src/blog/` | 博客 MDX，按 `en/`、`zh-cn/` 分目录 |
| `src/content/` | 结构化内容（见下表） |
| `src/assets/`、`public/` | 静态资源 |
| `scripts/` | 内容处理、检查、生成脚本 |
| `tests/` | 独立测试工程（Vitest + Playwright） |
| `docs/` | 规范、模板、历史归档与临时资料 |
| `dist/` | 构建产物；不要当主编辑区 |

### 内容分区

| 内容 | 位置 | 语言约定 |
| --- | --- | --- |
| Blog | `src/blog/{en,zh-cn}/` | 双语，MDX |
| Docs | `src/content/docs/{en,zh-cn}/` | 双语 |
| Wiki（测试百科） | `src/content/wiki/` | 主要为中文，对应 `/zh-cn/wiki/` |
| AI Wiki | `src/content/aiwiki/{en,zh-cn}/` | 双语 |
| Guild | `src/content/guild/{en,zh-cn}/` | 双语 |
| Prompts | `src/content/prompts/{en,zh-cn}/` | 双语 |
| Workflows | `src/content/workflows/{en,zh-cn}/` | 双语 |
| QA Skills | `src/content/qaskills/{en,zh-cn}/` | 双语 |

内容 schema 与字段约束以 `src/content.config.ts` 为准。改内容前先看同类文件的 frontmatter，不要自创一套字段。

## 改动原则

- 小步修改，只动和任务直接相关的文件
- 沿用现有命名、目录结构、语言路径和内容组织方式
- 能复用现有组件、布局、脚本时，不重复造一套
- 涉及双语时，主动检查 `en` 与 `zh-cn` 是否都应更新
- 涉及内容页时，确认标题、摘要、链接、图片、目录、相关推荐仍成立
- 涉及脚本时，保证可重复执行，不要留下只适合跑一次的临时逻辑
- 涉及样式或交互时，至少检查常见桌面/移动宽度下无明显错位、遮挡、闪动、不可点击
- 优先改源码和内容源文件，不要直接改 `dist/`
- 发现仓库里已有未提交改动时，默认避开，不要清空、覆盖或回退

未经确认不要改：

- 部署配置、域名相关配置（如 `wrangler.toml`、GitHub Actions 部署工作流）
- 许可证与版权说明
- 历史内容的语气、署名、日期、链接结构的批量改写

## 内容与双语约定

- 站点语言路径主要是 `en` 与 `zh-cn`
- 新增或修改页面/导航时，两边都要能到达对应内容；没有对译时要明确说明，不要 silently 漏掉
- Blog 使用 MDX，其他多数内容为 Markdown
- Wiki 改完后，按需跑样式/完整性检查；相关推荐可用 `npm run wiki:related`
- 博客封面可用 `npm run generate-covers`
- 生成类脚本的输入、输出和触发方式要可复现；新增脚本前先确认 `scripts/` 是否已有同类能力

Wiki 格式细节见 `docs/standards/wiki-format.md`。

## 测试与检查

按改动类型选最贴近的验证，至少做一项；能多做就多做。

| 改动类型 | 建议验证 |
| --- | --- |
| 页面 / 布局 / 样式 / 交互 | `npm run build`，本地打开相关页面，点一遍流程，看桌面和移动宽度 |
| 工具函数 / 数据处理 | `npm test`；必要时补 `tests/unit/` |
| 内容结构 / 链接 / SEO | `npm run seo:check`，必要时 `npm run build` |
| Wiki / AI Wiki 内容 | `npm run wiki:style:check`、`npm run wiki:integrity:check` |
| 导航 / 多语言 / 关键交互 | `cd tests && npm run test:e2e`（或相关 spec） |
| 测试本身 | 重跑受影响测试，确认不是“只改断言让它变绿” |

常用命令：

```bash
npm run build
npm test
cd tests && npm run test:unit
cd tests && npm run test:e2e
npm run seo:check
npm run wiki:style:check
npm run wiki:integrity:check
```

CI 参考 `.github/workflows/`（含 e2e、Cloudflare 部署、GitHub Pages）。不是每次都要全跑，但必须用相关命令证明结果成立。

验证失败时：

1. 先判断是不是这次改动引起的
2. 能修就修，修完重新验证
3. 若是仓库原有问题，明确区分“我改坏了什么”和“原本就坏着什么”
4. 只有需要用户决定方向、权限或外部信息时，才带着阻塞点回来问

## 安全与边界

- 不要把真实密钥、token、密码、cookie 写进代码、文档示例或提交说明
- 环境变量以 `.env.example` 为模板；不要提交真实 `.env`
- 不要提交临时调试文件、测试产物、一次性脚本
- 不要修改 `dist/`、`node_modules/`、测试报告等生成目录来“伪修复”
- 未经确认不要做批量删除、强制回退、覆盖用户现有修改等高风险操作
- 不要为了让检查通过而删除测试、放宽断言、绕开真实问题

## 工作方式与交付

### 完成标准

开始前先定义“完成”包含什么，至少覆盖：

- 是否真正解决了用户提出的问题
- 是否影响中文、英文、桌面、移动端中的任一条链路
- 是否需要补测试、内容或脚本检查
- 是否需要同步相关文档

有未确认项就不要急着收工。

### 交付前自查

- 相关文件已更新，且修改点与任务一致
- 没有误伤无关内容
- 跑过至少一种有效验证，并且看过结果
- 最终汇报能让不看代码的人也明白结果

### 汇报要求

最终汇报只说对用户真正有用的信息：

- 做了什么
- 现在结果怎样
- 实际验证了什么
- 若有残留风险：具体是什么、会影响什么

汇报用简单直白的中文。不要术语堆砌，不要代码腔。默认把用户当作聪明人、但没在看代码。先说结果，再补必要背景。

干活过程本身该严谨就严谨；这条只约束对用户的沟通方式。

### 禁止事项

- 没有验证就宣布完成
- 为了省事跳过相关语言版本、相关页面或相关目录检查
- 编造“已经验证”“已经跑过”“页面正常”；没做就明确说没做
- 把问题只标记出来甩回给用户，而自己还能继续修

目标是交付完成、能用的成果，而不是需要用户再逐项检查的初稿。只有确认一切正常，或确实遇到需要用户介入的障碍时，才回来找用户。
