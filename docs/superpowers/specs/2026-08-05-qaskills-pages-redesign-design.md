# QA Skills 首页与详情页优化设计

> 日期：2026-08-05  
> 状态：已实现（2026-08-05）  
> 范围：`/qaskills` 首页与详情页；内容与 [awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills) 全量对齐  
> 参考：SkillHub 首页结构、SkillHub skill 详情页「一眼能装」交互；视觉保留本站设计语言

## 1. 目标与成功标准

### 1.1 目标

在保持本站视觉体系的前提下，借鉴 SkillHub 的信息架构，让 QA Skills：

1. **更好发现**：页内搜索 + 分类筛选，快速找到合适 skill  
2. **更好上手**：详情页对齐仓库最新 `SKILL.md` 章节，安装与调用路径清晰  
3. **与仓库一致**：以 `awesome-qa-skills` 为唯一内容源，全量重同步（含新增 `code-review`）

### 1.2 成功标准

- 中英 skill 数量、slug 与仓库 `skills/{zh|en}` 一致；首页可看到 `code-review`
- 首页卡片必显：**名称、分类、场景摘要、Evals 状态、更新日期**
- 详情页主结构为 SKILL 章节流，安装区为第一操作路径（桌面侧栏/吸顶，移动端顶部折叠）
- 详情主栏提供 **Guide / SKILL.md** 双 Tab：结构化章节与原始 `SKILL.md` 只读预览（可复制全文）
- `npm run qaskills:sync` 可重复执行并覆盖生成站点内容
- `npm run build` 通过；核心解析有单元测试；搜索/安装/双语路径可验证

### 1.3 非目标（本次不做）

- SkillHub 式评分、热度排行、付费 Stacks、发布者后台
- React Flow / 逻辑电路流程图
- 构建时直拉 GitHub、站点不落盘内容副本
- 在站点内运行 skill-up evals（只展示有无与仓库链接）
- 将 `prompts/`、`examples/` 全文搬进站点页面

## 2. 已确认决策

| 项 | 选择 |
| --- | --- |
| 主目标 | 发现 + 上手并重；内容同步必做 |
| 视觉 | 结构借鉴 SkillHub，样式留在本站 |
| 首页 | 分类浏览 + 页内搜索/筛选（轻量增强） |
| 详情 | 对齐仓库最新 `SKILL.md` 章节结构 + Guide/SKILL.md 双 Tab 原始预览 |
| 内容 | 以仓库为源全量重同步 |
| 实现路径 | 同步脚本 + 页面改版（非手同步、非 build 直拉） |
| 卡片元数据 | Evals、更新日期为**必显** |

## 3. 架构

```text
awesome-qa-skills
  skills/{zh|en}/{testing-types|testing-workflows}/<slug>/SKILL.md
  installers/  evals/  skills-index.md
        │
        ▼  npm run qaskills:sync（可复跑，默认覆盖）
src/content/qaskills/{zh-cn|en}/<slug>.md
        │
        ▼  src/utils/qaskills.ts
首页 index.astro          详情 [skillSlug].astro
（搜索/筛选/卡片）         （SKILL 章节 + 安装侧栏）
```

**原则：** 仓库是 source of truth；站点保存可审、可构建的内容副本；解析与展示逻辑集中在 `qaskills.ts`，页面只负责布局与交互。

## 4. 内容同步设计

### 4.1 脚本

- 新增：`scripts/sync-qaskills-from-repo.mjs`（或 `.ts`，与现有 scripts 风格一致）
- npm：`qaskills:sync`
- 输入：默认远程仓库 `main`；支持 `--repo-dir` 指向本地 clone，便于离线/CI
- 输出：覆盖写入 `src/content/qaskills/{zh-cn,en}/*.md`（删除仓库已不存在的旧 slug 需显式确认策略：默认删除孤儿文件并在日志列出）

### 4.2 映射规则

| 来源 | 站点字段/章节 |
| --- | --- |
| YAML `name` / 目录名 | `slug` |
| YAML `description` | SEO description、卡片场景摘要优先来源 |
| `SKILL.md` 标题 | `title`；中文页可保留/推导中文展示名 |
| 章节：何时使用、执行流程、核心约束、按需加载、交付前自检、常见误区 | 同名 `##` 章节写入站点 md |
| 路径含 `testing-workflows` / `*-plus` / 其余 | `category`: workflow / plus / type |
| 存在 `evals/` 且含有效评测入口 | `hasEvals: true` |
| 同步执行日或仓库 Last Synced | `syncedAt` |
| GitHub blob URL | `sourceSkillUrl` |
| `installers/{zh\|en}/<slug>/{mac\|windows}/<tool>.{sh\|ps1}` | 安装区链接（页面侧也可按约定拼 URL） |

**按需加载：** 站点只呈现「应读哪些相对路径」的说明列表，不内嵌 prompts 全文。  
**调用示例：** 由模板生成（如 `@skill <slug> …`），可按语言中英各一套短模板。  
**原始 SKILL.md：** sync 时把源文件全文写入站点 md 的 `## 原始 SKILL.md`（用围栏代码块包一层，便于解析还原）；供详情 Tab 预览，不替代结构化章节。

### 4.3 站点 md 目标骨架

```markdown
# <title>

作者：…

## 元数据
- slug / category / subgroup / hasEvals / syncedAt / sourceSkillUrl
- description: …

## 何时使用
## 执行流程
## 核心约束
## 按需加载
## 交付前自检
## 常见误区

## 原始 SKILL.md
\`\`\`markdown
…源 SKILL.md 全文…
\`\`\`

## 安装
## 调用示例
## 来源
```

### 4.4 分组

沿用并扩展现有 `TESTING_TYPE_SUBGROUPS` / `WORKFLOW_SLUGS`：

- `code-review` 加入 `defect-reporting` 子组 slug 列表
- 该子组中英标题更新为「缺陷、报告与审查」/「Defect, Reporting & Review」，与仓库 README「过程与产出物」覆盖范围对齐

## 5. 首页设计

### 5.1 区块顺序

1. **Hero**：标题、价值句、统计（技能数、支持工具数、最近同步日期）、GitHub CTA  
2. **发现栏**：搜索框 + 筛选芯片：全部 / 测试类型 / 工作流 / Plus / 有 Evals  
3. **快速开始**：三步压缩版，可锚点到目录  
4. **分类目录**：测试类型（含子组）→ 工作流 → Plus；搜索/筛选时过滤卡片

### 5.2 卡片必显字段

- 名称（按语言）
- 分类标签（类型 / 工作流 / Plus）
- 一行场景摘要（`description` 或「何时使用」首条）
- **Evals** 状态（有 / 无）
- **更新日期**（`syncedAt`）

空搜索结果：提示尝试 `discover-testing` 或清空筛选。

### 5.3 交互

- 纯前端过滤（skill 总量约 30/语种，无需服务端搜索）
- 保留现有广告位节奏，避免打断首屏发现栏

## 6. 详情页设计

### 6.1 布局

- **桌面：** 主栏（SKILL 章节）+ 右侧吸顶操作区（安装 / 调用 / 相关）  
- **移动：** 操作区置于标题下折叠面板；章节单列

### 6.2 Header

- 标题、作者、分类、Evals、同步日期、源 SKILL / 仓库链接  
- 主按钮：立即安装（滚至/展开安装区）  
- 次按钮：查看源 SKILL.md

### 6.3 主栏：Guide / SKILL.md 双 Tab

主栏顶部 Tab：

| Tab | 内容 |
| --- | --- |
| **Guide**（默认） | 结构化章节流（见下） |
| **SKILL.md** | 原始源文件只读预览：等宽代码块 / `<pre>`，右上角「复制全文」；可链到 GitHub blob |

Guide 章节顺序（替换旧 When/What/How 汇总卡片）：

1. 何时使用  
2. 执行流程  
3. 核心约束  
4. 按需加载  
5. 交付前自检  
6. 常见误区  

缺失章节：跳过且不留空标题。  
原始 Tab 无内容时：隐藏 SKILL.md Tab，或显示「暂无源文件，请打开 GitHub」+ `sourceSkillUrl`。

### 6.4 安装区

保留并强化现有能力：

- 平台：macOS/Linux | Windows  
- 工具：codex、cursor、claudecode、kiro、opencode、trae  
- 一键命令 + 复制；完整脚本可展开/加载  
- 调用示例短代码块 + 复制  

### 6.5 相关技能

同 category / 同 subgroup 推荐 3–5 个；不足则从相邻子组补齐。排除自身。

### 6.6 页尾

保留 ArticleShare、Giscus、现有广告位。

## 7. 代码边界

| 单元 | 职责 |
| --- | --- |
| `scripts/sync-qaskills-from-repo.*` | 拉源、映射、写 md、校验报告 |
| `src/utils/qaskills.ts` | 读 md、解析元数据与章节、原始 SKILL 全文、分组、相关推荐 |
| `index.astro`（及可选 `SkillFilters`/`SkillCard`） | 首页布局与筛选 UI |
| `[skillSlug].astro`（及可选 `InstallerPanel`） | 详情布局、Guide/SKILL.md Tab、安装交互 |
| `src/content/qaskills/**` | 生成物；人工不以手改为主 |

页面单文件若继续膨胀，优先抽出 InstallerPanel / SkillCard，避免无关重构。

## 8. 错误处理与边界

- 同步失败：非零退出；不留下半截覆盖（先写临时目录再替换，或按文件事务性写入）
- 某 skill 缺关键章节：生成页可上线，详情跳过空节；日志 warning
- 安装脚本 404：安装区显示失败文案与源码目录链接（沿用现有行为）
- 中英不对齐：sync 报告列出只存在于一侧的 slug，默认仍生成存在的一侧并 fail 或 warn（**默认 warn + 退出码可配置；CI 建议 fail**）

## 9. 验证计划

| 类型 | 命令/动作 |
| --- | --- |
| 同步 | `npm run qaskills:sync`；核对数量与 `code-review` |
| 构建 | `npm run build` |
| 单测 | `tests/unit/` 覆盖章节解析、hasEvals、分组、相关推荐 |
| 手工/E2E | 搜索过滤、Evals 筛选、安装复制、Guide/SKILL.md Tab 切换与复制、中英路由、移动端折叠 |

## 10. 分期

### 一期（本次交付）

- 同步管线 + 全量内容对齐（含 `code-review`）
- 首页搜索/筛选 + 卡片必显 Evals/日期
- 详情 SKILL 章节布局 + **原始 SKILL.md Tab 预览** + 安装侧栏强化 + 相关推荐

### 二期（可选）

- CI 定时同步  
- 相关推荐算法增强  
- Skill stacks / 组合包  

## 11. 风险

- 仓库 `SKILL.md` 标题用词若中英不完全对称，解析需双语 heading 表  
- 全量覆盖会丢掉站点侧手写增补；一期接受并以仓库为准  
- companion/本地预览与生产样式差异：实现时以本站 CSS 变量为准，不复制 SkillHub 视觉皮肤  

## 12. 开放实现细节（已在设计内拍板默认值）

- 孤儿站点文件：sync 时删除并记录日志  
- `code-review` 分组：并入过程/报告类子组，标题可微调以匹配 README  
- 中英不对齐：默认 warn；文档注明 CI 可改为 fail  
