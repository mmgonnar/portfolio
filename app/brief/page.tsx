'use client';

import { BriefManager } from '@/features/brief/components/BriefManager';
import { Copyright } from '@/features/footer';
import { Logo } from '@/features/header';
import LanguageSwitcher from '@/features/header/components/language-switcher';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header id="header" className="mx-auto w-full max-w-7xl shrink-0">
        <div className="flex w-full items-center justify-between px-5 py-6 pb-4 md:px-10 md:py-5">
          <Logo />

          <div className="flex shrink-0 items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-start py-8 md:justify-center md:py-0">
        <div className="w-full max-w-5xl">
          <BriefManager />
        </div>
      </main>

      <footer className="mt-auto flex w-full justify-center border-t border-gray-100 py-6">
        <Copyright className="text-neutral-500" />
      </footer>
    </div>
  );
}
