'use client';

import Logo from './logo';
import Navbar from './navbar';

export default function Header() {
  return (
    <section className="flex items-center justify-between p-4 md:px-10 md:py-8">
      <Logo />
      <Navbar />
      <button className="hidden md:block">Button here</button>
    </section>
  );
}
