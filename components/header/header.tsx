'use client';

import Logo from './logo';

export default function Header() {
  return (
    <section className="flex justify-between p-4 md:px-10 md:py-8">
      <Logo />
      <div className="hidden md:block">Navbar</div>
      <div className="hidden md:block">button</div>
    </section>
  );
}
