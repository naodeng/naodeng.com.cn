# mobile-testing

作者：naodeng

## 中文名称
移动端测试

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
- 适合谁：移动端测试工程师和多端质量保障团队。
- 何时使用：需要覆盖机型差异、系统版本、弱网和生命周期等移动端风险。
- 怎么使用：先建立设备矩阵，再跑关键链路，按机型层级汇总风险和结论。


## 使用说明
1. 先完成 `mobile-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 带设备矩阵触发，例如：“使用 `mobile-testing` 覆盖 iOS17 + Android13 下单链路。”
4. 要求按机型层级输出场景、风险和报告模板。
5. 新增机型或系统版本时只增量更新对应部分。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 移动端功能需覆盖多机型、多系统版本验证。
- 线上出现闪退、布局错位、手势异常等问题。
- 需要验证网络波动、生命周期、权限场景稳定性。

### What 立目标：具体成果，解决什么问题
- 验证移动端在不同设备与场景下的行为一致性。
- 发现兼容性、性能与交互层面的关键风险。
- 形成面向移动端特点的发布风险结论。

### How 理规则：步骤逻辑，怎么执行
1. 按用户占比确定设备矩阵（系统版本 + 硬件档位）。
2. 覆盖安装/升级、登录、关键链路、前后台切换。
3. 测试弱网、断网、网络切换和来电打断。
4. 校验手势、横竖屏、权限弹窗流程。
5. 记录设备特异问题及复现条件。
6. 输出分设备风险摘要和修复优先级。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 范围：Android 12/13 + iOS 17 下单链路（弱网）

输出：
- Android 断网重连出现重复提交
- iOS 优惠券输入框键盘遮挡
- 分机型风险清单和修复顺序

### 反例（输入 -> 输出）
输入：
- “找一台手机测一下 app”

输出（问题）：
- 单机结果被当成全量结论
- 主要兼容风险未暴露

### Limits 画边界：明确限制，什么不做
- 不用单机结果代表全量质量。
- 不跳过生命周期与打断场景。
- 不忽视权限和系统设置影响。
- 不在无设备矩阵时输出移动端质量结论。
- 不在高占比机型未通过时关闭验证。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/mobile-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[mobile-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/mobile-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
