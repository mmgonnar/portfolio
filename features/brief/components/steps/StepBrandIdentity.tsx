'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { useFormSync } from '@/hooks/useFormSync';
// Asegúrate de importar el Tipo (mayúscula) y el Esquema (minúscula)
import { stepSevenSchema, StepSevenSchema } from '../../utils/validation';
import BriefContainer from '../ui/brief-container';
import BriefTextArea from '../ui/brief-text-area';
import { Upload, File, X } from 'lucide-react';
import { cn } from '@/utils/functions';
import BriefInput from '@/features/ui/components/brief-input';

export const StepBrandIdentity = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid, files, setFiles } = useBriefStore();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<StepSevenSchema>({
    resolver: zodResolver(stepSevenSchema),
    defaultValues: {
      brandColors: formData.brandColors || '',
      brandAssetsReady: formData.brandAssetsReady || false,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
      // Opcional: Marcar brandAssetsReady como true si hay archivos
      updateField('brandAssetsReady', true);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    if (updatedFiles.length === 0) {
      updateField('brandAssetsReady', false);
    }
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step7.title')}
        </h2>
        <p className="font-medium text-gray-500">{t('brief.steps.step7.description')}</p>
      </div>

      <div className="space-y-12 pt-6">
        {/* SECCIÓN DE COLORES */}
        <div className="space-y-4">
          {/* <BriefTextArea
            label={t('brief.steps.step7.colorsLabel')}
            placeholder={t('brief.steps.step7.colorsPlaceholder')}
            error={errors.brandColors?.message ? t(errors.brandColors.message) : undefined}
            {...register('brandColors')}
          /> */}
          <BriefInput
            label={t('brief.steps.step7.colorsLabel')}
            placeholder={t('brief.steps.step7.colorsPlaceholder')}
            error={errors.brandColors?.message ? t(errors.brandColors.message) : undefined}
            {...register('brandColors')}
          />
        </div>

        {/* SECCIÓN DE ARCHIVOS */}
        <div className="space-y-4">
          <label className="mb-1 font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
            {t('brief.steps.step7.assetsLabel')}
          </label>

          <div className="group relative mt-2 flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-neutral-200 bg-neutral-50/30 py-12 transition-all hover:border-black hover:bg-white">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 z-10 cursor-pointer opacity-0"
            />
            <Upload className="h-8 w-8 text-neutral-300 transition-colors group-hover:text-black" />

            <div className="px-4 text-center">
              <p className="text-xs font-bold tracking-tight text-black uppercase">
                {t('brief.steps.step7.dropzone.title')}
              </p>
              <p className="mt-1 text-[10px] tracking-wide text-gray-400 uppercase">
                {t('brief.steps.step7.dropzone.info')}
              </p>
            </div>
          </div>

          {/* LISTA DE ARCHIVOS */}
          {files.length > 0 && (
            <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="animate-in fade-in zoom-in-95 flex items-center justify-between border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-none"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <File size={14} className="shrink-0 text-green-600" />
                    <span className="truncate font-mono text-[10px] tracking-tighter uppercase italic">
                      {file.name}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="group/btn p-1 transition-colors hover:bg-red-50"
                  >
                    <X
                      size={14}
                      className="text-neutral-400 group-hover/btn:text-red-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </BriefContainer>
  );
};
