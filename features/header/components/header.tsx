'use client';

import { useTranslation } from 'react-i18next';
import { buttonActions } from '@/features/ui/utils/constants';
import { NeobrutalistButton, Logo, Navbar } from '../index';
import LanguageSwitcher from './language-switcher';

export default function Header() {
  const { t } = useTranslation();

  return (
    <section className="max-w-8xl flex items-center justify-between px-5 py-6 md:px-10 md:py-8">
      <Logo />
      <Navbar />
      <div className="hidden flex-shrink-0 items-center gap-6 md:flex">
        <LanguageSwitcher />
        <NeobrutalistButton text={t(buttonActions[0].text)} className="" />
      </div>
    </section>
  );
}
