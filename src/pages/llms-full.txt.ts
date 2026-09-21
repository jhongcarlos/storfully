import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const collections = await Promise.all([
    getCollection('pages'),
    getCollection('services'),
    getCollection('playbook'),
  ]);

  const sections = collections.flat().map((entry) => {
    return [
      `# ${entry.data.title}`,
      '',
      entry.body ?? '',
      '',
      '---',
      '',
    ].join('\n');
  });

  return new Response(sections.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
