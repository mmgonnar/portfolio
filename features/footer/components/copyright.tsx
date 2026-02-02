'use client';
import { useTranslation } from 'react-i18next';

export default function Copyright() {
  const { t } = useTranslation();

  return (
    <div className="flex">
      <div>
        <p className="text-center font-mono text-neutral-50 opacity-40">
          {'Copyright'}
          {' \u00A9'} {new Date().getFullYear()} | {t('data.name')}
        </p>
      </div>
      <div></div>
    </div>
  );
}
