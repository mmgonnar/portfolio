import type { Metadata } from 'next';

// Sin esto /card heredaria el canonical '/' del layout raiz y se declararia
// duplicado de la home ante los buscadores.
export const metadata: Metadata = {
  alternates: {
    canonical: '/card',
  },
};

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children;
}
