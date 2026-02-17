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
        <p className="font-mono text-2xl">{t('bannerText.helloWorld')}</p>
        <h1 className="custom-md:text-7xl max-w-3xl text-6xl font-black md:text-6xl lg:text-7xl">
          {t('data.name')}
        </h1>
        <h2 className="text-green-brutalist custom-md:text-3xl font-mono text-lg font-medium lg:text-2xl">
          {t('data.profesion')}
        </h2>
      </div>
    </div>
  );
}
