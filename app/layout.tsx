import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LanguageProvider from '@/context/language-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'mmgonnar - portfolio',
  description: 'This web showcases my work as a Fullstack Web Developer',
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
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
