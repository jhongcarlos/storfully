import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
  const pages = await getCollection('pages');
  const services = await getCollection('services');
  const playbook = await getCollection('playbook');
  const glossary = await getCollection('glossary');

  const lines: string[] = [
    '# Storfully',
    '',
    '> Fixed monthly marketing packages for independent self-storage owners, priced per',
    "  facility and powered by Core, Agile & Co's proprietary AI engine.",
    '',
    '## Packages',
    '- 5x5, from $500/month: Google Business Profile, local SEO, reviews, rank tracking.',
    '- 10x10, from $1,000/month: adds Google Ads, a landing page, move-in attribution.',
    '- 10x20, from $1,500/month: adds Meta Ads, more landing pages, lease-up mode.',
    '',
    '## Pages',
    ...pages.map(
      (p) =>
        `- [${p.data.title}](https://storfully.com/${p.slug === 'home' ? '' : p.slug.replace('packages-', 'packages/')})`
    ),
    '',
    '## Services',
    ...services.map((s) => `- [${s.data.title}](https://storfully.com/services/${s.slug})`),
    '',
    '## Playbook (priority order)',
    ...playbook.map((a) => `- [${a.data.title}](https://storfully.com/playbook/${a.slug})`),
    '',
    '## Glossary',
    ...glossary.map((g) => `- [${g.data.term}](https://storfully.com/playbook/glossary/${g.slug})`),
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
