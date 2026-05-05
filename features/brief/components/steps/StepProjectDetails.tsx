'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { cn } from '@/utils/functions';
import BriefContainer from '../ui/brief-container';
import BriefInput from '@/features/ui/components/brief-input';
import BriefTextArea from '../ui/brief-text-area'; // Asegúrate de importar tu nuevo componente
import { StepTwoData, stepTwoSchema } from '../../utils/validation';
import { useForm } from 'react-hook-form';
import { useFormSync } from '@/hooks/useFormSync';
import { zodResolver } from '@hookform/resolvers/zod';

export const StepProjectDetails = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const minLength = 50;

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepTwoData>({
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

  const hasExistingSite = watch('hasExistingSite');
  const description = watch('projectDescription') || '';

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black">
          {t('brief.steps.step3.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step3.description')}</p>
      </div>

      <div className="space-y-6 pt-4">
        <BriefInput
          label={t('brief.steps.step3.projectName')}
          placeholder={t('brief.steps.step1.projectPlaceholder')}
          error={errors.projectName?.message ? t(errors.projectName.message) : undefined}
          {...register('projectName')}
        />

        <div className="space-y-2">
          <BriefTextArea
            label={t('brief.steps.step3.projectDescription')}
            placeholder={t('brief.steps.step3.projectPlaceholder')}
            error={
              errors.projectDescription?.message ? t(errors.projectDescription.message) : undefined
            }
            {...register('projectDescription')}
          />

          <div className="flex justify-start">
            <p
              className={cn(
                'font-mono text-[10px] tracking-widest uppercase transition-colors',
                description.length >= minLength ? 'font-bold text-green-600' : 'text-gray-400',
              )}
            >
              {description.length} / {minLength} {t('brief.steps.step3.counter')}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-5">
          <div className="group flex cursor-pointer items-center gap-4">
            <div className="relative flex items-center">
              <input
                type="checkbox"
                {...register('hasExistingSite')}
                className="peer checked:bg-neon h-6 w-6 cursor-pointer appearance-none border-2 border-black transition-all"
              />
              {/* Checkmark icon personalizado para el color negro */}
              <svg
                className="pointer-events-none absolute ml-1 h-4 w-4 text-black opacity-0 peer-checked:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label className="mb-1 font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
              {t('brief.steps.step3.hasExistingSite')}
            </label>
          </div>

          {/* El input siempre está en el DOM, pero se opaca y deshabilita si no hay sitio */}
          <div
            className={cn(
              'transition-all duration-500',
              !hasExistingSite ? 'pointer-events-none opacity-30 grayscale' : 'opacity-100',
            )}
          >
            <BriefInput
              label={t('brief.steps.step3.existingSiteUrl')}
              placeholder="https://..."
              disabled={!hasExistingSite}
              error={
                errors.existingSiteUrl?.message ? t(errors.existingSiteUrl.message) : undefined
              }
              {...register('existingSiteUrl')}
            />
          </div>
        </div>
      </div>
    </BriefContainer>
  );
};
