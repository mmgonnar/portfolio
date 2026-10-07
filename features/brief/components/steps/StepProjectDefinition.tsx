'use client';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { OptionCard } from '@/features/ui/components/OptionCard';
import BriefContainer from '../ui/brief-container';
import { ProjectType } from '../../types/type';

export const StepProjectDefinition = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  /**
   * Un rediseño implica que ya existe un sitio, asi que la casilla del paso
   * siguiente se marca sola y habilita la URL.
   *
   * Solo al ENTRAR en 'redesign', no al volver a tocar la opcion ya elegida:
   * si el cliente la desmarco a proposito, volver a esta pantalla no debe
   * deshacer su decision. Cambiar a otro tipo tampoco toca nada, lo que haya
   * escrito sigue siendo verdad sobre su proyecto.
   */
  const selectType = (key: ProjectType) => {
    const enteringRedesign = key === 'redesign' && formData.projectType !== 'redesign';

    updateField('projectType', key);

    if (enteringRedesign) {
      updateField('hasExistingSite', true);
    }
  };

  const options: ProjectType[] = [
    'website',
    'web_app',
    'landing',
    'redesign',
    'dashboard',
    'other',
  ];

  useEffect(() => {
    setStepValid(!!formData.projectType);
  }, [formData.projectType, setStepValid]);

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black">
          {t('brief.steps.type.title')}
        </h2>
        <p className="text-gray-500">{t('brief.steps.type.description')}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {options.map(key => (
          <OptionCard
            key={key}
            title={t(`brief.steps.type.options.${key}.title`)}
            desc={t(`brief.steps.type.options.${key}.desc`)}
            selected={formData.projectType === key}
            onClick={() => selectType(key)}
          />
        ))}
      </div>
    </BriefContainer>
  );
};
