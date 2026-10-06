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
            {t('brief.steps.review.labels.edit')}
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
        {Array.isArray(value) ? value.join(', ') : value || t('brief.steps.review.labels.no_data')}
      </p>
    </div>
  );

  return (
    <BriefContainer>
      <div className="mb-4 space-y-2">
        <h2 className="text-4xl font-black tracking-tighter text-black uppercase">
          {t('brief.steps.review.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.review.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {/* CONTACT INFO */}
        <ReviewSection title={t('brief.steps.review.sections.contact')} stepTarget={1}>
          <DataItem label={t('brief.steps.contact.name')} value={formData.name} />
          <DataItem label={t('brief.steps.contact.project')} value={formData.company} />
          <DataItem label={t('brief.steps.contact.email')} value={formData.email} />
          <DataItem label={t('brief.steps.contact.phone')} value={formData.phone} />
        </ReviewSection>

        {/* PROJECT DETAILS */}
        <ReviewSection title={t('brief.steps.review.sections.project')} stepTarget={2}>
          <DataItem
            label={t('brief.steps.type.title')}
            value={t(`brief.steps.type.options.${formData.projectType}.title`)}
          />
          <DataItem label={t('brief.steps.details.projectName')} value={formData.projectName} />
          <DataItem
            label={t('brief.steps.details.projectDescription')}
            value={formData.projectDescription}
          />
          <DataItem
            label={t('brief.steps.details.hasExistingSite')}
            value={formData.hasExistingSite}
          />
          <DataItem
            label={t('brief.steps.details.hasExistingSite')}
            value={formData.existingSiteUrl}
          />
          <DataItem label={t('brief.steps.features.title')} value={formData.features} />
          {formData.featuresDetail && (
            <DataItem label="Additional details" value={formData.featuresDetail} />
          )}
        </ReviewSection>

        {/* VISION */}
        <ReviewSection title={t('brief.steps.audience.title')} stepTarget={4}>
          <DataItem label={t('brief.steps.audience.targetTitle')} value={formData.targetAudience} />
          <DataItem label={t('brief.steps.audience.competitorsLabel')} value={formData.competitors} />
        </ReviewSection>

        {/* Style & references & branding*/}
        <ReviewSection title={t('brief.steps.review.sections.design')} stepTarget={6}>
          <DataItem
            label={t('brief.steps.style.styleDescription')}
            value={t(`brief.steps.style.options.${formData.visualStyle}.title`)}
          />
          <DataItem label={t('brief.steps.style.description')} value={formData.visualReferences} />
        </ReviewSection>
        {/* branding*/}
        <ReviewSection title={t('brief.steps.review.sections.design')} stepTarget={6}>
          <DataItem label={t('brief.steps.design.colorsLabel')} value={formData.brandColors} />

          <div className="mt-4 flex flex-col gap-1">
            <p className="text-[13px] text-gray-500">{t('brief.steps.design.title')}</p>
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
                {t('brief.steps.review.labels.no_data')}
              </p>
            )}
          </div>
        </ReviewSection>

        {/* BUDGET & TIMELINE */}
        <ReviewSection title={t('brief.steps.review.sections.budget_time')} stepTarget={6}>
          <DataItem label="Rango de presupuesto" value={formatBudgetRange(formData.budget)} />

          <DataItem
            label="Timeline esperado"
            value={t(`brief.steps.timeline.options.${formData.timeline}.title`)}
          />
          {formData.additionalNotes && (
            <DataItem label={t('brief.steps.notes.title')} value={formData.additionalNotes} />
          )}
        </ReviewSection>
      </div>
    </BriefContainer>
  );
};
