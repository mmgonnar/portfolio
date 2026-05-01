'use client';

import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';

export const BriefManager = () => {
  const currentStep = useBriefStore(state => state.currentStep);

  switch (currentStep) {
    case 0:
      return <BriefIntro />;
    case 1:
      return <div className="p-20 text-center">Paso 1: Datos Personales (Próximamente)</div>;
    default:
      return <BriefIntro />;
  }
};
