import { useFormSync } from '@/hooks/useFormSync';
import { cn } from '@/utils/functions';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { StepFiveSchema, stepFiveSchema } from '../../utils/validation';
import BriefContainer from '../ui/brief-container';
import BriefTextArea from '../ui/brief-text-area';

export const StepTargetCompetitors = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();
  const minLength = 20;

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepFiveSchema>({
    resolver: zodResolver(stepFiveSchema),
    defaultValues: {
      competitors: formData.competitors,
      targetAudience: formData.targetAudience,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  const competitorsVal = watch('competitors') || '';
  const targetAudienceVal = watch('targetAudience') || '';

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step5.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step5.description')}</p>
      </div>

      <div className="space-y-10 pt-6">
        {/* SECCIÓN: TARGET AUDIENCE */}
        <div className="space-y-2">
          <BriefTextArea
            label={t('brief.steps.step5.targetTitle')}
            placeholder={t('brief.steps.step5.targetAudience')}
            error={errors.targetAudience?.message ? t(errors.targetAudience.message) : undefined}
            {...register('targetAudience')}
          />
          <div className="flex justify-start">
            <p
              className={cn(
                'font-mono text-[10px] tracking-widest uppercase transition-colors',
                targetAudienceVal.length >= minLength
                  ? 'font-bold text-green-600'
                  : 'text-gray-400',
              )}
            >
              {targetAudienceVal.length} / {minLength} {t('brief.steps.step3.counter')}
            </p>
          </div>
        </div>

        {/* SECCIÓN: COMPETITORS */}
        <div className="space-y-2">
          <BriefTextArea
            label={t('brief.steps.step5.competitorsLabel')}
            placeholder={t('brief.steps.step5.competitorsPlaceholder')}
            // error={errors.competitors?.message ? t(errors.competitors.message) : undefined}
            {...register('competitors')}
          />
          <div className="flex justify-start">
            <p
              className={cn(
                'font-mono text-[10px] tracking-widest uppercase transition-colors',
                competitorsVal.length >= minLength ? 'font-bold text-green-600' : 'text-gray-400',
              )}
            >
              {competitorsVal.length} / {minLength} {t('brief.steps.step3.counter')}
            </p>
          </div>
        </div>
      </div>
    </BriefContainer>
  );
};
