---
title: "Puppeteer in Software Testing: Getting Started"
description: "A practical starter article on installation, browser setup, the first runnable script, and the most common beginner mistakes."
date: 2026-03-31T00:00:00.000Z
author: "nao.deng"
tags: ["Puppeteer", "Getting Started", "UI Testing"]
categories: ["Automation Testing", "Testing Practice"]
series: ["Puppeteer in Software Testing"]
---

# Puppeteer in Software Testing: Getting Started

## Article Positioning

- Series: Puppeteer in Software Testing
- Status: Published Version
- Topic: Getting Started

## Overview

This article follows the official introductory material and aims for one simple outcome: get Puppeteer running, understand where the browser comes from, and avoid the most common early mistakes.

## One. Prerequisites

The official home page gives a very practical starting point: installing `puppeteer` downloads a compatible Chrome version, while `puppeteer-core` is meant for people who only want the library and will manage the browser themselves.

That means beginners should decide one thing early:

- use `puppeteer` for the fastest out-of-the-box start
- use `puppeteer-core` only when you already know how the browser will be provided

It also helps to have:

- a working Node.js environment
- a simple and reliable page to test against
- a clear decision on whether the browser should be managed automatically or manually

## Two. First runnable example

The shortest useful path is straightforward:

1. launch the browser
2. open a new page
3. navigate to a target URL
4. perform one simple action or check
5. close the browser cleanly

The official browser management guide follows exactly this rhythm. At this stage, the goal is not to build a large suite. The goal is to confirm that the browser starts, the page opens, the action runs, and the script shuts down properly.

## Three. Common beginner mistakes

Most beginner problems come from environment mismatch rather than from complicated logic:

- assuming the browser download is ready without checking whether installation or configuration really took effect
- mixing up `puppeteer` and `puppeteer-core`
- trying to debug only from page behavior without using the available debugging output
- using visible mode locally and headless mode elsewhere without expecting behavior differences

## Four. Good beginner practices

Based on the official docs, the most reliable beginner habits are:

- start with the shortest possible user flow
- debug with a visible browser and slower execution when needed
- keep launch, navigation, verification, and cleanup in a consistent structure
- re-run browser installation when download-related configuration changes, instead of assuming config edits apply by magic

## Five. Summary

Puppeteer is approachable, but the real beginner milestone is not “learn many APIs.” It is getting the browser, script, and debugging path working together as one small but complete loop.

## Series Navigation

- Previous: `00-puppeteer-introduction.md`
- Next: `02-puppeteer-from-0-to-1.md`

## References

- https://pptr.dev/category/introduction
- https://pptr.dev/next
- https://pptr.dev/guides/browser-management
- https://pptr.dev/next/guides/debugging
