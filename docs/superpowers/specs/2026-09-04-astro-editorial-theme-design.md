# Astro Editorial Theme Design

## Goal

Replace the existing vivid purple, diffuse-glass visual language with a restrained, content-first editorial system for the entire site. The system takes its layout measurements and information hierarchy from Astro's official site source while retaining this site's routes, link destinations, content, information architecture, and deployment configuration exactly as they are.

## Scope and non-goals

### In scope

- Light and dark themes using the same semantic design tokens.
- Shared layout widths, spacing, typography, cards, buttons, Header, Footer, and responsive behavior.
- Home, blog index, blog detail, and existing detail-page presentation surfaces.
- Footer re-layout using the existing WeChat QR asset, RSS URL, navigation groups, social URLs, language switch, and legal links.
- Existing theme persistence, keyboard navigation, and reduced-motion support.

### Out of scope

- Changing any `href`, route, link target, blog URL, content collection, navigation label, SEO data, or deployment setting.
- Adding a UI framework, third-party runtime dependency, new analytics, or new external links.
- Changing the current content model or page hierarchy.

## Reference-derived layout system

Astro's official site uses a centred container capped at 1280px, 24px default gutters that increase to 32px from tablet width, an 80px header, and a 768px prose limit. It uses a three-column grid so a page can keep content centred while selected sections bleed to an edge.

This site adopts the same measurements as explicit CSS tokens:

| Token | Value | Use |
| --- | --- | --- |
| `--layout-max` | `1280px` | Home modules, card grids, list pages, Header, Footer |
| `--layout-gutter` | `24px`, `32px` at `768px+` | Inline page safety space |
| `--reading-max` | `768px` | Long-form prose and article headings |
| `--sidebar-layout-max` | `1280px` | Article prose plus a table-of-contents/sidebar column |
| `--header-height` | `80px` | Desktop sticky Header |

The site must use `min(var(--layout-max), calc(100% - 2 * var(--layout-gutter)))` rather than fixed widths. Full-bleed background bands may span the viewport; their inner content must remain on the standard grid. Long-form text must never become wider than the reading column merely because a viewport is wide.

## Theme system

The current multi-layer purple mist, gradients, translucent cards, and large glass shadows are removed from default surfaces. A small amount of transparency remains only on the sticky Header and mobile navigation overlay.

| Role | Light | Dark |
| --- | --- | --- |
| Canvas | `#F8FAFC` | `#111827` |
| Surface | `#FFFFFF` | `#18212F` |
| Primary text | `#172033` | `#E6EAF0` |
| Secondary text | `#526071` | `#AAB4C3` |
| Border | `#DCE2EA` | `#2C394B` |
| Accent | `#2563EB` | `#78A9FF` |
| Active/hover surface | `#EFF6FF` | `#1D314C` |

The token layer must describe semantic roles (canvas, surface, elevated surface, border, primary/secondary text, accent, focus, and code surface), not component-specific colours. Existing components consume those roles and do not introduce new purple, gradient, or glass values locally.

## Typography and interaction

- Use the existing `Noto Sans` / `Noto Sans SC` fallback path for readable bilingual body copy; do not add a font dependency.
- Tune headings toward a compact editorial scale, with a 16px body baseline and approximately 1.65 prose line height.
- Use 8px button/card corners, with 12px permitted for larger panels. Avoid pill-shaped general controls; retain pills only where tags are semantically useful.
- Primary buttons use a solid accent background. Secondary buttons use an outline or quiet accent-tinted surface. Icon buttons are unfilled until hover/focus.
- Hover motion is limited to colour/border changes and at most a 2px lift, within 160–180ms. All non-essential motion is disabled for `prefers-reduced-motion`.

## Shared components

### Header

Keep all existing logo, navigation, submenu, language, search, and theme-toggle DOM behaviour and URLs. Restyle it as an 80px sticky bar with an opaque or near-opaque neutral surface, a hairline bottom border, text-first navigation, and a restrained active indicator. Mobile navigation retains its existing links and interaction; only its surfaces, borders, and spacing change.

### Cards, tags, and buttons

Cards use an opaque surface, a one-pixel neutral border, and a minimal shadow. Hover changes the border to accent and may lift the card by 1–2px. Tags and filters use quiet neutral/blue-tinted surfaces and gain stronger accent treatment only when selected. No default card may use backdrop blur, coloured glow, or a gradient background.

### Footer

Recompose the existing Footer into three visual bands without changing its links:

1. Main band: left column shows the existing official-account QR image, explanatory copy, and existing RSS subscription URL; right column shows the existing footer navigation groups.
2. Social band: existing GitHub, X, Medium, Weibo, Ko-fi, email, and language controls appear together as low-contrast icons that use accent colour only on hover/focus.
3. Legal band: existing copyright, licence, and technology attribution stay in a subdued final row.

The QR image is directly visible instead of requiring the existing social-icon trigger. The existing dialog is removed only if no page retains another trigger; its QR asset and all URLs remain unchanged. At small widths, subscription content appears first, navigation becomes two columns, social icons wrap, and legal copy follows last.

## Page application

### Home

Replace the glass Hero with an opaque editorial hero: concise accent rule, title, summary, and existing CTAs. Preserve CTA anchors and all card hrefs. Home article cards, capability cards, task navigation, and exploration cards share the common card treatment and align to the 1280px layout column.

### Blog index

Keep the current featured-post and card data. Restyle the featured article as an editorial lead with an accent rule rather than a coloured block; render normal posts as quiet bordered cards. Preserve pagination, category/tag links, and post URLs.

### Blog and other detail pages

Use a `768px` prose column. On wide screens, retain the existing sidebar/table of contents in the remaining layout width; below the existing sidebar breakpoint, preserve its current stacked behaviour. Article metadata, related-term links, author information, sharing, code blocks, tables, and callouts receive semantic surfaces but no altered data or URLs. The same token and prose rules apply to Wiki, AI Wiki, Docs, Guild, Prompts, Workflows, and QA Skills detail surfaces.

## Responsive requirements

- `1440px+`: 1280px standard layout; cards may use additional columns where their existing markup supports it.
- `1024px–1439px`: retain standard layout with 32px gutters; avoid card overflow.
- `768px–1023px`: two-column card grids where applicable; stack or relocate supplementary sidebars according to current page behaviour.
- `<768px`: 24px then 16px-safe mobile gutters where existing component constraints require it; single-column cards; Footer subscription content first.
- No route may have horizontal overflow at 375px, 768px, 1024px, 1440px, or 1920px viewport widths.

## Verification requirements

- `git diff --check`, `npm run build`, and affected unit tests pass.
- Theme E2E verifies the visible toggle in both locales, theme change, refresh persistence, and cross-page persistence.
- Playwright checks the Home, blog index, and one blog detail route at desktop and mobile widths for navigation visibility, usable footer links, a visible QR image in Chinese Footer, and no horizontal overflow.
- Link inventory assertions verify that existing Header/Footer navigation URLs and existing blog URLs are unchanged.
- Verify the exact built preview rather than relying on a stale dev-server tab.
