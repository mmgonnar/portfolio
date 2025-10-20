'use client';

import NeobrutalistButton from '@/features/ui/components/neobrutalist-button';
import Logo from './logo';
import Navbar from './navbar';

export default function Header() {
  return (
    <section className="max-w-8xl flex items-center justify-between p-4 md:px-10 md:py-8">
      <Logo />
      <Navbar />
      <NeobrutalistButton text="switch design" className="hidden md:block" />
    </section>
  );
}
