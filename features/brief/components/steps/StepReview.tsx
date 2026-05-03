'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';

export const StepReview = () => {
  const { t } = useTranslation();
  const { formData, setStepValid, setCurrentStep } = useBriefStore();

  useEffect(() => {
    setStepValid(true);
  }, [setStepValid]);

  const ReviewSection = ({
    title,
    children,
    stepTarget,
  }: {
    title: string;
    children: React.ReactNode;
    stepTarget: number;
  }) => (
    <div className="group relative mb-6 border-2 border-black bg-white p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-4 flex items-start justify-between">
        <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          {title}
        </h4>
        <button
          onClick={() => setCurrentStep(stepTarget)}
          className="hover:text-green-brutalist cursor-pointer text-[10px] font-bold uppercase underline transition-colors"
        >
          {t('brief.steps.step11.labels.edit')}
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const DataItem = ({ label, value }: { label: string; value?: string | string[] }) => (
    <div className="flex flex-col gap-1">
      <p className="text-[13px] text-gray-500">{label}</p>
      <p className="text-sm font-bold wrap-break-word text-black italic">
        {Array.isArray(value) ? value.join(', ') : value || t('brief.steps.step11.labels.no_data')}
      </p>
    </div>
  );

  return (
    <BriefContainer>
      <div className="mb-4 space-y-2">
        <h2 className="text-4xl font-black tracking-tighter text-black uppercase">
          {t('brief.steps.step11.title')}
        </h2>
        <p className="text-gray-500 italic">{t('brief.steps.step11.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {/* CONTACT INFO */}
        <ReviewSection title={t('brief.steps.step11.sections.contact')} stepTarget={1}>
          <DataItem label="¿Cuál es tu nombre?" value={formData.name} />
          <DataItem label="Correo electrónico" value={formData.email} />
        </ReviewSection>

        {/* PROJECT DETAILS */}
        <ReviewSection title={t('brief.steps.step11.sections.project')} stepTarget={2}>
          <DataItem
            label="Tipo de proyecto"
            value={t(`brief.steps.step2.options.${formData.projectType}.title`)}
          />
          <DataItem label="Funcionalidades" value={formData.features} />
        </ReviewSection>

        {/* VISION */}
        <ReviewSection title={t('brief.steps.step11.sections.vision')} stepTarget={4}>
          <DataItem label="Descripción de la visión" value={formData.description} />
        </ReviewSection>

        {/* BUDGET & TIMELINE */}
        <ReviewSection title={t('brief.steps.step11.sections.budget_time')} stepTarget={6}>
          <DataItem label="Rango de presupuesto" value={formData.budget} />
          <DataItem
            label="Timeline esperado"
            value={t(`brief.steps.step7.options.${formData.timeline}.title`)}
          />
        </ReviewSection>

        {/* ATTACHMENTS & LINKS */}
        <ReviewSection title={t('brief.steps.step11.sections.files')} stepTarget={9}>
          <DataItem label="Enlaces de referencia" value={formData.referenceLinks} />
        </ReviewSection>
      </div>
    </BriefContainer>
  );
};
