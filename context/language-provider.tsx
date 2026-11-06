'use client';

import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../utils/i18n';

export default function LanguageProvider({ children }: { children: React.ReactNode }) {
  // El servidor no conoce el idioma del visitante y siempre manda lang="en";
  // aqui se corrige tras hidratar y en cada cambio de idioma. Vive en el
  // provider y no en el LanguageSwitcher porque este envuelve todas las
  // paginas, incluidas las que no muestran el switcher.
  useEffect(() => {
    const syncHtmlLang = (lng?: string) => {
      document.documentElement.lang = lng?.startsWith('es') ? 'es' : 'en';
    };

    i18n.changeLanguage();
    syncHtmlLang(i18n.language);
    i18n.on('languageChanged', syncHtmlLang);
    return () => {
      i18n.off('languageChanged', syncHtmlLang);
    };
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
