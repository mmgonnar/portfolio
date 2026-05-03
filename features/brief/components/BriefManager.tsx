'use client';
import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';

import { StepPersonalData } from './steps/StepPersonalData';
import { BriefProgressBar } from './ui/brief-progress-bar';

export const BriefManager = () => {
  const currentStep = useBriefStore(state => state.currentStep);

  // Función para renderizar el paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BriefIntro />;
      case 1:
        return <StepPersonalData />;

      default:
        return <BriefIntro />;
    }
  };

  return (
    <section className="flex w-full flex-col px-6 py-10 md:px-10">
      {currentStep > 0 && <BriefProgressBar />}

      <div className="w-full max-w-4xl transition-all duration-300 ease-in-out">{renderStep()}</div>
    </section>
  );
};
