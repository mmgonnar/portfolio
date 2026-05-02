'use client';

import { useBriefStore } from '../store/useBriefStore';
import { NeobrutalistButton } from '@/features/footer';
import { useTranslation } from 'react-i18next';
import Label from '@/features/ui/components/label';
import BriefDescription from './brief-intro-description';
import BriefIntroCards from './brief-intro-cards';

export const BriefIntro = () => {
  const nextStep = useBriefStore(state => state.nextStep);
  const { t } = useTranslation();

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-4 font-sans text-black lg:py-6">
      <div className="flex flex-col gap-4 md:gap-6">
        <BriefDescription />

        <BriefIntroCards />

        <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <NeobrutalistButton
            type="button"
            onClick={() => nextStep()}
            text={t('button.beginTheBrief')}
          />

          <div className="flex flex-col items-start gap-2 text-gray-400 sm:flex-row sm:items-center md:gap-4">
            <Label variant="ghost" labelText={t('brief.minutes')} icon="Clock" className="px-0" />
            <Label
              variant="ghost"
              labelText={t('brief.confidential')}
              icon="ShieldCheck"
              className="px-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
