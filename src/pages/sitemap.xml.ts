import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET({ site }: { site: URL }) {
  const staticPaths = [
    '/',
    '/associacio/',
    '/associacio/organitzacio/',
    '/accio/',
    '/campanyes/',
    '/actualitat/',
    '/agenda/',
    '/participa/',
    '/transparencia/',
    '/contacte/',
    '/avis-legal/',
    '/privacitat/',
    '/accessibilitat/',
  ];

  const [actualitat, agenda, campanyes] = await Promise.all([
    getCollection('actualitat', ({ data }) => !data.draft),
    getCollection('agenda', ({ data }) => !data.draft),
    getCollection('campanyes', ({ data }) => !data.draft),
  ]);

  const paths = [
    ...staticPaths,
    ...actualitat.map((item) => `/actualitat/${item.id}/`),
    ...agenda.map((item) => `/agenda/${item.id}/`),
    ...campanyes.map((item) => `/campanyes/${item.id}/`),
  ];

  const urls = paths
    .map((path) => `<url><loc>${new URL(path, site).href}</loc></url>`)
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
