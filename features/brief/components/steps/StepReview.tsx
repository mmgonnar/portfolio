'use client';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import { FileChip } from '@/features/ui/components/file-chip';
import { StepHeader } from '@/features/ui/components/step-header';
import { isUserInMexico } from '@/utils/functions';
import { Pencil } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { needsStyleStep, StepId } from '../../utils/flow';
import { formatBudgetBand } from '../../utils/scope';
import BriefContainer from '../ui/brief-container';

export const StepReview = () => {
  const { t } = useTranslation();
  const { formData, files, setStepValid, goToStep } = useBriefStore();

  useEffect(() => {
    setStepValid(true);
  }, [setStepValid]);

  const ReviewSection = ({
    title,
    stepTarget,
    children,
  }: {
    title: string;
    stepTarget: StepId;
    children: React.ReactNode;
  }) => (
    <NeobrutalistCard variant="static" className="mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h4 className="font-mono text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          {title}
        </h4>
        <button
          onClick={() => goToStep(stepTarget)}
          className="group hover:text-green-brutalist flex shrink-0 cursor-pointer items-center gap-1.5 font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-colors"
        >
          <span className="underline underline-offset-2">
            {t('brief.steps.review.labels.edit')}
          </span>
          <Pencil size={10} strokeWidth={3} className="transition-transform group-hover:-rotate-12" />
        </button>
      </div>
      <div className="space-y-4">{children}</div>
    </NeobrutalistCard>
  );

  const DataItem = ({ label, value }: { label: string; value?: string | string[] | boolean }) => (
    <div className="flex flex-col gap-1">
      <p className="text-[13px] text-gray-500">{label}</p>
      <p className="text-sm font-bold wrap-break-word text-black italic">
        {Array.isArray(value)
          ? value.join(', ')
          : typeof value === 'boolean'
            ? t(value ? 'form.yes' : 'form.no')
            : value || t('brief.steps.review.labels.no_data')}
      </p>
    </div>
  );

  const featureLabels = (formData.features || []).map(key =>
    t(`brief.steps.features.options.${key}.title`),
  );

  return (
    <BriefContainer>
      <StepHeader
        title={t('brief.steps.review.title')}
        description={t('brief.steps.review.description')}
        size="large"
        className="mb-4"
      />

      <div className="grid grid-cols-1 gap-2">
        <ReviewSection title={t('brief.steps.review.sections.contact')} stepTarget="contact">
          <DataItem label={t('brief.steps.contact.name')} value={formData.name} />
          <DataItem label={t('brief.steps.contact.email')} value={formData.email} />
          <DataItem label={t('brief.steps.contact.phone')} value={formData.phone} />
          <DataItem label={t('brief.steps.contact.project')} value={formData.company} />
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.project')} stepTarget="type">
          <DataItem
            label={t('brief.steps.type.title')}
            value={
              formData.projectType
                ? t(`brief.steps.type.options.${formData.projectType}.title`)
                : undefined
            }
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
          {formData.hasExistingSite && (
            <DataItem
              label={t('brief.steps.details.existingSiteUrl')}
              value={formData.existingSiteUrl}
            />
          )}
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.features')} stepTarget="features">
          <DataItem label={t('brief.steps.features.title')} value={featureLabels} />
          {formData.featuresDetail && (
            <DataItem
              label={t('brief.steps.features.selectedLabel')}
              value={formData.featuresDetail}
            />
          )}
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.design')} stepTarget="design">
          <DataItem
            label={t('brief.steps.design.title')}
            value={
              formData.designStatus
                ? t(`brief.steps.design.options.${formData.designStatus}.title`)
                : undefined
            }
          />

          {formData.designStatus === 'ready' && (
            <DataItem label={t('brief.steps.design.linkLabel')} value={formData.designLink} />
          )}

          {formData.designStatus === 'brand_kit' && (
            <DataItem label={t('brief.steps.design.colorsLabel')} value={formData.brandColors} />
          )}

          {formData.wantsDesignQuote && (
            <p className="border-l-2 border-amber-400 bg-amber-50/40 py-2 pl-3 font-mono text-[11px] tracking-wide text-amber-700 uppercase">
              {t('brief.steps.review.labels.designQuoteRequested')}
            </p>
          )}

          {needsStyleStep(formData) && (
            <>
              <DataItem
                label={t('brief.steps.style.styleDescription')}
                value={
                  formData.visualStyle
                    ? t(`brief.steps.style.options.${formData.visualStyle}.title`)
                    : undefined
                }
              />
              <DataItem
                label={t('brief.steps.style.references')}
                value={formData.visualReferences}
              />
            </>
          )}

          <div className="flex flex-col gap-1">
            <p className="text-[13px] text-gray-500">{t('brief.steps.design.assetsLabel')}</p>
            {files.length > 0 ? (
              <div className="grid grid-cols-1 gap-2 pt-2 md:grid-cols-2">
                {files.map((file, idx) => (
                  <FileChip
                    key={`${file.name}-${file.lastModified}-${idx}`}
                    name={file.name}
                    className="shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                  />
                ))}
              </div>
            ) : (
              <p className="text-sm font-bold text-black italic">
                {t('brief.steps.review.labels.no_data')}
              </p>
            )}
          </div>
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.audience')} stepTarget="audience">
          <DataItem label={t('brief.steps.audience.targetTitle')} value={formData.targetAudience} />
          <DataItem
            label={t('brief.steps.audience.competitorsLabel')}
            value={formData.competitors}
          />
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.budget_time')} stepTarget="budget">
          <DataItem
            label={t('brief.steps.budget.title')}
            value={formatBudgetBand(formData.budget, isUserInMexico() ? 'MXN' : 'USD', t)}
          />
          <DataItem
            label={t('brief.steps.timeline.title')}
            value={
              formData.timeline
                ? t(`brief.steps.timeline.options.${formData.timeline}.title`)
                : undefined
            }
          />
        </ReviewSection>

        <ReviewSection title={t('brief.steps.review.sections.notes')} stepTarget="notes">
          <DataItem label={t('brief.steps.notes.title')} value={formData.additionalNotes} />
        </ReviewSection>
      </div>
    </BriefContainer>
  );
};
