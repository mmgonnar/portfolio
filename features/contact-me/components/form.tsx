'use client';

import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import { useTranslation } from 'react-i18next';
import { useContactForm } from '../hooks/useContactForm';
import { formFields } from '../utils/constants';
import { ContactFormData } from '../utils/schema';

export default function Form({ toggleModal }: { toggleModal: () => void }) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    onSubmit,
    formState: { errors, isSubmitting },
  } = useContactForm(toggleModal);

  const handleFormSubmit = (data: ContactFormData) => {
    console.log('📝 FORM - Form submitted with data:', data);
    onSubmit(data);
  };

  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="mb-4 flex flex-col gap-4 p-4 md:w-105"
    >
      <h5 className="text-neutral-700">{t('form.heading')}</h5>
      {formFields.map(field => (
        <div key={field.name} className="relative mb-4">
          <Input
            id={field.name}
            label={t(field.label)}
            type={field.type}
            placeholder={t(field.placeholder)}
            {...register(field.name as any)}
          />
          {errors[field.name as keyof ContactFormData] && (
            <p className="absolute left-1 mt-[6px] text-xs font-bold text-red-500">
              {t(errors[field.name as keyof ContactFormData]?.message as string)}
            </p>
          )}
        </div>
      ))}
      <NeobrutalistButton
        type="submit"
        className="mt-2 w-full"
        text={isSubmitting ? t('button.sending') : t('button.submit')}
        disabled={isSubmitting}
      />
    </form>
  );
}
