import { test } from "@e2e-dev/web";
import { expect } from "e2e";

for (const locale of ["en", "zh-cn"] as const) {
  test(`${locale} article author card keeps localized stats and useful profile links`, async ({ app, browser }) => {
    await app.open(`/${locale}/blog/ai-testing/ai-test-auditor-static-evidence-for-ai-generated-tests/`);

    await expect(browser.locator(".author-stats-card")).toBeVisible();
    await expect(browser.locator(".author-stats-card .author-stats .stat-item")).toHaveCount(4);
    await expect(browser.locator(".author-name")).toBeVisible();
    await expect(browser.locator(".author-slogan")).toContainText(locale === "zh-cn" ? "质量分析师" : "Quality Analyst");
    await expect(browser.locator(".author-social")).toBeVisible();

    await expect(browser.locator(`.author-social a[aria-label="RSS"]`)).toHaveAttribute("href", `/${locale}/rss.xml`);
    const xLink = browser.locator('.author-social a[aria-label="X (Twitter)"]');
    await expect(xLink).toHaveAttribute("href", /x\.com/);
    await expect(xLink).not.toHaveAttribute("href", /twitter\.com/);
    const githubLink = browser.locator('.author-social a[aria-label="GitHub"]');
    await expect(githubLink).toHaveAttribute("href", /github\.com/);
    await expect(githubLink).toHaveAttribute("target", "_blank");
    expect(await browser.locator(".author-social a[target='_blank']").count()).toBeGreaterThanOrEqual(4);
  });
}
