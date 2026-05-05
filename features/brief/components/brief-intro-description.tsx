'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function BriefIntroDescription() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mb-6 flex flex-col gap-4">
        <h6 className="text-green-brutalist text-md font-mono font-bold tracking-tighter md:text-base lg:text-lg">
          &lt; Brief /&gt;
        </h6>

        <h5 className="max-w-3xl text-5xl leading-[1.1] font-bold tracking-tight text-black md:text-6xl lg:text-7xl" />

        <p className="max-w-2xl pt-2 text-base leading-relaxed text-gray-500 md:text-lg lg:text-xl" />
      </div>
    );
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      <h6 className="text-green-brutalist text-md font-mono font-bold tracking-tighter md:text-base lg:text-lg">
        {t('brief.tag')}
      </h6>

      <h5 className="max-w-3xl text-5xl leading-[1.1] font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
        {t('brief.title')}
        <span className="text-green-brutalist">{t('brief.titleAccent')}</span>.
      </h5>

      <p className="max-w-2xl pt-2 text-base leading-relaxed text-gray-500 md:text-lg lg:text-xl">
        {t('brief.description')}
      </p>
    </div>
  );
}
