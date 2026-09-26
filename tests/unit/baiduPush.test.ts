import { execFile } from "node:child_process";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { describe, expect, it } from "vitest";
import {
  buildBaiduPushRequest,
  classifyBaiduPushResponse,
  submitBaiduUrls,
} from "../../scripts/baidu-push-utils.mjs";

const execFileAsync = promisify(execFile);
const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const deployWorkflow = readFileSync(path.join(REPO_ROOT, ".github/workflows/deploy-cloudflare.yml"), "utf8");

describe("Baidu URL push utilities", () => {
  it("builds the Baidu plain-text request with a host-only site parameter", () => {
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

  it("classifies a complete 200 response and defaults omitted rejection lists", () => {
    expect(
      classifyBaiduPushResponse(200, JSON.stringify({ remain: 99998, success: 2 })),
    ).toEqual({
      kind: "success",
      status: 200,
      success: 2,
      remain: 99998,
      notSameSiteCount: 0,
      notValidCount: 0,
    });
  });

  it("classifies a 200 response with rejected URLs as partial", () => {
    expect(
      classifyBaiduPushResponse(
        200,
        JSON.stringify({
          remain: 99998,
          success: 1,
          not_same_site: ["https://other.example/"],
          not_valid: [],
        }),
      ),
    ).toEqual({
      kind: "partial",
      status: 200,
      success: 1,
      remain: 99998,
      notSameSiteCount: 1,
      notValidCount: 0,
    });
  });

  it("surfaces known Baidu 400 reasons without exposing the response body", () => {
    expect(
      classifyBaiduPushResponse(400, JSON.stringify({ error: 400, message: "site error" })),
    ).toEqual({
      kind: "failure",
      status: 400,
      message: "Baidu API returned HTTP 400: site error",
    });
  });

  it("classifies non-2xx, malformed, and incomplete responses as failures", () => {
    expect(classifyBaiduPushResponse(500, "upstream error?token=test%2Btoken")).toEqual({
      kind: "failure",
      status: 500,
      message: "Baidu API returned HTTP 500",
    });
    expect(classifyBaiduPushResponse(200, "not json")).toEqual({
      kind: "failure",
      status: 200,
      message: "Baidu response is not valid JSON",
    });
    expect(classifyBaiduPushResponse(200, JSON.stringify({ success: 1 }))).toEqual({
      kind: "failure",
      status: 200,
      message: "Baidu response is missing integer success/remain fields",
    });
  });

  it("splits 2,001 URLs into 2,000 and 1 and continues after a failed batch", async () => {
    const calls: Array<{ body: string }> = [];
    const urls = Array.from({ length: 2001 }, (_, index) => `https://inaodeng.com/${index}/`);
    const result = await submitBaiduUrls(urls, {
      endpoint: "http://data.zz.baidu.com/urls",
      site: "https://inaodeng.com",
      token: "test-token",
      timeoutMs: 1,
      fetchImpl: async (_url: string, init: RequestInit) => {
        calls.push({ body: String(init.body) });
        return calls.length === 1
          ? new Response("upstream error", { status: 500 })
          : new Response(JSON.stringify({ remain: 999, success: 1 }), { status: 200 });
      },
    });

    expect(calls.map(({ body }) => body.split("\n").length)).toEqual([2000, 1]);
    expect(result.failedBatches).toBe(1);
    expect(result.acceptedUrls).toBe(1);
    expect(result.partialBatches).toBe(0);
    expect(result.remaining).toBe(999);
  });

  it("counts network errors as failed batches without exposing the token", async () => {
    const result = await submitBaiduUrls(["https://inaodeng.com/a/"], {
      endpoint: "http://data.zz.baidu.com/urls",
      site: "https://inaodeng.com",
      token: "test-token",
      fetchImpl: async () => {
        throw new Error("network down");
      },
    });

    expect(result).toMatchObject({ failedBatches: 1, acceptedUrls: 0, partialBatches: 0 });
    expect(result.messages.join(" ")).toContain("Baidu request failed");
    expect(result.messages.join(" ")).not.toContain("test-token");
  });

  it("does not copy token-bearing request URLs into failure messages", async () => {
    const token = "test token/1";
    const encodedToken = "test+token%2F1";
    const result = await submitBaiduUrls(["https://inaodeng.com/a/"], {
      endpoint: "http://data.zz.baidu.com/urls",
      site: "https://inaodeng.com",
      token,
      fetchImpl: async (url: string) => {
        throw new Error(`fetch failed for ${url}`);
      },
    });

    const message = result.messages.join(" ");
    expect(message).toBe("Baidu request failed");
    expect(message).not.toContain(token);
    expect(message).not.toContain(encodedToken);
    expect(message).not.toContain("data.zz.baidu.com/urls?");
  });

  it("marks timed-out batches as failed and continues with the next batch", async () => {
    const calls: Array<{ body: string }> = [];
    const urls = Array.from({ length: 2001 }, (_, index) => `https://inaodeng.com/${index}/`);
    const result = await submitBaiduUrls(urls, {
      endpoint: "http://data.zz.baidu.com/urls",
      site: "https://inaodeng.com",
      token: "test-token",
      timeoutMs: 10,
      fetchImpl: async (_url: string, init: RequestInit) => {
        calls.push({ body: String(init.body) });
        if (calls.length === 1) {
          const signal = init.signal;
          await new Promise((_, reject) => {
            const onAbort = () => reject(signal?.reason ?? new Error("aborted"));
            if (signal?.aborted) onAbort();
            else signal?.addEventListener("abort", onAbort, { once: true });
          });
        }
        return new Response(JSON.stringify({ remain: 998, success: 1 }), { status: 200 });
      },
    });

    expect(calls.map(({ body }) => body.split("\n").length)).toEqual([2000, 1]);
    expect(result).toMatchObject({
      failedBatches: 1,
      acceptedUrls: 1,
      partialBatches: 0,
      remaining: 998,
    });
    expect(result.messages).toContain("Baidu request timed out");
  });

  it("rejects an empty token before making a request", async () => {
    let calls = 0;
    await expect(
      submitBaiduUrls(["https://inaodeng.com/a/"], {
        endpoint: "http://data.zz.baidu.com/urls",
        site: "https://inaodeng.com",
        token: "",
        fetchImpl: async () => {
          calls += 1;
          return new Response("", { status: 200 });
        },
      }),
    ).rejects.toThrow("BAIDU_PUSH_TOKEN");
    expect(calls).toBe(0);
  });

  it("fails before network when the CLI has URLs but no token", async () => {
    const tempDir = mkdtempSync(path.join(os.tmpdir(), "naodeng-baidu-summary-"));
    const summaryPath = path.join(tempDir, "summary.md");
    let failure;
    try {
      try {
        await execFileAsync(
          "node",
          [path.join(REPO_ROOT, "scripts/submit-baidu.mjs"), "https://inaodeng.com/example/"],
          {
            cwd: REPO_ROOT,
            env: { ...process.env, BAIDU_PUSH_TOKEN: "", GITHUB_STEP_SUMMARY: summaryPath },
            encoding: "utf8",
          },
        );
      } catch (error) {
        failure = error;
      }

      expect(failure?.code).toBe(1);
      const output = `${failure?.stdout ?? ""}${failure?.stderr ?? ""}`;
      expect(output).toContain("BAIDU_PUSH_TOKEN");
      expect(output).not.toContain("http://data.zz.baidu.com/urls?site=");
      expect(readFileSync(summaryPath, "utf8")).toContain("## Baidu URL Push");
      expect(readFileSync(summaryPath, "utf8")).toContain("did not complete");
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it("keeps Baidu notification after deploy, before IndexNow, and non-blocking", () => {
    const deployStart = deployWorkflow.indexOf("      - name: Deploy to Cloudflare Workers");
    const baiduStart = deployWorkflow.indexOf("      - name: Notify Baidu");
    const indexNowStart = deployWorkflow.indexOf("      - name: Notify IndexNow");
    const baiduStep = deployWorkflow.slice(baiduStart, indexNowStart);
    const indexNowStep = deployWorkflow.slice(indexNowStart);

    expect(deployStart).toBeGreaterThanOrEqual(0);
    expect(deployWorkflow.slice(deployStart, baiduStart)).toContain("id: deploy");
    expect(baiduStart).toBeGreaterThan(deployStart);
    expect(indexNowStart).toBeGreaterThan(baiduStart);
    expect(baiduStep).toContain("if: ${{ steps.deploy.conclusion == 'success' &&");
    expect(baiduStep).toContain("continue-on-error: true");
    expect(baiduStep).toContain("BAIDU_PUSH_TOKEN: ${{ secrets.BAIDU_PUSH_TOKEN }}");
    expect(baiduStep).toContain("BAIDU_PUSH_SITE: https://inaodeng.com");
    expect(indexNowStep).toContain("if: ${{ steps.deploy.conclusion == 'success' && github.event_name == 'push' }}");
    expect(baiduStep).not.toMatch(/BAIDU_PUSH_TOKEN:\s*(?!\$\{\{\s*secrets\.BAIDU_PUSH_TOKEN\s*\}\})\S+/);
  });

  it("provides an opt-in manual full-sitemap submission mode", () => {
    const trigger = deployWorkflow.slice(deployWorkflow.indexOf("on:"), deployWorkflow.indexOf("env:"));
    const baiduStart = deployWorkflow.indexOf("      - name: Notify Baidu");
    const indexNowStart = deployWorkflow.indexOf("      - name: Notify IndexNow");
    const baiduStep = deployWorkflow.slice(baiduStart, indexNowStart);
    const indexNowStep = deployWorkflow.slice(indexNowStart);

    expect(trigger).toContain("workflow_dispatch:");
    expect(trigger).toContain("submit_all_baidu:");
    expect(trigger).toContain("type: boolean");
    expect(baiduStep).toContain("inputs.submit_all_baidu");
    expect(baiduStep).toContain("--all");
    expect(indexNowStep).toContain("github.event_name == 'push'");
  });
});
