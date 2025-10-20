'use client';

import { NeobrutalistButton, Logo, Navbar } from '../index';

export default function Header() {
  return (
    <section className="max-w-8xl flex items-center justify-between p-4 md:px-10 md:py-8">
      <Logo />
      <Navbar />
      <NeobrutalistButton text="switch design" className="hidden md:block" />
    </section>
  );
}
