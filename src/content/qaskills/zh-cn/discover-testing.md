# discover-testing

作者：naodeng

## 中文名称
测试技能路由

## 目录
- [中文名称](#中文名称)
- [快速介绍](#快速介绍)
- [使用说明](#使用说明)
- [说明汇总](#说明汇总)
  - [When 定场景：触发场景，用户何时使用](#when-定场景触发场景用户何时使用)
  - [What 立目标：具体成果，解决什么问题](#what-立目标具体成果解决什么问题)
  - [How 理规则：步骤逻辑，怎么执行](#how-理规则步骤逻辑怎么执行)
  - [Reference 给示例：正反例，输入---输出](#reference-给示例正反例输入---输出)
  - [Limits 画边界：明确限制，什么不做](#limits-画边界明确限制什么不做)
- [安装](#安装)
- [来源](#来源)
- [同步日期](#同步日期)

## 快速介绍
- 适合谁：测试负责人、QA 同学、产品和研发协作方。
- 何时使用：需求描述模糊，需要先决定“该用哪个测试技能”。
- 怎么使用：先输入问题背景和约束条件，再按技能路由结果执行对应技能。


## 使用说明
1. 先完成 `discover-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 用明确指令触发，例如：“使用 `discover-testing` 给我生成这次版本/迭代/日常测试流程。”
4. 明确要交付的结果：阶段计划、负责人、阻塞项、决策清单。
5. 约束变化后只让 skill 重算受影响部分，不整份重写。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 你收到“帮我测一下”这类模糊请求，需要先判断应该用哪个测试技能。
- 项目时间紧，团队希望先做最有价值的测试动作。
- 新同学不知道从哪里开始，需要一条清晰的技能选择路径。

### What 立目标：具体成果，解决什么问题
- 帮你快速选出“现在最该用”的技能和备选技能。
- 给出选择依据，说明为什么先做这个、下一步做什么。
- 降低试错成本，避免一开始就走错方向。

### How 理规则：步骤逻辑，怎么执行
1. 先分类问题：需求质量、功能正确性、API、性能、安全、发布风险或报告沉淀。
2. 再识别约束：时间、环境、数据、自动化成熟度、业务优先级。
3. 基于约束匹配候选技能，并按“风险收益比”排序。
4. 确定主技能 + 备选技能，并写清触发切换条件。
5. 明确本轮期望产出（要交付什么结果）。
6. 执行中若证据不支持当前路径，及时切换。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- “登录 API 改了，2 天后发版，目前还没有回归结果。”

输出：
- 先用 `api-testing` 做契约与回归验证
- 再用 `test-reporting` 产出发版证据
- 说明：当前最高风险是发布前接口兼容性

### 反例（输入 -> 输出）
输入：
- “移动端下单偶发失败”

输出（问题）：
- 直接路由到 `test-case-writing`，没有先定位移动端场景特性
- 错过了应先使用 `mobile-testing` 的诊断价值

### Limits 画边界：明确限制，什么不做
- 不替代具体执行类技能，本技能只做路由与优先级决策。
- 不给“罗列一堆技能但没有依据”的结果。
- 不忽视业务优先级与发版窗口。
- 不在新证据出现时死守原路线。
- 不在缺少执行证据时给最终质量结论。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/discover-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[discover-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-workflows/discover-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
