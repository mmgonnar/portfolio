'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import { formFields } from '../utils/constants';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { api, ContactMessage } from '@/utils/api';

export default function Form() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setLoading(true);

    const formData = new FormData(evt.currentTarget);
    const data: ContactMessage = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      await api.sendContact(data);
      evt.currentTarget.reset();
    } catch (error) {
      console.error('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex w-105 flex-col gap-8 p-4" onSubmit={handleSubmit}>
      <h5 className="text-neutral-700">{t('form.heading')}</h5>

      {formFields.map(field => (
        <Input
          key={field.name}
          label={t(field.label)}
          id={field.name}
          type={field.type}
          placeholder={t(field.placeholder)}
          name={field.name}
        />
      ))}

      <NeobrutalistButton className="w-full" text="Submit" />

      <p className="text-center text-neutral-400">{t('form.footerCopy')}</p>
    </form>
  );
}
