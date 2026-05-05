'use client';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { useFormSync } from '@/hooks/useFormSync';
import { stepSevenSchema } from '../../utils/validation';
import BriefContainer from '../ui/brief-container';
import BriefTextArea from '../ui/brief-text-area';
import { Upload, File, X, Palette } from 'lucide-react';

export const StepBrandIdentity = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid, files, setFiles } = useBriefStore();

  const {
    register,
    watch,
    formState: { errors, isValid },
  } = useForm<stepSevenSchema>({
    resolver: zodResolver(stepSevenSchema),
    defaultValues: {
      brandColors: formData.brandColors || '',
      brandAssetsReady: formData.brandAssetsReady || false,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  // El paso es válido si los colores están definidos (Zod)
  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  // --- Lógica de Archivos Reutilizada ---
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.brand.title')}
        </h2>
        <p className="font-medium text-gray-500">{t('brief.steps.brand.description')}</p>
      </div>

      <div className="space-y-10 pt-6">
        {/* SECCIÓN DE COLORES */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Palette size={18} className="text-black" />
            <label className="font-mono text-xs font-bold tracking-widest text-neutral-500 uppercase">
              {t('brief.steps.brand.colorsLabel')}
            </label>
          </div>
          <BriefTextArea
            label="asdasd"
            placeholder={t('brief.steps.brand.colorsPlaceholder')}
            error={errors.brandColors?.message ? t(errors.brandColors.message) : undefined}
            {...register('brandColors')}
          />
        </div>

        {/* SECCIÓN DE ARCHIVOS (BRAND ASSETS) */}
        <div className="space-y-4">
          <label className="font-mono text-xs font-bold tracking-widest text-neutral-500 uppercase">
            {t('brief.steps.brand.assetsLabel')}
          </label>

          <div className="group relative flex flex-col items-center justify-center space-y-4 border-2 border-dashed border-neutral-200 bg-neutral-50/30 py-12 transition-all hover:border-black hover:bg-white">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="absolute inset-0 z-10 cursor-pointer opacity-0"
            />
            <Upload className="h-8 w-8 text-neutral-300 transition-colors group-hover:text-black" />
            <div className="text-center">
              <p className="text-xs font-bold tracking-tight text-black uppercase">
                {t('brief.steps.step8.dropzone.title')}
              </p>
            </div>
          </div>

          {/* LISTA DE ARCHIVOS CON ESTILO NEOBRUTALISTA */}
          {files.length > 0 && (
            <div className="grid grid-cols-1 gap-3 pt-2 md:grid-cols-2">
              {files.map((file, index) => (
                <div
                  key={`${file.name}-${index}`}
                  className="animate-in fade-in zoom-in-95 flex items-center justify-between border-2 border-black bg-white p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
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
                    className="cursor-pointer text-neutral-400 transition-colors hover:text-red-500"
                  >
                    <X size={14} strokeWidth={3} />
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
