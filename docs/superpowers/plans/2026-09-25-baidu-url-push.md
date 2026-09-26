# Baidu URL Push Integration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 在 Cloudflare 部署成功后，使用 GitHub Secret 将本次发布涉及的规范 URL 推送到百度搜索资源平台，同时保证百度推送失败不影响已完成的 Cloudflare 部署。

**Architecture:** 把现有 IndexNow 的变更 URL、sitemap、去重和 canonical 处理抽到 `scripts/submission-utils.mjs`，让两个提交脚本共享同一 URL 范围。百度脚本使用独立的 `scripts/baidu-push-utils.mjs` 负责请求构造、2,000 条分批、响应分类和 15 秒超时；工作流把百度步骤放在部署后、IndexNow 前，并只依赖部署步骤的成功结论。首次接入或补推通过手动 `workflow_dispatch` 的 `submit_all_baidu` 输入显式读取完整 sitemap，普通 push 仍只提交变更 URL。

**Tech Stack:** Node.js 22 ESM scripts, native `fetch`, Vitest 4, GitHub Actions, Astro build checks.

**Spec:** `docs/superpowers/specs/2026-09-25-baidu-push-design.md`

## Global Constraints

- 准入密钥只从 `BAIDU_PUSH_TOKEN` 环境变量读取，不写入源码、示例配置的实际值、日志或提交信息。
- 站点默认值为 `https://inaodeng.com`，可通过 `BAIDU_PUSH_SITE` 覆盖。
- `BAIDU_PUSH_SITE` 作为 canonical URL 来源保留完整 origin；发给百度的 query `site` 参数使用去掉协议和末尾斜杠的主机名格式。
- 百度接口为 `http://data.zz.baidu.com/urls`，每批最多 2,000 条 URL，Header 为 `Content-Type: text/plain`。
- 百度失败、网络异常、超时、缺密钥和部分失败必须返回非零脚本状态，但 GitHub Actions 百度步骤必须使用 `continue-on-error: true`。
- Cloudflare 部署和 `push main` 上现有 IndexNow 的行为保持不变；手动部署只在显式勾选时执行百度全量推送，不执行 IndexNow。
- 使用 Node.js `>=22.12.0`、npm 10+，不新增依赖，不修改 `dist/`、`node_modules/` 或测试报告。

## Review Focus

- 2,001 个 URL 必须拆成 2,000 + 1 两个请求；百度单批不得复用 IndexNow 的 10,000 条上限。
- IndexNow 失败后百度仍应已执行；构建或 Cloudflare 部署失败时两个通知步骤都应跳过。
- 百度返回 200 但 `not_same_site` 或 `not_valid` 非空时必须报告部分失败，并继续其他批次。
- 百度接口返回非法 JSON、缺少 `success`/`remain`、网络错误或 15 秒超时不能泄露 token。
- 没有 URL 时不读取 token；有 URL 但没有 token 时脚本失败，工作流仍保持部署成功。
- 全量 sitemap 推送必须由手动输入显式启用，不能因普通代码/文档部署自动触发。

---

### Task 1: Extract shared submission URL collection

**Files:**
- Create: `scripts/submission-utils.mjs`
- Modify: `scripts/submit-indexnow.mjs`
- Test: `tests/unit/indexNow.test.ts`

**Interfaces:**
- Produces `valueAfterFlag(args, name)`, `readSitemap(file)`, `changedFilesForRange(range, root)`, and `collectSubmissionUrls({ args, origin, root, sitemapDefault })`.
- `collectSubmissionUrls` returns `{ sitemapPath, changedFiles, candidateUrlCount, validUrls }`, where `candidateUrlCount` preserves the pre-canonicalization URL-set count for existing logs and `validUrls` is sorted, deduplicated, same-origin HTTPS URLs with no query/hash.
- Consumes the existing `canonicalUrls`, `isBroadChange`, and `urlsForSourceFile` exports from `scripts/indexnow-utils.mjs`.

- [ ] **Step 1: Write the failing test**

Add tests to `tests/unit/indexNow.test.ts` that call the new `collectSubmissionUrls` function with literal arguments. Assert that an explicit canonical URL is deduplicated and sorted, and that a missing sitemap throws `Sitemap not found`.

```ts
it("collects canonical URLs from explicit input", () => {
  const result = collectSubmissionUrls({
    args: ["https://inaodeng.com/en/blog/example/"],
    origin: "https://inaodeng.com",
    root: REPO_ROOT,
    sitemapDefault: path.join(REPO_ROOT, "dist/sitemap-0.xml"),
  });

  expect(result.validUrls).toEqual(["https://inaodeng.com/en/blog/example/"]);
});

it("reports a missing sitemap with its path", () => {
  expect(() => readSitemap(path.join(REPO_ROOT, "missing-sitemap.xml"))).toThrow("Sitemap not found");
});
```

- [ ] **Step 2: Run the focused test and verify it fails**

Run `cd tests && npm run test:unit -- indexNow.test.ts` from the repository root.

Expected: FAIL because `scripts/submission-utils.mjs` and `collectSubmissionUrls` do not exist yet.

- [ ] **Step 3: Implement the shared helper and migrate IndexNow**

Move the existing argument, sitemap, git-range, and URL-set logic from `scripts/submit-indexnow.mjs` into `scripts/submission-utils.mjs`. Keep `canonicalUrls`, `isBroadChange`, and `urlsForSourceFile` in `indexnow-utils.mjs`; import them from the new helper. Update `submit-indexnow.mjs` to use `collectSubmissionUrls`, preserving its current logs and exit behavior.

- [ ] **Step 4: Run the focused and existing IndexNow tests**

Run `cd tests && npm run test:unit -- indexNow.test.ts`.

Expected: PASS with all IndexNow tests green, including the existing workflow behavior checks.

- [ ] **Step 5: Commit the shared helper**

```bash
git add scripts/submission-utils.mjs scripts/submit-indexnow.mjs tests/unit/indexNow.test.ts
git commit -m "refactor: share submission URL collection"
```

### Task 2: Add tested Baidu request and response handling

**Files:**
- Create: `scripts/baidu-push-utils.mjs`
- Create: `scripts/submit-baidu.mjs`
- Create: `tests/unit/baiduPush.test.ts`

**Interfaces:**
- `buildBaiduPushRequest({ endpoint, site, token, urls })` returns `{ url, init }`, where `init.method` is `POST`, `init.headers["Content-Type"]` is `text/plain`, and `init.body` joins URLs with `\n`.
- `classifyBaiduPushResponse(status, body)` returns `success`, `partial`, or `failure` with sanitized counts/messages and never includes the response body or request URL; known Baidu error reasons may be surfaced from an allowlist.
- `submitBaiduUrls(urls, { endpoint, site, token, fetchImpl, timeoutMs })` submits chunks of at most 2,000 URLs, attempts every chunk, and returns an aggregate result with `failedBatches`, `acceptedUrls`, `partialBatches`, and `remaining`.

- [ ] **Step 1: Write failing tests for the request contract and response classification**

Use a fake token such as `test-token`, never a real credential. Cover query parameters, plain-text body, complete success feedback, partial feedback, non-2xx, malformed JSON, and missing integer fields.

```ts
it("builds the Baidu plain-text request without changing URL order", () => {
  const request = buildBaiduPushRequest({
    endpoint: "http://data.zz.baidu.com/urls",
    site: "https://inaodeng.com",
    token: "test-token",
    urls: ["https://inaodeng.com/a/", "https://inaodeng.com/b/"],
  });

  expect(request.url).toBe(
    "http://data.zz.baidu.com/urls?site=inaodeng.com&token=test-token",
  );
  expect(request.init).toEqual({
    method: "POST",
    headers: { "Content-Type": "text/plain" },
    body: "https://inaodeng.com/a/\nhttps://inaodeng.com/b/",
  });
});

it("classifies a 200 response with rejected URLs as partial", () => {
  expect(classifyBaiduPushResponse(200, JSON.stringify({
    remain: 99998,
    success: 1,
    not_same_site: ["https://other.example/"],
    not_valid: [],
  }))).toEqual({ kind: "partial", status: 200, success: 1, remain: 99998, notSameSiteCount: 1, notValidCount: 0 });
});
```

- [ ] **Step 2: Run the new test and verify it fails**

Run `cd tests && npm run test:unit -- baiduPush.test.ts`.

Expected: FAIL because the Baidu utility module does not exist.

- [ ] **Step 3: Implement minimal request and response utilities**

Use `URL` and `searchParams` for `site` and `token`, normalizing the configured origin to a host-only `site` query parameter. Treat only integer `success` and `remain` fields as valid feedback; normalize omitted rejection arrays to empty arrays; retain only counts in the classified result. Do not include response bodies or `request.url` in classified errors, because either may contain a token-bearing URL; use fixed status/reason summaries, with only known Baidu reasons from an allowlist.

- [ ] **Step 4: Add the failing batch, timeout, and missing-token tests**

Use a fake `fetchImpl` that records calls and returns complete response objects. Assert that 2,001 URLs produce request body sizes of 2,000 and 1, a rejected first batch does not prevent the second call, an aborted/throwing fetch counts as a failed batch, and an empty token is rejected before fetch.

```ts
it("splits 2,001 URLs into 2,000 and 1 and continues after a failed batch", async () => {
  const calls: Array<{ body: string }> = [];
  const urls = Array.from({ length: 2001 }, (_, index) => `https://inaodeng.com/${index}/`);
  const result = await submitBaiduUrls(urls, {
    endpoint: "http://data.zz.baidu.com/urls",
    site: "https://inaodeng.com",
    token: "test-token",
    timeoutMs: 1,
    fetchImpl: async (_url, init) => {
      calls.push({ body: String(init.body) });
      return calls.length === 1
        ? new Response("upstream error", { status: 500 })
        : new Response(JSON.stringify({ remain: 999, success: 1 }), { status: 200 });
    },
  });

  expect(calls.map(({ body }) => body.split("\n").length)).toEqual([2000, 1]);
  expect(result.failedBatches).toBe(1);
  expect(result.acceptedUrls).toBe(1);
});
```

- [ ] **Step 5: Run the test to verify the new cases fail**

Run `cd tests && npm run test:unit -- baiduPush.test.ts`.

Expected: FAIL because batching, timeout, network-error handling, and token validation are not implemented.

- [ ] **Step 6: Implement `submitBaiduUrls`**

Validate a non-empty token before the first request. Iterate in 2,000-item chunks, call `fetchImpl` with `AbortSignal.timeout(timeoutMs)` by default, catch thrown errors as failed batches, classify every response, and continue until all chunks have been attempted. Return aggregate counts and set the CLI exit code after all batches.

- [ ] **Step 7: Run the focused test and the complete unit suite**

Run `cd tests && npm run test:unit -- baiduPush.test.ts` and then `npm test` from the repository root.

Expected: the focused Baidu tests and the complete existing unit suite pass with zero failures.

- [ ] **Step 8: Implement the CLI wrapper**

Read `BAIDU_PUSH_SITE` with default `https://inaodeng.com`, require `BAIDU_PUSH_TOKEN` only when `validUrls` is non-empty, call `collectSubmissionUrls`, invoke `submitBaiduUrls`, print site and count summaries without printing the token-bearing URL, and append a `## Baidu URL Push` success, partial/failure, or early-error summary to `GITHUB_STEP_SUMMARY` when available. Support the existing positional URL, `--git-range`, `--sitemap`, and explicit `--all` arguments.

- [ ] **Step 9: Add the npm entrypoint and commit**

Add `"seo:baidu": "node scripts/submit-baidu.mjs"` to `package.json`, then run `node scripts/submit-baidu.mjs https://inaodeng.com/example/` without a token to confirm it exits nonzero without printing a credential or making a network call.

```bash
git add scripts/baidu-push-utils.mjs scripts/submit-baidu.mjs tests/unit/baiduPush.test.ts package.json
git commit -m "feat: add Baidu URL push client"
```

### Task 3: Wire the non-blocking deployment notification

**Files:**
- Modify: `.github/workflows/deploy-cloudflare.yml`
- Modify: `.env.example`
- Test: `tests/unit/baiduPush.test.ts`

**Interfaces:**
- The workflow deploy step has `id: deploy` and exposes a manual `submit_all_baidu` boolean input.
- The Baidu step runs after deploy and before IndexNow with a successful-deploy condition, `continue-on-error: true`, and environment variables `BAIDU_PUSH_SITE` and `BAIDU_PUSH_TOKEN`.
- Push events submit the changed URL range; manual runs with `submit_all_baidu` enabled submit the generated sitemap with `--all`; manual runs do not invoke IndexNow.
- `.env.example` documents names only; no real token is added.

- [ ] **Step 1: Write the failing workflow contract test**

Extend `tests/unit/baiduPush.test.ts` to read the workflow and assert the deploy step id, Baidu step order, `steps.deploy.conclusion`, `continue-on-error`, `secrets.BAIDU_PUSH_TOKEN`, and the absence of any real credential. Also assert that the existing IndexNow step uses the same deploy conclusion condition.

- [ ] **Step 2: Run the test and verify it fails**

Run `cd tests && npm run test:unit -- baiduPush.test.ts`.

Expected: FAIL because the workflow has no Baidu step, no deploy id, and no environment variable declaration.

- [ ] **Step 3: Implement the workflow and example configuration**

Add `workflow_dispatch.inputs.submit_all_baidu` as a required boolean defaulting to false. Add `id: deploy` to the Cloudflare deployment action. Insert the Baidu step immediately after it with a successful-deploy condition, `continue-on-error: true`, `BAIDU_PUSH_SITE: https://inaodeng.com`, and `BAIDU_PUSH_TOKEN: ${{ secrets.BAIDU_PUSH_TOKEN }}`. Use `--all --sitemap=dist/sitemap-0.xml` for an enabled manual run and the existing git range for push events. Restrict IndexNow to push events so a manual deployment does not pass an empty event range. Add commented `BAIDU_PUSH_SITE` and `BAIDU_PUSH_TOKEN` names to `.env.example` with a note that CI uses the repository Actions Secret.

- [ ] **Step 4: Run focused workflow tests and inspect the diff**

Run `cd tests && npm run test:unit -- baiduPush.test.ts`, `git diff --check`, and `git diff -- .github/workflows/deploy-cloudflare.yml .env.example`.

Expected: PASS; the diff shows the Baidu step after deploy and before IndexNow, and no real token appears.

- [ ] **Step 5: Commit the integration**

```bash
git add .github/workflows/deploy-cloudflare.yml .env.example tests/unit/baiduPush.test.ts
git commit -m "ci: add non-blocking Baidu URL notification"
```

### Task 4: Full verification and handoff

**Files:**
- Verify: all files from Tasks 1–3
- Verify: `docs/superpowers/specs/2026-09-25-baidu-push-design.md`

- [ ] **Step 1: Run the complete unit suite**

Run `npm test`.

Expected: exit 0 with all unit tests passing.

- [ ] **Step 2: Run the production build and SEO build gate**

Run `npm run build`.

Expected: `astro check`, Astro build, and `npm run seo:build:check` all exit 0.

- [ ] **Step 3: Run the static SEO check and inspect secrets**

Run `npm run seo:check`, `git diff --check`, and `rg -n "BAIDU_PUSH_TOKEN|data\\.zz\\.baidu\\.com" . --hidden --glob '!node_modules/**' --glob '!dist/**'`.

Expected: the SEO check exits 0, diff check is clean, and only documented endpoint/variable references are present.

- [ ] **Step 4: Review final status and commit list**

Run `git status --short --branch`, `git log --oneline origin/main..HEAD`, and `git diff --stat origin/main...HEAD`.

Expected: only the design, shared helper, Baidu client, workflow, example configuration, package script, and focused tests are changed; no user work is overwritten.

- [ ] **Step 5: Commit final plan progress only if required**

Do not add generated files or secrets. Report the branch name, implementation commits, test results, and the remaining external prerequisite: configure `BAIDU_PUSH_TOKEN` in GitHub Actions Secrets after rotating the exposed token.
