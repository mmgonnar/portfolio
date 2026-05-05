'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { Paperclip, Pencil } from 'lucide-react';
import { formatBudgetRange } from '@/utils/functions';

export const StepReview = () => {
  const { t } = useTranslation();
  const { formData, files, setStepValid, setCurrentStep } = useBriefStore();

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
          className="group hover:text-green-brutalist flex cursor-pointer items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors"
        >
          <span className="underline underline-offset-2">
            {t('brief.steps.step11.labels.edit')}
          </span>
          <Pencil
            size={10}
            strokeWidth={3}
            className="transition-transform group-hover:-rotate-12"
          />
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );

  const DataItem = ({ label, value }: { label: string; value?: string | string[] | boolean }) => (
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
        <p className="text-gray-500">{t('brief.steps.step11.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {/* CONTACT INFO */}
        <ReviewSection title={t('brief.steps.step11.sections.contact')} stepTarget={1}>
          <DataItem label={t('brief.steps.step1.name')} value={formData.name} />
          <DataItem label={t('brief.steps.step1.project')} value={formData.company} />
          <DataItem label={t('brief.steps.step1.email')} value={formData.email} />
          <DataItem label={t('brief.steps.step1.phone')} value={formData.phone} />
        </ReviewSection>

        {/* PROJECT DETAILS */}
        <ReviewSection title={t('brief.steps.step11.sections.project')} stepTarget={2}>
          <DataItem
            label={t('brief.steps.step2.title')}
            value={t(`brief.steps.step2.options.${formData.projectType}.title`)}
          />
          <DataItem label={t('brief.steps.step3.projectName')} value={formData.projectName} />
          <DataItem
            label={t('brief.steps.step3.projectDescription')}
            value={formData.projectDescription}
          />
          <DataItem
            label={t('brief.steps.step3.hasExistingSite')}
            value={formData.hasExistingSite}
          />
          <DataItem
            label={t('brief.steps.step3.hasExistingSite')}
            value={formData.existingSiteUrl}
          />
          <DataItem label={t('brief.steps.step4.title')} value={formData.features} />
          {formData.featuresDetail && (
            <DataItem label="Additional details" value={formData.featuresDetail} />
          )}
        </ReviewSection>

        {/* VISION */}
        <ReviewSection title={t('brief.steps.step5.title')} stepTarget={4}>
          <DataItem label={t('brief.steps.step5.targetTitle')} value={formData.targetAudience} />
          <DataItem label={t('brief.steps.step5.competitorsLabel')} value={formData.competitors} />
        </ReviewSection>

        {/* Style & references & branding*/}
        <ReviewSection title={t('brief.steps.step11.sections.styleReferences')} stepTarget={6}>
          <DataItem
            label={t('brief.steps.step6.styleDescription')}
            value={t(`brief.steps.step6.options.${formData.visualStyle}.title`)}
          />
          <DataItem label={t('brief.steps.step6.description')} value={formData.visualReferences} />
        </ReviewSection>
        {/* branding*/}
        <ReviewSection title={t('brief.steps.step11.sections.styleReferences')} stepTarget={6}>
          <DataItem label={t('brief.steps.step7.colorsLabel')} value={formData.brandColors} />

          <div className="mt-4 flex flex-col gap-1">
            <p className="text-[13px] text-gray-500">{t('brief.steps.step7.title')}</p>
            {files.length > 0 ? (
              <div className="flex flex-wrap gap-2 pt-2">
                {files.map((file, idx) => (
                  <div
                    key={`${file.name}-${idx}`}
                    className="flex items-center gap-2 border border-black bg-gray-50 px-2 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  >
                    <Paperclip size={12} className="text-green-brutalist" />
                    <span className="max-w-[200px] truncate font-mono text-[10px] uppercase italic">
                      {file.name}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm font-bold text-black italic">
                {t('brief.steps.step11.labels.no_data')}
              </p>
            )}
          </div>
        </ReviewSection>

        {/* BUDGET & TIMELINE */}
        <ReviewSection title={t('brief.steps.step11.sections.budget_time')} stepTarget={6}>
          <DataItem label="Rango de presupuesto" value={formatBudgetRange(formData.budget)} />

          <DataItem
            label="Timeline esperado"
            value={t(`brief.steps.step9.options.${formData.timeline}.title`)}
          />
          {formData.additionalNotes && (
            <DataItem label={t('brief.steps.step10.title')} value={formData.additionalNotes} />
          )}
        </ReviewSection>
      </div>
    </BriefContainer>
  );
};
