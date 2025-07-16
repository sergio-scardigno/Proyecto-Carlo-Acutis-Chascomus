import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carloacutis.net.ar'

  const pages = [
    '',
    '/entronizaciones',
    '/oracion',
    '/silencio-espera',
    '/testimonios',
    '/videos',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = pages.map((page) => ({
    url: `${baseUrl}/es${page}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: `${baseUrl}/en${page}`,
        es: `${baseUrl}/es${page}`,
      },
    },
  }));

  return sitemapEntries;
}
