# Related Terms Rule v2

## Goal
- Keep the “related terms” module useful enough to drive second-click exploration.
- Keep the rule cheap enough to avoid per-build heavy relevance computation.
- Keep result labels localized and channel-appropriate.

## Channel Rules

### Wiki
- Source: `frontmatter.related`
- File: `src/pages/[lang]/wiki/[...slug].astro`
- Priority:
  1. explicit `related` list in the current entry
  2. canonical slug normalization by existing wiki entries
  3. max 5 items
- Label source:
  - Chinese title parsed from body H1 first
  - fallback to frontmatter title
  - fallback to slug-derived English title
- Rationale:
  - Wiki terms are glossary-like and editorially curated.
  - Explicit relation is more accurate than runtime similarity scoring.

### AIWiki
- Source: `frontmatter.related`
- File: `src/pages/[lang]/AIWiki/[...slug].astro`
- Priority:
  1. explicit `related` list in the current entry
  2. title lookup in the same locale collection
  3. max length controlled by authored content
- Label source:
  - `getAiWikiDisplayTitle(e, locale)`
- Rationale:
  - AI vocabulary shifts fast; authored relation keeps terminology cleaner than weak keyword matching.

### Blog
- Source: derived from post title + tags + categories + series
- File: `src/pages/[lang]/blog/[...id].astro`
- Candidate pools:
  - current-locale AIWiki entries
  - current-locale Wiki entries for `zh-cn`
- Priority:
  1. exact normalized text match: score `10`
  2. containment / partial match: score `6`
  3. stable lexical sort for ties
  4. dedupe by href
  5. max 5 items
- Rationale:
  - Blog content is exploratory and often spans multiple concepts.
  - Metadata-derived matching is fast and good enough for second-click guidance.

### Guild
- Source: derived from article title + test type + framework + stage + difficulty
- File: `src/pages/[lang]/guild/[...slug].astro`
- Candidate pools:
  - current-locale AIWiki entries
  - current-locale Wiki entries for `zh-cn`
- Priority:
  1. exact normalized text match: score `10`
  2. containment / partial match: score `6`
  3. stable lexical sort for ties
  4. dedupe by href
  5. max 5 items
- Rationale:
  - Guild articles are workflow- and tool-oriented.
  - Metadata is stronger than full-body keyword scanning and cheaper at build time.

## Normalization Rule
- Lowercase text
- Strip markdown punctuation and symbols
- Collapse whitespace
- Compare normalized text only

## Why Not Global Relevance at Build Time
- Full corpus pairwise similarity would increase static build cost noticeably.
- The site already has many long-form pages and glossary entries.
- Editorial explicit links plus lightweight metadata heuristics are enough for this stage.

## Content Authoring Guidance
- Wiki / AIWiki editors should prefer explicit `related` whenever relation is obvious.
- Avoid adding generic umbrella terms unless they help navigation.
- Prefer sibling concepts, prerequisite concepts, or commonly confused concepts.
- Keep `related` entries within the same user intent path.

## Future Upgrade Path
- Add offline generated relation manifests if second-click data proves weak.
- Introduce channel-specific weighting:
  - tool names
  - protocol names
  - framework names
  - testing method families
- Use click-through data to reorder explicit relations without changing content files.
