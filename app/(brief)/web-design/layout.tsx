import type { Metadata } from 'next';
import { SITE_NAME } from '@/lib/site';
import { enTranslations } from '@/utils/translations';

// El texto visible de brief.tag es '< Web Project Brief />'; el title lo usa
// sin la decoracion de angulos, que en un <title> solo mete ruido.
const pageTitle = 'Web Project Brief';

export const metadata: Metadata = {
  title: pageTitle,
  description: enTranslations.brief.description,
  alternates: {
    canonical: '/web-design',
  },
  // openGraph no se fusiona en profundidad con el del layout raiz, se
  // reemplaza completo, por eso se repiten type y siteName.
  openGraph: {
    type: 'website',
    url: '/web-design',
    siteName: SITE_NAME,
    title: `${pageTitle} | ${SITE_NAME}`,
    description: enTranslations.brief.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageTitle} | ${SITE_NAME}`,
    description: enTranslations.brief.description,
  },
};

// Existe solo para portar los metadatos del segmento: la pagina es un client
// component y no puede exportarlos.
export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
