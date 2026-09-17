import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const REPO_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const packageJson = JSON.parse(
  readFileSync(path.join(REPO_ROOT, "package.json"), "utf8"),
);

describe("SEO build gate", () => {
  it("runs the post-build SEO check for build and deployment entry points", () => {
    expect(packageJson.scripts.build).toContain("npm run seo:build:check");
    expect(packageJson.scripts["preview:worker"]).toContain("npm run build");
    expect(packageJson.scripts.deploy).toContain("npm run build");
  });
});
