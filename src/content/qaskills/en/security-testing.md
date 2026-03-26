# security-testing

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
- Who should use: Security-minded QAs and teams validating sensitive flows.
- Best used when: Authentication, data protection, and abuse risks need verification.
- How to use: Map attack surface, test high-risk vectors, and provide risk-ranked findings with retest criteria.


## Usage Guide
1. Install and enable `security-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with approved scope, for example: "Use `security-testing` for auth and sensitive-data APIs."
4. Ask for outputs: threat checklist, test plan, finding severity rules, and evidence format.
5. After remediation, request focused revalidation steps for each high-risk finding.

## Skill Breakdown

### When
- Sensitive data, auth, or transaction flows are introduced/changed.
- Compliance or internal policy requires security validation.
- Potential abuse vectors are identified in design review.

### What
- Identify exploitable weaknesses in auth, input handling, and data protection.
- Assess security risk impact and remediation priority.
- Support secure-release decisions with evidence.

### How
1. Define threat scope and high-value assets.
2. Build attack surface map across endpoints, roles, and trust boundaries.
3. Execute checks for auth bypass, injection, data exposure, and misconfiguration.
4. Validate logging, rate limits, and defensive controls.
5. Reproduce vulnerabilities and estimate exploitability.
6. Deliver risk-ranked findings with fix and revalidation guidance.

### Reference
### Positive Example (Input -> Output)
Input:
- Feature: admin export API with role-based access

Output:
- Found horizontal privilege escalation via parameter tampering
- Risk: high (sensitive data exposure)
- Fix: enforce server-side ownership check + add audit rule

### Negative Example (Input -> Output)
Input:
- "Do a security scan"

Output (problem):
- Scanner results copied without exploit verification
- False positives mixed with real risks

### Limits
- Do not treat scanner output as final verdict.
- Do not test production attack scenarios without authorization.
- Do not understate exploitability of data exposure issues.
- Do not omit reproduction details for confirmed findings.
- Do not sign off security status without remediation retest.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/security-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [security-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/security-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
