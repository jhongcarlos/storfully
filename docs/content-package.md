# Storfully Website Content Package v1

Prepared by the Storfully Advisory Board for Chans Weber. September 14, 2026.

## Contents
- What Storfully is (full description)
- Packages and deliverables (the product the site sells)
- House rules for every page
- Sitemap v1 with per-page metadata and schema
- Technical protocol: Astro, SEO, and LLM visibility
- Page copy (all pages)
- Playbook launch list and glossary
- Rulings (closed September 14, 2026)

---

## 1. What Storfully is

Storfully is Agile & Co's self-storage division: fixed monthly marketing packages built for independent self-storage owners, priced per facility and expandable one facility at a time. The work is produced by Core, Agile & Co's proprietary AI engine, and approved by Agile's paid ads and SEO teams at defined checkpoints. Every owner gets scheduled consultation (quarterly on 5x5, monthly on 10x10 and 10x20), a report that reads in two minutes, and published pricing with nothing hidden.

The reason it exists: independent operators run about 84% of US self-storage facilities, yet REIT-managed facilities charge roughly 18% higher street rates and run about ten points higher occupancy, a gap the industry's own data attributes to digital marketing, brand and pricing sophistication (TractIQ, Q2 2026; The Storage Brief, 2026). REITs have marketing departments. Independents have a manager with a phone. Storfully gives the other 84% REIT-grade marketing at an independent's budget.

What it is not: a full-service agency. No dedicated account manager, no custom strategy, no aggregator management, no high ad spend accounts. Those owners go to Agile & Co. Storfully is the stripped-down, systemized version: the right work, done every month, for a price a single facility can carry.

**Positioning line:** REIT-grade marketing for the other 84%.
**Tagline:** Self-Storage. Full Potential.
**Brand statement:** More than marketing. A brighter future for self-storage.
**Entity line:** Storfully is a division of Agile & Co (Leap Clixx Inc), St. Louis, Missouri. Powered by Core.

---

## 2. Packages and deliverables

Named after the three units every owner sells. Priced per facility. Add facilities as you go.

### 5x5. Stay found. Stay full.
From $500 per month per facility. Setup $2,500.
- Google Business Profile: full optimization, categories, services, unit types, photos, Q&A, up to 4 posts a month
- Local SEO: name, address and phone synced across the major directories; up to 1 page on your website optimized per month
- Reviews: AI-drafted responses to every review within one business day; review request link and QR card
- Monthly local rank grid scan for "storage units near me" around your facility
- Call tracking on your Google Business Profile number
- Monthly report and 1 hour of consultation each quarter

### 10x10. The most popular unit. The most popular package.
From $1,000 per month per facility. Setup $2,500. Everything in 5x5, plus:
- Google Ads: up to 2 search campaigns built, launched and optimized monthly; ad spend up to $3,000 a month, billed directly to your card
- 1 landing page per facility with unit pricing and a rent-now path into your management software
- Call, form and chat tracking with WhatConverts; every lead tagged to its source
- Move-in attribution: monthly move-in import matched to lead source

### 10x20. Room to grow.
From $1,500 per month per facility. Setup $2,500. Everything in 10x10, plus:
- Meta Ads (Facebook and Instagram): up to 2 campaigns for promotions, lease-up and boat and RV storage; ad spend up to $3,000 a month
- Up to 3 landing pages per facility (promos, unit types, seasonal)
- Up to 2 pages on your website optimized per month
- Lease-up mode for new facilities: front-loaded campaign build in the first 60 days

### Additional facilities
Each additional facility on the same package: 5x5 add $350 a month; 10x10 add $750; 10x20 add $1,200. Setup $500 per additional facility. (Ruled September 14, 2026.)

### What's not included, on purpose
No dedicated account manager. No custom strategy documents. No aggregator listing management. No ad spend above $3,000 per channel per facility (that's an Agile & Co account). No print, signage or radio. Consultation is scheduled through your portal, use it or lose it: one hour a quarter on 5x5, one hour a month on 10x10 and 10x20.

### Facility websites (package clients only)
Storfully builds facility websites for 10x10 and 10x20 clients on the client's own property management software rental widget. Quoted separately. Storfully does not take website-only clients.

---

## 3. House rules for every page

Carried over from Agile & Co. No exceptions. These are lint rules in the build, not suggestions.

- No ROAS multiple and no revenue projection anywhere on the site or in any audit or proposal. Forecasts stop at leads, move-ins and cost per move-in.
- "Ad spend," never "media."
- No em dashes. Commas, semicolons, or a new sentence.
- "AI engine," not "AI system." "Proprietary," not "custom-built." "Human language," not "plain English."
- The word "leak" in any form never appears.
- Deliverable counts carry "up to" ("up to 2 campaigns," "up to 4 posts").
- Image counts never appear. Copy says only that Storfully supplies AI-generated images where the client does not provide real photography.
- Every statistic carries a source and a year in the copy.
- Kenny's facilities are not named on the site until he approves a case study. The site refers to "our founding facilities."

---

## 4. Sitemap v1

Every page also carries WebPage (with dateModified), BreadcrumbList, and a link back to the Organization node.

| Path | Title tag | H1 | Primary query the page answers | Schema (JSON-LD) |
|---|---|---|---|---|
| / | Self-Storage Marketing Packages for Independent Owners | REIT-grade marketing for the other 84% | self storage marketing agency | Organization, WebSite, FAQPage |
| /packages | Self-Storage Marketing Packages and Pricing | Three packages. Named after the units you sell. | self storage marketing pricing / cost | ItemList of Service+Offer, FAQPage |
| /packages/5x5 | 5x5 Package: Google Business Profile and Local SEO | 5x5. Stay found. Stay full. | google business profile management self storage | Service, Offer, FAQPage |
| /packages/10x10 | 10x10 Package: Local SEO and Google Ads | 10x10. The most popular unit. The most popular package. | google ads for self storage | Service, Offer, FAQPage |
| /packages/10x20 | 10x20 Package: SEO, Google Ads and Meta Ads | 10x20. Room to grow. | self storage marketing package multi channel | Service, Offer, FAQPage |
| /audit | Free Self-Storage Visibility Audit | See exactly where your facility shows up. And where it doesn't. | self storage marketing audit | WebPage, HowTo, FAQPage |
| /how-it-works | How Storfully Works: AI Engine, Human Approval | An AI engine does the work. People approve it. | ai marketing for self storage | WebPage, HowTo, FAQPage |
| /results | Results | Numbers, not adjectives. | self storage marketing results | WebPage |
| /about | About Storfully, a Division of Agile & Co | Built by an agency that fills calendars for a living. Now filling units. | who is storfully | AboutPage, Organization, Person |
| /contact | Contact Storfully | Talk to a person. | storfully contact | ContactPage |
| /book | Book a Call | Thirty minutes. No pitch deck. | book self storage marketing call | WebPage |
| /services/google-business-profile | Google Business Profile Management for Self Storage | Your Google Business Profile is your busiest storefront. | google business profile self storage | Service, FAQPage |
| /services/local-seo | Local SEO for Self-Storage Facilities | Rank where the search happens: three miles from the gate. | local seo self storage | Service, FAQPage |
| /services/google-ads | Google Ads for Self Storage | Pay for renters, not clicks. | google ads self storage | Service, FAQPage |
| /services/meta-ads | Facebook and Instagram Ads for Self Storage | Meta fills the gaps search can't reach. | facebook ads self storage | Service, FAQPage |
| /services/reviews | Review Management for Self Storage | Every review answered. Every reviewer asked. | self storage review management | Service, FAQPage |
| /services/facility-websites | Self-Storage Websites That Rent Units | A website that rents units while you sleep. | self storage website design | Service, FAQPage |
| /for/single-facility-owners | Marketing for Single-Facility Self-Storage Owners | One facility. One package. One report. | marketing for a single storage facility | WebPage, FAQPage |
| /for/multi-facility-operators | Marketing for Multi-Facility Storage Operators | Same system, every location. | multi location self storage marketing | WebPage, FAQPage |
| /for/third-party-management | Marketing for Third-Party Storage Managers | Standardize marketing across every owner you serve. | third party management self storage marketing | WebPage, FAQPage |
| /for/new-facilities | Lease-Up Marketing for New Self-Storage Facilities | Full faster. | self storage lease up marketing | WebPage, FAQPage |
| /storage/climate-controlled | Marketing Climate-Controlled Storage | Sell the premium. | climate controlled storage marketing | WebPage, FAQPage |
| /storage/boat-and-rv | Boat and RV Storage Marketing | Bigger units. Longer stays. Different renters. | boat rv storage marketing | WebPage, FAQPage |
| /storage/vehicle | Vehicle Storage Marketing | Cars, trucks, trailers: rent the pavement. | vehicle storage marketing | WebPage, FAQPage |
| /storage/portable | Portable Storage Marketing | Marketing for storage that moves. | portable storage container marketing | WebPage, FAQPage |
| /compare/agency-vs-aggregators | Storage Marketing Agency vs Aggregators | Rent the tenant, or rent the lead? | self storage aggregator alternatives | Article, FAQPage |
| /compare/agency-vs-in-house | Agency vs In-House Marketing for Self Storage | What a marketing hire really costs a storage owner. | in house vs agency self storage marketing | Article, FAQPage |
| /compare/ai-engine-vs-traditional-agency | AI Marketing Engine vs Traditional Agency | Same work. Different economics. | ai marketing agency vs traditional | Article, FAQPage |
| /playbook | The Self-Storage Marketing Playbook | The Playbook | self storage marketing guide | CollectionPage |
| /playbook/[slug] | (per article) | (per article) | (per article) | Article, FAQPage, BreadcrumbList |
| /playbook/glossary | Self-Storage Marketing Glossary | Every term an owner hears, defined in human language. | self storage marketing terms | DefinedTermSet |
| /playbook/glossary/[term] | (per term) | (per term) | what is [term] self storage | DefinedTerm, BreadcrumbList |
| /faq | Self-Storage Marketing FAQ | Questions owners ask us | self storage marketing faq | FAQPage |
| /privacy, /terms, /accessibility | (legal) | (legal) | none | WebPage |
| /llms.txt, /llms-full.txt, /robots.txt, /sitemap-index.xml, /rss.xml, /404 | (technical) | | none | none |

---

## 5. Technical protocol: Astro, SEO, and LLM visibility

### Why Astro is fine for SEO

Astro is not a JavaScript app the way React or a WordPress page builder with heavy scripts is. Astro renders every page to plain HTML at build time and ships zero JavaScript by default. A crawler, whether Googlebot, Bingbot or an LLM crawler, receives complete HTML with the copy, headings, links and JSON-LD already in it. JavaScript is added only to the specific components that need it (the audit form, the pricing calculator), which Astro calls islands. That is better for SEO than most WordPress builds, not worse: faster pages, no plugin bloat, no render-blocking scripts.

Recommendation: Storfully's own site on Astro; facility websites on Astro as well, since property management rental widgets are script or iframe embeds that work the same in Astro as in WordPress. Keep WordPress only if a specific client's management software offers a WordPress-only plugin.

### Build

Astro static output. Content in content collections as MDX: `src/content/pages`, `src/content/services`, `src/content/playbook`, `src/content/glossary`. Core writes MDX and opens a pull request; a human approves; Cloudflare Pages deploys.

One `<SchemaJsonLd>` component in the base layout builds the JSON-LD graph per page from frontmatter (type, name, description, faqs, offers, author, dateModified from git).

`@astrojs/sitemap` for sitemap-index.xml; `@astrojs/rss` for rss.xml; `src/pages/llms.txt.ts` and `llms-full.txt.ts` generate both files from the collections at build.

Canonical, Open Graph, Twitter cards, alt text required on every image; build fails without them.

Lint at build: ROAS, revenue projections, "media," em dashes, "leak," missing "up to" on counts, missing source on any number.

### Entity foundation (do before launch)

- Organization node: `@id: https://storfully.com/#organization`, name Storfully, legalName Leap Clixx Inc, alternateName "Storfully by Agile & Co", parentOrganization Agile & Co (`https://agileandco.com/#organization`), founder Person Chans Weber, address St. Louis, telephone, sameAs to Google Business Profile, LinkedIn, Facebook, Instagram, YouTube, X.
- Person node for Chans Weber with jobTitle Founder, sameAs LinkedIn; every Playbook article carries him (or a named team member) as author.
- Google Search Console, Bing Webmaster Tools, IndexNow key at build; submit the sitemap to both on every deploy. ChatGPT browsing leans on Bing's index, so Bing is not optional.
- Google Business Profile for Storfully itself (marketing agency category, St. Louis).

### Crawl access

`robots.txt` allows all, with explicit allow lines for GPTBot, ChatGPT-User, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended, Bingbot, CCBot. Sitemap line points to sitemap-index.xml. `llms.txt` lists the site's purpose, packages with prices, and links to every Playbook article and glossary term in priority order; `llms-full.txt` concatenates the full text of those pages.

### On-page pattern (every content page)

- H1 answers the page's primary query.
- First paragraph is 40 to 60 words and answers the question directly, no throat-clearing.
- H2s are written as questions an owner would type or say.
- Every number carries a source and year in the sentence.
- A "Quick answer" block near the top on Playbook and service pages.
- FAQ section of 4 to 6 questions, marked up as FAQPage.
- Internal links: every page links to /packages, /audit, and its two nearest siblings.
- dateModified is real; Core refreshes each Playbook page at least quarterly and rewrites the "as of" line.

### JSON-LD templates

**Organization (in layout, every page):**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://storfully.com/#organization",
      "name": "Storfully",
      "legalName": "Leap Clixx Inc",
      "alternateName": "Storfully by Agile & Co",
      "url": "https://storfully.com",
      "logo": "https://storfully.com/brand/storfully-primary-logo.png",
      "slogan": "Self-Storage. Full Potential.",
      "description": "Fixed monthly marketing packages for independent self-storage owners, priced per facility and powered by Core, Agile & Co's proprietary AI engine.",
      "parentOrganization": { "@id": "https://agileandco.com/#organization" },
      "founder": { "@id": "https://storfully.com/#chans-weber" },
      "address": { "@type": "PostalAddress", "addressLocality": "St. Louis", "addressRegion": "MO", "addressCountry": "US" },
      "telephone": "TBD",
      "areaServed": "US",
      "knowsAbout": ["self-storage marketing", "Google Business Profile", "local SEO", "Google Ads", "Meta Ads", "move-in attribution"],
      "sameAs": ["TBD Google Business Profile", "TBD LinkedIn", "TBD Facebook", "TBD Instagram", "TBD YouTube", "TBD X"]
    },
    {
      "@type": "Person",
      "@id": "https://storfully.com/#chans-weber",
      "name": "Chans Weber",
      "jobTitle": "Founder",
      "worksFor": { "@id": "https://storfully.com/#organization" },
      "sameAs": ["TBD LinkedIn"]
    },
    { "@type": "WebSite", "@id": "https://storfully.com/#website", "url": "https://storfully.com", "name": "Storfully", "publisher": { "@id": "https://storfully.com/#organization" } }
  ]
}
```

**Package page (Service + Offer), example for 10x10:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://storfully.com/packages/10x10#service",
  "name": "10x10 Self-Storage Marketing Package",
  "serviceType": "Self-storage marketing: local SEO, Google Business Profile and Google Ads management",
  "provider": { "@id": "https://storfully.com/#organization" },
  "areaServed": "US",
  "audience": { "@type": "Audience", "audienceType": "Independent self-storage facility owners" },
  "offers": {
    "@type": "Offer",
    "price": "1000",
    "priceCurrency": "USD",
    "priceSpecification": { "@type": "UnitPriceSpecification", "price": "1000", "priceCurrency": "USD", "unitText": "per facility per month", "minPrice": "1000" },
    "availability": "https://schema.org/InStock",
    "url": "https://storfully.com/packages/10x10"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "10x10 deliverables",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads: up to 2 search campaigns, ad spend up to $3,000/month" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Landing page with unit pricing and rent-now path" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Call, form and chat tracking with move-in attribution" } }
    ]
  }
}
```

- **FAQ (every content page):** standard FAQPage with Question and acceptedAnswer per item; answers under 60 words, identical to the visible text.
- **Playbook article:** Article with headline, author (Person node), publisher (Organization node), datePublished, dateModified, about (DefinedTerm where relevant), citation (URLs of sources used).
- **Glossary term:** DefinedTerm with name, description, inDefinedTermSet pointing at /playbook/glossary.

---

## 6. Page copy

Copy conventions: light theme, white primary background, black text, accent blue #4CC9F0 for CTAs and key moments, light grey #F3F4F6 for section backgrounds. Primary CTA everywhere: "Get your free visibility audit." Secondary: "See packages."

### / Home

**Meta description:** Fixed monthly marketing packages for independent self-storage owners. Priced per facility, powered by a proprietary AI engine, approved by people. From $500 a month.

**H1:** REIT-grade marketing for the other 84%.

Independent owners run about 84% of America's self-storage facilities. REIT facilities charge roughly 18% more per square foot and run about ten points higher occupancy, and the industry's own data says the difference is marketing, brand and pricing, not location (TractIQ, 2026). Storfully closes that gap with fixed monthly packages built for one facility, priced so one facility can carry them.

[Get your free visibility audit] [See packages]

**H2: What does Storfully actually do?** We make your facility the one that shows up when someone three miles away searches "storage units near me," and we make sure the click turns into a move-in. Google Business Profile, local SEO, reviews, Google Ads, and Meta Ads when you need them, delivered every month by Core, our proprietary AI engine, and approved by the paid ads and SEO teams at Agile & Co before anything goes live.

**H2: Three packages. Named after the units you sell.**
5x5, from $500 a month. Google Business Profile, local SEO, reviews, rank tracking. Stay found, stay full.
10x10, from $1,000 a month. Everything in 5x5 plus Google Ads, a landing page, and move-in attribution. Our most popular package.
10x20, from $1,500 a month. Everything in 10x10 plus Meta Ads, more landing pages, and lease-up mode.
Own more than one facility? Add each one to the same package at a lower per-facility rate. [See packages]

**H2: Why does an AI engine cost less than an agency?** Because the work that fills a storage facility is repeatable. The categories, the posts, the review responses, the search campaigns, the monthly report: they follow the same pattern at every facility in America, and Core runs that pattern without a team of account managers billing hours. People still approve everything. You still get scheduled time with a strategist. You just don't pay for the meetings you never wanted.

**H2: How do you know it's working?** Every call, form and chat is tracked to its source. Every month we match your move-ins to the lead that produced them, so you see cost per lead and cost per move-in by channel, in one report you can read in two minutes. We don't publish revenue projections or return multiples, ours or anyone's. Leads, move-ins, cost per move-in. That's the scoreboard.

**H2: Start with the audit.** Free. Automated. Ready in minutes. A rank grid of your trade area for "storage units near me," a Google Business Profile score, a website check, and the three things to fix first. No sales call required to get it.

[Get your free visibility audit]

Built by Agile & Co. Storfully is a division of Agile & Co, a St. Louis marketing agency that manages paid search, paid social and SEO for 50+ service-business locations. Powered by Core.

**FAQ**
- Is Storfully a good fit for a single facility? Yes. Every package is built and priced for one facility. You add facilities only if you own more.
- Do I sign a long contract? Packages are month to month after a 90-day initial term. Ad spend is billed to your card by Google and Meta directly.
- Do you manage SpareFoot or other aggregator listings? No. We build the direct channel so you depend on aggregators less.
- Who does the work? Core, our proprietary AI engine, produces it. Agile & Co's paid ads and SEO teams approve it at launch and every month.
- Do you build websites? For 10x10 and 10x20 clients, yes, on your management software's rental widget. We don't take website-only clients.

---

### /packages

**Meta description:** Self-storage marketing packages with published pricing: 5x5 from $500, 10x10 from $1,000, 10x20 from $1,500 per facility per month. Add facilities as you grow.

**H1:** Three packages. Named after the units you sell.

Every package is built for one facility and expands one facility at a time. Prices are published because you'd ask anyway.

**H2: Which package is right for my facility?**
If you're at 88% or better and want to hold it: 5x5.
If you have empty units and want them filled from search: 10x10.
If you're leasing up, running promotions, or renting boat and RV space: 10x20.

[Package comparison table: rows are the deliverables in Section 2; columns 5x5 / 10x10 / 10x20; "Additional facility" row shows +$350 / +$750 / +$1,200; "Setup" row shows $2,500 first facility, $500 each additional. "Consultation" row shows 1 hour a quarter / 1 hour a month / 1 hour a month.]

**H2: What's included in every package?** Scheduled consultation, booked in your portal: one hour a quarter on 5x5, one hour a month on 10x10 and 10x20. Call tracking. A monthly report with leads, move-ins and cost per move-in. Email and portal support with a one-business-day response. Approval of every campaign, post and page by Agile & Co's ads and SEO teams before it goes live.

**H2: What's not included, on purpose?** No dedicated account manager. No custom strategy decks. No aggregator listing management. No ad spend above $3,000 per channel per facility. No print, signage or radio. If you need those, you need Agile & Co, and we'll introduce you.

**H2: How does ad spend work?** Ad spend is separate from your package price and is billed by Google and Meta directly to your card. Packages include management of up to $3,000 a month per channel per facility. Most independent facilities spend $500 to $2,000 a month on Google Ads; we'll recommend a starting number in your audit.

**FAQ**
- Can I start on 5x5 and upgrade? Yes, any month.
- What happens when my facility is full? Drop to 5x5 and hold it. Owners who cut marketing at 92% tend to be back at 84% by spring.
- Do you charge setup? $2,500 for the first facility, $500 for each additional. It covers tracking, profile rebuild, landing page and campaign build.
- Is there a discount for multiple facilities? Yes. Additional facilities are priced lower on every package.
- Do you require access to my management software? Only for move-in attribution, and only read access. Storfully never owns your accounts; Google Ads, Google Business Profile and Meta stay in your name.

---

### /packages/5x5

**Meta description:** The 5x5 package: Google Business Profile management, local SEO, review responses and rank tracking for self-storage facilities. From $500 a month per facility.

**H1:** 5x5. Stay found. Stay full.

The smallest unit and the smallest package, for owners who need their facility to keep showing up in the map results without paying for ads. From $500 a month per facility.

**H2: What do I get every month?** [Deliverable list from Section 2, 5x5.]

**H2: Who is 5x5 for?** Facilities at 88% occupancy or better. Owners who want the Google Business Profile handled properly and every review answered. Multi-facility operators who want a consistent baseline across the portfolio. Anyone who plans to move up to 10x10 when units open.

**H2: Why does the Google Business Profile matter more than my website?** Because for "storage units near me" Google shows the map first. Three facilities appear. Everyone else scrolls. The profile that is complete, active, photographed and reviewed gets in the three; the rest depend on aggregators. 5x5 exists to get you in the three and keep you there.

**H2: How is 5x5 delivered?** Core drafts the posts, the review responses and the page updates. Agile & Co's SEO team approves them. You see everything in your portal before it goes live if you want to, and in your monthly report if you don't.

**FAQ**
- Will you respond to negative reviews? Yes, within one business day, in your voice, with a draft you can edit first if you prefer.
- Do you write the posts? Core drafts them from your unit mix, promotions and photos; a person approves them.
- What if I don't have photos? You should. Real photos win. Where you don't have them, Storfully supplies AI-generated images that show your unit types and features.
- Can I add Google Ads later? That's 10x10. Upgrade any month.

---

### /packages/10x10

**Meta description:** The 10x10 package: local SEO, Google Business Profile, Google Ads with up to $3,000 monthly ad spend managed, a landing page and move-in attribution. From $1,000 a month per facility.

**H1:** 10x10. The most popular unit. The most popular package.

Everything in 5x5 plus Google Ads, a landing page that shows unit prices and rents units, and a monthly report that ties move-ins back to the ad that produced them. From $1,000 a month per facility.

**H2: What do I get every month?** [Deliverable list from Section 2, 10x10.]

**H2: How much should a facility spend on Google Ads?** Most independent facilities spend $500 to $2,000 a month. The right number depends on how many competitors sit inside your trade area and how many units you need to fill. Your audit gives you a starting recommendation with the expected leads and cost per move-in at three spend levels. We manage up to $3,000 a month per facility inside the package.

**H2: How do you track move-ins?** Every call, form and chat gets a source. Each month we import your move-ins from your management software (read access only, or a CSV if you'd rather) and match them to the lead that produced them. Your report shows leads, move-ins and cost per move-in by channel. No return multiples, no revenue projections.

**H2: What does the landing page do?** It loads fast, shows your unit sizes and prices, shows your promotion, and puts the rent-now button from your management software above the fold. Ads point there, not to your homepage.

**FAQ**
- Do you build the campaigns from scratch? Yes, up to 2 search campaigns per facility, built from your unit mix and trade area, approved by Agile & Co's paid ads team before launch.
- Whose Google Ads account is it? Yours. We manage it; you own it; you can leave with it.
- What if I already run ads? We audit what's running first. Often the fix is structure and tracking, not spend.
- Do I need a new website for the landing page? No. The landing page stands alone and links into your existing rental flow.

---

### /packages/10x20

**Meta description:** The 10x20 package: local SEO, Google Ads, Meta Ads, up to 3 landing pages and lease-up mode for new facilities. From $1,500 a month per facility.

**H1:** 10x20. Room to grow.

For facilities that need more than search: new builds leasing up, promotion-driven markets, boat and RV storage, and owners who want every channel running. From $1,500 a month per facility.

**H2: What do I get every month?** [Deliverable list from Section 2, 10x20.]

**H2: When does Meta make sense for storage?** Search catches people who already need storage. Meta reaches the people about to need it: movers, downsizers, boat owners in October, RV owners in March. It is the right tool for promotions, lease-up and specialty units, and the wrong tool as a facility's only channel. In 10x20 it runs alongside search, never instead of it.

**H2: What is lease-up mode?** For new facilities: campaigns, profile, landing pages and reviews program built in the first 60 days before the gate opens, so the first month of rentals comes from a system that already exists rather than one being built while units sit empty.

**FAQ**
- Is 10x20 only for multi-facility owners? No. It's for any facility that needs more than search, including a single new build.
- How much ad spend does 10x20 include? Management of up to $3,000 a month per channel per facility. Above that, talk to Agile & Co.
- Can I run Meta only? Not on 10x20. Search stays on because it's where the intent lives.
- Do you handle promotions? Yes. Tell us the promo; Core builds the landing page and the campaigns around it.

---

### /audit

**Meta description:** Free self-storage visibility audit: a rank grid for "storage units near me" around your facility, a Google Business Profile score, a website check and the three fixes that matter most. Automated, ready in minutes.

**H1:** See exactly where your facility shows up. And where it doesn't.

Enter your facility. In minutes you get a map of your trade area showing where you rank for "storage units near me" at every point, a score for your Google Business Profile, a check of your website's speed and rental path, and the three things to fix first. Free, automated, and yours whether or not we ever talk.

[Audit form: facility name, address, website, email, phone. Optional: number of facilities, occupancy.]

**H2: What's in the audit?**
Rank grid. A 7x7 grid across your trade area showing your Google Maps position for "storage units near me" at each point. You'll see the neighborhoods where you don't exist.
Google Business Profile score. Categories, photos, posts, Q&A, reviews, response rate, and what's missing.
Website check. Speed, mobile, unit pricing visibility, rent-now path, tracking.
Ad opportunity. If you're not running Google Ads, an estimate of leads and cost per move-in at three spend levels for your trade area, from Google's own planning data.
The three fixes. In priority order, with what each one changes.

**H2: What happens after?** You get the report by email. If you want to talk, book the thirty minutes. If you want a package, pick one. If you want neither, keep the report; the fixes work whether or not you hire us.

**FAQ**
- Is it really free? Yes. No card, no call required.
- How fast? Most audits are delivered in under fifteen minutes.
- Do I get a proposal? Only if you ask. The audit stands alone.
- Do you audit multiple facilities? Yes. Enter each one, or send us the list.

---

### /how-it-works

**Meta description:** How Storfully works: Core, Agile & Co's proprietary AI engine, produces the work; Agile's paid ads and SEO teams approve it; you get a two-minute monthly report and scheduled time with a strategist.

**H1:** An AI engine does the work. People approve it.

Storfully is powered by Core, the proprietary AI engine Agile & Co built to run marketing for service businesses. Core produces the posts, the pages, the campaigns, the review responses and the report. Nothing goes live until a person on Agile & Co's paid ads or SEO team approves it.

**H2: What does Core do for a storage facility?**
- Builds and maintains your Google Business Profile from your unit mix, features, photos and promotions
- Drafts every review response within one business day
- Writes and optimizes the pages that rank you in your trade area
- Builds search campaigns and landing pages from your trade area and unit pricing
- Tracks every call, form and chat, imports move-ins, matches them, and writes the report

**H2: Where do people come in?** At three checkpoints. Launch: every profile, page, campaign and landing page is reviewed and approved by Agile & Co's ads or SEO team before it goes live. Monthly: the same teams review performance and approve the next month's changes. Anytime: your scheduled consultation (quarterly on 5x5, monthly on 10x10 and 10x20), and any ad spend change larger than 20% gets a human eye first.

**H2: What does the report look like?** One page. Leads by channel. Move-ins by channel. Cost per lead and cost per move-in. Map rank across your trade area, this month against last. Reviews received and answered. What changed and what's next. No return multiples, no revenue projections; those numbers get invented, and we don't invent numbers.

**H2: Why is this cheaper than an agency?** Because a storage facility's marketing is the same pattern in Des Moines and Dallas. Core runs the pattern; people check it. You pay for the work and the judgment, not for the meetings.

**FAQ**
- Is my facility's data used to train anything? No. Your data stays in your accounts and your portal.
- Who approves the work? Agile & Co's paid ads team (campaigns, landing pages, spend) and SEO team (profile, pages, posts, reviews).
- Can I see things before they go live? Yes, in your portal. Most owners stop looking after month two.
- What if something goes wrong? Email or portal, one-business-day response, and a person fixes it.

---

### /results

**Meta description:** Storfully results: leads, move-ins and cost per move-in from our founding facilities, plus Agile & Co's track record across 50+ service-business locations.

**H1:** Numbers, not adjectives.

Storfully launched in 2026 with a founding portfolio of six independent facilities. Their leads, move-ins and cost per move-in are published here as they accrue, monthly, without editing the bad months out.

**H2: Founding facilities** [Live block, updated monthly by Core: facilities enrolled, months live, leads, move-ins, cost per move-in by channel, map rank change. Launches with "Data begins [month]."]

**H2: The agency behind it** Storfully is a division of Agile & Co, which manages paid search, paid social and SEO for 50+ service-business locations from St. Louis. The engine that runs Storfully is the same engine that runs those accounts. [Link to Agile & Co results.]

**H2: Why we don't publish return multiples** Because they're calculated by whoever benefits from them. We publish what we can measure: leads, move-ins, cost per move-in.

---

### /about

**Meta description:** Storfully is a division of Agile & Co, a St. Louis marketing agency, built to give independent self-storage owners REIT-grade marketing at a per-facility price.

**H1:** Built by an agency that fills calendars for a living. Now filling units.

Storfully is a division of Agile & Co, the St. Louis marketing agency founded by Chans Weber that manages Google Ads, Meta Ads and SEO for service businesses across 50+ locations. Agile & Co built Core, a proprietary AI engine, to run that work with less overhead and more consistency. Storfully is Core pointed at one industry.

**H2: Why self-storage?** Because the gap is measurable. Independents run most of the industry's facilities, and the REITs beat them on rate and occupancy with better marketing, not better buildings (TractIQ, 2026). A single facility can't afford an agency retainer and doesn't need one. It needs the right work done every month at a price the facility can carry. That's a product, not a service, and that's what we built.

**H2: Who's behind it** Chans Weber, Founder. Fifteen years in marketing, founder of Agile & Co, builder of Core. Agile & Co's paid ads team, led by Art, approves every campaign. Agile & Co's SEO team, led by Cams, approves every profile, page and post. [Optional: Ellie, Communications Director, if client communications route through her team.]

**H2: Where we are** St. Louis, Missouri. Serving independent facilities nationwide.

Legal: Storfully is a DBA of Leap Clixx Inc, doing business as Agile & Co, a Missouri corporation.

---

### /contact and /book

**/contact H1:** Talk to a person. Email, phone, address, portal login. Form: name, email, facility, message. Response within one business day.

**/book H1:** Thirty minutes. No pitch deck. Book time with a strategist. Bring your audit if you have one. Embedded scheduler.

---

### /services/google-business-profile

**Meta description:** Google Business Profile management for self-storage facilities: categories, unit types, photos, posts, Q&A and reviews, handled monthly so your facility stays in the map results.

**H1:** Your Google Business Profile is your busiest storefront.

For "storage units near me," Google shows three facilities on a map before it shows a single website. Your profile decides whether you're one of them. Storfully builds it correctly, keeps it active, and answers every review.

**Quick answer:** A complete, active, well-reviewed Google Business Profile is the single largest factor in whether a storage facility appears in the map results for nearby searches. Most independent profiles are missing categories, unit types, current photos and review responses.

**H2: What does Storfully do to the profile?** Primary and secondary categories set correctly. Every unit type and feature listed as a service. Hours, gate hours and office hours separated. Photos organized by unit type and feature. Up to 4 posts a month for promotions, unit availability and seasonal demand. Q&A seeded with the questions renters ask. Every review answered within one business day.

**H2: How do you know it's working?** The monthly rank grid. A 7x7 map of your trade area showing your position at each point for "storage units near me," compared to last month. Ranking at the gate is easy; ranking three miles out is the job.

**H2: Included in:** 5x5, 10x10, 10x20.

**FAQ**
- Can I keep posting myself? Yes. We'll coordinate so nothing duplicates.
- Do you handle suspensions or ownership issues? Yes, as part of setup.
- What about Apple Maps and Bing Places? Synced as part of local citations in every package.
- Does the profile need my website? It helps. The profile links to your landing page or site for pricing and rentals.

---

### /services/local-seo

**Meta description:** Local SEO for self-storage facilities: citations, on-site optimization and trade-area content that ranks your facility for nearby searches. Included in every Storfully package.

**H1:** Rank where the search happens: three miles from the gate.

Storage is bought within a short drive. Local SEO makes sure your facility is the answer inside that radius: consistent name, address and phone across the directories, pages built around your unit types and neighborhoods, and the technical basics your website is probably missing.

**Quick answer:** Local SEO for a storage facility means three things: a consistent business listing across directories, a website with a page for each unit type and location, and a Google Business Profile that stays active. Storfully handles all three, with up to 1 page optimized a month on 5x5 and 10x10 and up to 2 on 10x20.

**H2: What gets optimized on my website?** Title tags, headings and copy on your facility and unit pages, written for the searches renters actually make ("climate controlled storage [city]," "10x10 storage unit near [neighborhood]"). Schema markup so Google and AI assistants understand your facility, units and prices. Speed and mobile fixes where your site allows them.

**H2: What if my website is a mess?** We optimize what's there. If it can't be fixed, 10x10 and 10x20 clients can have Storfully build a facility website on their management software's rental widget.

**H2: Included in:** 5x5, 10x10, 10x20.

**FAQ**
- Do you write blog posts? Not by default. Pages that rank for unit types and neighborhoods outperform blog posts for storage.
- How long until rankings move? Profile changes show in weeks; website changes in one to three months.
- Do you build backlinks? Local citations, yes. Paid link building, no.
- Does this help with ChatGPT and other AI assistants? Yes. The same structured data and clear pages that help Google are what AI assistants cite.

---

### /services/google-ads

**Meta description:** Google Ads management for self-storage facilities: up to 2 search campaigns, landing page, call tracking and move-in attribution, with up to $3,000 monthly ad spend managed per facility.

**H1:** Pay for renters, not clicks.

Search ads catch the renter at the moment they need a unit. Storfully builds campaigns around your trade area and unit pricing, sends them to a landing page that rents units, tracks every call and form, and reports cost per move-in, not cost per click.

**Quick answer:** For an independent self-storage facility, Google Ads works when three things are true: campaigns are limited to the trade area, ads point to a page with unit prices and a rent-now button, and every lead is tracked to a source. Most facilities spend $500 to $2,000 a month.

**H2: What does Storfully build?** Up to 2 search campaigns per facility: one for core storage terms in your trade area, one for your unit types and specialties. Ad copy from your prices and promotions. Negative keywords so you don't pay for "storage bins." Call tracking and form tracking through WhatConverts. Conversion tracking wired to the campaigns.

**H2: How much should I spend?** Your audit answers this with three spend levels and the expected leads and cost per move-in at each, from Google's own planning data for your area. We don't project revenue or return multiples.

**H2: Included in:** 10x10, 10x20.

**FAQ**
- Whose account is it? Yours. Storfully manages; you own; you leave with it.
- Do you run Performance Max? Only when search is saturated; never as the starting point.
- Do you run Bing? Yes, as part of the same paid search work when it's worth it for your market.
- What about Local Services Ads? Not available for storage at present.

---

### /services/meta-ads

**Meta description:** Facebook and Instagram ads for self-storage: promotions, lease-up and boat and RV campaigns that reach renters before they search. Included in the 10x20 package.

**H1:** Meta fills the gaps search can't reach.

Search finds the people who need storage today. Meta reaches the people who will need it next month: movers, downsizers, boat and RV owners at the turn of the season. Storfully runs it for promotions, lease-up and specialty units, alongside search, never instead of it.

**Quick answer:** Facebook and Instagram ads work for self-storage when they carry a specific offer to a specific trade area at a specific time: a move-in special, a new facility opening, or seasonal boat and RV space. They do not work as a facility's only channel.

**H2: What does Storfully run?** Up to 2 campaigns per facility: a promotion or availability campaign and a specialty or seasonal campaign. Creative from your photos (or Storfully-supplied AI-generated images where you have none). Landing pages built for the offer. Lead tracking into the same report as search.

**H2: Included in:** 10x20.

**FAQ**
- Do I need a Facebook page? Yes; we'll set it up if you don't have one.
- Will you post organically? Not in the package. The ads do the work.
- Can Meta replace Google Ads? No. Intent lives in search.
- What's the minimum spend? We recommend at least $500 a month for Meta to have enough reach in a trade area.

---

### /services/reviews

**Meta description:** Review management for self-storage: every review answered within one business day, every tenant asked. Included in every Storfully package.

**H1:** Every review answered. Every reviewer asked.

Reviews decide the map results and the click. Storfully answers every review in your voice within one business day and gives your office a link and a QR card so happy tenants leave one on move-in day.

**Quick answer:** Review volume, recency and response rate all affect whether a storage facility appears in Google's map results. Most independent facilities respond to fewer than half their reviews. Storfully responds to all of them and builds the ask into move-in.

**H2: How are responses written?** Core drafts them from the review, your facility's details and your tone. A person approves. Negative reviews get a calm, specific response that invites the conversation offline. You can require pre-approval on every response or only on negatives.

**H2: Included in:** 5x5, 10x10, 10x20.

**FAQ**
- Do you remove fake reviews? We flag them through Google's process; removal is Google's call.
- Do you gate reviews? No. Every tenant gets the same ask.
- Do you handle Yelp and Facebook reviews? Yes, the same way.
- Can my manager write responses? Yes; we'll draft and they can edit.

---

### /services/facility-websites

**Meta description:** Self-storage websites built on your management software's rental widget: fast, mobile, unit prices visible, rent-now above the fold. For Storfully 10x10 and 10x20 clients.

**H1:** A website that rents units while you sleep.

A storage website has one job: show the unit, show the price, take the rental. Storfully builds fast, mobile-first facility websites on top of the rental widget from your management software, so the site markets and your software rents.

**Quick answer:** The best self-storage website shows unit sizes and prices on the first screen, puts the rent-now button above the fold, loads in under two seconds on a phone, and has a page for every unit type. Storfully builds exactly that for its package clients.

**H2: What's included?** Facility pages, unit type pages, pricing, promotions, photo galleries, FAQ, contact, and your management software's rental flow embedded. Schema markup on every page. Tracking installed. Hosted, fast, maintained.

**H2: Which management software do you work with?** The rental widgets from the major platforms embed the same way. Tell us yours in the audit and we'll confirm before quoting.

**H2: Available to:** 10x10 and 10x20 clients. Quoted separately. Storfully does not take website-only clients.

**FAQ**
- Do I own the site? Yes.
- Will it hurt my rankings to switch? Done properly, no. Redirects and content carry over; most facilities gain from the speed.
- How long does it take? Most facility sites are live within 30 days.
- Can it handle multiple facilities? Yes, with a page per facility and a location finder.

---

### /for/single-facility-owners

**Meta description:** Self-storage marketing for single-facility owners: one package, one price, one report. From $500 a month.

**H1:** One facility. One package. One report.

Most marketing agencies are built for the operator with twenty facilities. Storfully is built for the owner with one. Every package is priced for a single facility and delivered the same way whether you own one or nine.

**H2: What does a single facility actually need?** A Google Business Profile in the top three for nearby searches. Every review answered. A page that shows prices and rents units. If units are empty, search ads inside the trade area. That's it. Storfully does exactly that and nothing you'd have to pay for and not use.

**H2: What does it cost?** 5x5 from $500 a month to stay full. 10x10 from $1,000 to fill units with search. 10x20 from $1,500 if you're leasing up or need every channel.

**H2: What do I have to do?** Approve the setup. Take your scheduled call. Send photos when you have them. Read a one-page report.

**FAQ**
- Can I pause when I'm full? Drop to 5x5 and hold the ground you gained.
- I've been burned by an agency before. Everything stays in your name and you leave with it. Month to month after 90 days.
- Do you work with facilities in small towns? Yes; smaller trade areas are often the easiest to win.
- Do I need a website? Not to start. The Google Business Profile and a landing page carry most facilities.

---

### /for/multi-facility-operators

**Meta description:** Self-storage marketing for multi-facility operators: the same package at every location, priced lower per facility, one portfolio report.

**H1:** Same system, every location.

Pick a package. Add each facility at a lower per-facility rate. Every location gets the same profile standard, the same campaign structure, the same review response time, and you get one report across the portfolio and one per facility.

**H2: How does pricing work for a portfolio?** Your first facility is at the package price. Each additional facility on the same package is added at a reduced rate: $350 on 5x5, $750 on 10x10, $1,200 on 10x20. Setup is $500 per additional facility. Mix packages if some locations are full and others aren't.

**H2: What changes when it's a portfolio?** Consistency. Core applies the same standard to every profile and every campaign, so location eight is as well marketed as location one. Your report ranks facilities by cost per move-in so you know where the next dollar goes.

**FAQ**
- Can facilities be on different packages? Yes.
- Do you handle one website with all locations? Yes, for 10x10 and 10x20 clients.
- Is there a portfolio cap? Above roughly 25 facilities or $3,000 per channel per facility in ad spend, Agile & Co is the better fit.
- Who's my contact? Email and portal, one-business-day response, plus scheduled consultation per facility; portfolios can pool their hours.

---

### /for/third-party-management

**Meta description:** Marketing for third-party self-storage management companies: a standard package for every owner you serve, priced per facility, reported per owner.

**H1:** Standardize marketing across every owner you serve.

Third-party managers sell consistency. Storfully gives you a fixed marketing package you can put on every facility you take on, priced per facility, reported per owner, delivered without your staff doing it.

**H2: How does it work with owners?** You choose the package standard; each owner's facility is added under it; reporting is split by owner so each sees their own leads, move-ins and cost per move-in. Storfully invoices you or the owner, your call.

**H2: Why not build it in-house?** Because a marketing coordinator costs more than a package on ten facilities, and the coordinator leaves. See the comparison. [Link /compare/agency-vs-in-house]

**FAQ**
- Can you white-label? Reports can carry your brand; the work is disclosed as Storfully.
- Onboarding a new facility? Setup in 30 days from access.
- Do you replace what my owners already run? We audit first, keep what works, fix what doesn't.

---

### /for/new-facilities

**Meta description:** Lease-up marketing for new self-storage facilities: profile, campaigns, landing pages and reviews built before the gate opens. The Storfully 10x20 package.

**H1:** Full faster.

A new facility's first year is decided before it opens. Storfully's lease-up mode builds the Google Business Profile, the search and Meta campaigns, the landing pages and the review program in the 60 days before opening, so the first renters arrive into a system, not a plan.

**H2: What's the lease-up timeline?** Days 1 to 30: profile created and verified, website or landing pages built, tracking installed, campaigns built. Days 31 to 60: "opening soon" campaigns live, pre-leasing list built, reviews program ready. Opening: search and Meta live at full spend; monthly review of fill rate against plan.

**H2: What does lease-up cost?** The 10x20 package, from $1,500 a month per facility, plus ad spend. No separate lease-up fee.

**FAQ**
- Can you start before the building is done? Yes; earlier is better for the profile and pre-leasing.
- Do you know what fill rate to expect? Your audit gives expected leads and cost per move-in at three spend levels; fill rate depends on your unit mix and pricing, which we'll discuss on your call.
- What happens after lease-up? Most facilities step down to 10x10 or 5x5 once stabilized.

---

### /storage/climate-controlled

**H1:** Sell the premium.

Climate-controlled units rent for more and attract a renter who searches specifically for them. Storfully builds unit-type pages, profile services and ad groups around "climate controlled storage [city]" so the premium renter finds the premium unit.

**H2: What's different about marketing climate-controlled?** Higher rate, longer stay, more specific search. The page and the ad have to say "climate controlled" in the headline and show the price; generic storage ads waste the click.

**FAQ**
- Do you charge more for climate-controlled marketing? No, it's part of your package's unit-type work.
- Should I advertise climate-controlled separately? Yes, as its own ad group and page.

---

### /storage/boat-and-rv

**H1:** Bigger units. Longer stays. Different renters.

Boat and RV renters plan by season, search by vehicle length, and stay for years. Storfully markets covered, uncovered and enclosed vehicle space with seasonal campaigns, length-specific pages and Meta ads timed to the calendar.

**H2: When do boat and RV renters search?** Fall for boats, late winter for RVs, with a second wave at the end of camping season. Campaigns front-load those windows.

**FAQ**
- Does Meta work for boat and RV? Yes; it's one of the best uses of Meta in storage.
- Do you handle waitlists? The landing page can collect them.

---

### /storage/vehicle

**H1:** Cars, trucks, trailers: rent the pavement.

Vehicle storage competes with driveways and HOAs. Storfully markets it as a solution to a rule, not a product: "where to park a trailer [city]" is the search, and the page answers it.

**FAQ**
- Is vehicle storage worth advertising? At the right price per space, yes, especially near HOA-heavy suburbs.

---

### /storage/portable

**H1:** Marketing for storage that moves.

Portable and container storage is bought like a moving service: by date, by distance, by quote. Storfully builds quote-first landing pages and campaigns around moving and renovation searches, with tracking on every quote request.

**FAQ**
- Is this the same package? Yes, 10x10 or 10x20, with landing pages built for quotes rather than unit rentals.

---

### /compare/agency-vs-aggregators

**H1:** Rent the tenant, or rent the lead?

Aggregator marketplaces send you tenants and charge for each one. A marketing agency builds the channel you own so the tenant comes to you directly. Most independent facilities need less of the first and more of the second.

**Quick answer:** Aggregators are a variable cost per move-in that never goes away; direct marketing is a fixed monthly cost that compounds as your profile, reviews and pages build. The right mix for most facilities is direct first, aggregators as overflow.

**H2: What does an aggregator move-in cost?** A fee per rental set by the marketplace, often a large share of the first month's rent. [Core inserts current published fee structures with source and date at build.]

**H2: What does a direct move-in cost?** Your package price plus ad spend divided by move-ins. Your report shows it every month.

**H2: Should I drop aggregators?** Not on day one. Build the direct channel, watch cost per move-in, then reduce aggregator dependence as direct fills the units.

**FAQ**
- Does Storfully manage aggregator listings? No.
- Can I run both? Yes; most facilities do while the direct channel builds.

---

### /compare/agency-vs-in-house

**H1:** What a marketing hire really costs a storage owner.

**Quick answer:** A part-time marketing coordinator for a storage business costs roughly $30,000 to $50,000 a year in salary before software, and the work stops when they leave. Storfully's 10x10 package on five facilities costs about $48,000 a year in monthly fees and doesn't leave.

**H2: What does the in-house option actually cover?** Usually social posts and the occasional profile update. Rarely campaign structure, tracking, attribution or review response at scale.

**H2: When does in-house make sense?** Above roughly 25 facilities, or when you want someone on site managing brand and events. Then hire, and put Storfully or Agile & Co under them.

**FAQ**
- Can I do it myself? The audit tells you what to fix; many owners do the basics themselves and hire us when units sit empty.

---

### /compare/ai-engine-vs-traditional-agency

**H1:** Same work. Different economics.

**Quick answer:** A traditional agency bills for people's hours; an AI engine produces the repeatable work and people approve it. For a storage facility, where the monthly work follows the same pattern everywhere, the engine costs roughly a third of a retainer for the same deliverables.

**H2: What does the engine do better?** Consistency and speed: every review answered in a day, every profile held to the same standard, every campaign built the same correct way.

**H2: What does a traditional agency do better?** Custom strategy, brand work, high ad spend accounts, and relationships. That's Agile & Co, and if you need it we'll say so.

**H2: What stays human at Storfully?** Approval of everything before it goes live, monthly performance review, your scheduled consultation, and support.

**FAQ**
- Is the copy written by AI? Drafted by Core, approved by a person, in your facility's voice.
- Is my data safe? It stays in your accounts and your portal.

---

### /faq

Master FAQ page compiling every question above, grouped: Packages and pricing, Ad spend, Reporting and attribution, The engine and the people, Websites, Contracts and ownership. FAQPage schema on the full list. Each answer under 60 words and identical to the page it came from.

---

## 7. Playbook launch list and glossary

### Playbook: 40 articles at launch

Each targets a question owners ask Google or an AI assistant. Core drafts from the on-page pattern in Section 5; a person approves; every number carries a source and year. Ordered by launch priority.

1. How much does self-storage marketing cost in 2026? (publishes our prices and the market range)
2. What is a good cost per move-in for a self-storage facility?
3. Why do REIT facilities charge 18% more than independents? (the positioning article, TractIQ data)
4. How to rank in Google's map results for "storage units near me"
5. Self-storage Google Business Profile checklist (the complete list)
6. How many Google reviews does a storage facility need?
7. How much should a storage facility spend on Google Ads?
8. Lease-up marketing plan for a new self-storage facility, day by day
9. Street rate vs web rate: what the gap tells you about your marketing
10. What to do with your marketing when the facility hits 92% occupancy
11. Do Facebook and Instagram ads work for self-storage?
12. SpareFoot and aggregator fees: what a marketplace move-in really costs
13. Move-in attribution: how to know which ads fill units
14. Self-storage SEO: the five things that actually move rankings
15. Boat and RV storage marketing: the seasonal calendar
16. Physical vs economic occupancy: which one your marketing should chase
17. Self-storage website checklist: what a site that rents units has
18. Call tracking for storage facilities: setup and what it reveals
19. First month free: does the promotion still work in 2026?
20. How to respond to a negative self-storage review (with templates)
21. Multi-facility SEO: one website or one per facility?
22. Marketing budget as a percentage of revenue for self-storage
23. Getting your facility cited by ChatGPT, Gemini and Perplexity
24. Landing pages for storage promotions: what converts
25. Facility photos that rent units (and what to do when you don't have any)
26. Climate-controlled storage marketing: selling the premium
27. Vehicle and trailer storage: marketing to HOA neighborhoods
28. Self-storage seasonality: when demand peaks and how to spend ahead of it
29. Local citations for storage facilities: the directories that matter
30. Should a storage facility show unit prices online?
31. Third-party management: standardizing marketing across owners
32. Google Ads for storage: campaign structure that works
33. Negative keywords every storage campaign needs
34. Astro vs WordPress for self-storage websites
35. Online rental conversion rate: what's normal for storage
36. AI in self-storage marketing: what's real and what's a demo
37. Portable storage marketing: quote-first campaigns
38. Tenant retention: email and text that reduce move-outs
39. How independents close the occupancy gap with REITs
40. Self-storage marketing glossary (links to the term set)

### Glossary: launch term set

Each gets its own page with a 60- to 120-word definition, an example, and a link to the package or article that uses it.

Street rate; web rate; achieved rate; physical occupancy; economic occupancy; RevPAF; net rentable square feet (NRSF); unit mix; move-in; move-out; lease-up; stabilization; existing customer rate increase (ECRI); concession; promotion; trade area; rank grid; Google Business Profile; map pack (three-pack); local citation; landing page; call tracking; conversion tracking; cost per lead; cost per move-in; move-in attribution; aggregator; property management software (PMS); online rental; rental widget; climate-controlled; drive-up; lease term; tenant lifetime; churn; schema markup; AI engine.

---

## 8. Rulings (closed September 14, 2026)

- Setup: $2,500 for the first facility on every package; $500 for each additional facility.
- Additional-facility pricing: +$350 (5x5), +$750 (10x10), +$1,200 (10x20) per month.
- Initial term: month to month after a 90-day initial term.
- Consultation: one hour a quarter on 5x5; one hour a month on 10x10 and 10x20. Use it or lose it, booked in the portal.
- Kenny's facilities appear only as "founding facilities" until he approves a case study.
- Still needed before build: the TBD entity fields in the Organization schema (phone, Google Business Profile URL, LinkedIn, Facebook, Instagram, YouTube, X).
