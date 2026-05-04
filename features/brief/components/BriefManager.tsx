'use client';
import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';
import { StepAdditionalNotes } from './steps/StepAdditionalNotes';
import { StepBudget } from './steps/StepBudget';
import { StepFeatures } from './steps/StepFeatures';
import { StepFiles } from './steps/StepFiles';

import { StepPersonalData } from './steps/StepPersonalData';
import { StepProjectDefinition } from './steps/StepProjectDefinition';
import { StepReferences } from './steps/StepReferences';
import { StepReview } from './steps/StepReview';
import { StepTimeline } from './steps/StepTimeline';
import { StepVision } from './steps/StepVision';
import { BriefProgressBar } from './ui/brief-progress-bar';
import { StepSuccess } from './ui/StepSuccess';

export const BriefManager = () => {
  const currentStep = useBriefStore(state => state.currentStep);
  const isSuccess = currentStep === 11;

  // Función para renderizar el paso actual
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BriefIntro />;
      case 1:
        return <StepPersonalData />;
      case 2:
        return <StepProjectDefinition />;
      case 3:
        return <StepFeatures />;
      case 4:
        return <StepVision />;
      case 5:
        return <StepBudget />;
      case 6:
        return <StepTimeline />;
      case 7:
        return <StepFiles />;
      case 8:
        return <StepReferences />;
      case 9:
        return <StepAdditionalNotes />;
      case 10:
        return <StepReview />;
      case 11:
        return <StepSuccess />;

      default:
        return <BriefIntro />;
    }
  };

  return (
    <section className="flex w-full flex-col px-6">
      {currentStep > 0 && !isSuccess && <BriefProgressBar />}

      <div className="w-full max-w-5xl transition-all duration-300 ease-in-out">{renderStep()}</div>
    </section>
  );
};
