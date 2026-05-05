'use client';

import { BriefManager } from '@/features/brief/components/BriefManager';
import { useBriefStore } from '@/features/brief/store/useBriefStore';
import { Copyright, NeobrutalistButton } from '@/features/footer';
import { Logo } from '@/features/header';
import LanguageSwitcher from '@/features/header/components/language-switcher';
import { sendBriefData } from '@/utils/apiBrief';
import { apiCallToast, cn } from '@/utils/functions';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { currentStep, prevStep, nextStep, isStepValid, formData, resetBrief } = useBriefStore();
  const { t } = useTranslation();

  const isReviewStep = currentStep === 11;
  const isLastStep = currentStep === 12;

  const handleAction = async () => {
    if (isReviewStep) {
      const { formData, files } = useBriefStore.getState();

      const dataToSend = new FormData();

      // Paso 1 - Contacto
      dataToSend.append('name', formData.name);
      dataToSend.append('email', formData.email);
      dataToSend.append('phone', formData.phone || '');
      dataToSend.append('company', formData.company || '');

      // Paso 2 - Proyecto
      dataToSend.append('projectType', formData.projectType);
      dataToSend.append('projectName', formData.projectName);
      dataToSend.append('projectDescription', formData.projectDescription); // Nombre exacto de Pydantic
      dataToSend.append('hasExistingSite', formData.hasExistingSite ? 'true' : 'false');
      dataToSend.append('existingSiteUrl', formData.existingSiteUrl || '');

      // Paso 3 - Features (Como string para el backend)

      formData.features.forEach(feature => {
        dataToSend.append('features', feature);
      });
      dataToSend.append('featuresDetail', formData.featuresDetail || '');

      // Paso 4 - Estilo y Audiencia
      dataToSend.append('targetAudience', formData.targetAudience);
      dataToSend.append('competitors', formData.competitors || '');
      dataToSend.append('visualStyle', formData.visualStyle);
      dataToSend.append('visualReferences', formData.visualReferences || '');
      dataToSend.append('brandColors', String(formData.brandColors));
      dataToSend.append('brandAssetsReady', String(formData.brandAssetsReady));

      // Paso 5 - Presupuesto y Notas
      dataToSend.append('budget', formData.budget);
      dataToSend.append('timeline', formData.timeline);
      dataToSend.append('flexibleBudget', String(formData.flexibleBudget));
      dataToSend.append('additionalNotes', formData.additionalNotes || '');

      // Paso 6 - Archivos (adjuntos reales)
      files.forEach(file => {
        dataToSend.append('attachments', file); // Asegúrate que el backend reciba 'attachments'
      });

      console.log('Enviando:', Object.fromEntries(dataToSend.entries()));
      await apiCallToast(sendBriefData(dataToSend), {
        loading: t('toast.sending'),
        successMessage: t('toast.success_msg'),
        errorMessage: t('toast.error_msg'),
      });

      resetBrief();
      nextStep();
    } else {
      nextStep();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header id="header" className="mx-auto w-full max-w-7xl shrink-0">
        <div className="flex w-full items-center justify-between px-5 py-6 pb-4 md:px-10 md:py-5">
          <Logo />
          <div className="flex shrink-0 items-center gap-3">
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-start py-8 md:justify-center md:py-0">
        <div className="w-full max-w-5xl">
          <BriefManager />
        </div>
      </main>

      {!isLastStep && (
        <footer className="mt-auto w-full border-t border-gray-100 px-6 py-6 md:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 items-center md:grid-cols-3">
            <div className="flex justify-start">
              {currentStep > 0 && (
                <button
                  onClick={prevStep}
                  className="font-mono text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-black"
                >
                  [ ← {t('button.back')} ]
                </button>
              )}
            </div>

            <div className="hidden justify-center md:flex">
              <Copyright className="text-sm tracking-tighter text-neutral-700 uppercase" />
            </div>

            <div className="flex justify-end">
              {currentStep > 0 && (
                <button
                  onClick={handleAction}
                  disabled={!isStepValid}
                  className={cn(
                    'border-2 border-black px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all',
                    isStepValid
                      ? cn(
                          'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                          'hover:bg-neon hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                          'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
                          isReviewStep && 'bg-neon',
                        )
                      : 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 shadow-none',
                  )}
                >
                  {isReviewStep ? t('button.submitBrief') : t('button.next')}
                </button>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
