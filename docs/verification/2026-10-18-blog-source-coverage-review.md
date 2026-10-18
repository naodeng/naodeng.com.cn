# Source-Coverage Audit: Nine Bilingual Blog Pairs

**Date:** 2026-10-18

**Scope:** The nine EN/ZH drafts listed below, their paired notes under `/Users/nao.deng/Downloads/qa-learning-articles-with-references/`, and the original URLs in `/Users/nao.deng/Downloads/qa-learning-articles-with-references/references/REFERENCE_SOURCES.md`. Joe Woods' article was also checked against the full text supplied in the conversation.

## Result

No remaining material source omission or misattribution was identified in the nine pairs after this review. Source claims and article-level QA/editorial extensions are generally distinguished in the drafts. Three review findings were corrected: unsupported precision in a survey-size claim, a source detail omitted from both cookie-banner drafts, and a cookie-law date not mirrored in Chinese.

| Pair / original | Coverage checked | Assessment |
| --- | --- | --- |
| [`agent-automation`](https://claude.dev/blog/building-effective-agent-automations/) | Agent workflow components, checkpoints, delivery verification, freshness, permissions, prompt injection, budgets and failure handling | No material gap found. |
| [`ai-ready-quality-data`](https://www.ministryoftesting.com/media-sessions/from-test-cases-to-ai-ready-quality-data-why-structure-matters) | Fragmented quality context, medical-record analogy, lifecycle steps, Tests as Context, platform perspective, Q&A and reported outcomes | Covered; unsupported exact respondent count removed and the transcript's “several thousand” description mirrored in both languages. |
| [`when-building-things-was-the-fun-part`](https://bitshift.ing/when-building-things-was-the-fun-part/) | Author's experience and argument about AI-assisted coding, code judgment, exploration, management and delegation | No material gap found; QA applications are presented as extensions. |
| [`testing-country-specific-cookie-banners`](https://wonderproxy.com/blog/how-to-test-a-cookie-banner-that-behaves-differently-in-every-country/) | Location signals, consent behavior, four testing levels, geo-simulation methods, regional differences and evidence | Covered; SIM-based mobile-network signal and the February 5, 2026 UK date are now mirrored in both languages. |
| [`feature-led-security-research`](https://github.blog/security/how-one-bug-bounty-researcher-chooses-the-features-they-investigate/) | Researcher's feature-first approach, background, information sources, AI caveat and practical QA extension | No material gap or attribution issue found. |
| [`llm-coding-agency`](https://blog.joewoods.dev/programming/i-dont-think-llms-are-making-you-lazy/) | Joe Woods' argument, code taste, tooling/algorithm nuance, reflection questions and conclusion | The supplied original's main claims and questions are represented in both languages. |
| [`rsat-migration`](https://www.accelq.com/blog/rsat-migration-guide/) | Support trigger, inventory, six migration steps, timelines, risks, coverage equivalence and cutover guidance | No material gap found; migration controls are identified as editorial application. |
| [`how-to-test-with-a-screen-reader`](https://wonderproxy.com/blog/how-to-test-with-a-screen-reader/) | Reader setup, practice, navigation, task-based checks, accessible names/forms and limits of automation | No material gap found. |
| [`strategy-is-a-loop-not-a-plan`](https://www.raganmcgill.co.uk/Articles/Detail/article-strategy-is-a-loop-not-a-plan) | OODA and strategic-kernel models, diagnosis, policy, coherent action, feedback cadence and QA application | No material gap or material EN/ZH divergence found. |

## Findings

1. **Unsupported precision in the AI-ready-data survey size — resolved.** The earlier English draft said “roughly 4,000 professionals,” which was not substantiated by the supplied notes or transcript. The transcript describes surveying several thousand users (`references/uploads/Pasted text (2).txt:91`). The exact count was removed and the appropriately qualified “several thousand” wording is now consistent in EN/ZH.

2. **One source detail absent from both cookie-banner drafts — resolved.** The original article lists a mobile-network country, readable from the SIM, as a request-side location signal alongside IP, CDN country tag and browser/OS language ([source](https://wonderproxy.com/blog/how-to-test-a-cookie-banner-that-behaves-differently-in-every-country/), “How does the application decide which country I'm in?”). The signal is now named in both language tables.

3. **Small date asymmetry in the cookie-banner pair — resolved.** The English draft already stated February 5, 2026. The same date is now included in the Chinese draft and attributed to the [ICO statement](https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/02/statement-on-the-commencement-of-the-data-use-and-access-act-duaa).

## Confirmation limits

- The AI-ready-quality-data source is a Ministry of Testing media session. The audit used its available public page plus the supplied transcript and study notes; it did not independently verify the full recording or slides.
- Joe Woods' source was checked against the text provided in the conversation. For pages whose original text could not be fully retrieved directly, supplied notes and available indexed extracts were used. This report is a coverage review of the material available, not a guarantee that every sentence or every changing legal/product detail has been independently verified.

Three focused article corrections were made in both languages to close the findings above. The remaining source coverage and attribution checks did not require changes.
