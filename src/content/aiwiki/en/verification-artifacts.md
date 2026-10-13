---
title: "Verification Artifacts"
titleZh: "验证产物"
slug: "verification-artifacts"
lang: "en"
summary: "Evidence artifacts used to validate AI task outcomes, e.g., screenshots, recordings, and test reports."
topic: "ai-vibe-coding"
aliases:
  - "Verification Artifacts"
  - "验证产物"
tags:
  - "AI Vibe Coding"
  - "Wiki"
related:
  - "artifacts"
  - "agent-evals"
  - "graders"
  - "trace-grading"
lastReviewedAt: "2026-10-12"
---
# Verification Artifacts

## Quick Take

- **In brief:** Verification artifacts are records used to check a claim about a task or change.
- **Useful for:** Reviewing tests, command output, screenshots, or reproduction steps.
- **Main limit:** Evidence supports a claim only when it matches the change and environment.

## Overview

A patch may claim to fix a bug. A test report and reproduction steps can help a reviewer check that claim. The evidence needs to match the code revision under review.

## Core Definition

A verification artifact is a saved record that supports a specific check. Examples include a test result, command output, screenshot, recording, or reproduction steps. It can support verification, but it does not prove a claim by itself.

## Background and Evolution

As development tasks became distributed across tools and people, teams needed to link checks to the code version and environment that produced them. Tools may collect this evidence, but formats and provenance vary.

## How It Works

1. State the claim to verify.
2. Run a check that can provide relevant evidence.
3. Save the result with the code revision and environment.
4. Compare the evidence with the claim.
5. Record gaps or checks that were not run.

## Applications in Software Development and Testing

For a bug fix, attach the relevant test command, result, code revision, and reproduction steps. For a UI change, include a screenshot with the route, viewport, and browser version.

## Strengths and Limitations

Artifacts help reviewers see what was checked and where. A report can be incomplete or come from another revision. A screenshot may show one state but not prove the behavior across devices.

## Comparison with Similar Terms

An artifact is any saved task output. A verification artifact supports a check. A build artifact is a package or file produced by a build. A trace records connected execution events.

## Best Practices

Link each record to the claim, code revision, and environment. Keep evidence relevant and readable. Remove secrets and personal data. State what the evidence does not cover.

## Common Pitfalls

Do not call an output proof without checking it. Do not mix results from different revisions. Do not save large logs without identifying the relevant lines.

## FAQ

### Does a passing test report prove a change is correct?

No. It shows that selected tests passed in a particular environment. Other requirements or conditions may remain untested.

## Related Resources

### Related Terms

- [Artifact feedback loop](/en/AIWiki/artifact-feedback-loop/)
- [Trace grading](/en/AIWiki/trace-grading/)
- [Agent evaluations](/en/AIWiki/agent-evals/)

### External References

- [GitHub Actions: Workflow artifacts](https://docs.github.com/en/actions/concepts/workflows-and-actions/workflow-artifacts)
- [Playwright: Screenshots](https://playwright.dev/docs/screenshots)
