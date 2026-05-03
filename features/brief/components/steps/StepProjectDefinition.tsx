'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { OptionCard } from '@/features/ui/components/OptionCard';
import BriefContainer from '../ui/brief-container';

export const StepProjectDefinition = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const options = ['website', 'web_app', 'wordpress', 'landing', 'redesign', 'other'];

  useEffect(() => {
    setStepValid(!!formData.projectType);
  }, [formData.projectType, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black">
          {t('brief.steps.step2.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step2.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {options.map(key => (
          <OptionCard
            key={key}
            title={t(`brief.steps.step2.options.${key}.title`)}
            desc={t(`brief.steps.step2.options.${key}.desc`)}
            selected={formData.projectType === key}
            onClick={() => updateField('projectType', key)}
          />
        ))}
      </div>
    </BriefContainer>
  );
};
