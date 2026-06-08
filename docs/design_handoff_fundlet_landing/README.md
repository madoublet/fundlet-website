# Handoff: Fundlet Marketing Landing Page → Eleventy (11ty) site

## Overview
This bundle contains a **high-fidelity HTML design** for the Fundlet marketing
landing page (the page that pitches the Fundlet Shopify fundraising app). The
goal of this handoff is to **rebuild this page inside the existing 11ty website**
so the marketing page and the rest of the site become one cohesive package —
sharing the same header, footer, navigation, fonts, and color tokens.

> 🏠 **This design IS the site's home page (the index / `/` route).** It replaces
> whatever currently renders at the home page. Don't add it as a new standalone
> page alongside the old one — the existing home page should become this.

The hero and the "Campaign landing page" feature row both embed a real
screenshot of a Fundlet popup-shop campaign (`assets/popup-shop.png`) to show
the product in context.

## About the Design Files
`Fundlet.html` is a **design reference created in HTML** — a prototype showing the
intended look, layout, and copy. It is **not** meant to be dropped into the repo
verbatim. The task is to **recreate this design using the 11ty site's build
patterns** (Nunjucks/Liquid layouts and includes, the site's CSS pipeline) — but
with a specific and deliberate division of what wins:

- **This design's visual system WINS site-wide.** Its color tokens, typography
  (Geist / Geist Mono), spacing, radii, button styles, eyebrow treatment,
  section rhythm, and overall aesthetic become the **new global design system**
  for the entire site — not just this page. Existing pages should be refactored
  to adopt these tokens; where the old site has a conflicting color or font,
  this design's value replaces it.
- **The existing site's navigation and taxonomy CARRY OVER.** Keep the existing
  site's information architecture: its nav items, section labels, URL structure,
  and content taxonomy. Do **not** adopt the placeholder nav in this prototype as
  the source of truth for *what links exist* — adopt it only as the source of
  truth for *how the nav looks*. Rebuild the existing site's real header and
  footer **in this design's style**, preserving every real link/route. This
  almost certainly means adding nav entries the prototype doesn't show — e.g. a
  **Learn** item and a **Contact** item — to match the live site's structure.

In short: **new skin, existing skeleton.** That is what makes the two "cohesive."

> ⚠️ **Strip the Tweaks panel.** Everything from the `<!-- ===== TWEAKS ===== -->`
> comment to the end of `</body>` (the `#tweaks-root` div, the React/Babel
> `<script>` tags, and `tweaks-panel.jsx`) is a **prototyping-only tool** used to
> preview color/typography variants. It must **not** ship to production. Pick the
> default variant (Green accent, Mono eyebrows, section tint on) and bake those
> values straight into the CSS. `tweaks-panel.jsx` is included only so the
> prototype opens without errors — do not port it.

## Fidelity
**High-fidelity.** Final colors, typography, spacing, and layout are intended to
be reproduced faithfully. Exact token values are listed below. Where this design
and the existing site disagree (font, accent green, container width), **this
design wins and becomes the site-wide value** — see "Bringing the two together."

## Tech / Integration Target
- **Static site generator:** Eleventy (11ty)
- **Suggested structure:**
  - Move the page CSS out of the inline `<style>` block into a stylesheet
    (e.g. `src/css/landing.css` or your existing global stylesheet). Keep the
    `:root` custom properties — they are the design tokens.
  - Build the page from a layout + small includes that match the existing site:
    `header`/`nav`, `footer`, and per-section partials (hero, features, stats,
    how-it-works, reviews, cta).
  - Move repeated content (nav links, feature rows, steps, reviews, footer
    columns) into **11ty data files** (`*.11tydata.js` / `_data/*.json`) and loop
    over them in templates, so copy is editable without touching markup.
  - Assets go in your `passthrough`-copied assets dir; update the `src` paths
    accordingly.

---

## Design Tokens

### Color (CSS custom properties, copied verbatim from the design)
| Token | Value | Use |
|---|---|---|
| `--green-strong` / `--accent` | `#36C61B` | Vivid Fundlet green — progress bar fill, accent dot, accent buttons |
| `--accent-deep` | `oklch(0.47 0.12 150)` | Deep green — eyebrow text, link hover, checkmarks |
| `--accent-soft` | `oklch(0.93 0.06 145)` | Pale green — checkmark backing, text selection |
| `--panel` | `oklch(0.48 0.15 150)` | Green panel bg — feature review card, final CTA, footer |
| `--on-panel` | `#ffffff` | Text on green panels |
| `--on-panel-2` | `rgba(255,255,255,0.82)` | Secondary text on panels |
| `--on-panel-line` | `rgba(255,255,255,0.24)` | Dividers on panels |
| `--bg` | `oklch(0.988 0.004 95)` | Page background (warm off-white) |
| `--bg-2` | `oklch(0.972 0.006 95)` | Tinted section background |
| `--paper` | `oklch(1 0 0)` | Pure white — cards, nav, device |
| `--ink` | `oklch(0.24 0.008 80)` | Primary text |
| `--ink-2` | `oklch(0.42 0.01 80)` | Secondary text / body copy |
| `--muted` | `oklch(0.56 0.01 80)` | Captions, meta labels |
| `--line` | `oklch(0.9 0.005 90)` | Hairline borders |
| `--line-2` | `oklch(0.84 0.006 90)` | Stronger borders |

### Typography
- **Primary:** `Geist` (weights 300–900) — headings, body, buttons.
- **Mono / eyebrows:** `Geist Mono` (400, 500) — eyebrow labels, captions, meta,
  the device URL bar.
- Loaded from Google Fonts in the prototype; serve via your existing font
  pipeline (self-host or your current `<link>` strategy).
- Global body: `18px / line-height 1.5`. Headings `font-weight: 700`,
  `letter-spacing: -0.02em`, `line-height: 1.05`, `text-wrap: balance`.
- **Eyebrow style:** Geist Mono, `12.5px`, weight 500, `letter-spacing: 0.12em`,
  `text-transform: uppercase`, color `--accent-deep`, with a `7px` round accent
  dot before the text (`.eyebrow::before`).

### Type scale (clamped, responsive)
| Element | Size |
|---|---|
| Hero `h1` | `clamp(40px, 5.2vw, 64px)`, weight 800, `letter-spacing: -0.036em` |
| Section `h2` | `clamp(28px, 3.4vw, 42px)`, weight 800, `letter-spacing: -0.034em` |
| Feature `h3` | `27px`, `letter-spacing: -0.025em` |
| Stat number | `clamp(34px, 4.6vw, 52px)`, weight 600 |
| CTA `h2` | `clamp(30px, 4vw, 46px)`, weight 800 |
| Body / lede | `18–19.5px`, color `--ink-2` |

### Spacing / radius / shadow
- **Container:** `--maxw: 1200px`, side padding `32px` (`20px` under 560px).
- **Section vertical rhythm:** `section.block { padding: 96px 0 }`;
  final CTA band `104px 0`.
- **Radius:** base `--r: 14px`; buttons `11px`; cards/shots `13–16px`;
  device `18px`; CTA panel `24px`; pills `30px`.
- **Card shadow (device/shot):**
  `0 30px 60px -30px oklch(0.3 0.02 80 / .35), 0 8px 24px -16px oklch(0.3 0.02 80 / .3)`.
- **Float card shadow:** `0 18px 40px -22px oklch(0.3 0.02 80 / .4)`.

### Buttons
- `.btn` base: inline-flex, `gap: 9px`, `font-size: 15.5px`, weight 500,
  padding `13px 20px`, radius `11px`, `:active { translateY(1px) }`.
- `.btn-primary`: bg `--ink`, text `--bg`; hover bg `--accent-deep`.
- `.btn-ghost`: transparent, `1px` `--line-2` border; hover border `--ink`.
- On green panels the primary button inverts: white bg, `--panel` text.
- Primary buttons carry a small shopping-bag SVG icon (inline, `16px`,
  `currentColor`).

---

## Sections / Views (top → bottom)

1. **Sticky header (`header.nav`)** — white, `68px` tall, bottom hairline.
   Left: brand (mark `fundlet-logo-color.png` at `30px` + "Fundlet" wordmark).
   Center: nav links (How it works / Features / Reviews / FAQ). Right: "Learn"
   text link + primary "Add to your store" button. Nav links hide below 940px.
   → **Keep this header's *styling*, but populate it with the existing site's
   real nav items + routes** (likely adding **Learn** and **Contact**). The
   prototype's link set is illustrative, not authoritative.

2. **Hero (`.hero`)** — two-column grid `1.05fr / 0.95fr`, `64px` gap, padding
   `84px 0 26px`. Left: eyebrow, `h1` ("Turn fundraisers into your best
   acquisition channel."), lede, two CTAs, and a 4-item meta row (Setup time /
   Code needed / App store rating / Raised in a week) separated by hairline
   dividers. Right: a **browser "device" mock** (`.device`) with a traffic-light
   bar + URL, containing the `popup-shop.png` screenshot (`object-fit: cover`,
   `object-position: top center`, `aspect-ratio: 4/3.1`). Two floating cards
   overlap the device: a **goal card** (74% progress bar, "$7,420 raised of
   $10,000") bottom-right, and a **rating card** (4.8 ★, "Shopify reviews")
   top-left. Behind it all: a subtle radial-gradient ambient + a masked, faint
   Fundlet-mark silhouette (`.hero-bg`). Collapses to one column below 940px.

3. **Trusted strip (`.trusted`)** — top hairline; "Trusted by fundraisers at"
   mono label + a wrapping row of customer names (Bouncing Off The Walls, Popus
   Gourmet Popcorn, UpTop Treats, Vīdl Life, Peleman Industries).

4. **Features (`#features`)** — section head (eyebrow / h2 / sub), then **three
   alternating feature rows** (`1fr / 1fr`, `60px` gap; even rows flip image to
   the left). Each row: numbered mono label, `h3`, paragraph, and a 3-item
   checklist (custom green check bullets). Paired with an image card (`.shot`).
   - **01 — Landing pages:** "Amazing landing pages" → uses `popup-shop.png`.
   - **02 — Onboarding:** "Built-in onboarding" → striped placeholder ("Onboarding form").
   - **03 — Tracking:** "Simple tracking" → striped placeholder ("Tracking dashboard").

5. **Stats band (`.tint`)** — tinted bg + top/bottom hairlines; section head,
   then a 4-up stat grid, each stat with a `2px` left green rule: `$11k+`,
   `4.8 ★`, `Minutes`, `0`.

6. **How it works (`#how`)** — section head + a 3-column step grid. Each step:
   mono number, `h4` with a top hairline, paragraph (Install & create a campaign
   / Invite your community / Track, report & pay out).

7. **Reviews (`#reviews`, `.tint`)** — section head + a 3-col grid of 5 review
   cards. The **first card spans 2 columns and uses the green `--panel`
   background with white text** (Popus Gourmet Popcorn, the "$11,000 in less than
   a week" quote). The other four are white cards with mono tag, gold-less green
   stars, quote, and an author footer above a hairline. All five quotes are real
   App Store testimonials — copy is in the HTML.

8. **Final CTA band (`.cta-band`)** — full-width green `--panel` rounded panel
   (`24px`, padding `66px 60px`) with a soft white radial highlight top-right.
   Eyebrow, `h2` ("Launch your first fundraiser this afternoon."), paragraph,
   white primary button + ghost button.

9. **Footer** — green `--panel` bg, white text. 4-col grid (`1.6fr 1fr 1fr 1fr`):
   brand block (mark inverted to white via `filter: brightness(0) invert(1)` +
   blurb + "Built for Shopify" pill) and three link columns (Product / Learn /
   Company). Bottom bar: copyright + "Made in Manchester, MO". → **Keep this
   footer's *styling*, but populate its columns from the existing site's real
   taxonomy** (same sections/links as the live footer, restyled here).

## Interactions & Behavior
- `scroll-behavior: smooth`; in-page anchor nav (`#how`, `#features`, etc.).
- Buttons: hover changes bg/border; `:active` nudges down `1px`.
- Links fade `--ink-2 → --ink` on hover.
- No JS behavior in production (the only scripts are the Tweaks prototype — drop
  them). Float cards and ambient are purely decorative CSS.

## Responsive Behavior
- **≤ 940px:** hero → 1 column; feature rows → 1 column (image below text);
  stats → 2 cols; steps → 1 col; reviews → 1 col (feature review un-spans);
  footer → 2 cols; nav links hidden (wire up the existing site's mobile nav).
- **≤ 560px:** body `17px`; container padding `20px`; stats 2 cols; hero meta
  wraps and drops dividers; CTA padding `44px 28px`; footer → 1 col.

## Assets
| File | What it is | Where used |
|---|---|---|
| `assets/popup-shop.png` | Screenshot of a Fundlet popup-shop campaign page (the Rocket Treats / Local Baseball demo). 741×764. | Hero device + Feature 01 |
| `assets/fundlet-logo-color.png` | Fundlet logo mark (color) | Header brand |
| `assets/fundlet-mark.png` | Fundlet mark | Footer brand (inverted to white) + faint hero silhouette mask |

The Feature 02 / 03 images are **striped placeholders** (`.ph`) labeled
"Onboarding form" and "Tracking dashboard" — swap in real product screenshots.

## Files in this bundle
- `Fundlet.html` — the full design reference (open in a browser to view).
- `assets/` — the three real images above.
- `tweaks-panel.jsx` — prototype-only; **do not port** (see warning above).

---

## Bringing the two together (the cohesive part)
The decided direction: **this design is the new global system (the skin); the
existing site keeps its navigation and taxonomy (the skeleton).** Recommended
order of operations for Claude Code:

1. **Promote this design's tokens to a global stylesheet.** Lift the entire
   `:root` block (colors, type, spacing, radii) into the site's global CSS as the
   **canonical design system**. Where the existing site defines a conflicting
   brand color, font, or scale, **this design's value wins** — replace the old one
   and update references. Load Geist / Geist Mono site-wide.
2. **Rebuild the chrome in this style, keep the real IA.** Recreate the header
   and footer using this design's styling (heights, hairlines, brand lockup,
   button treatment, green footer panel), but populate them from the **existing
   site's real navigation and taxonomy** — same links, labels, routes, and footer
   columns the live site has today. Add any items the prototype omits but the
   site needs, e.g. **Learn** and **Contact**. New skin, existing skeleton.
3. **Restyle interior pages in the same philosophy.** Apply the system below to
   every existing page type, not just this landing page (see next section).
4. **Section partials + data.** Express each section as an include; move copy
   into 11ty data so the marketing team can edit without touching markup.
5. **Drop the Tweaks panel** and bake in the default variant.
6. **Replace placeholders** (Feature 02/03) with real screenshots.

## Design philosophy for interior pages
This page is the reference for how **the whole site** should look and feel. When
restyling existing interior pages (Learn / tutorials, FAQ, Contact, Pricing,
legal, blog, etc.), carry these principles — don't just reskin the landing page
and leave the rest behind:

- **Same shell on every page.** The restyled header and footer wrap every page;
  interior pages share the warm off-white `--bg`, `1200px` max width, and `32px`
  side padding.
- **Lead with an eyebrow + big tight headline.** Every interior page opens like a
  section here: a mono `--accent-deep` eyebrow (with the accent dot), then an
  `800`-weight, negative-tracking headline, then an `--ink-2` lede. Reuse the
  `.sec-head` pattern.
- **Vertical rhythm via `section.block` (`96px`).** Alternate plain `--bg` and
  tinted `--bg-2` (the `.tint` class, with top/bottom hairlines) to separate
  zones — same cadence as this page's Features → Stats → How-it-works → Reviews.
- **Reuse the established component vocabulary** rather than inventing new ones:
  - `.feature` rows (alternating text/visual) for explanatory content.
  - `.steps` 3-up grid for any sequential/process content.
  - `.review` / `.feature-review` cards for testimonials, quotes, callouts; the
    green `--panel` card is the "emphasis" treatment.
  - `.stat` (2px left green rule) for any metrics.
  - `.cta-band` (green rounded panel) to close long pages.
  - `.btn-primary` / `.btn-ghost` everywhere; primary inverts to white on green.
- **Type & color discipline.** Geist for everything; Geist Mono only for
  eyebrows, captions, meta, and code-ish labels. Green (`--accent` / `--panel`)
  is the *only* accent — used sparingly for emphasis, never as page-wide fills.
- **Imagery in framed cards.** Screenshots/photos sit in `.shot`/`.device`-style
  framed cards with the soft layered shadow; never bleed raw images onto the bg.
- **Restraint.** Generous whitespace, hairline dividers, one accent. If a page
  feels empty, solve it with scale and spacing — not added boxes or color.

For a content-heavy page (e.g. a Learn article) that has no analog here, default
to: shell → `.sec-head` intro → a comfortable single measure of body copy
(`~62ch`, `--ink-2`, `18.5px`) → `.tint` callouts/steps as needed → closing
`.cta-band`. That keeps new templates unmistakably part of the same family.

A developer who wasn't in this conversation should be able to implement the page
— and restyle the rest of the site — from this README plus `Fundlet.html` alone.
