'use client';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { cn, isUserInMexico } from '@/utils/functions';
import { BudgetKey } from '../../types/type';

export const StepBudget = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();
  const [isMexico, setIsMexico] = useState(false);

  useEffect(() => {
    setIsMexico(isUserInMexico());
  }, []);

  // Los montos viven aqui solo hasta que scope.ts los tome; el idioma sale de
  // los patrones under/between/plus para no duplicar dinero en dos locales.
  const budgetOptions: { label: string; short: string; value: BudgetKey }[] = useMemo(() => {
    const bands: { min?: string; max?: string; short: string; value: BudgetKey }[] = isMexico
      ? [
          { max: '$15,000', short: '<15K', value: 'r1' },
          { min: '$15,000', max: '$40,000', short: '15-40K', value: 'r2' },
          { min: '$40,000', max: '$80,000', short: '40-80K', value: 'r3' },
          { min: '$80,000', short: '80K+', value: 'r4' },
        ]
      : [
          { max: '$1,200', short: '<1.2K', value: 'r1' },
          { min: '$1,200', max: '$3,000', short: '1.2-3K', value: 'r2' },
          { min: '$3,000', max: '$6,000', short: '3-6K', value: 'r3' },
          { min: '$6,000', short: '6K+', value: 'r4' },
        ];

    return bands.map(band => {
      const key = band.min && band.max ? 'between' : band.max ? 'under' : 'plus';
      return {
        label: t(`brief.steps.budget.${key}`, { min: band.min, max: band.max }),
        short: band.short,
        value: band.value,
      };
    });
  }, [isMexico, t]);

  const initialIndex = useMemo(() => {
    const idx = budgetOptions.findIndex(opt => opt.value === formData.budget);
    return idx !== -1 ? idx : 1;
  }, [formData.budget, budgetOptions]); // Agregamos dependencias

  const [sliderValue, setSliderValue] = useState(initialIndex);

  useEffect(() => {
    // Si no hay un presupuesto guardado, inicializamos el Store con el valor por defecto del slider (índice 2)
    if (!formData.budget) {
      updateField('budget', budgetOptions[1].value);
    }
    setStepValid(true);
  }, [formData.budget, updateField, setStepValid, budgetOptions]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);

    updateField('budget', budgetOptions[newValue].value);
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <div className="flex items-center gap-10">
          <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
            {t('brief.steps.budget.title')}{' '}
            <span className="font-mono text-2xl font-bold tracking-widest text-gray-400 uppercase">
              {isMexico ? '(MXN)' : '(USD)'}
            </span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-12 py-16">
        <h3 className="custom-sm:text-5xl font-mono text-4xl font-black tracking-tighter text-black transition-all duration-300 md:text-6xl">
          {budgetOptions[sliderValue]?.label}
        </h3>

        <div className="w-full space-y-8">
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            className="accent-neon [&::-webkit-slider-thumb]:bg-neon h-[2px] w-full cursor-pointer appearance-none bg-gray-200 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <div className="flex w-full justify-between px-2">
            {budgetOptions.map((opt, index) => (
              <span
                key={`budget-opt-${opt.value}-${index}`}
                className={cn(
                  'font-mono tracking-tighter uppercase transition-all duration-300',
                  sliderValue === index ? 'text-green-brutalist font-bold' : 'text-gray-500',
                )}
              >
                <span className="hidden text-sm sm:block">{opt.label}</span>
                <span className="block text-xs sm:hidden">{opt.short}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </BriefContainer>
  );
};
