# accessibility-testing

作者：naodeng

## 中文名称
可访问性测试

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
- 适合谁：关注可用性与无障碍体验的 QA 和前端协作团队。
- 何时使用：关键流程上线前，需要验证键盘、读屏、对比度等可访问性要求。
- 怎么使用：按无障碍检查清单执行人工+工具验证，按影响程度输出修复优先级。


## 使用说明
1. 先完成 `accessibility-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带关键页面触发，例如：“使用 `accessibility-testing` 检查登录、结算、个人页。”
4. 要求按严重级别和受影响用户类型输出问题。
5. 修复后让 skill 给复测清单并再验收。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 新页面或关键流程上线前，需要验证无障碍可用性。
- 产品希望兼容键盘操作和屏幕阅读器用户。
- 团队需要在发布前形成可审计的无障碍结论。

### What 立目标：具体成果，解决什么问题
- 识别结构、交互、可读性方面的无障碍障碍点。
- 给出按影响优先级排序的修复建议。
- 降低可访问性缺陷带来的用户与合规风险。

### How 理规则：步骤逻辑，怎么执行
1. 选定关键用户路径和目标标准等级。
2. 检查语义结构、焦点顺序和键盘可操作性。
3. 校验对比度、标签、报错提示和动态提示。
4. 结合工具扫描与人工操作验证。
5. 按“受影响人群 + 任务阻断程度”记录问题。
6. 输出修复清单与复测标准。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 结算页包含优惠券弹窗

输出：
- 发现焦点未锁定、关闭按钮无可读标签、辅助文案对比度不足
- 提供可复测的修复验收标准

### 反例（输入 -> 输出）
输入：
- “跑一下无障碍扫描”

输出（问题）：
- 只有工具结果，没有键盘/读屏人工验证
- 关键交互阻断问题仍可能遗漏

### Limits 画边界：明确限制，什么不做
- 不把扫描工具输出当最终结论。
- 不把轻微视觉问题和任务阻断问题等同处理。
- 不跳过真实用户路径验证。
- 不在修复后不复测就判定通过。
- 不忽略多语言场景下的可访问性文本问题。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/accessibility-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[accessibility-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/accessibility-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
