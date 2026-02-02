'use client';

import { headerItems } from '@/features/header/utils/constants';
import {
  DropDrawer,
  DropDrawerContent,
  DropDrawerItem,
  DropDrawerTrigger,
  DropDrawerSub,
  DropDrawerSubTrigger,
  DropDrawerSubContent,
} from './dropdrawer/dropdrawer';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { Menu } from '@/features/header';
import i18n from '@/utils/i18n';
import { changeLanguage } from 'i18next';
import React from 'react';

export function FooterDropdrawer() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const handleLanguageChange = () => {
    // const [isOpen, setIsOpen] = React.useState(false);
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLanguage);
  };

  // const changeLanguage = (lng: string) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <DropDrawer>
      <DropDrawerTrigger asChild className="">
        <button className="fixed right-6 bottom-6 block cursor-pointer rounded-full bg-white shadow hover:shadow-sm md:hidden">
          <Menu className="h-10 w-10" />
        </button>
      </DropDrawerTrigger>
      <DropDrawerContent>
        {headerItems.map(item => (
          <DropDrawerItem
            key={item.name}
            className="hover-green-brutalist cursor-pointer p-3 font-mono text-lg transition-colors duration-200 hover:border-b-1 hover:font-semibold"
          >
            <Link href={item.href}>{t(item.name)}</Link>
          </DropDrawerItem>
        ))}
        <DropDrawerSub>
          <DropDrawerSubTrigger className="hover-green-brutalist cursor-pointer p-3 font-mono text-lg transition-colors duration-200 hover:border-b-1 hover:font-semibold">
            {t('language.changeLanguage')}
          </DropDrawerSubTrigger>
          <DropDrawerSubContent>
            <DropDrawerItem
              className="hover-green-brutalist cursor-pointer p-3 font-mono text-lg transition-colors duration-200 hover:border-b-1 hover:font-semibold"
              onClick={handleLanguageChange}
            >
              {currentLanguage === 'es' ? t('language.en') : t('language.es')}
            </DropDrawerItem>
          </DropDrawerSubContent>
        </DropDrawerSub>
      </DropDrawerContent>
    </DropDrawer>
  );
}
