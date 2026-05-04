'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';

import { cn } from '@/utils/functions';
import BriefContainer from '../ui/brief-container';
import BriefInput from '@/features/ui/components/brief-input';

export const StepVision = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const description = formData.projectDescription || '';
  const minLength = 50;

  useEffect(() => {
    setStepValid(description.length >= minLength);
  }, [description, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black">
          {t('brief.steps.step4.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step4.description')}</p>
      </div>

      <div className="space-y-2">
        <BriefInput
          type="textarea"
          placeholder={t('brief.steps.step4.placeholder')}
          value={description}
          onChange={e => updateField('projectDescription', e.target.value)}
        />

        {/* Contador de caracteres estilo mono */}
        <div className="flex justify-start">
          <p
            className={cn(
              'font-mono text-[10px] tracking-widest uppercase',
              description.length >= minLength ? 'text-green-brutalist' : 'text-gray-400',
            )}
          >
            {description.length} / {minLength} {t('brief.steps.step4.counter')}
          </p>
        </div>
      </div>
    </BriefContainer>
  );
};
