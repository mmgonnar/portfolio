'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';

import { NeobrutalistButton } from '@/features/footer';
import { StepOneData, stepOneSchema } from '../../utils/validation';
import BriefInput from '@/features/ui/components/brief-input';
import { useEffect } from 'react';

export const StepPersonalData = () => {
  const { t } = useTranslation();
  const { formData, updateField, nextStep } = useBriefStore();

  const {
    register,
    handleSubmit,
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

  const setStepValid = useBriefStore(state => state.setStepValid);
  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  const onSubmit = (data: StepOneData) => {
    updateField('name', data.name);
    updateField('email', data.email);
    updateField('company', data.company || '');
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="animate-in fade-in slide-in-from-bottom-4 flex w-full max-w-5xl flex-col gap-12 px-6 py-10"
    >
      <div className="space-y-4">
        <BriefInput
          id=""
          label={t('brief.steps.step1.name')}
          placeholder={t('brief.steps.step1.namePlaceholder')}
          error={errors.name?.message}
          {...register('name')}
        />

        <BriefInput
          id=""
          label={t('brief.steps.step1.email')}
          placeholder={t('brief.steps.step1.emailPlaceholder')}
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <BriefInput
          id=""
          label={t('brief.steps.step1.project')}
          placeholder={t('brief.steps.step1.projectPlaceholder')}
          error={errors.company?.message}
          {...register('company')}
        />
      </div>
    </form>
  );
};
