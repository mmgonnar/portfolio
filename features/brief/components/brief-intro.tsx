'use client';

import NeobrutalistButton from '@/features/ui/components/neobrutalist-button';
import Label from '@/features/ui/components/label';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../store/useBriefStore';
import { hasBriefDraft } from '../utils/draft';
import { getFlow } from '../utils/flow';
import BriefIntroCards from './brief-intro-cards';
import BriefDescription from './brief-intro-description';

export const BriefIntro = () => {
  const { formData, lastStepId, nextStep, goToStep, resetBrief } = useBriefStore();
  const { t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // El store se rehidrata desde localStorage despues del primer render, asi que
  // hasta montar no se sabe si hay borrador.
  useEffect(() => {
    setMounted(true);
  }, []);

  const hasDraft = mounted && hasBriefDraft(formData);

  const handleBegin = () => {
    resetBrief();
    nextStep();
  };

  const handleContinue = () => {
    const flow = getFlow(formData);
    // Si el paso guardado ya no existe en el flujo, se retoma por el principio.
    goToStep(flow.includes(lastStepId) ? lastStepId : flow[0]);
  };

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-4 font-sans text-black lg:py-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <BriefDescription />

        <BriefIntroCards />

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          {hasDraft ? (
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <NeobrutalistButton
                type="button"
                onClick={handleContinue}
                text={t('brief.draft.continueDraft')}
              />
              <button
                type="button"
                onClick={handleBegin}
                className="cursor-pointer font-mono text-xs font-bold tracking-widest text-gray-400 underline underline-offset-4 uppercase transition-colors hover:text-black"
              >
                {t('brief.draft.startOver')}
              </button>
            </div>
          ) : (
            <NeobrutalistButton
              type="button"
              onClick={handleBegin}
              text={mounted ? t('button.beginTheBrief') : '...'}
            />
          )}

          <div className="flex flex-col items-start gap-2 text-gray-400 sm:flex-row sm:items-center md:gap-4">
            <Label
              variant="ghost"
              labelText={mounted ? t('brief.minutes') : '...'}
              icon="Clock"
              className="px-0"
            />
            <Label
              variant="ghost"
              labelText={mounted ? t('brief.confidential') : '...'}
              icon="ShieldCheck"
              className="px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
