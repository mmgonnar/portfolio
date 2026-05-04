'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { StepOneData, stepOneSchema } from '../../utils/validation';
import BriefInput from '@/features/ui/components/brief-input';
import { useEffect, useRef } from 'react';
import { useFormSync } from '@/hooks/useFormSync';

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
      phone: formData.phone,
      company: formData.company,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex w-full max-w-5xl flex-col gap-12 px-6 py-10">
      <div className="space-y-4">
        <BriefInput
          label={t('brief.steps.step1.name')}
          placeholder={t('brief.steps.step1.namePlaceholder')}
          error={errors.name?.message ? t(errors.name.message) : undefined}
          {...register('name')}
        />
        <BriefInput
          label={t('brief.steps.step1.project')}
          placeholder={t('brief.steps.step1.projectPlaceholder')}
          error={errors.company?.message ? t(errors.company.message) : undefined}
          {...register('company')}
        />

        <div className="flex flex-col gap-10 sm:flex-row">
          <BriefInput
            label={t('brief.steps.step1.email')}
            placeholder={t('brief.steps.step1.emailPlaceholder')}
            type="email"
            error={errors.email?.message ? t(errors.email.message) : undefined}
            {...register('email')}
          />
          <BriefInput
            label={t('brief.steps.step1.phone')}
            placeholder={t('brief.steps.step1.phonePlaceholder')}
            error={errors.phone?.message ? t(errors.phone.message) : undefined}
            {...register('phone')}
          />
        </div>
      </div>
    </div>
  );
};
