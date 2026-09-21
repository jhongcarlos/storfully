# Storfully — Astro starter

Draft scaffold based on the Storfully Website Content Package v1. This is a
starting structure for Claude Code (or you) to build out — not a finished site.

## What's here

- `astro.config.mjs` — static output, MDX + sitemap integrations wired in.
- `src/content/config.ts` — collection schemas for `pages`, `services`,
  `playbook`, `glossary`, matching the frontmatter fields called for in
  Section 5 of the content package (schema type, FAQs, offers, citations).
- `src/components/SchemaJsonLd.astro` — builds the JSON-LD `@graph` per page
  (Organization, Person, WebSite, WebPage, plus Service/Offer, FAQPage, or
  Article depending on the page's `schemaType`). Organization fields marked
  `TODO` are the ones still waiting on the client (phone, GBP URL, socials).
- `src/layouts/BaseLayout.astro` — canonical, OG/Twitter tags, and the schema
  component wired into every page.
- `src/pages/index.astro` and `src/pages/[...slug].astro` — render `pages`
  collection entries. The slug route uses a naming convention
  (`packages-10x10` → `/packages/10x10`) that should be confirmed/adjusted
  once more content files are added.
- `src/pages/llms.txt.ts` / `llms-full.txt.ts` — generated at build time from
  the collections, per Section 5.
- `scripts/lint-content.mjs` — build-time check for the Section 3 house rules
  (no em dashes, "ad spend" not "media," no "leak," no ROAS/revenue
  projections, "AI engine" not "AI system," "proprietary" not
  "custom-built," "up to" on deliverable counts). Runs automatically as part
  of `npm run build`; run it alone with `npm run lint:content`.
- `src/content/pages/home.mdx` and `packages-10x10.mdx` — two worked examples
  showing the approved copy dropped into the frontmatter/schema shape. Both
  have `TODO` markers where the remaining approved copy from Section 6 still
  needs to be ported in.

## Not here yet (next steps)

- The other 34 pages in the sitemap (Section 4) as content collection entries.
- The 40 Playbook articles and glossary term set (Section 7).
- `robots.txt` with the crawler allow-lines (GPTBot, ClaudeBot, etc.).
- Real Organization schema values once the client sends phone/GBP/socials.
- Visual design/theming (white background, black text, `#4CC9F0` accent,
  `#F3F4F6` section backgrounds per Section 6 copy conventions) — this
  starter has no styling at all yet.
- The audit form and pricing calculator as Astro islands (the only two
  interactive components called for in the spec).

## Getting started

```bash
npm install
npm run dev
```
