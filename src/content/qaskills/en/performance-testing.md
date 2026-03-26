# performance-testing

作者：naodeng

## TOC
- [Quick Intro](#quick-intro)
- [Usage Guide](#usage-guide)
- [Skill Breakdown](#skill-breakdown)
  - [When](#when)
  - [What](#what)
  - [How](#how)
  - [Reference](#reference)
  - [Limits](#limits)
- [Install](#install)
- [Source](#source)
- [Last Synced](#last-synced)

## Quick Intro
- Who should use: Performance engineers and QAs handling capacity validation.
- Best used when: You need data-backed answers for latency, throughput, and bottleneck risk.
- How to use: Define SLO and workload model, execute phased load tests, then report bottlenecks and capacity thresholds.


## Usage Guide
1. Install and enable `performance-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with load targets, for example: "Use `performance-testing` with p95<300ms and peak 1200 RPS."
4. Require outputs: workload model, thresholds, bottleneck analysis, and tuning recommendations.
5. Repeat after tuning and ask for before/after comparison summary.

## Skill Breakdown

### When
- Traffic is expected to grow and capacity limits are unknown.
- Latency, error rate, or saturation symptoms appear in production-like traffic.
- Team needs data-backed scaling and optimization decisions.

### What
- Measure system behavior through performance test methodology.
- Identify bottlenecks across application, database, and dependency layers.
- Deliver capacity baseline and optimization priorities.

### How
1. Define SLO targets and workload model (normal, peak, spike).
2. Prepare realistic traffic mix and representative test data.
3. Run baseline, ramp-up, and steady-state test phases.
4. Correlate response metrics with infrastructure signals.
5. Isolate bottleneck component and validate hypothesis.
6. Report capacity threshold, failure mode, and remediation plan.

### Reference
### Positive Example (Input -> Output)
Input:
- SLO: P95 < 300ms, peak 1200 RPS, checkout + search path

Output:
- At 1050 RPS DB pool saturation starts; P95 reaches 340ms
- CPU stable, DB wait time spikes
- Recommendation: increase pool + optimize hot query before release

### Negative Example (Input -> Output)
Input:
- "Run a stress test"

Output (problem):
- No SLO target, no workload shape, no bottleneck evidence
- Results cannot support scale decision

### Limits
- Do not run synthetic tests that ignore real traffic pattern.
- Do not conclude from average latency only.
- Do not skip dependency-level diagnostics.
- Do not compare runs with inconsistent environment baselines.
- Do not approve capacity without threshold evidence.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/performance-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [performance-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/performance-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
