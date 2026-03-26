# mobile-testing

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
- Who should use: Mobile QAs validating behavior across devices and OS versions.
- Best used when: Compatibility, lifecycle, network, and interaction risks must be checked on mobile.
- How to use: Build a device matrix, run key journeys under mobile-specific conditions, then report by device tier.


## Usage Guide
1. Install and enable `mobile-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with device matrix, for example: "Use `mobile-testing` on iOS17 + Android13 payment flow."
4. Ask for outputs by device tier: scenario list, risk map, and reporting format.
5. Re-run for newly added devices or OS versions only.

## Skill Breakdown

### When
- Mobile app/web feature must be validated across devices and OS versions.
- Crash, layout break, or gesture-related issues are reported.
- Team needs confidence in network, lifecycle, and permission behavior.

### What
- Validate mobile behavior across device capability and usage context.
- Detect issues in compatibility, performance, and interaction consistency.
- Provide release risk view specific to mobile platform constraints.

### How
1. Define device matrix by user share, OS version, and hardware class.
2. Cover install/update, login, key journeys, and background/foreground transitions.
3. Test network switches, offline/weak network, and interruption events.
4. Validate gesture, orientation, and permission flows.
5. Capture device-specific defects with reproducible context.
6. Report compatibility coverage and residual risk by device tier.

### Reference
### Positive Example (Input -> Output)
Input:
- Scope: checkout on Android 12/13 and iOS 17 under weak network

Output:
- Found duplicate submission on reconnect scenario (Android)
- Found keyboard overlap in coupon input (iOS)
- Device-tier risk summary and fix priority

### Negative Example (Input -> Output)
Input:
- "Test app on one phone"

Output (problem):
- Single-device result used as global conclusion
- Major compatibility risks remain hidden

### Limits
- Do not generalize from one device result.
- Do not skip lifecycle/interruption scenarios.
- Do not ignore permission and system-setting impacts.
- Do not report mobile quality without device matrix context.
- Do not close verification before high-share devices pass.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/mobile-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [mobile-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/mobile-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
