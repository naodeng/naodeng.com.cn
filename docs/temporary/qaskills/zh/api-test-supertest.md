# api-test-supertest

作者：naodeng • 资深 QA / 自动化测试 / AI 提示词与 Skill 专家

## 中文名称
api-test-supertest

## When 定场景（触发场景：用户何时使用）
- 当接口有新增/变更，且需要判断是否破坏兼容时。
- 当多系统联调频繁失败，需要先定位契约差异时。
- 当版本发布前，需要快速确认关键 API 是否可回归时。

## What 立目标（具体成果：解决什么问题）
- 产出一份风险优先的 API 验证清单（主路径、异常路径、兼容路径）。
- 给出明确的发布判断：可发布 / 有条件发布 / 阻断发布。
- 形成“接口改动 -> 风险 -> 证据 -> 结论”的闭环记录。

## How 理规则（步骤逻辑：怎么执行）
1. 先对齐范围：明确本次“要测/不测”的边界和成功标准。
2. 再做风险排序：按业务影响和失败概率排优先级。
3. 按优先级执行：先高风险主路径，再覆盖关键边界和异常路径。
4. 过程留证据：每个结论必须有输入、步骤、结果和影响说明。
5. 同步分诊与回归：发现问题后立即分级并规划复核路径。
6. 最终给结论：输出可决策摘要（当前状态、剩余风险、建议动作）。

## Reference 给示例（正反例：输入 -> 输出）
### 正例（输入 -> 输出）
输入：
- 变更接口：`POST /orders`
- 变更点：新增字段 `couponCode`，状态码规则调整
- 风险偏好：支付失败率不可上升

输出：
- 验证清单：主流程下单、优惠券合法/非法、重复提交幂等、超时重试
- 证据：请求样例、响应对比、错误语义对照表
- 结论：可有条件发布（需补一条 429 重试策略回归）

### 反例（输入 -> 输出）
输入：
- “帮我测下订单接口”

输出（问题）：
- 只有“已测试通过”，无场景清单、无证据、无风险说明
- 无法支持发布决策

## Limits 画边界（明确限制：什么不做）
- 不做“无范围、无优先级、无验收标准”的空泛执行。
- 不输出“只给结论、不附证据”的不可审计报告。
- 不替代业务负责人做最终业务取舍决策。
- 不承诺覆盖所有低价值长尾场景（采用风险优先）。
- 不在信息缺失时给出确定性结论（必须显式列出假设）。

## 安装
### macOS / Linux
```bash
SKILL_DIR="explore/skills-zh/api-test-supertest"
DEST="$HOME/.codex/skills/naodeng-api-test-supertest"
TMP_DIR="$(mktemp -d)"
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills "$TMP_DIR/repo"
cd "$TMP_DIR/repo"
git sparse-checkout set "$SKILL_DIR"
mkdir -p "$(dirname "$DEST")"
cp -R "$SKILL_DIR" "$DEST"
echo "已安装到 $DEST"
```

### Windows (PowerShell)
```powershell
$SkillDir = "explore/skills-zh/api-test-supertest"
$Dest = "$env:USERPROFILE\\.codex\\skills\\naodeng-api-test-supertest"
$Tmp = Join-Path $env:TEMP ("aqs-" + [guid]::NewGuid().ToString())
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills (Join-Path $Tmp "repo")
Set-Location (Join-Path $Tmp "repo")
git sparse-checkout set $SkillDir
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Dest) | Out-Null
Copy-Item -Recurse -Force $SkillDir $Dest
Write-Host "已安装到 $Dest"
```

## 来源
- 原始技能：[api-test-supertest](https://github.com/naodeng/awesome-qa-skills/blob/main/explore/skills-zh/api-test-supertest/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
