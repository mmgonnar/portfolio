'use client';

import Link from 'next/link';
import { headerItems } from '../utils/constants';
import { useTranslation } from 'react-i18next';
import { FooterDropdrawer } from '@/features/ui/components/footer-dropdrawer';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  if (!mounted) {
    return (
      <div className="flex">
        <nav className="custom-md:hidden hidden shrink-0 space-x-10 text-base md:flex lg:flex">
          {headerItems.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className="hover-green-brutalist shrink-0 cursor-pointer font-mono text-base transition-colors duration-200 hover:font-semibold"
            >
              ...
            </Link>
          ))}
        </nav>
        <div className="block md:hidden">
          <FooterDropdrawer toggleMenu={toggleMenu} />
        </div>
      </div>
    );
  }

  return (
    <div className="flex">
      {/* Desktop Navigation */}
      <nav className="custom-md:hidden hidden shrink-0 space-x-10 text-base md:flex lg:flex">
        {headerItems.map(item => (
          <Link
            target={item.external ? '_blank' : undefined}
            key={item.name}
            href={item.href}
            className="hover-green-brutalist shrink-0 cursor-pointer font-mono text-base transition-colors duration-200 hover:font-semibold"
          >
            {t(item.name)}
          </Link>
        ))}
      </nav>

      {/* Mobile Navigation using FooterDropdrawer */}
      <div className="block md:hidden">
        <FooterDropdrawer toggleMenu={toggleMenu} />
      </div>
    </div>
  );
}
