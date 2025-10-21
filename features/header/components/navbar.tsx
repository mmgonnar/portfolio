'use client';

import Link from 'next/link';
import { headerItems } from '../utils/constants';
import { useState } from 'react';
import { X } from 'lucide-react';
import Menu from './menu';
import { cn } from '@/utils/functions';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <>
      <nav className="hidden space-x-10 text-base md:flex">
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover-green-brutalist cursor-pointer font-mono text-lg transition-colors duration-200 hover:font-semibold"
          >
            {t(item.name)}
          </Link>
        ))}
      </nav>
      <button className="block cursor-pointer md:hidden" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      <nav
        className={cn(
          'border-t-1 top-13 absolute left-0 z-10 flex w-full transform flex-col items-center gap-2 border-neutral-200 bg-white py-2 shadow-md transition-all duration-200',
          !isMenuOpen && 'hidden'
        )}
      >
        {headerItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover-green-brutalist hover:border-b-1 cursor-pointer p-3 font-mono text-lg transition-colors duration-200 hover:font-semibold"
          >
            {t(item.name)}
          </Link>
        ))}
      </nav>
    </>
  );
}
