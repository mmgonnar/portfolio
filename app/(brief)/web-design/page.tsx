'use client';

import { useBriefStore } from '@/features/brief/store/useBriefStore';
import { Copyright } from '@/features/footer';
import { Logo } from '@/features/header';
import LanguageSwitcher from '@/features/header/components/language-switcher';
import { sendBriefData } from '@/utils/apiBrief';
import { apiCallToast, cn, isUserInMexico } from '@/utils/functions';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';
import { BriefManager } from '@/features/brief/components/BriefManager';
import { getScope } from '@/features/brief/utils/scope';

export default function Page() {
  const { stepId, prevStep, nextStep, isStepValid, goToStep } = useBriefStore();
  const { t } = useTranslation();
  // El estado pinta el boton; la ref es la que bloquea. setState no se aplica
  // hasta el siguiente render, asi que dos clics en el mismo tick leerian el
  // estado todavia en false y enviarian el brief dos veces.
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submittingRef = useRef(false);

  useEffect(() => {
    goToStep('intro');
  }, [goToStep]);

  const isIntro = stepId === 'intro';
  const isReviewStep = stepId === 'review';
  const isLastStep = stepId === 'success';

  const handleAction = async () => {
    // Un segundo clic mientras el envio esta en vuelo no hace nada: duplicaba
    // la fila en Supabase, el PDF y el correo.
    if (submittingRef.current) return;

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

      // Audiencia, estilo y diseño
      dataToSend.append('targetAudience', formData.targetAudience);
      dataToSend.append('competitors', formData.competitors || '');
      dataToSend.append('visualStyle', formData.visualStyle);
      dataToSend.append('visualReferences', formData.visualReferences || '');
      dataToSend.append('brandColors', String(formData.brandColors));
      dataToSend.append('brandAssetsReady', String(formData.brandAssetsReady));
      dataToSend.append('designStatus', formData.designStatus);
      dataToSend.append('designLink', formData.designLink || '');
      dataToSend.append('wantsDesignQuote', String(formData.wantsDesignQuote));

      // El alcance se calcula aquí, scope.ts es la única copia de los pesos
      const scope = getScope(formData);
      dataToSend.append('scopeLevel', scope.level);
      dataToSend.append('scopeWeight', String(scope.weight));

      // Paso 5 - Presupuesto y Notas
      dataToSend.append('budget', formData.budget);
      dataToSend.append('currency', isUserInMexico() ? 'MXN' : 'USD');
      dataToSend.append('timeline', formData.timeline);
      dataToSend.append('flexibleBudget', String(formData.flexibleBudget));
      dataToSend.append('additionalNotes', formData.additionalNotes || '');

      // Paso 6 - Archivos (adjuntos reales)
      const fileList = files || [];
      fileList.forEach(file => {
        dataToSend.append('attachments', file);
      });

      // Send files - backend expects list, send as JSON
      const fileNames = fileList.map(f => f.name);
      dataToSend.append('files', JSON.stringify(fileNames));

      dataToSend.append('locale', formData.locale || 'en');

      submittingRef.current = true;
      setIsSubmitting(true);

      try {
        await apiCallToast(sendBriefData(dataToSend), {
          loading: t('toast.sending'),
          successMessage: t('toast.success_msg'),
          // Si la peticion falla no sabemos si llego: el mensaje pide
          // comprobar el correo antes de reintentar, en vez de invitar a
          // reenviar a ciegas y duplicar el brief.
          errorMessage: t('toast.brief_unconfirmed'),
        });
      } catch {
        // El borrador se queda intacto para poder reintentar sin recapturar
        // nada. El toast ya explico que paso.
        return;
      } finally {
        submittingRef.current = false;
        setIsSubmitting(false);
      }

      // El borrador persistido se limpia en el partialize del store al entrar
      // en 'success'. Hacerlo aqui no funcionaba: nextStep() vuelve a escribir
      // el estado completo justo despues y revivia el brief ya enviado.
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

      {/*
        justify-center centraba verticalmente y un paso mas alto que la ventana
        se recortaba por arriba, sin forma de alcanzar el boton de siguiente.
        El contenido crece hacia abajo y la pagina se desplaza.
      */}
      <main className="flex flex-1 flex-col items-center justify-start py-8 md:py-12">
        <div className="w-full max-w-5xl">
          <BriefManager />
        </div>
      </main>

      {!isLastStep && (
        <footer className="mt-auto w-full border-t border-gray-100 px-6 py-6 md:px-10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 items-center md:grid-cols-3">
            <div className="flex justify-start">
              {!isIntro && (
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
              {!isIntro && (
                <button
                  onClick={handleAction}
                  disabled={!isStepValid || isSubmitting}
                  aria-busy={isSubmitting}
                  className={cn(
                    'border-2 border-black px-6 py-3 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-all',
                    isStepValid && !isSubmitting
                      ? cn(
                          'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]',
                          'hover:bg-neon hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]',
                          'active:translate-x-[4px] active:translate-y-[4px] active:shadow-none',
                          isReviewStep && 'bg-neon',
                        )
                      : 'cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 shadow-none',
                  )}
                >
                  {isSubmitting
                    ? t('toast.sending')
                    : isReviewStep
                      ? t('button.submitBrief')
                      : t('button.next')}
                </button>
              )}
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
