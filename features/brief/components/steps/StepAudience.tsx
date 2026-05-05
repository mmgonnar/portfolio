'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { useFormSync } from '@/hooks/useFormSync';
import BriefContainer from '../ui/brief-container';
import BriefTextArea from '../ui/brief-text-area';
import { stepFiveSchema, StepFiveSchema } from '../../utils/validation';

export const StepAudience = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepFiveSchema>({
    resolver: zodResolver(stepFiveSchema),
    defaultValues: {
      targetAudience: formData.targetAudience,
      competitors: formData.competitors,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.audience.title')}
        </h2>
        <p className="font-medium text-gray-500">{t('brief.steps.audience.description')}</p>
      </div>

      <div className="space-y-10 pt-6">
        {/* TARGET AUDIENCE */}
        <div className="group transition-all duration-300">
          <BriefTextArea
            label={t('brief.steps.audience.targetLabel')}
            placeholder={t('brief.steps.audience.targetAudience')}
            error={errors.targetAudience?.message ? t(errors.targetAudience.message) : undefined}
            {...register('targetAudience')}
          />
          <p className="mt-2 font-mono text-[10px] tracking-widest text-neutral-400 uppercase">
            Tip: Describe demographics, interests, and pain points.
          </p>
        </div>

        {/* COMPETITORS */}
        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="font-mono text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
              {t('brief.steps.audience.competitors')}
            </label>
            <textarea
              {...register('competitors')}
              placeholder={t('brief.steps.audience.competitorsPlaceholder')}
              className="min-h-[100px] w-full border-2 border-black bg-white p-4 font-sans text-lg transition-all outline-none placeholder:text-neutral-300 focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            />
          </div>
          <p className="font-mono text-[10px] tracking-widest text-neutral-400 uppercase italic">
            {t('brief.steps.audience.competitorsHint')}
          </p>
        </div>
      </div>
    </BriefContainer>
  );
};
