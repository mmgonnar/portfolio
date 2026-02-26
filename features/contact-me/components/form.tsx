'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import { api, ContactMessage } from '@/utils/api';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { formFields } from '../utils/constants';

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
    const data: ContactMessage = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      await api.sendContact(data);
      form.reset();
      toggleModal();
      alert('¡Mensaje enviado con éxito!');
    } catch (error) {
      console.error('Error sending form:', error);
      alert('Hubo un fallo al enviar. Revisa los datos.');
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

      <NeobrutalistButton
        className="w-full"
        text={loading ? t('button.sending') : t('button.submit')}
      />

      <p className="text-center text-neutral-400">{t('form.footerCopy')}</p>
    </form>
  );
}
