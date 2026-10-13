---
title: "Positive Testing"
description: "Positive testing uses valid inputs and expected workflows to verify that a system behaves as specified, and is commonly paired with negative testing."
section: "P"
related:
  - "manual-testing"
  - "automated-testing"
  - "validation-testing"
  - "test-case"
  - "test-suite"
  - "postcondition"
order: 0
---

# Positive Testing

<!-- TOC START -->

- [Positive Testing](#positive-testing)
  - [What is positive testing?](#what-is-positive-testing)
  - [What are its goals?](#what-are-its-goals)
  - [Positive testing and negative testing](#positive-testing-and-negative-testing)
  - [When to use positive testing](#when-to-use-positive-testing)
  - [Example](#example)
  - [How to combine it with negative testing](#how-to-combine-it-with-negative-testing)
  - [Common mistakes](#common-mistakes)
<!-- TOC END -->

Positive testing checks what a system should do; negative testing checks how it handles inputs or conditions it should reject. Both are needed for balanced coverage.

Related Terms

- [Negative Testing](/en/wiki/negative-testing/)
- [Test Case](/en/wiki/test-case/)
- [Input Validation Testing](/en/wiki/input-validation-testing/)
- [Regression Testing](/en/wiki/regression-testing/)

## What is positive testing?

Positive testing uses valid inputs and expected workflows to verify that a system behaves according to its requirements and design. It asks: “When a user follows the expected flow, does the system produce the expected result?”

Common checks include whether:

- A feature behaves as specified.
- A page or API returns the expected result.
- Data is saved and state changes are correct.
- Performance is acceptable during normal use.

## What are its goals?

- Show that core business functions work.
- Find defects that block expected workflows.
- Provide evidence that critical user journeys are available before release.
- Establish a baseline for later negative and boundary testing.

## Positive testing and negative testing

- **Positive testing** supplies valid data and checks the success path.
- **Negative testing** supplies invalid or unexpected data and checks error handling and resilience.

For a login flow, for example:

- Positive: enter a valid username and password; the user should sign in.
- Negative: enter an unknown username, an incorrect password, or empty or oversized fields; the system should show an appropriate error and remain stable.

## When to use positive testing

- During an initial smoke check of a new feature.
- To cover critical business paths during regression testing.
- Before acceptance review to confirm important workflows.
- Before release to verify a minimum set of essential capabilities.

## Example

Consider an online purchase:

1. Add an item to the cart.
2. Enter a valid delivery address and payment details.
3. Submit the order.
4. Verify that payment succeeds and an order number is created.

This is a positive test because each step uses expected inputs and follows the normal workflow.

## How to combine it with negative testing

A practical sequence is to:

- Confirm that the main workflow works with positive tests.
- Add negative tests for invalid input, unexpected states, and recovery behavior.
- Keep a fast positive smoke check and a focused negative regression set in CI.

This provides quick feedback while still checking how the system handles failures.

## Common mistakes

- Testing only successful paths and omitting negative cases.
- Checking a success message without verifying the resulting data or state.
- Using too few positive cases to cover important branches.
- Leaving positive checks manual when automation would make repeatable regression easier.
