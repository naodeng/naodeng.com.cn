# api-test-bruno

by naodeng • Senior QA / Test Automation / AI Prompt & Skill Specialist

## When
- When API contracts change and backward compatibility must be verified.
- When integration issues appear and contract drift is suspected.
- Before release, to quickly validate critical API regression paths.

## What
- Deliver a risk-ranked API verification checklist (happy, error, compatibility paths).
- Provide explicit release advice: go / conditional go / no-go.
- Build a closed loop from change -> risk -> evidence -> conclusion.

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
- Changed endpoint: `POST /orders`
- Change details: add `couponCode`, update status-code policy
- Risk preference: payment failure rate must not increase

Output:
- Checklist: order happy path, valid/invalid coupon, idempotent retries, timeout handling
- Evidence: request/response diffs and error semantics table
- Conclusion: conditional go (add one 429 retry regression check)

### Negative Example (Input -> Output)
Input:
- "Please test the order API"

Output (problem):
- Only "tested and passed" with no scenario list, no evidence, no risk context
- Not usable for release decision

## Limits
- Do not execute without explicit scope, priority, and acceptance criteria.
- Do not output conclusion-only reports without evidence.
- Do not replace product/business ownership for final business tradeoffs.
- Do not promise exhaustive low-value long-tail coverage.
- Do not provide deterministic conclusions when critical inputs are missing.

## Install
### macOS / Linux
```bash
SKILL_DIR="skills/en/testing-types/api-test-bruno"
DEST="$HOME/.codex/skills/naodeng-api-test-bruno"
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
$SkillDir = "skills/en/testing-types/api-test-bruno"
$Dest = "$env:USERPROFILE\\.codex\\skills\\naodeng-api-test-bruno"
$Tmp = Join-Path $env:TEMP ("aqs-" + [guid]::NewGuid().ToString())
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills (Join-Path $Tmp "repo")
Set-Location (Join-Path $Tmp "repo")
git sparse-checkout set $SkillDir
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Dest) | Out-Null
Copy-Item -Recurse -Force $SkillDir $Dest
Write-Host "Installed to $Dest"
```

## Source
- Original Skill: [api-test-bruno](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/api-test-bruno/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
