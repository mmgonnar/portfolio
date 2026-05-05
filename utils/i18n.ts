import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslations, esTranslations } from './translations';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: enTranslations,
  },
  es: {
    translation: esTranslations,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    detection: {
      order: ['navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
