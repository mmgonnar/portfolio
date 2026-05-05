'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import BriefInput from '@/features/ui/components/brief-input';
import { Trash2, Plus } from 'lucide-react';
import { cn } from '@/utils/functions';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormSync } from '@/hooks/useFormSync';
import { stepSixSchema, StepSixSchema } from '../../utils/validation';
import { OptionCard } from '@/features/ui/components/OptionCard';

export const StepReferences = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const styles = ['minimal', 'luxury', 'editorial', 'brutalist', 'darkLuxury', 'modern'];

  // --- Lógica de Enlaces Multinivel ---
  const initialLinks = formData.visualReferences ? formData.visualReferences.split(',') : [''];
  const [links, setLinks] = useState<string[]>(initialLinks);

  const {
    register,
    watch,
    setValue,
    formState: { errors, isValid },
  } = useForm<StepSixSchema>({
    resolver: zodResolver(stepSixSchema),
    defaultValues: {
      visualStyle: formData.visualStyle,
      visualReferences: formData.visualReferences,
    },
    mode: 'onChange',
  });

  useFormSync(watch, updateField, formData);

  // Sincronizar links locales con React Hook Form y el Store
  useEffect(() => {
    const combinedLinks = links.filter(l => l.trim() !== '').join(',');

    // 1. Actualizamos el valor en el formulario
    setValue('visualReferences', combinedLinks, {
      shouldValidate: true, // 👈 Esto es clave
      shouldDirty: true,
    });

    // 2. Sincronizamos con Zustand
    updateField('visualReferences', combinedLinks);
  }, [links, setValue, updateField]);

  useEffect(() => {
    setStepValid(isValid);
  }, [isValid, setStepValid]);

  const selectedStyle = watch('visualStyle');

  const updateLink = (idx: number, value: string) => {
    const newLinks = [...links];
    newLinks[idx] = value;
    setLinks(newLinks);
  };

  const addLink = () => setLinks([...links, '']);
  const removeLink = (idx: number) => {
    const newLinks = links.filter((_, i) => i !== idx);
    setLinks(newLinks.length ? newLinks : ['']);
  };

  console.log('ERRORES:', errors);
  console.log('¿ES VÁLIDO?:', isValid);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step6.title')}
        </h2>
        <p className="font-medium text-gray-500">{t('brief.steps.step6.description')}</p>
      </div>

      {/* Grid de Estilos Visuales (Neobrutalista) */}
      <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
        {styles.map(style => (
          <OptionCard
            key={style}
            title={t(`brief.steps.step6.options.${style}.title`)}
            desc={t(`brief.steps.step6.options.${style}.desc`)}
            selected={selectedStyle === style}
            onClick={() => {
              setValue('visualStyle', style, { shouldValidate: true });
              updateField('visualStyle', style);
            }}
          />
        ))}
      </div>

      {/* Sección de Referencias (Links) */}
      <div className="flex flex-col gap-6 border-t-2 border-black/5 pt-8">
        <label className="font-mono text-xs font-bold tracking-[0.2em] text-neutral-500 uppercase">
          {t('brief.steps.step6.references')}
        </label>

        <div className="space-y-4">
          {links.map((link, idx) => (
            <div
              key={`link-${idx}`}
              className="animate-in fade-in slide-in-from-left-2 flex items-center gap-3"
            >
              <div className="flex-1">
                <BriefInput
                  placeholder="https://pinterest.com/..."
                  value={link}
                  onChange={e => updateLink(idx, e.target.value)}
                  className="font-mono text-xs"
                />
              </div>
              {links.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLink(idx)}
                  className="border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_#000] transition-all hover:bg-red-50 active:translate-x-1 active:translate-y-1 active:shadow-none"
                >
                  <Trash2 size={16} />
                </button>
              )}
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={addLink}
          className="flex items-center gap-2 self-start font-mono text-[10px] font-bold tracking-widest text-green-600 uppercase underline-offset-8 hover:underline"
        >
          <Plus size={14} />
          {t('brief.steps.step6.addMore')}
        </button>
      </div>
    </BriefContainer>
  );
};
