'use client';

import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { cn } from '@/utils/functions';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="custom-lg:flex custom-md:block hidden items-center justify-end gap-1 font-mono">
      <Globe className="h-4 w-4 text-gray-600" />
      <button
        onClick={() => changeLanguage('es')}
        className={cn(
          'font-mono text-sm transition-colors',
          i18n.language === 'es'
            ? 'font-semibold text-green-600'
            : 'text-gray-600 hover:text-gray-800'
        )}
      >
        ES
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={cn(
          'px-2 py-1 font-mono text-sm transition-colors',
          i18n.language === 'en'
            ? 'font-semibold text-green-600'
            : 'text-gray-600 hover:text-gray-800'
        )}
      >
        EN
      </button>
    </div>
  );
}
