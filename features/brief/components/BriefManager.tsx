'use client';
import { useEffect } from 'react';
import { useBriefStore } from '../store/useBriefStore';
import { BriefIntro } from './brief-intro';
import {
  StepAdditionalNotes,
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
  const stepId = useBriefStore(state => state.stepId);
  const formData = useBriefStore(state => state.formData);
  const goToStep = useBriefStore(state => state.goToStep);

  const isSuccess = stepId === 'success';

  useEffect(() => {
    if (isSuccess && !formData.name && !formData.email) goToStep('intro');
  }, [isSuccess, formData, goToStep]);

  const renderStep = () => {
    if (isSuccess) return <StepSuccess />;

    switch (stepId) {
      case 'contact':
        return <StepPersonalData />;
      case 'type':
        return <StepProjectDefinition />;
      case 'details':
        return <StepProjectDetails />;
      case 'features':
        return <StepFeatures />;
      case 'audience':
        return <StepTargetCompetitors />;
      case 'design':
        return <StepBrandIdentity />;
      case 'style':
        return <StepReferences />;
      case 'budget':
        return <StepBudget />;
      case 'timeline':
        return <StepTimeline />;
      case 'notes':
        return <StepAdditionalNotes />;
      case 'review':
        return <StepReview />;
      case 'intro':
      default:
        return <BriefIntro />;
    }
  };

  return (
    <section className="flex w-full flex-col px-6">
      {stepId !== 'intro' && !isSuccess && <BriefProgressBar />}

      <div className="w-full max-w-5xl transition-all duration-300 ease-in-out">{renderStep()}</div>
    </section>
  );
};
