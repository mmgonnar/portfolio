'use client';

import { useTranslation } from 'react-i18next';
import { buttonActions } from '@/features/ui/utils/constants';
import { NeobrutalistButton, Logo, Navbar } from '../index';
import LanguageSwitcher from './language-switcher';

export default function Header() {
  const { t } = useTranslation();

  return (
    <section
      id="header"
      className="flex max-w-7xl items-center justify-between px-5 py-6 pb-4 md:px-10 md:py-5"
    >
      <Logo />
      <Navbar />
      <div className="custom-md:flex hidden shrink-0 items-center gap-3">
        <LanguageSwitcher />
        <NeobrutalistButton
          text={t(buttonActions[0].text)}
          className=""
          href={buttonActions[0].href}
        />
      </div>
    </section>
  );
}
