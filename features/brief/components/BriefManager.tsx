'use client';
import { useEffect } from 'react';
import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';
import {
  StepAdditionalNotes,
  StepAudience,
  StepBrandIdentity,
  StepBudget,
  StepFeatures,
  StepPersonalData,
  StepProjectDefinition,
  StepProjectDetails,
  StepReferences,
  StepReview,
  StepTargetCompetitors,
  StepTimeline,
} from './steps';

import { BriefProgressBar } from './ui/brief-progress-bar';
import { StepSuccess } from './ui/StepSuccess';

export const BriefManager = () => {
  const currentStep = useBriefStore(state => state.currentStep);
  const formData = useBriefStore(state => state.formData);
  const setCurrentStep = useBriefStore(state => state.setCurrentStep);
  const isSuccess = currentStep === 12;

  useEffect(() => {
    if (currentStep === 12 && !formData.name && !formData.email) {
      setCurrentStep(0);
    }
  }, [currentStep, formData, setCurrentStep]);

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
      case 8:
        return <StepBudget />;
      case 9:
        return <StepTimeline />;
      case 10:
        return <StepAdditionalNotes />;
      case 11:
        return <StepReview />;
      case 12:
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
