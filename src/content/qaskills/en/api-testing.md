# api-testing

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
- Who should use: API testers and backend-focused automation engineers.
- Best used when: API changes may impact contract, auth, payload, or integration behavior.
- How to use: Define API matrix, run contract and behavior checks, then report defects with reproducible evidence.


## Usage Guide
1. Install and enable `api-testing` first (use the install commands in this page).
2. In your request, provide required context: scope, environment, timeline, and expected output format.
3. Trigger with API context, for example: "Use `api-testing` on /orders and /payments in staging."
4. Provide auth/data details and ask for outputs: test matrix, assertions, and defect evidence format.
5. Execute in two rounds: smoke first, then negative/boundary regression.

## Skill Breakdown

### When
- API changes may break contract, data shape, auth, or error handling.
- Backend is ready before UI and API needs early verification.
- Regression confidence is needed for integration and release.

### What
- Validate request/response behavior using API contract and behavior validation.
- Detect contract mismatch, status-code drift, and data integrity issues.
- Provide evidence for API readiness and downstream integration safety.

### How
1. Define API scope by endpoint criticality and business flow dependency.
2. Prepare test matrix: happy path, validation errors, auth, idempotency, and boundary data.
3. Execute with deterministic fixtures and environment isolation.
4. Verify status, schema, key fields, and side effects.
5. Log failures with reproducible request payload and correlation id.
6. Summarize API quality with pass rate, top risks, and follow-up tests.

### Reference
### Positive Example (Input -> Output)
Input:
- Endpoint: `POST /orders`
- Rules: member coupon + stock lock + timeout rollback

Output:
- Cases covering valid order, invalid coupon, insufficient stock, replay protection
- Defect found: rollback missing when payment timeout occurs
- Recommendation: block release until compensation path is fixed

### Negative Example (Input -> Output)
Input:
- "Test all order APIs"

Output (problem):
- Only 200-response checks, no schema validation or negative path
- Misses contract-breaking field type change

### Limits
- Do not test APIs without environment/data setup clarity.
- Do not rely on status code alone for correctness.
- Do not ignore side-effect validation for write APIs.
- Do not hide flaky assertions caused by unstable test data.
- Do not claim integration safety without contract verification.

## Install
### Choose installer by OS and AI tool

#### macOS / Linux
- `codex`: [codex.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/codex.sh)
- `cursor`: [cursor.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/cursor.sh)
- `claudecode`: [claudecode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/claudecode.sh)
- `kiro`: [kiro.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/kiro.sh)
- `opencode`: [opencode.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/opencode.sh)
- `trae`: [trae.sh](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/mac/trae.sh)

#### Windows (PowerShell)
- `codex`: [codex.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/codex.ps1)
- `cursor`: [cursor.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/cursor.ps1)
- `claudecode`: [claudecode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/claudecode.ps1)
- `kiro`: [kiro.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/kiro.ps1)
- `opencode`: [opencode.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/opencode.ps1)
- `trae`: [trae.ps1](https://github.com/naodeng/awesome-qa-skills/blob/main/installers/en/api-testing/windows/trae.ps1)

### Notes
- Pick the script that matches your OS and AI tool.
- Open the link and run the script content directly.
## Source
- Original Skill: [api-testing](https://github.com/naodeng/awesome-qa-skills/blob/main/skills/en/testing-types/api-testing/SKILL.md)
- Repository: [https://github.com/naodeng/awesome-qa-skills](https://github.com/naodeng/awesome-qa-skills)

## Last Synced
2026-03-25
