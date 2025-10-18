'use client';

import Link from 'next/link';
import { headerItems } from '../utils/constants';
import { useState } from 'react';
import { X } from 'lucide-react';
import Menu from './menu';
import { cn } from '@/utils/functions';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="hidden space-x-10 text-lg md:block">
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover-green-brutalist cursor-pointer font-mono text-xl transition-colors duration-200 hover:font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </nav>
      <button className="cursor-pointer" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav className={cn("bg-white border-t-1 border-neutral-200 absolute top-13 left-0 z-10 flex w-full transform flex-col items-center gap-2 py-2 shadow-md transition-all duration-200", !isMenuOpen && "hidden")}>
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover-green-brutalist text-lg p-3 cursor-pointer font-mono transition-colors duration-200 hover:font-semibold"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </>
  );
}
