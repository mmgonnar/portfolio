'use client';

import Footer from '../footer/components/footer';
import Header from '../header/components/header';
import { FooterDropdrawer } from '../ui/components/footer-dropdrawer';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="h-full w-full">{children}</main>
      <FooterDropdrawer />
      <Footer />
    </div>
  );
}
