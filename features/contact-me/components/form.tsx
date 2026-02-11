'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';

import { formFIelds } from '../utils/constants';
import { useTranslation } from 'react-i18next';

export default function Form() {
  const { t } = useTranslation();
  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
  };
  return (
    <form className="flex w-105 flex-col gap-8 p-4" onSubmit={handleSubmit}>
      <h5 className="text-neutral-700">{t('form.heading')}</h5>

      {formFIelds.map(field => (
        <Input
          key={t(field.name)}
          label={t(field.label)}
          id={field.name}
          type={field.type}
          placeholder={t(field.placeholder)}
        />
      ))}

      <NeobrutalistButton className="w-full" text="Submit" />
      <p className="text-center text-neutral-400">{t('form.footerCopy')}</p>
    </form>
  );
}
