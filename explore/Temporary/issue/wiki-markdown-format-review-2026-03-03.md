# Wiki Markdown 格式 Review 报告（2026-03-03）

## 1. 范围与结论

- 范围：`src/content/wiki` 全量 226 个 Markdown 文件。
- 结论：
  - 基础结构整体可用（Frontmatter、标题层级、绝大多数 TOC、链接存在性）。
  - 仍存在影响渲染质量的结构性问题，主要集中在“错误使用代码块包裹正文/列表”与“重复内容”。

## 2. 检查方法

- 批量规则扫描：Frontmatter、TOC 标记、标题层级、链接存在性、空行、代码围栏。
- 定位抽样：对异常文件进行行号级抽样核对。
- 输出标准：只记录“会影响渲染或阅读体验”的问题，并给出可执行任务。

## 3. 主要问题（按优先级）

### P1: 正文/列表被错误包进代码块（高优先级）

- 现象：存在大量无语言标识的三反引号代码块，块内内容是普通段落或列表，不是代码。
- 影响：
  - 页面显示成代码样式，造成阅读错乱。
  - 容易触发 Shiki 语言识别异常与样式异常。
- 统计：检测到 `89` 个疑似异常代码块分布于多文件。
- 样例：
  - `src/content/wiki/accessibility-testing.md:585-594`
  - `src/content/wiki/acceptance-testing.md:572-581`
  - `src/content/wiki/ui-testing.md:261-270`

### P1: 内容重复（高优先级）

- 现象：同一段列表/句子在相邻或近邻位置重复出现。
- 影响：
  - 页面冗长、信息噪声高。
  - SEO 语义质量下降，用户信任感下降。
- 统计（规则扫描）：
  - `131` 个文件存在“相邻重复行”。
  - `224` 个文件存在“重复列表项”（含明显重复块）。
- 样例：
  - `src/content/wiki/A-B-Testing.md:80-89` 与 `:92-101`（关键组成列表重复）
  - `src/content/wiki/test-design-tool.md:59-63` 后同组 bullet 再次重复（文内后续段落）

### P2: TOC 标记不完整（中优先级）

- 现象：仅存在 `<!-- TOC START -->`，缺失 `<!-- TOC END -->`。
- 影响：
  - 自动更新 TOC 工具无法稳定工作。
  - 易导致下次批处理覆盖正文。
- 文件：
  - `src/content/wiki/test-design-tool.md`（已确认缺少 TOC END）

### P3: 多余空行（中低优先级）

- 现象：出现连续 3 行空行。
- 影响：渲染出现不必要大间距。
- 统计：`8` 个文件。
- 文件：
  - `accessibility-testing.md`
  - `front-end-testing.md`
  - `negative-testing.md`
  - `release-testing.md`
  - `test-execution-schedule.md`
  - `ui-testing.md`
  - `validation-testing.md`
  - `web-performance-testing.md`

## 4. 已通过项（无需优先处理）

- Frontmatter：226/226 文件存在且可解析。
- 标题层级跳级：未发现明显异常。
- 链接存在性：本地 `wiki` 互链未发现失效目标。
- TOC 缺失：除 1 个文件外均具备起止标记。

## 5. 改进建议

### 建议 A：建立“Markdown 结构清洗器”（一次性批处理）

- 自动修复范围：
  - 删除/展开误用的 fenced block（仅对“非代码特征块”）。
  - 合并重复相邻行、去重重复 bullet 块。
  - 压缩连续空行为最多 1 行。
  - 补齐缺失 TOC END。

### 建议 B：建立提交前校验（持续治理）

- 新增 `npm run lint:wiki-md`：
  - 规则 1：禁止“无语言 fenced block + 高比例自然语言列表”。
  - 规则 2：检测相邻重复行与重复 bullet。
  - 规则 3：TOC START/END 成对校验。
  - 规则 4：连续空行上限。

### 建议 C：分批治理，降低风险

- 第一批：先修 P1 高影响文件（首页/高访问词条、近期新增词条）。
- 第二批：全量自动修复 + 人工 spot-check。
- 第三批：接入 CI 阻断回归。

## 6. 可执行 Tasks（建议直接落地）

1. `task-1`：编写 `scripts/wiki-md-audit.mjs`
- 输出：JSON 报告（问题类型、文件、行号、建议动作）。
- 验收：本报告中的 4 类问题可被稳定复现。

2. `task-2`：编写 `scripts/wiki-md-fix.mjs`
- 动作：
  - 修复 TOC 标记缺失。
  - 清理连续空行。
  - 展开误包裹的 prose code fence。
  - 去重连续重复段落/列表。
- 验收：`src/content/wiki` 扫描后 P1/P2 归零，P3 归零。

3. `task-3`：为修复器增加 `--check` 模式
- 验收：不修改文件，仅返回退出码与问题列表，供 CI 使用。

4. `task-4`：在 `package.json` 增加命令
- `lint:wiki-md`: `node scripts/wiki-md-audit.mjs --check`
- `fix:wiki-md`: `node scripts/wiki-md-fix.mjs`
- 验收：本地可一键检查/修复。

5. `task-5`：接入 CI
- PR 必跑 `lint:wiki-md`。
- 验收：新增错误格式时 CI 失败并给出明确文件/行号。

6. `task-6`：人工抽检（发布前）
- 抽检范围：每个字母分区至少 2 篇 + 本次修复命中的 Top 30 文件。
- 验收：无“代码块包裹正文”、无大面积重复内容、TOC 渲染正常。

## 7. 建议执行顺序

- Day 1：`task-1` + `task-2`（先在小批文件试跑）
- Day 2：全量执行修复 + `task-3`
- Day 3：`task-4` + `task-5` + `task-6`

---

如需，我可以下一步直接实现 `wiki-md-audit/fix` 两个脚本，并先对 `P1/P2` 全量修复后再给你一份“修复前后对比清单”。
