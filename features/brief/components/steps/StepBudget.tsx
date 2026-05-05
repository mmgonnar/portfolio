'use client';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { cn, isUserInMexico } from '@/utils/functions';

export const StepBudget = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();
  const [isMexico, setIsMexico] = useState(false);

  useEffect(() => {
    setIsMexico(isUserInMexico());
  }, []);

  const budgetOptions = useMemo(() => {
    const ranges = isMexico
      ? [
          { label: '$10K - $15K MXN', short: '10K-15K', value: 'r1' },
          { label: '$15K - $20K MXN', short: '15K-20K', value: 'r2' },
          { label: '$20K - $25K MXN', short: '20K-25K', value: 'r3' },
          { label: '$25K - $30K MXN', short: '25K-30K', value: 'r4' },
          { label: '$30K+ MXN', short: '30K+', value: 'r5' },
        ]
      : [
          { label: '$1K - $3K', short: '1K-3K', value: 'r1' },
          { label: '$3K - $5K', short: '3K-5K', value: 'r2' },
          { label: '$5K - $10K', short: '5K-10K', value: 'r3' },
          { label: '$10K - $25K', short: '10K-25K', value: 'r4' },
          { label: '$25K+', short: '25K+', value: 'r5' },
        ];
    return ranges;
  }, [isMexico]);

  const initialIndex = useMemo(() => {
    const idx = budgetOptions.findIndex(opt => opt.value === formData.budget);
    return idx !== -1 ? idx : 2;
  }, [formData.budget, budgetOptions]); // Agregamos dependencias

  const [sliderValue, setSliderValue] = useState(initialIndex);

  useEffect(() => {
    // Si no hay un presupuesto guardado, inicializamos el Store con el valor por defecto del slider (índice 2)
    if (!formData.budget) {
      updateField('budget', budgetOptions[2].value);
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
            {t('brief.steps.step8.title')}{' '}
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
            max="4"
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
