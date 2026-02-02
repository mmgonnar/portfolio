'use client';
import { t } from 'i18next';

export default function Copyright() {
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
