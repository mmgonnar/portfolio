'use client';

import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/utils/functions';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const isSpanish = mounted && i18n.language?.startsWith('es');
  const isEnglish = mounted && i18n.language?.startsWith('en');

  return (
    <div className="flex min-w-fit items-center justify-end gap-1 font-mono">
      <Globe className="h-4 w-4 text-gray-400" />

      <button
        onClick={() => changeLanguage('es')}
        className={cn(
          'px-1 py-1 text-xs transition-colors md:text-sm',

          isSpanish ? 'text-green-brutalist font-bold' : 'text-gray-400 hover:text-black',
        )}
      >
        ES
      </button>

      <span className="text-gray-300">|</span>

      <button
        onClick={() => changeLanguage('en')}
        className={cn(
          'px-1 py-1 text-xs transition-colors md:text-sm',

          isEnglish ? 'text-green-brutalist font-bold' : 'text-gray-400 hover:text-black',
        )}
      >
        EN
      </button>
    </div>
  );
}
