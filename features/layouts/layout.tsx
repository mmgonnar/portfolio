'use client';

import Header from '../header/components/header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto] px-5 py-6 md:px-10 md:py-8">
      <Header />
      <main className="h-full w-full">{children}</main>
      <footer></footer>
    </div>
  );
}
