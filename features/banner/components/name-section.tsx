'use-client';

import { useTranslation } from 'react-i18next';

export default function NameSection() {
  const { t } = useTranslation();

  return (
    <div
      id="name-section"
      className="flex items-start md:m-auto md:items-center md:justify-center"
    >
      <div className="flex flex-col justify-center gap-3">
        <p className="text-3xl">{t('bannerText.helloWorld')}</p>
        <h1 className="custom-md:text-8xl max-w-3xl text-6xl font-black md:text-7xl">
          {t('data.name')}
        </h1>
        <h2 className="text-green-brutalist text-lg font-medium md:text-3xl">
          {t('data.profesion')}
        </h2>
      </div>
    </div>
  );
}
