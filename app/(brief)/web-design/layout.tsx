import type { Metadata } from 'next';
import { enTranslations } from '@/utils/translations';

export const metadata: Metadata = {
  // El texto visible de brief.tag es '< Web Project Brief />'; el title lo usa
  // sin la decoracion de angulos, que en un <title> solo mete ruido.
  title: 'Web Project Brief',
  description: enTranslations.brief.description,
  alternates: {
    canonical: '/web-design',
  },
};

// Existe solo para portar los metadatos del segmento: la pagina es un client
// component y no puede exportarlos.
export default function WebDesignLayout({ children }: { children: React.ReactNode }) {
  return children;
}
