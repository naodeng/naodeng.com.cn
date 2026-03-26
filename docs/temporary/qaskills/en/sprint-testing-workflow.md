# sprint-testing-workflow

by naodeng • Senior QA / Test Automation / AI Prompt & Skill Specialist

## When
- When QA cadence is unstable and execution lacks fixed checkpoints.
- When release rhythm accelerates and risk visibility is required daily.
- When stakeholders need a stable status-risk-action reporting format.

## What
- Deliver a fixed execution rhythm and status/report templates.
- Standardize blocker/risk/decision visibility.
- Enable one-page status-risk-action communication.

## How
1. Align scope first: define in-scope/out-of-scope and success criteria.
2. Rank risk: prioritize by business impact and failure likelihood.
3. Execute by priority: cover critical paths before edge/negative paths.
4. Capture evidence continuously: input, steps, result, and impact per finding.
5. Triage and regress: classify issues immediately and plan re-verification.
6. Publish final decision summary: current status, residual risk, and next actions.

## Reference
### Positive Example (Input -> Output)
Input:
- Clear objective, scope, timeline, and risk preference

Output:
- Prioritized execution plan
- Evidence-backed result log
- Decision-ready summary with next actions

### Negative Example (Input -> Output)
Input:
- "Test this feature quickly"

Output (problem):
- Subjective conclusion only, no scope, no evidence, no actionable guidance

## Limits
- Do not execute without explicit scope, priority, and acceptance criteria.
- Do not output conclusion-only reports without evidence.
- Do not replace product/business ownership for final business tradeoffs.
- Do not promise exhaustive low-value long-tail coverage.
- Do not provide deterministic conclusions when critical inputs are missing.

## Install
### macOS / Linux
```bash
SKILL_DIR="skills/en/testing-workflows/sprint-testing-workflow"
DEST="$HOME/.codex/skills/naodeng-sprint-testing-workflow"
TMP_DIR="$(mktemp -d)"
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills "$TMP_DIR/repo"
cd "$TMP_DIR/repo"
git sparse-checkout set "$SKILL_DIR"
mkdir -p "$(dirname "$DEST")"
cp -R "$SKILL_DIR" "$DEST"
echo "Installed to $DEST"
```

### Windows (PowerShell)
```powershell
$SkillDir = "skills/en/testing-workflows/sprint-testing-workflow"
$Dest = "$env:USERPROFILE\\.codex\\skills\\naodeng-sprint-testing-workflow"
$Tmp = Join-Path $env:TEMP ("aqs-" + [guid]::NewGuid().ToString())
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills (Join-Path $Tmp "repo")
Set-Location (Join-Path $Tmp "repo")
git sparse-checkout set $SkillDir
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Dest) | Out-Null
Copy-Item -Recurse -Force $SkillDir $Dest
Write-Host "Installed to $Dest"
```

## Source
- Original Skill: [sprint-testing-workflow](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-workflows/sprint-testing-workflow/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
