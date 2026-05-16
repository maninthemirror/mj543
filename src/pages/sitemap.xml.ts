import { getCollection } from 'astro:content';

const staticPaths = ['/', '/about/'];

export async function GET() {
  const site = import.meta.env.SITE ?? 'https://maninthemirror.github.io';
  const base = import.meta.env.BASE_URL ?? '/mj543/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  const posts = await getCollection('posts', ({ data }) => !data.draft);

  const entries = [
    ...staticPaths.map((path) => ({
      loc: new URL(`${normalizedBase}${path.replace(/^\//, '')}`, site).toString(),
      lastmod: null as string | null,
    })),
    ...posts.map((post) => ({
      loc: new URL(`${normalizedBase}${post.id.replace(/\.mdx?$/, '')}/`, site).toString(),
      lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString(),
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`,
  )
  .join('\n')}
</urlset>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}

