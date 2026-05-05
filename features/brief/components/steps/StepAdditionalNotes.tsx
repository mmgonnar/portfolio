'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import BriefInput from '@/features/ui/components/brief-input';
import BriefTextArea from '../ui/brief-text-area';

export const StepAdditionalNotes = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  useEffect(() => {
    setStepValid(true);
  }, [setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step10.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step10.description')}</p>
      </div>

      <div className="animate-in fade-in slide-in-from-bottom-2">
        <BriefTextArea
          label=""
          id="additionalNotes"
          name="additionalNotes"
          placeholder={t('brief.steps.step10.placeholder')}
          value={formData.additionalNotes || ''}
          onChange={e => updateField('additionalNotes', e.target.value)}
          className="min-h-[200px]"
        />
      </div>
    </BriefContainer>
  );
};
