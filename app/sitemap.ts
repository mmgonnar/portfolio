import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Solo las rutas reales del sitio: /, /web-design y /card.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/web-design`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/card`,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
