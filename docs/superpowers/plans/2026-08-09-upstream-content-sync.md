# Skills and Prompts Upstream Content Sync Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.
> **同步记录（2026-08-16）：** 实现已落地并经产物与提交证据核对，checkbox 按实现状态回填。证据：`scripts/sync-prompts-from-repo.mjs`、`tests/unit/promptsSync.test.ts` 存在；npm `prompts:sync`/`qaskills:sync`/`content:sync` 命令齐全；生成产物齐备（prompts 180 篇、workflows 中英各 3 篇、qaskills 各 39 篇）；对应提交 `3a413bcfe`、`1f4a55aa5`、`6522e0e81`。

**Goal:** Sync bilingual QA Skills, full QA prompts, and testing workflows from their two GitHub source repositories through repeatable, validated npm commands.

**Architecture:** Keep the existing QA Skills synchronizer as one independent pipeline and add a focused Prompts synchronizer for `testing-types` plus `Workflows`. Both pipelines clone into temporary directories by default, accept a local `--repo-dir`, generate and validate complete temporary output, then replace tracked Markdown; `content:sync` composes the two commands without hiding failures.

**Tech Stack:** Node.js 22 ESM, Astro 6 content collections, TypeScript, Vitest, Markdown/YAML frontmatter, npm.

## Global Constraints

- Use Node.js `>=22.12.0`, npm `10+`, and npm only.
- Keep the public page layout, navigation, and URL structure unchanged.
- Keep `en` and `zh-cn` output structurally aligned.
- Preserve upstream prompt and workflow bodies without editorial rewriting.
- Do not modify deployment configuration, domain configuration, licenses, `dist`, or unrelated content.
- Treat both upstream repositories as the content sources of truth while keeping reviewable Markdown copies in this repository.
- Generate into temporary output and validate it before replacing tracked content.
- Report counts, language mismatch, and removed orphan files; return a nonzero exit code for clone, parse, duplicate-output, or required-field failures.

**Spec:** `docs/superpowers/specs/2026-08-09-upstream-content-sync-design.md`

## File Structure

| File | Responsibility |
| --- | --- |
| `scripts/sync-prompts-from-repo.mjs` | Discover upstream full prompts and workflows, map them to site frontmatter/routes, rewrite workflow links, validate parity, and atomically replace generated Markdown. |
| `tests/unit/promptsSync.test.ts` | Exercise prompt selection, bilingual mapping, workflow mapping/link rewriting, failure cases, and repeatable directory sync with a synthetic upstream fixture. |
| `package.json` | Expose `prompts:sync` and composed `content:sync` commands. |
| `scripts/sync-qaskills-from-repo.mjs` | Existing Skills sync; modify only if the current upstream structure reveals an actual compatibility defect. |
| `src/content/prompts/**` | Generated full prompt copies: 15 testing types × 6 frameworks × 2 languages. |
| `src/content/workflows/**` | Generated daily/sprint/release workflow copies in both languages. |
| `src/content/qaskills/**` | Generated Skills copies from the current Skills upstream. |

---

### Task 1: Build and test the Prompts synchronizer

**Files:**
- Create: `scripts/sync-prompts-from-repo.mjs`
- Create: `tests/unit/promptsSync.test.ts`

**Interfaces:**
- Consumes: an upstream root containing `testing-types/{zh,en}` and `Workflows/{zh,en}`.
- Produces: `parseArgs(argv)`, `selectFullPrompt(versionDir)`, `buildPromptDocument(input)`, `buildWorkflowDocument(input)`, `rewriteWorkflowLinks(markdown, lang)`, and `syncFromRepo(repoRoot, outRoot, options)` as named ESM exports for unit testing.
- CLI: `node scripts/sync-prompts-from-repo.mjs [--repo-dir PATH] [--out-root PATH] [--fail-on-lang-mismatch]`.

- [x] **Step 1: Write the failing tests for deterministic prompt selection and document mapping**

Create `tests/unit/promptsSync.test.ts` with temporary synthetic upstream directories. The core cases must assert:

```ts
import { afterEach, describe, expect, it } from "vitest";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import {
  buildPromptDocument,
  buildWorkflowDocument,
  rewriteWorkflowLinks,
  selectFullPrompt,
  syncFromRepo,
} from "../../scripts/sync-prompts-from-repo.mjs";

describe("prompt source selection", () => {
  it("selects the sole Full prompt and ignores Lite and platform variants", () => {
    const files = [
      "FunctionalTesting-CRISPE-Full.md",
      "FunctionalTesting-CRISPE-Lite.md",
      "FunctionalTesting-CRISPE-Full-Web.md",
    ];
    expect(selectFullPrompt(files, "CRISPE")).toBe("FunctionalTesting-CRISPE-Full.md");
  });

  it("selects the canonical Standard prompt", () => {
    expect(selectFullPrompt(
      ["APITestingPrompt.md", "APITestingPrompt_Lite.md"],
      "Standard",
    )).toBe("APITestingPrompt.md");
  });

  it("throws instead of guessing when two canonical candidates remain", () => {
    expect(() => selectFullPrompt(["A-Full.md", "B-Full.md"], "ROSES"))
      .toThrow(/expected exactly one canonical Full prompt/i);
  });
});

describe("site document mapping", () => {
  it("adds the existing prompt schema fields without changing the body", () => {
    const body = "# API Testing Prompt\n\nOriginal body.";
    const output = buildPromptDocument({
      body,
      lang: "en",
      testingType: "api-testing",
      promptVersion: "Standard",
      title: "API Testing",
    });
    expect(output).toContain('title: "Standard - API Testing"');
    expect(output).toContain('testingType: "api-testing"');
    expect(output).toContain('promptVersion: "Standard"');
    expect(output.endsWith(`${body}\n`)).toBe(true);
  });

  it("maps workflow filenames and rewrites upstream relative prompt links", () => {
    const body = "# Daily Testing Workflow\n\n[API](../testing-types/api-testing/APITestingPrompt_EN.md)";
    const rewritten = rewriteWorkflowLinks(body, "en");
    expect(rewritten).toContain("[API](/en/prompts/api-testing/)");
    const output = buildWorkflowDocument({ body: rewritten, lang: "en", workflowType: "daily" });
    expect(output).toContain('workflowType: "daily"');
    expect(output).toContain('order: 1');
  });
});
```

Add integration cases that construct a fixture with one test type, all six framework directories, three workflows, and both languages; assert that `syncFromRepo()` writes 12 prompt files plus 6 workflows, removes a planted orphan, warns on language mismatch, fails in strict mode, and produces identical bytes on a second run.

- [x] **Step 2: Run the new test and verify it fails for the missing module**

Run: `cd tests && npx vitest --run unit/promptsSync.test.ts`

Expected: FAIL because `scripts/sync-prompts-from-repo.mjs` does not exist or its exports are missing.

- [x] **Step 3: Implement constants, parsing, and deterministic file selection**

In `scripts/sync-prompts-from-repo.mjs`, define the site-supported mappings exactly:

```js
export const PROMPT_VERSIONS = [
  { dir: "Standard-version", value: "Standard", order: 1 },
  { dir: "ROSES-version", value: "ROSES", order: 2 },
  { dir: "LangGPT-version", value: "LangGPT", order: 3 },
  { dir: "ICIO-version", value: "ICIO", order: 4 },
  { dir: "CRISPE-version", value: "CRISPE", order: 5 },
  { dir: "RISE-version", value: "RISE", order: 6 },
];

export const WORKFLOWS = {
  "daily-testing-workflow.md": { type: "daily", order: 1 },
  "sprint-testing-workflow.md": { type: "sprint", order: 2 },
  "release-testing-workflow.md": { type: "release", order: 3 },
};
```

`selectFullPrompt(files, version)` must exclude README, Lite, Lean, Mobile, Web, and `all_round` variants. For Standard it selects the remaining canonical `*Prompt.md`; for other frameworks it selects the remaining canonical `*-Full.md`. It must throw with the directory and candidates unless exactly one file remains.

- [x] **Step 4: Implement frontmatter generation and workflow-link rewriting**

Generate YAML-safe quoted values with an internal `quoteYaml()` that escapes backslash, double quote, CR, and LF. Prompt titles/descriptions follow the current site convention:

```js
const title = `${promptVersion} - ${testingTypeTitle}`;
const description = lang === "zh-cn"
  ? `${testingTypeTitle}${promptVersion === "Standard" ? "标准" : ` ${promptVersion} 框架`}提示词`
  : `${promptVersion === "Standard" ? "Standard" : `${promptVersion} framework`} prompt for ${testingTypeTitle}`;
```

Derive `testingTypeTitle` from the upstream README `#` heading, not a duplicated 15-item title table. Convert upstream workflow links that point anywhere below `testing-types/<slug>/...` to `/{lang}/prompts/<slug>/`; preserve external links, anchors, and unrelated relative links.

- [x] **Step 5: Implement complete temporary generation, validation, and replacement**

`syncFromRepo(repoRoot, outRoot, options)` must:

1. Verify `testing-types/{zh,en}` and `Workflows/{zh,en}` exist.
2. Discover testing-type slugs from directories instead of hard-coding 15 names.
3. Reject duplicate output paths and empty prompt/workflow bodies.
4. Generate `prompts/{zh-cn,en}` and `workflows/{zh-cn,en}` below a temporary directory.
5. Compare zh/en testing-type, framework, and workflow keys; warn or throw when strict.
6. Replace only `.md` generated files after all validation succeeds.
7. Report prompt counts, workflow counts, mismatches, and removed orphans.

Keep CLI execution behind a direct-entry guard so Vitest imports do not start a clone:

```js
const isDirectRun = process.argv[1] &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);
if (isDirectRun) main();
```

- [x] **Step 6: Run focused tests and verify they pass**

Run: `cd tests && npx vitest --run unit/promptsSync.test.ts`

Expected: PASS, including deterministic selection, exact frontmatter, link rewriting, orphan cleanup, strict parity failure, and idempotence.

- [x] **Step 7: Commit the synchronizer and tests**

```bash
git add scripts/sync-prompts-from-repo.mjs tests/unit/promptsSync.test.ts
git commit -m "feat(prompts): add upstream content synchronizer"
```

---

### Task 2: Expose commands and sync Prompts plus Workflows

**Files:**
- Modify: `package.json`
- Generate: `src/content/prompts/{en,zh-cn}/**/*.md`
- Generate: `src/content/workflows/{en,zh-cn}/*.md`

**Interfaces:**
- Consumes: `scripts/sync-prompts-from-repo.mjs` CLI from Task 1.
- Produces: npm scripts `prompts:sync` and `content:sync`; refreshed site content matching `awesome-qa-prompt` main.

- [x] **Step 1: Add the npm command assertions**

Extend `tests/unit/promptsSync.test.ts`:

```ts
it("exposes focused and composed sync commands", () => {
  const packageJson = JSON.parse(readFileSync(join(process.cwd(), "..", "package.json"), "utf8"));
  expect(packageJson.scripts["prompts:sync"]).toBe("node scripts/sync-prompts-from-repo.mjs");
  expect(packageJson.scripts["content:sync"]).toBe("npm run qaskills:sync && npm run prompts:sync");
});
```

- [x] **Step 2: Run the assertion and verify it fails**

Run: `cd tests && npx vitest --run unit/promptsSync.test.ts -t "exposes focused"`

Expected: FAIL because the two package scripts do not exist.

- [x] **Step 3: Add the two npm scripts**

Modify `package.json` scripts:

```json
"qaskills:sync": "node scripts/sync-qaskills-from-repo.mjs",
"prompts:sync": "node scripts/sync-prompts-from-repo.mjs",
"content:sync": "npm run qaskills:sync && npm run prompts:sync"
```

- [x] **Step 4: Run the command assertion**

Run: `cd tests && npx vitest --run unit/promptsSync.test.ts -t "exposes focused"`

Expected: PASS.

- [x] **Step 5: Sync from the already inspected local upstream clone**

Run:

```bash
npm run prompts:sync -- --repo-dir /tmp/qa-content-plan.x1Pvct/awesome-qa-prompt --fail-on-lang-mismatch
```

Expected: 90 English and 90 Chinese full prompts, plus 3 English and 3 Chinese workflows; no language mismatch. The script may report replaced files, but must not leave obsolete workflow names such as `daily-testing-workflow.md` because site routes require `daily.md`.

- [x] **Step 6: Verify counts, frontmatter, bodies, and link targets**

Run:

```bash
find src/content/prompts/en -name '*.md' | wc -l
find src/content/prompts/zh-cn -name '*.md' | wc -l
find src/content/workflows/en -name '*.md' | wc -l
find src/content/workflows/zh-cn -name '*.md' | wc -l
rg -n "\.\./testing-types/|Prompt_EN\.md|Prompt\.md\)" src/content/workflows
```

Expected: `90`, `90`, `3`, `3`; the final `rg` returns no matches. Compare one file from each language and content family with its upstream source using `diff` after removing generated frontmatter.

- [x] **Step 7: Re-run sync and verify idempotence**

Run the same `npm run prompts:sync -- --repo-dir ... --fail-on-lang-mismatch`, then run `git diff --exit-code -- src/content/prompts src/content/workflows` only after recording the first-run diff hash or file checksums. Expected: the second run creates no additional content difference.

- [x] **Step 8: Commit command and generated content changes**

```bash
git add package.json src/content/prompts src/content/workflows
git commit -m "content(prompts): sync prompts and workflows upstream"
```

---

### Task 3: Refresh QA Skills and verify upstream parity

**Files:**
- Modify if required: `scripts/sync-qaskills-from-repo.mjs`
- Generate: `src/content/qaskills/{en,zh-cn}/*.md`
- Test if script changes: `tests/unit/qaskillsParse.site.test.ts` or a new focused sync test

**Interfaces:**
- Consumes: existing `npm run qaskills:sync -- --repo-dir PATH --fail-on-lang-mismatch`.
- Produces: current bilingual Skills content from `awesome-qa-skills` main.

- [x] **Step 1: Run the existing Skills synchronizer against the inspected local clone**

Run:

```bash
npm run qaskills:sync -- --repo-dir /tmp/qa-content-plan.x1Pvct/awesome-qa-skills --fail-on-lang-mismatch
```

Expected: 30 English and 30 Chinese skills, all with Evals according to the current upstream README, and no language mismatch.

- [x] **Step 2: Inspect the diff before changing synchronizer code**

Run:

```bash
git diff --stat -- src/content/qaskills scripts/sync-qaskills-from-repo.mjs
rg -L "syncedAt: 2026-08-09" src/content/qaskills/{en,zh-cn}/*.md
```

Expected: content-only upstream changes are acceptable; `rg -L` returns no generated skill file. Do not alter the synchronizer unless this run exposes a real parse, mapping, or current-upstream compatibility defect.

- [x] **Step 3: If a compatibility defect exists, reproduce it with a failing unit test**

Add the smallest fixture matching the exact upstream construct to a focused qaskills sync test. Run that test and verify the failure message demonstrates the defect before editing the script.

- [x] **Step 4: If needed, implement only the compatibility fix and rerun focused tests**

Expected: the new regression test passes and existing qaskills tests remain green:

```bash
cd tests && npx vitest --run unit/qaskillsSections.test.ts unit/qaskillsParse.site.test.ts unit/qaskillsLifecyclePath.test.ts
```

- [x] **Step 5: Verify Skills counts and idempotence**

Run:

```bash
find src/content/qaskills/en -maxdepth 1 -name '*.md' ! -name README.md | wc -l
find src/content/qaskills/zh-cn -maxdepth 1 -name '*.md' ! -name README.md | wc -l
npm run qaskills:sync -- --repo-dir /tmp/qa-content-plan.x1Pvct/awesome-qa-skills --fail-on-lang-mismatch
```

Expected: `30`, `30`; the second run introduces no additional diff.

- [x] **Step 6: Commit refreshed Skills content and any proven compatibility fix**

```bash
git add src/content/qaskills scripts/sync-qaskills-from-repo.mjs tests/unit
git commit -m "content(qaskills): sync skills upstream"
```

Omit unchanged paths from the commit. If upstream content is already identical, record that result and do not create an empty commit.

---

### Task 4: Validate content collections and public routes

**Files:**
- Verify: `src/content.config.ts`
- Verify: `src/pages/[lang]/prompts/**`
- Verify: `src/pages/[lang]/qaskills/**`
- Modify only for a proven regression: closest existing unit or E2E test

**Interfaces:**
- Consumes: all synchronized content from Tasks 2 and 3.
- Produces: evidence that schemas, bilingual routes, SEO checks, and representative pages remain valid.

- [x] **Step 1: Run all content-adjacent unit tests**

Run:

```bash
cd tests && npx vitest --run \
  unit/promptsSync.test.ts \
  unit/promptsListPage.test.ts \
  unit/promptsDetailPage.test.ts \
  unit/workflowsDetailPage.test.ts \
  unit/qaskillsSections.test.ts \
  unit/qaskillsParse.site.test.ts \
  unit/qaskillsFilter.test.ts \
  unit/qaskillsRelated.test.ts \
  unit/qaskillsLifecyclePath.test.ts
```

Expected: PASS. If a failure is caused by synchronized content, add a regression assertion before changing production code; do not weaken an existing invariant simply to make it green.

- [x] **Step 2: Run the Astro type check and production build**

Run: `npm run build`

Expected: exit code 0; Astro accepts all prompt/workflow/skill frontmatter and generates both locales.

- [x] **Step 3: Run the SEO static check**

Run: `npm run seo:check`

Expected: exit code 0. Separate any pre-existing warning from a new synchronization regression.

- [x] **Step 4: Verify representative built routes and content markers**

Run:

```bash
test -f dist/en/prompts/api-testing/index.html
test -f dist/zh-cn/prompts/api-testing/index.html
test -f dist/en/prompts/workflows/daily/index.html
test -f dist/zh-cn/prompts/workflows/daily/index.html
test -f dist/en/qaskills/code-review/index.html
test -f dist/zh-cn/qaskills/code-review/index.html
rg -n "Standard - API Testing|Daily Testing Workflow" dist/en/prompts
rg -n "API 测试|日常测试工作" dist/zh-cn/prompts
```

Expected: all files exist and each language contains its expected synchronized marker.

- [x] **Step 5: Review the final workspace diff**

Run:

```bash
git status --short
git diff --check
git diff --stat HEAD
git diff -- package.json scripts src/content tests/unit
```

Expected: only the planned synchronizer, commands, tests, and generated content are changed; no `dist`, deployment, license, or unrelated files are included.

- [x] **Step 6: Commit any final regression tests or minimal compatibility changes**

```bash
git add tests/unit scripts src/content.config.ts src/pages
git commit -m "test(content): verify synchronized QA content"
```

Omit unchanged paths and do not create an empty commit. Do not commit build output.

- [x] **Step 7: Record final delivery evidence**

Report exact synchronized counts, upstream commit IDs from both temporary clones, test/build/SEO exit results, representative bilingual routes checked, and any residual warning or deliberate exclusion.

