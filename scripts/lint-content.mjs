#!/usr/bin/env node
// Enforces Storfully's house rules (content package Section 3) on every
// .mdx file in src/content before the site builds. Fails the build on violation.
// Also enforces the Section 5 requirement that every image carries alt text.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const CONTENT_DIR = join(process.cwd(), 'src/content');
const SRC_DIR = join(process.cwd(), 'src');

const RULES = [
  {
    name: 'No em dashes',
    test: (text) => /—/.test(text),
    message: 'Contains an em dash. Use commas, semicolons, or a new sentence.',
  },
  {
    name: 'No "media" for ad spend',
    test: (text) => /\bmedia\s+spend\b/i.test(text),
    message: 'Says "media spend." House rule: always "ad spend."',
  },
  {
    name: 'No "leak"',
    test: (text) => /\bleak(s|ed|ing)?\b/i.test(text),
    message: 'Contains the word "leak" in some form. Not allowed anywhere on the site.',
  },
  {
    name: 'No ROAS or revenue projection language',
    test: (text) => {
      if (/\bROAS\b/i.test(text)) return true;
      const sentences = text.split(/(?<=[.!?])\s+/);
      const negations = /\b(no|not|don't|doesn't|never)\b/i;
      return sentences.some(
        (sentence) => /revenue projections?/i.test(sentence) && !negations.test(sentence)
      );
    },
    message: 'Contains ROAS or an unnegated revenue-projection claim. Forecasts stop at cost per move-in.',
  },
  {
    name: 'No "AI system" (use "AI engine")',
    test: (text) => /\bAI system\b/i.test(text),
    message: 'Says "AI system." House rule: "AI engine."',
  },
  {
    name: 'No "custom-built" (use "proprietary")',
    test: (text) => /\bcustom-built\b/i.test(text),
    message: 'Says "custom-built." House rule: "proprietary."',
  },
];

function walk(dir, extensions) {
  const files = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...walk(full, extensions));
    } else if (extensions.some((ext) => entry.endsWith(ext))) {
      files.push(full);
    }
  }
  return files;
}

// Every <img> must carry non-empty alt text (Section 5: "alt text required
// on every image; build fails without it"). Checks .astro, .mdx and .tsx
// files under src/, since images can appear in layouts/components too, not
// just content collections.
function checkImageAltText() {
  let imgFailures = 0;
  for (const file of walk(SRC_DIR, ['.astro', '.mdx', '.md', '.tsx', '.jsx'])) {
    const text = readFileSync(file, 'utf-8');
    const imgTags = text.match(/<img\b[^>]*>/gi) || [];
    for (const tag of imgTags) {
      const altMatch = tag.match(/\balt=(\{[^}]*\}|"[^"]*"|'[^']*')/i);
      const altValue = altMatch?.[1]?.replace(/^["'{]|["'}]$/g, '').trim();
      if (!altMatch || !altValue) {
        console.error(`✗ ${file}\n  [Missing alt text] Image tag has no non-empty alt attribute: ${tag}`);
        imgFailures += 1;
      }
    }
  }
  return imgFailures;
}

let failures = 0;

for (const file of walk(CONTENT_DIR, ['.mdx', '.md'])) {
  const text = readFileSync(file, 'utf-8');
  for (const rule of RULES) {
    if (rule.test(text)) {
      console.error(`✗ ${file}\n  [${rule.name}] ${rule.message}`);
      failures += 1;
    }
  }
  // Deliverable counts must carry "up to" — flag bare numbers next to "campaigns" or "posts"
  if (/\b\d+\s+(campaigns|posts|pages|landing pages)\b/i.test(text) && !/up to\s+\d+/i.test(text)) {
    console.error(`✗ ${file}\n  [Deliverable counts need "up to"] Found a bare count near "campaigns/posts/pages" with no "up to" nearby. Verify manually.`);
    failures += 1;
  }
}

failures += checkImageAltText();

if (failures > 0) {
  console.error(`\n${failures} house-rule violation(s) found. Build stopped.`);
  process.exit(1);
} else {
  console.log('Content lint passed — no house-rule violations found.');
}
