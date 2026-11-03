'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function BriefIntroDescription() {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // El titulo del hero es el unico h1 de la pagina: el tag decorativo de
  // arriba es un <p> para no colocar un heading por encima del h1. Los estilos
  // no cambian, las clases llevan toda la apariencia.
  if (!mounted) {
    return (
      <div className="mb-6 flex flex-col gap-4">
        <p className="text-green-brutalist text-md font-mono font-bold tracking-tighter md:text-base lg:text-lg">
          &lt; Brief /&gt;
        </p>

        <h1 className="max-w-3xl text-5xl leading-[1.1] font-bold tracking-tight text-black md:text-6xl lg:text-7xl" />

        <p className="max-w-2xl pt-2 text-base leading-relaxed text-gray-500 md:text-lg lg:text-xl" />
      </div>
    );
  }

  return (
    <div className="mb-6 flex flex-col gap-4">
      <p className="text-green-brutalist text-md font-mono font-bold tracking-tighter md:text-base lg:text-lg">
        {t('brief.tag')}
      </p>

      <h1 className="max-w-3xl text-5xl leading-[1.1] font-bold tracking-tight text-black md:text-6xl lg:text-7xl">
        {t('brief.title')}
        <span className="text-green-brutalist">{t('brief.titleAccent')}</span>.
      </h1>

      <p className="max-w-2xl pt-2 text-base leading-relaxed text-gray-500 md:text-lg lg:text-xl">
        {t('brief.description')}
      </p>
    </div>
  );
}
