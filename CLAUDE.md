# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm start` — starts the Eleventy dev server with live reload (`npx @11ty/eleventy --serve`)
- `npx @11ty/eleventy` — one-time build to `_site/`

No lint or test commands are configured.

## Architecture

This is the **marketing website** for Fundlet (a Shopify fundraising app), built with [Eleventy](https://www.11ty.dev/) v2. It is not the Fundlet app itself.

### Eleventy config (`.eleventy.js`)

- Input: `src/`
- Layouts: `src/_layouts/` — each page selects a layout via YAML frontmatter
- Includes (reusable partials): `src/_includes/` — `header.njk`, `footer.njk`
- Static pass-through: `src/resources/` and `src/screenshots/` are copied as-is to `_site/`

### Content pages

Pages live as Markdown files in `src/` with YAML frontmatter that selects a layout (e.g. `layout: home`). Each layout in `src/_layouts/` is a full Nunjucks template that wraps the content with header/footer includes and page-specific CSS.

### CSS

Modular vanilla CSS in `src/resources/css/`. Core files:
- `reset.css` / `brand.css` / `site.css` — global base styles
- `page.css` — generic interior page styles
- Per-page files (`index.css`, `faq.css`) — unique layout-specific styles

### JavaScript

Minimal vanilla JS in `src/resources/js/app.js`:
- Mobile hamburger menu toggle (also has inline script in `header.njk`)
- Click handlers on `.index-list-item` elements
- `IntersectionObserver`-based scroll-in animation for `.sp-animate-slidein` elements
