import 'dotenv/config';
import { fal } from '@fal-ai/client';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

fal.config({ credentials: process.env.FAL_KEY });

// Screens keep rendering as stock-trading-chart dashboards regardless of
// negative prompting (tried twice). Pivoting to screen-free concepts using
// the same self-storage photography style already working cleanly elsewhere
// on the site, instead of generic office/tech imagery.
const NEGATIVE = 'no readable text, no legible numbers, no charts, no graphs, no signage with words, no logos, no watermarks';

const CLIPS = [
  {
    name: 'ai-engine-work',
    imagePrompt: `Photorealistic close-up of a self-storage facility keypad gate entry system at dusk, soft blue LED glow, a hand entering a code, the facility gate and roll-up doors softly blurred in the background, cinematic lighting. ${NEGATIVE}`,
    videoPrompt: 'Subtle natural motion as the hand enters the code and the gate begins to slide open, soft blue LED glow flickers gently, slow shallow-depth-of-field drift.',
  },
  {
    name: 'report-review',
    imagePrompt: `Photorealistic shot of a moving box being loaded into the trunk of a car parked outside an open self-storage unit in daylight, hands carrying the box, clean modern facility exterior softly blurred in the background. ${NEGATIVE}`,
    videoPrompt: 'Gentle natural motion as the box is set down into the trunk, subtle handheld-feel camera drift, soft daylight shifts naturally.',
  },
];

for (const clip of CLIPS) {
  console.log(`\n=== ${clip.name} ===`);
  console.log('Generating still...');
  const imgResult = await fal.subscribe('fal-ai/flux/dev', {
    input: { prompt: clip.imagePrompt, image_size: 'landscape_4_3', num_images: 1 },
    logs: false,
  });
  const imgUrl = imgResult.data.images[0].url;
  const imgResp = await fetch(imgUrl);
  const imgBuf = Buffer.from(await imgResp.arrayBuffer());
  writeFileSync(join(process.cwd(), 'public', 'generated', `${clip.name}.jpg`), imgBuf);
  console.log('Still saved.');

  console.log('Uploading still for animation...');
  const uploadUrl = await fal.storage.upload(new Blob([imgBuf], { type: 'image/jpeg' }));

  console.log('Generating video (this takes a few minutes)...');
  const vidResult = await fal.subscribe('fal-ai/kling-video/v1.6/standard/image-to-video', {
    input: { prompt: clip.videoPrompt, image_url: uploadUrl, duration: '5' },
    logs: false,
    onQueueUpdate: (u) => {
      if (u.status === 'IN_PROGRESS') process.stdout.write('.');
    },
  });
  const vidUrl = vidResult.data.video.url;
  const vidResp = await fetch(vidUrl);
  const vidBuf = Buffer.from(await vidResp.arrayBuffer());
  writeFileSync(join(process.cwd(), 'public', 'generated', `${clip.name}.mp4`), vidBuf);
  console.log(`\n${clip.name}.mp4 saved.`);
}

console.log('\nAll clips done.');
