# requirements-analysis

作者：naodeng • 资深 QA / 自动化测试 / AI 提示词与 Skill 专家

## 中文名称
需求分析

## When 定场景（触发场景：用户何时使用）
- 当你需要把测试工作从“临场发挥”变成“可复用流程”时。
- 当团队结论不一致，需要统一评价标准时。
- 当版本前必须给出可执行、可追踪的质量结论时。

## What 立目标（具体成果：解决什么问题）
- 产出可执行的测试计划、证据记录和结论摘要。
- 明确风险优先级和后续动作。
- 形成可复用模板，降低后续沟通和返工成本。

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
- 目标、范围、时间限制、风险偏好清晰

输出：
- 有优先级的执行计划
- 有证据的结果记录
- 可直接决策的结论摘要

### 反例（输入 -> 输出）
输入：
- “帮我测一下这个功能”

输出（问题）：
- 只有主观结论，无范围、无证据、无行动建议

## Limits 画边界（明确限制：什么不做）
- 不做“无范围、无优先级、无验收标准”的空泛执行。
- 不输出“只给结论、不附证据”的不可审计报告。
- 不替代业务负责人做最终业务取舍决策。
- 不承诺覆盖所有低价值长尾场景（采用风险优先）。
- 不在信息缺失时给出确定性结论（必须显式列出假设）。

## 安装
### macOS / Linux
```bash
SKILL_DIR="skills/zh/testing-types/requirements-analysis"
DEST="$HOME/.codex/skills/naodeng-requirements-analysis"
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
$SkillDir = "skills/zh/testing-types/requirements-analysis"
$Dest = "$env:USERPROFILE\\.codex\\skills\\naodeng-requirements-analysis"
$Tmp = Join-Path $env:TEMP ("aqs-" + [guid]::NewGuid().ToString())
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills (Join-Path $Tmp "repo")
Set-Location (Join-Path $Tmp "repo")
git sparse-checkout set $SkillDir
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Dest) | Out-Null
Copy-Item -Recurse -Force $SkillDir $Dest
Write-Host "已安装到 $Dest"
```

## 来源
- 原始技能：[requirements-analysis](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/zh/testing-types/requirements-analysis/SKILL.md)
- 仓库：[https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## 同步日期
2026-03-25
