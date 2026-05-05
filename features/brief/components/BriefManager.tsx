'use client';
import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';
import {
  StepAudience,
  StepBrandIdentity,
  StepFeatures,
  StepPersonalData,
  StepProjectDefinition,
  StepProjectDetails,
  StepReferences,
  StepTargetCompetitors,
} from './steps';

import { BriefProgressBar } from './ui/brief-progress-bar';

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
        return <StepProjectDetails />;
      case 4:
        return <StepFeatures />;
      case 5:
        return <StepTargetCompetitors />;
      case 6:
        return <StepReferences />;
      case 7:
        return <StepBrandIdentity />;
      // case 4:
      //   return <StepVision />;
      // case 5:
      //   return <StepBudget />;
      // case 6:
      //   return <StepTimeline />;
      // case 7:
      //   return <StepFiles />;
      // case 8:
      //   return <StepReferences />;
      // case 9:
      //   return <StepAdditionalNotes />;
      // case 10:
      //   return <StepReview />;
      // case 11:
      //   return <StepSuccess />;

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
