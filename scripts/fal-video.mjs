import 'dotenv/config';
import { fal } from '@fal-ai/client';
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

fal.config({ credentials: process.env.FAL_KEY });

const heroPath = join(process.cwd(), 'public', 'generated', 'hero-exterior.jpg');
const file = new Blob([readFileSync(heroPath)], { type: 'image/jpeg' });

console.log('Uploading hero still to fal storage...');
const imageUrl = await fal.storage.upload(file);
console.log('Uploaded:', imageUrl);

console.log('Requesting image-to-video generation (this can take a couple minutes)...');
const result = await fal.subscribe('fal-ai/kling-video/v1.6/standard/image-to-video', {
  input: {
    prompt:
      'Slow, subtle cinematic push-in on the self-storage facility exterior, gentle camera movement, no added text, no logos, no signage appearing.',
    image_url: imageUrl,
    duration: '5',
  },
  logs: true,
  onQueueUpdate: (update) => {
    if (update.status === 'IN_PROGRESS') {
      console.log('...still generating');
    }
  },
});

const videoUrl = result.data.video.url;
console.log('Video URL:', videoUrl);
const resp = await fetch(videoUrl);
const buf = Buffer.from(await resp.arrayBuffer());
writeFileSync(join(process.cwd(), 'public', 'generated', 'hero-exterior.mp4'), buf);
console.log('Saved hero-exterior.mp4');
