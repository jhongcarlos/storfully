// One-off generation run: produces the approved shot list via fal.ai and
// saves results into public/generated/. Not part of the build.
import 'dotenv/config';
import { fal } from '@fal-ai/client';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

fal.config({ credentials: process.env.FAL_KEY });

const OUT_DIR = join(process.cwd(), 'public', 'generated');
mkdirSync(OUT_DIR, { recursive: true });

const NEGATIVE = 'no readable text, no signage text, no logos, no brand names, no watermarks, no people\'s faces looking at camera unless natural candid';

const IMAGES = [
  {
    name: 'hero-exterior',
    prompt: `Wide photorealistic exterior shot of a modern independent self-storage facility, clean metal roll-up doors in a neutral color, golden hour sunlight, blue sky, a few parked cars, well-maintained landscaping, professional real estate photography style. ${NEGATIVE}`,
  },
  {
    name: 'package-5x5',
    prompt: `Photorealistic interior of a small clean self-storage unit, neatly stacked cardboard boxes and a few household items, soft overhead lighting, concrete floor, roll-up door partially visible. ${NEGATIVE}`,
  },
  {
    name: 'package-10x10',
    prompt: `Photorealistic interior of a mid-size self-storage unit, furniture like a couch and dresser wrapped in moving blankets, boxes stacked neatly, bright unit lighting. ${NEGATIVE}`,
  },
  {
    name: 'package-10x20',
    prompt: `Photorealistic large self-storage drive-up unit with the roll-up door open, a car partially pulled up to it, boxes and furniture visible inside, daylight exterior. ${NEGATIVE}`,
  },
  {
    name: 'service-google-business-profile',
    prompt: `Photorealistic street-level view of a self-storage facility entrance and office, clean modern signage shapes without readable text, blue accent color trim, daytime. ${NEGATIVE}`,
  },
  {
    name: 'service-local-seo',
    prompt: `Photorealistic aerial drone view of a self-storage facility complex within a suburban neighborhood, rows of storage buildings, roads and trees visible, daytime. ${NEGATIVE}`,
  },
  {
    name: 'service-google-ads',
    prompt: `Photorealistic candid photo of a person looking at their phone outside a self-storage facility, checking a map or search results, casual clothing, daytime, shallow depth of field. ${NEGATIVE}`,
  },
  {
    name: 'service-meta-ads',
    prompt: `Photorealistic row of covered boat and RV storage spaces at a self-storage facility, several RVs and a boat parked under a metal canopy structure, daytime. ${NEGATIVE}`,
  },
  {
    name: 'service-reviews',
    prompt: `Photorealistic candid photo of a friendly facility manager at a self-storage office front desk, smiling naturally while talking with a customer, warm indoor lighting. ${NEGATIVE}`,
  },
  {
    name: 'service-facility-websites',
    prompt: `Photorealistic close-up of a hand holding a smartphone showing a clean minimal app interface with blue accent color, blurred self-storage facility in the background, daytime. ${NEGATIVE}`,
  },
  {
    name: 'about-team',
    prompt: `Photorealistic candid photo of a small marketing team of three people collaborating around a laptop in a modern bright office, casual professional attire, natural lighting. ${NEGATIVE}`,
  },
];

const results = [];

for (const img of IMAGES) {
  process.stdout.write(`Generating ${img.name}... `);
  try {
    const result = await fal.subscribe('fal-ai/flux/dev', {
      input: {
        prompt: img.prompt,
        image_size: 'landscape_16_9',
        num_images: 1,
      },
      logs: false,
    });
    const url = result.data.images[0].url;
    const resp = await fetch(url);
    const buf = Buffer.from(await resp.arrayBuffer());
    const ext = url.split('.').pop().split('?')[0];
    const filename = `${img.name}.${ext}`;
    writeFileSync(join(OUT_DIR, filename), buf);
    console.log(`OK -> ${filename}`);
    results.push({ name: img.name, filename, status: 'ok' });
  } catch (err) {
    console.log(`FAILED: ${err?.message || err}`);
    results.push({ name: img.name, status: 'failed', error: err?.message || String(err) });
  }
}

console.log('\n=== Summary ===');
console.log(JSON.stringify(results, null, 2));
