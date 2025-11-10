'use-client';

import { t } from 'i18next';

export default function NameSection() {
  return (
    <div className="flex items-start md:m-auto md:items-center md:justify-center">
      <div className="flex flex-col justify-center gap-3">
        <p className="text-3xl">{t('bannerText.helloWorld')}</p>
        <h1 className="max-w-3xl text-5xl font-black md:text-8xl">
          {t('data.name')}
        </h1>
        <h2 className="text-lg font-medium text-green-brutalist  md:text-3xl">
          {t('data.profesion')}
        </h2>
      </div>
    </div>
  );
}
