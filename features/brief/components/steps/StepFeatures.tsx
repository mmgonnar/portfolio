'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { OptionCard } from '@/features/ui/components/OptionCard';
import { StepHeader } from '@/features/ui/components/step-header';
import BriefContainer from '../ui/brief-container';
import { FeatureKey } from '../../types/type';

const FEATURE_KEYS: FeatureKey[] = [
  'auth',
  'admin_dashboard',
  'forms_emails',
  'database',
  'integrations',
  'seo',
  'multi_language',
  'deployment',
];

export const StepFeatures = () => {
  const { t } = useTranslation();
  const { formData, toggleFeature, setStepValid } = useBriefStore();

  const selectedFeatures = formData.features || [];

  useEffect(() => {
    setStepValid(selectedFeatures.length > 0);
  }, [selectedFeatures, setStepValid]);

  return (
    <BriefContainer>
      <StepHeader
        title={t('brief.steps.features.title')}
        description={t('brief.steps.features.description')}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {FEATURE_KEYS.map(key => (
          <OptionCard
            key={key}
            title={t(`brief.steps.features.options.${key}.title`)}
            desc={t(`brief.steps.features.options.${key}.desc`)}
            selected={selectedFeatures.includes(key)}
            onClick={() => toggleFeature(key)}
          />
        ))}
      </div>

      {selectedFeatures.length > 0 && (
        <div className="animate-in fade-in slide-in-from-left-2 mt-4">
          <p className="font-mono text-[11px] leading-relaxed tracking-wider uppercase">
            <span className="text-gray-400">{t('brief.steps.features.selectedLabel')}: </span>
            <span className="text-green-brutalist">
              {selectedFeatures
                .map(key => t(`brief.steps.features.options.${key}.title`))
                .join(', ')}
            </span>
          </p>
        </div>
      )}
    </BriefContainer>
  );
};
