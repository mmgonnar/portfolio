'use client';

import { BriefManager } from '@/features/brief/components/BriefManager';
import { useBriefStore } from '@/features/brief/store/useBriefStore';
import { Copyright } from '@/features/footer';
import { Logo } from '@/features/header';
import LanguageSwitcher from '@/features/header/components/language-switcher';
import { cn } from '@/utils/functions';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { currentStep, prevStep, nextStep, isStepValid } = useBriefStore();
  const { t } = useTranslation();

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

      <footer className="mt-auto w-full border-t border-gray-100 px-6 py-6 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-center md:grid-cols-3">
          {/* COLUMNA 1: BOTÓN ATRÁS (Oculto en Step 0) */}
          <div className="flex justify-start">
            {currentStep > 0 && (
              <button
                onClick={prevStep}
                className="font-mono text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-black"
              >
                [ ← {t('button.back')} ]
              </button>
            )}
          </div>

          {/* COLUMNA 2: COPYRIGHT (Oculto en móvil) */}
          <div className="hidden justify-center md:flex">
            <Copyright className="text-sm tracking-tighter text-neutral-700 uppercase" />
          </div>

          {/* COLUMNA 3: BOTÓN SIGUIENTE (Oculto en Step 0) */}
          <div className="flex justify-end">
            {currentStep > 0 && (
              <button
                onClick={nextStep}
                disabled={!isStepValid}
                className={cn(
                  'flex items-center gap-2 font-mono text-sm font-bold tracking-widest uppercase transition-colors',
                  isStepValid
                    ? 'hover:text-green-brutalist text-black'
                    : 'cursor-not-allowed text-gray-300',
                )}
              >
                [ {t('button.next')} → ]
              </button>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
