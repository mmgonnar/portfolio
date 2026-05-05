'use client';
import { cn } from '@/utils/functions';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

export default function Copyright({ className }: { className?: string }) {
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex">
      <div>
        <p className={cn('text-center font-mono text-neutral-50 opacity-40', className)}>
          {'Copyright'}
          {' \u00A9'} {new Date().getFullYear()} | {mounted ? t('data.name') : 'Mariela Gonzalez'}
        </p>
      </div>
    </div>
  );
}
