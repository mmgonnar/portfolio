import BriefInput from '@/features/ui/components/brief-input';
import { useFormSync } from '@/hooks/useFormSync';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { StepTwoData, stepTwoSchema } from '../../utils/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import BriefTextArea from '../ui/brief-text-area';

export const StepProjectDetails = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepTwoData>({
    // ✅ Corregido: stepTwoSchema ya es el objeto, no una función
    resolver: zodResolver(stepTwoSchema),
    defaultValues: {
      projectName: formData.projectName,
      projectDescription: formData.projectDescription,
      hasExistingSite: formData.hasExistingSite,
      existingSiteUrl: formData.existingSiteUrl,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);
  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  const hasSite = watch('hasExistingSite');

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 flex w-full max-w-3xl flex-col gap-8">
      <BriefInput
        label={t('brief.steps.project.nameLabel')}
        placeholder={t('brief.steps.project.namePlaceholder')}
        error={errors.projectName?.message ? t(errors.projectName.message) : undefined}
        {...register('projectName')}
      />

      <BriefTextArea
        label={t('brief.steps.project.descriptionLabel')}
        placeholder={t('brief.steps.project.descriptionPlaceholder')}
        error={
          errors.projectDescription?.message ? t(errors.projectDescription.message) : undefined
        }
        {...register('projectDescription')}
      />

      {/* Aquí puedes usar un componente Toggle/Switch neobrutalista */}
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          {...register('hasExistingSite')}
          className="h-6 w-6 border-2 border-black"
        />
        <label className="font-mono text-sm uppercase">{t('brief.steps.project.hasSite')}</label>
      </div>

      {hasSite && (
        <BriefInput
          label={t('brief.steps.project.urlLabel')}
          placeholder="https://..."
          error={errors.existingSiteUrl?.message ? t(errors.existingSiteUrl.message) : undefined}
          {...register('existingSiteUrl')}
        />
      )}
    </div>
  );
};
