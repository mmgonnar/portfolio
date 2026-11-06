import { enTranslations } from '@/utils/translations';

// Única fuente del dominio canónico: la leen metadata, sitemap y robots.
export const SITE_URL = 'https://mmgonnar.com';

// Los metadatos se resuelven en el servidor, antes de que i18next detecte el
// idioma del visitante, asi que usan la copia EN: el mismo idioma con el que
// el HTML llega del servidor (lang="en").
export const SITE_NAME = enTranslations.data.name;
export const SITE_TITLE = `${SITE_NAME} | Fullstack Web Developer`;
export const SITE_DESCRIPTION = enTranslations.bannerText.description;
