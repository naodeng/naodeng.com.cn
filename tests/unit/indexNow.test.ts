import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  classifyIndexNowResponse,
  urlsForSourceFile,
} from "../../scripts/indexnow-utils.mjs";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const deployWorkflow = readFileSync(path.join(REPO_ROOT, ".github/workflows/deploy-cloudflare.yml"), "utf8");

describe("IndexNow helpers", () => {
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
