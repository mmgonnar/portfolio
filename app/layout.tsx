import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import LanguageProvider from '@/context/language-provider';
import { SITE_URL } from '@/lib/site';
import { enTranslations } from '@/utils/translations';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

// Los metadatos se resuelven en el servidor, antes de que i18next detecte el
// idioma del visitante, asi que usan la copia EN: el mismo idioma con el que
// el HTML llega del servidor (lang="en").
const siteTitle = `${enTranslations.data.name} | Fullstack Web Developer`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${enTranslations.data.name}`,
  },
  description: enTranslations.bannerText.description,
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider> <Toaster />
      </body>
    </html>
  );
}
