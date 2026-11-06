import type { Metadata } from 'next';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE } from '@/lib/site';

// Sin esto /card heredaria el canonical '/' del layout raiz y se declararia
// duplicado de la home ante los buscadores.
export const metadata: Metadata = {
  alternates: {
    canonical: '/card',
  },
  // openGraph no se fusiona en profundidad con el del layout raiz, se
  // reemplaza completo, por eso se repite todo el bloque con la url propia.
  openGraph: {
    type: 'website',
    url: '/card',
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
