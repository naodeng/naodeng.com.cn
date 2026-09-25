import { describe, expect, it } from "vitest";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  isBroadChange,
  classifyIndexNowResponse,
  urlsForSourceFile,
} from "../../scripts/indexnow-utils.mjs";
import {
  collectSubmissionUrls,
  readSitemap,
} from "../../scripts/submission-utils.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const deployWorkflow = readFileSync(path.join(REPO_ROOT, ".github/workflows/deploy-cloudflare.yml"), "utf8");

describe("IndexNow helpers", () => {
  it("collects sorted, deduplicated canonical URLs from explicit input", () => {
    const result = collectSubmissionUrls({
      args: [
        "https://inaodeng.com/en/blog/b/",
        "https://inaodeng.com/en/blog/a/",
        "https://inaodeng.com/en/blog/b/",
      ],
      origin: "https://inaodeng.com",
      root: REPO_ROOT,
      sitemapDefault: path.join(REPO_ROOT, "dist/sitemap-0.xml"),
    });

    expect(result.validUrls).toEqual([
      "https://inaodeng.com/en/blog/a/",
      "https://inaodeng.com/en/blog/b/",
    ]);
    expect(result.candidateUrlCount).toBe(2);
  });

  it("filters cross-origin, HTTP, query, and hash URLs from shared input", () => {
    const result = collectSubmissionUrls({
      args: [
        "https://inaodeng.com/valid/",
        "http://inaodeng.com/http/",
        "https://other.example/cross-origin/",
        "https://inaodeng.com/query/?page=2",
        "https://inaodeng.com/hash/#section",
      ],
      origin: "https://inaodeng.com",
      root: REPO_ROOT,
      sitemapDefault: path.join(REPO_ROOT, "dist/sitemap-0.xml"),
    });

    expect(result.validUrls).toEqual(["https://inaodeng.com/valid/"]);
  });

  it("identifies broad changes and reads sitemap URL entries", () => {
    expect(isBroadChange("src/pages/index.astro")).toBe(true);
    expect(isBroadChange("src/content/docs/en/installation.md")).toBe(false);

    const tempDir = mkdtempSync(path.join(os.tmpdir(), "naodeng-sitemap-"));
    const sitemapPath = path.join(tempDir, "sitemap.xml");
    try {
      writeFileSync(
        sitemapPath,
        "<urlset><url><loc>https://inaodeng.com/a/</loc></url><url><loc>https://inaodeng.com/b/</loc></url></urlset>",
      );
      expect(readSitemap(sitemapPath)).toEqual([
        "https://inaodeng.com/a/",
        "https://inaodeng.com/b/",
      ]);
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  });

  it("reports a missing sitemap with its path", () => {
    expect(() => readSitemap(path.join(REPO_ROOT, "missing-sitemap.xml"))).toThrow("Sitemap not found");
  });

  it("maps a Docs content change to its localized detail URL", () => {
    expect(
      urlsForSourceFile("src/content/docs/en/installation.md", {
        origin: "https://inaodeng.com",
      }),
    ).toEqual(["https://inaodeng.com/en/docs/installation/"]);
  });

  it("classifies Bing site verification as a pending external state", () => {
    expect(
      classifyIndexNowResponse(
        403,
        JSON.stringify({
          errorCode: "SiteVerificationNotCompleted",
          message: "Site Verification is not completed.",
        }),
      ),
    ).toEqual({
      kind: "pending",
      status: 403,
      message: "Site Verification is not completed.",
    });
  });

  it("keeps unexpected IndexNow responses as failures", () => {
    expect(classifyIndexNowResponse(500, "upstream error")).toEqual({
      kind: "failure",
      status: 500,
      message: "upstream error",
    });
  });

  it("does not hide IndexNow failures in the deploy workflow", () => {
    const notifyStart = deployWorkflow.indexOf("      - name: Notify IndexNow");
    const notifyStep = notifyStart >= 0 ? deployWorkflow.slice(notifyStart) : "";
    expect(notifyStep).toContain("scripts/submit-indexnow.mjs");
    expect(notifyStep).not.toContain("continue-on-error");
  });
});
