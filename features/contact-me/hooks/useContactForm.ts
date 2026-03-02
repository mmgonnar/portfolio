import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '../utils/schema';
import { api } from '@/utils/api';
import { apiCallToast } from '@/utils/functions';
import { useTranslation } from 'react-i18next';

export const useContactForm = (onSuccess: () => void) => {
  const { t } = useTranslation();

  const formMethods = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    await apiCallToast(api.sendContact(data), {
      loading: t('toast.sending'),
      successMessage: t('toast.success_msg'),
      errorMessage: t('toast.error_msg'),
    });
    formMethods.reset();
    onSuccess();
  };

  return { ...formMethods, onSubmit, handleSubmit: formMethods.handleSubmit };
};
