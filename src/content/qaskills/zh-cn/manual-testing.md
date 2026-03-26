# manual-testing

作者：naodeng

## 中文名称
手动/探索性测试

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
- 适合谁：探索测试和快速验证场景下的一线 QA。
- 何时使用：自动化未覆盖或未知风险较多，需要人工探索发现问题。
- 怎么使用：先设探索目标和时间盒，再按启发式方法执行并留存证据。


## 使用说明
1. 先完成 `manual-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带探索任务触发，例如：“使用 `manual-testing` 做 60 分钟新手引导探索测试。”
4. 要求输出：探索计划、检查清单、记录模板、复盘模板。
5. 会后让 skill 把笔记转成缺陷与下一轮测试建议。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 自动化尚未覆盖，需快速做人机探索验证。
- 新功能未知风险多，需要经验判断。
- 需要从真实使用角度发现流程与体验问题。

### What 立目标：具体成果，解决什么问题
- 通过有目标的探索发现隐藏问题。
- 验证用户体验、流程连贯性和错误处理质量。
- 尽早输出风险信号，支持产品与研发决策。

### How 理规则：步骤逻辑，怎么执行
1. 设定探索任务（目标 + 时间盒）。
2. 选择探索视角：边界、打断、数据变体、角色切换。
3. 执行过程中持续记录现象和线索。
4. 对可疑点做定向复验。
5. 输出可复现的问题证据。
6. 复盘总结：已发现风险与下一步建议。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 任务：45 分钟探索注册 + 资料完善

输出：
- 发现输入校验不一致和死路跳转
- 提供可复现步骤与风险说明

### 反例（输入 -> 输出）
输入：
- “你随便测测看”

输出（问题）：
- 无目标、无记录、无证据
- 团队无法复用结果

### Limits 画边界：明确限制，什么不做
- 不在无任务定义时开展探索。
- 不靠记忆口述代替证据记录。
- 不复现就直接报问题。
- 不把探索结果写成随意评论。
- 不忽视时间盒和范围纪律。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/manual-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[manual-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/manual-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
