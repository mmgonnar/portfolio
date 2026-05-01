'use client';
import { cn } from '@/utils/functions';
import { useTranslation } from 'react-i18next';

export default function Copyright({ className }: { className?: string }) {
  const { t } = useTranslation();

  return (
    <div className="flex">
      <div>
        <p className={cn('text-center font-mono text-neutral-50 opacity-40', className)}>
          {'Copyright'}
          {' \u00A9'} {new Date().getFullYear()} | {t('data.name')}
        </p>
      </div>
    </div>
  );
}
