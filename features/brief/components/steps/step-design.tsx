'use client';
import BriefInput from '@/features/ui/components/brief-input';
import { FileDropzone } from '@/features/ui/components/file-dropzone';
import { OptionCard } from '@/features/ui/components/OptionCard';
import { StepHeader } from '@/features/ui/components/step-header';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { DesignStatus } from '../../types/type';
import BriefContainer from '../ui/brief-container';

const DESIGN_OPTIONS: Exclude<DesignStatus, ''>[] = ['ready', 'brand_kit', 'none'];

const isValidUrl = (value: string) => /^https?:\/\/.+\..+/.test(value.trim());

export const StepDesign = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid, files, setFiles, addFiles } = useBriefStore();

  const { designStatus, designLink, brandColors, wantsDesignQuote } = formData;

  useEffect(() => {
    if (designStatus === '') {
      setStepValid(false);
      return;
    }
    // Con el diseño listo lo único que hace falta es dónde verlo. Con kit de
    // marca se piden los colores, que es lo que no se puede leer de un archivo.
    if (designStatus === 'ready') {
      setStepValid(isValidUrl(designLink || ''));
      return;
    }
    if (designStatus === 'brand_kit') {
      setStepValid((brandColors || '').trim().length >= 5);
      return;
    }
    setStepValid(true);
  }, [designStatus, designLink, brandColors, setStepValid]);

  const dropzoneLabels = {
    title: t('brief.steps.design.dropzone.title'),
    subtitle: t('brief.steps.design.dropzone.subtitle'),
    info: t('brief.steps.design.dropzone.info'),
    duplicate: t('brief.steps.design.dropzone.duplicate'),
    notKept: t('brief.steps.design.dropzone.notKept'),
  };

  const handleAdd = (incoming: File[]) => {
    const skipped = addFiles(incoming);
    updateField('brandAssetsReady', true);
    return skipped;
  };

  const handleRemove = (index: number) => {
    const remaining = files.filter((_, i) => i !== index);
    setFiles(remaining);
    if (remaining.length === 0) updateField('brandAssetsReady', false);
  };

  const selectStatus = (status: DesignStatus) => {
    updateField('designStatus', status);
    // Cambiar de opción no debe dejar colgando la respuesta de la anterior.
    if (status !== 'ready') updateField('designLink', '');
    if (status !== 'brand_kit') updateField('wantsDesignQuote', false);
  };

  return (
    <BriefContainer>
      <StepHeader
        title={t('brief.steps.design.title')}
        description={t('brief.steps.design.description')}
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {DESIGN_OPTIONS.map(key => (
          <OptionCard
            key={key}
            title={t(`brief.steps.design.options.${key}.title`)}
            desc={t(`brief.steps.design.options.${key}.desc`)}
            selected={designStatus === key}
            onClick={() => selectStatus(key)}
          />
        ))}
      </div>

      {designStatus === 'ready' && (
        <div className="animate-in fade-in slide-in-from-top-2 space-y-8">
          <BriefInput
            label={t('brief.steps.design.linkLabel')}
            placeholder={t('brief.steps.design.linkPlaceholder')}
            value={designLink || ''}
            onChange={e => updateField('designLink', e.target.value)}
            error={
              designLink && !isValidUrl(designLink) ? t('form.errors.error_invalid_url') : undefined
            }
          />

          <div className="space-y-4">
            <p className="font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
              {t('brief.steps.design.filesLabel')}
            </p>
            <FileDropzone
              files={files}
              onAdd={handleAdd}
              onRemove={handleRemove}
              labels={dropzoneLabels}
            />
          </div>
        </div>
      )}

      {designStatus === 'brand_kit' && (
        <div className="animate-in fade-in slide-in-from-top-2 space-y-8">
          <div className="space-y-4">
            <p className="font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
              {t('brief.steps.design.kitFilesLabel')}
            </p>
            <FileDropzone
              files={files}
              onAdd={handleAdd}
              onRemove={handleRemove}
              labels={dropzoneLabels}
            />
          </div>

          <BriefInput
            label={t('brief.steps.design.colorsLabel')}
            placeholder={t('brief.steps.design.colorsPlaceholder')}
            value={brandColors || ''}
            onChange={e => updateField('brandColors', e.target.value)}
          />

          <button
            type="button"
            onClick={() => updateField('wantsDesignQuote', !wantsDesignQuote)}
            className="group flex w-full cursor-pointer items-center gap-4 border-2 border-gray-100 p-5 text-left transition-all hover:border-gray-200"
          >
            <div
              className={cn(
                'flex h-5 w-5 shrink-0 items-center justify-center border-2 transition-colors',
                wantsDesignQuote
                  ? 'border-green-brutalist bg-green-brutalist'
                  : 'border-gray-200',
              )}
            >
              {wantsDesignQuote && <Check className="h-3 w-3 text-white" strokeWidth={4} />}
            </div>
            <span className="text-sm font-bold tracking-tight text-black uppercase">
              {t('brief.steps.design.quoteCheckbox')}
            </span>
          </button>
        </div>
      )}

      {designStatus === 'none' && (
        <div className="animate-in fade-in slide-in-from-top-2 border-l-2 border-amber-400 bg-amber-50/40 p-5">
          <p className="text-sm leading-relaxed text-gray-600">
            {t('brief.steps.design.noneNote')}
          </p>
        </div>
      )}
    </BriefContainer>
  );
};
