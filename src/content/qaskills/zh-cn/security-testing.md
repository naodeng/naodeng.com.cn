# security-testing

作者：naodeng

## 中文名称
安全测试

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
- 适合谁：关注安全风险的 QA、测试负责人和协作安全角色。
- 何时使用：鉴权、敏感数据和攻击面风险需要在发布前验证。
- 怎么使用：先做攻击面梳理，再验证高风险点，最后输出分级风险和复测标准。


## 使用说明
1. 先完成 `security-testing` 的安装和启用（直接用本页安装命令）。
2. 提需求时先给必要上下文：范围、环境、时间、期望输出格式。
3. 在授权范围内触发，例如：“使用 `security-testing` 验证鉴权和敏感数据接口。”
4. 要求输出：威胁清单、测试计划、分级规则、证据格式。
5. 修复后针对高风险项生成定向复测步骤。

## 说明汇总

### When 定场景：触发场景，用户何时使用
- 涉及鉴权、敏感数据、交易流程的功能发生改动。
- 合规或内部规范要求安全验证。
- 评审中发现潜在滥用路径，需要验证可利用性。

### What 立目标：具体成果，解决什么问题
- 识别鉴权、输入处理、数据保护中的可利用漏洞。
- 评估安全风险影响与修复优先级。
- 用证据支撑安全发布决策。

### How 理规则：步骤逻辑，怎么执行
1. 明确威胁范围和高价值资产。
2. 绘制攻击面：接口、角色、信任边界。
3. 执行鉴权绕过、注入、数据泄露、配置错误等检查。
4. 验证日志、限流和防护机制有效性。
5. 复现实锤漏洞并评估利用难度。
6. 输出按风险排序的结论和复测要求。

### Reference 给示例：正反例，输入 -> 输出
### 正例（输入 -> 输出）
输入：
- 功能：管理员导出接口（按角色控制）

输出：
- 发现通过参数篡改可越权读取他人数据
- 风险：高（敏感信息暴露）
- 建议：服务端强校验 + 审计规则补齐

### 反例（输入 -> 输出）
输入：
- “做一下安全扫描”

输出（问题）：
- 直接搬运扫描结果，未验证可利用性
- 真假问题混在一起，难以决策

### Limits 画边界：明确限制，什么不做
- 不把扫描结果当最终结论。
- 不在未授权环境执行攻击性验证。
- 不低估数据泄露类风险。
- 不省略已确认漏洞的复现细节。
- 不在修复未复测前给安全通过结论。

## 安装
### 按系统与 AI 工具选择安装脚本

#### macOS / Linux
- `codex`：[codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/codex.sh)
- `cursor`：[cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/cursor.sh)
- `claudecode`：[claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/claudecode.sh)
- `kiro`：[kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/kiro.sh)
- `opencode`：[opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/opencode.sh)
- `trae`：[trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`：[codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/codex.ps1)
- `cursor`：[cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/cursor.ps1)
- `claudecode`：[claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/claudecode.ps1)
- `kiro`：[kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/kiro.ps1)
- `opencode`：[opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/opencode.ps1)
- `trae`：[trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/zh/security-testing/windows/trae.ps1)

### 说明
- 根据你使用的系统和 AI 工具，选择对应脚本。
- 打开链接后复制脚本执行即可。
## 来源
- 原始技能：[security-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/security-testing/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
