'use client';

import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';
import { StepPersonalData } from './steps/StepPersonalData';

export const BriefManager = () => {
  const currentStep = useBriefStore(state => state.currentStep);
  console.log('Renderizando paso:', currentStep);

  switch (currentStep) {
    case 0:
      return <BriefIntro />;
    case 1:
      return <StepPersonalData />;
    default:
      console.warn('Paso no definido:', currentStep);
      return <BriefIntro />;
  }
};
