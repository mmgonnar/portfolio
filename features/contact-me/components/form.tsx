'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import { api, ContactMessage } from '@/utils/api';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formFields } from '../utils/constants';
import { apiCallToast } from '@/utils/functions';
import { contactSchema } from '@/utils/schema';
import toast from 'react-hot-toast';

interface FormProps {
  toggleModal: () => void;
}

export default function Form({ toggleModal }: FormProps) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    setLoading(true);

    const formData = new FormData(evt.currentTarget);
    const rawData = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
      phone_extension: formData.get('phone_extension'),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      const firstError = result.error.issues[0];
      toast.error(t(firstError.message));
      return;
    }

    const validatedData = result.data;
    // const data: ContactMessage = {
    //   name: formData.get('name') as string,
    //   email: formData.get('email') as string,
    //   message: formData.get('message') as string,
    //   phone_extension: (formData.get('phone_extension') as string) || '',
    // };

    try {
      await apiCallToast(api.sendContact(validatedData), {
        loading: t('toast.sending'),
        successMessage: t('toast.success_msg'),
        errorMessage: t('toast.error_msg'),
      });
      form.reset();
      toggleModal();
    } catch (error) {
      console.error('Error sending form:', error);
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
          required
        />
      ))}
      <div
        className="absolute -z-1 h-0 w-0 overflow-hidden opacity-0"
        aria-hidden="true"
      >
        <input
          type="text"
          name="phone_extension"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <NeobrutalistButton
        className="w-full"
        text={loading ? t('button.sending') : t('button.submit')}
      />

      <p className="text-center text-neutral-400">{t('form.footerCopy')}</p>
    </form>
  );
}
