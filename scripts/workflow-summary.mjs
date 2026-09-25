import fs from "node:fs";

export function writeWorkflowSummary(markdown, env = process.env) {
  const summaryPath = env.GITHUB_STEP_SUMMARY;
  if (!summaryPath) return;
  fs.appendFileSync(summaryPath, `${markdown.trim()}\n`);
}
