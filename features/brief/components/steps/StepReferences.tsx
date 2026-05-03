'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import BriefInput from '@/features/ui/components/brief-input';
import { Trash2 } from 'lucide-react';
import { cn } from '@/utils/functions';

export const StepReferences = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  const initialLinks = formData.referenceLinks ? formData.referenceLinks.split(',') : [''];
  const [links, setLinks] = useState<string[]>(initialLinks);
  const [showError, setShowError] = useState(false);

  // Validación de URL
  const isValidUrl = (url: string) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return url.includes('.');
    } catch {
      return false;
    }
  };

  useEffect(() => {
    const filteredLinks = links.filter(link => link.trim() !== '');

    // Validación obligatoria: El primer campo debe tener una URL válida
    const isFirstLinkValid = links[0].trim() !== '' && isValidUrl(links[0]);

    setShowError(links[0].trim() !== '' && !isValidUrl(links[0]));
    updateField('referenceLinks', filteredLinks.join(','));
    setStepValid(isFirstLinkValid);
  }, [links, setStepValid, updateField]);

  const addLink = () => setLinks([...links, '']);

  const updateLink = (idx: number, value: string) => {
    const newLinks = [...links];
    newLinks[idx] = value;
    setLinks(newLinks);
  };

  const removeLink = (idx: number) => {
    if (links.length > 1) {
      setLinks(links.filter((_, i) => i !== idx));
    } else {
      setLinks(['']);
    }
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step9.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.step9.description')}</p>
      </div>

      <div className="flex flex-col gap-4">
        {links.map((link, idx) => (
          <div
            key={`link-row-${idx}`}
            className="animate-in fade-in slide-in-from-left-2 flex flex-col gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <BriefInput
                  id={`link-${idx}`}
                  name={`link-${idx}`}
                  placeholder={t('brief.steps.step9.placeholder')}
                  value={link}
                  onChange={e => updateLink(idx, e.target.value)}
                  className={cn(
                    'font-mono text-xs',
                    idx === 0 && showError
                      ? 'border-red-500 shadow-[4px_4px_0px_0px_#ef4444] focus:border-b-4 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                      : '',
                  )}
                />
              </div>
              {links.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLink(idx)}
                  className="border-2 border-black bg-white p-2 shadow-[2px_2px_0px_0px_#000] transition-colors hover:bg-red-50"
                >
                  <Trash2 size={16} className="text-black" />
                </button>
              )}
            </div>

            {/* El error ahora solo se muestra para el primer input si es inválido */}
            {idx === 0 && showError && (
              <p className="font-mono text-[10px] font-bold tracking-widest text-red-500 uppercase">
                {t('form.errors.error_invalid_url')}
              </p>
            )}
          </div>
        ))}

        <button
          type="button"
          onClick={addLink}
          className="text-green-brutalist mt-2 self-start font-mono text-[10px] font-bold tracking-widest uppercase underline-offset-8 hover:underline"
        >
          {t('brief.steps.step9.addMore')}
        </button>
      </div>
    </BriefContainer>
  );
};
