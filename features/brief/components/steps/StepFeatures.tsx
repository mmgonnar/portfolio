'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { OptionCard } from '@/features/ui/components/OptionCard';
import BriefContainer from '../ui/brief-container';

export const StepFeatures = () => {
  const { t } = useTranslation();
  const { formData, toggleFeature, setStepValid } = useBriefStore();

  const featureKeys = [
    'cms',
    'auth',
    'payments',
    'analytics',
    'seo',
    'multi_language',
    'integrations',
    'mobile',
  ];

  const selectedFeatures = formData.features || [];

  useEffect(() => {
    setStepValid(selectedFeatures.length > 0);
  }, [selectedFeatures, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-4ßxl font-bold tracking-tighter text-black">
          {t('brief.steps.step3.title')}
        </h2>
        <p className="max-w-4xl text-gray-500">{t('brief.steps.step3.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {featureKeys.map(key => {
          const title = t(`brief.steps.step3.options.${key}.title`);
          const desc = t(`brief.steps.step3.options.${key}.desc`);
          const isSelected = selectedFeatures.includes(title);

          return (
            <OptionCard
              key={key}
              title={title}
              desc={desc}
              selected={isSelected}
              onClick={() => toggleFeature(title)}
            />
          );
        })}
      </div>

      {selectedFeatures.length > 0 && (
        <div className="animate-in fade-in slide-in-from-left-2 mt-4">
          <p className="font-mono text-[11px] leading-relaxed tracking-wider uppercase">
            <span className="text-gray-400">{t('brief.steps.step3.selectedLabel')}: </span>
            <span className="text-green-brutalist">{selectedFeatures.join(', ')}</span>
          </p>
        </div>
      )}
    </BriefContainer>
  );
};
