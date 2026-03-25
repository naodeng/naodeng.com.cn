# performance-test-gatling

by naodeng • Senior QA / Test Automation / AI Prompt & Skill Specialist

## When
- Before high-traffic events when capacity and latency limits must be validated.
- When production response time becomes unstable and bottlenecks are unclear.
- When release changes involve cache, database, or concurrency behavior.

## What
- Deliver workload plan, key metrics, and bottleneck conclusions.
- Provide capacity advice (safe concurrency, alert thresholds, scale triggers).
- Output implementation-ready optimization priorities.

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
- Goal: P95 < 300ms
- Peak estimate: 1200 RPS
- Journeys: search + checkout

Output:
- Workload model: baseline / ramp / 30-min steady run
- Results: P95 280ms, P99 410ms, DB pool saturation above 1000 RPS
- Conclusion: conditional go after pool tuning and re-test

### Negative Example (Input -> Output)
Input:
- "Run a performance test"

Output (problem):
- Only average response time, no percentiles, no error rate, no bottleneck diagnosis
- Insufficient for capacity decision

## Limits
- Do not execute without explicit scope, priority, and acceptance criteria.
- Do not output conclusion-only reports without evidence.
- Do not replace product/business ownership for final business tradeoffs.
- Do not promise exhaustive low-value long-tail coverage.
- Do not provide deterministic conclusions when critical inputs are missing.

## Install
### macOS / Linux
```bash
SKILL_DIR="explore/skills-en/performance-test-gatling"
DEST="$HOME/.codex/skills/naodeng-performance-test-gatling"
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
$SkillDir = "explore/skills-en/performance-test-gatling"
$Dest = "$env:USERPROFILE\\.codex\\skills\\naodeng-performance-test-gatling"
$Tmp = Join-Path $env:TEMP ("aqs-" + [guid]::NewGuid().ToString())
git clone --depth 1 --filter=blob:none --sparse https://github.com/naodeng/awesome-qa-skills (Join-Path $Tmp "repo")
Set-Location (Join-Path $Tmp "repo")
git sparse-checkout set $SkillDir
New-Item -ItemType Directory -Force -Path (Split-Path -Parent $Dest) | Out-Null
Copy-Item -Recurse -Force $SkillDir $Dest
Write-Host "Installed to $Dest"
```

## Source
- Original Skill: [performance-test-gatling](https://github.com/naodeng/awesome-qa-skills/blob/main/explore/skills-en/performance-test-gatling/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
