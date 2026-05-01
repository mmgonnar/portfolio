'use client';

import BriefInput from '@/features/ui/components/brief-input';
import { useTranslation } from 'react-i18next';

export default function BriefIntroCards() {
  const { t } = useTranslation();

  const stepKeys = ['one', 'two', 'three', 'four', 'five'];

  const stepNumbers = ['01', '02', '03', '04', '05'];

  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 border-t border-l border-gray-200 sm:grid-cols-3 md:grid-cols-5">
        {stepKeys.map((key, index) => (
          <div
            key={key}
            className="group flex flex-col gap-3 border-r border-b border-gray-200 p-8 transition-colors hover:bg-gray-50"
          >
            <span className="text-green-brutalist font-mono text-sm font-bold">
              {stepNumbers[index]}
            </span>

            <h3 className="text-xl font-bold tracking-tight text-black uppercase">
              {t(`brief.steps.0.${key}.title`)}
            </h3>

            <p className="text-sm leading-snug text-gray-400">{t(`brief.steps.0.${key}.desc`)}</p>
          </div>
        ))}
      </div>
      <BriefInput label="dasda" id="asdad" name="sfasfsa" />
    </div>
  );
}
