export async function GET() {
  const site = import.meta.env.SITE ?? 'https://maninthemirror.github.io';
  const base = import.meta.env.BASE_URL ?? '/mj543/';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const sitemap = new URL(`${normalizedBase}sitemap.xml`, site).toString();

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}

