# accessibility-testing

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
- Who should use: QAs and frontend teams responsible for inclusive user experience.
- Best used when: Key user flows must be validated for accessibility before release.
- How to use: Run semantic, keyboard, contrast, and assistive-tech checks, then prioritize fixes by user impact.


## Usage Guide
1. Install and enable `accessibility-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with key pages, for example: "Use `accessibility-testing` for checkout, login, and profile pages."
4. Ask for findings grouped by severity and affected user type (keyboard/screen-reader/low-vision).
5. After fixes, request a retest checklist from the skill.

## Skill Breakdown

### When
- New UI flows are released and accessibility compliance must be checked.
- Product targets inclusive use across keyboard and screen reader users.
- Team needs evidence against accessibility standards before launch.

### What
- Detect accessibility barriers in structure, interaction, and content readability.
- Output prioritized fixes that improve usability for assistive technology users.
- Reduce legal and product risk caused by inaccessible experience.

### How
1. Select key user journeys and accessibility target level.
2. Check semantic structure, focus order, and keyboard operability.
3. Validate contrast, labels, error hints, and dynamic announcements.
4. Test with assistive tools and manual navigation.
5. Record issue impact by user group and task blockage level.
6. Produce remediation backlog with verification criteria.

### Reference
### Positive Example (Input -> Output)
Input:
- Checkout page with modal-based coupon selection

Output:
- Findings: missing focus trap, unlabeled close button, low contrast helper text
- Fix plan with pass criteria and retest checklist

### Negative Example (Input -> Output)
Input:
- "Run accessibility scan"

Output (problem):
- Tool-only output, no manual validation of keyboard/screen-reader flow
- Critical interaction barriers remain undetected

### Limits
- Do not rely solely on automated scanner output.
- Do not treat minor visual issues as equal to task-blocking issues.
- Do not skip real user-flow validation.
- Do not mark pass without retesting fixes.
- Do not ignore localization-specific accessibility content issues.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/accessibility-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [accessibility-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/accessibility-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
