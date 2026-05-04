'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { StepOneData, stepOneSchema } from '../../utils/validation';
import BriefInput from '@/features/ui/components/brief-input';
import { useEffect, useRef } from 'react';

export const StepPersonalData = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepOneData>({
    resolver: zodResolver(stepOneSchema),
    defaultValues: {
      name: formData.name,
      email: formData.email,
      company: formData.company,
    },
    mode: 'onChange',
  });

  // 1. Sincronizar validez (esto está bien)
  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  // 2. VIGILANCIA INTELIGENTE:
  // Usamos watch pero solo actualizamos si hay una diferencia real con el Store
  const watchedName = watch('name');
  const watchedEmail = watch('email');
  const watchedCompany = watch('company');

  useEffect(() => {
    if (watchedName !== formData.name) {
      updateField('name', watchedName || '');
    }
  }, [watchedName, formData.name, updateField]);

  useEffect(() => {
    if (watchedEmail !== formData.email) {
      updateField('email', watchedEmail || '');
    }
  }, [watchedEmail, formData.email, updateField]);

  useEffect(() => {
    if (watchedCompany !== formData.company) {
      updateField('company', watchedCompany || '');
    }
  }, [watchedCompany, formData.company, updateField]);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex w-full max-w-5xl flex-col gap-12 px-6 py-10">
      <div className="space-y-4">
        <BriefInput
          label={t('brief.steps.step1.name')}
          placeholder={t('brief.steps.step1.namePlaceholder')}
          error={errors.name?.message}
          {...register('name')}
        />

        <BriefInput
          label={t('brief.steps.step1.email')}
          placeholder={t('brief.steps.step1.emailPlaceholder')}
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <BriefInput
          label={t('brief.steps.step1.project')}
          placeholder={t('brief.steps.step1.projectPlaceholder')}
          error={errors.company?.message}
          {...register('company')}
        />
      </div>
    </div>
  );
};
