'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { OptionCard } from '@/features/ui/components/OptionCard';
import { TimelineKey } from '../../types/type';

export const StepTimeline = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const options: TimelineKey[] = ['asap', 'one_month', 'two_three_months', 'flexible'];

  useEffect(() => {
    setStepValid(formData.timeline !== '');
  }, [formData.timeline, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black">
          {t('brief.steps.step7.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step7.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {options.map(key => (
          <OptionCard
            key={key}
            title={t(`brief.steps.step7.options.${key}.title`)}
            desc={t(`brief.steps.step7.options.${key}.desc`)}
            selected={formData.timeline === key}
            onClick={() => updateField('timeline', key)}
          />
        ))}
      </div>
    </BriefContainer>
  );
};
