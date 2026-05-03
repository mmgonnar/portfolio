'use client';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { cn } from '@/utils/functions';

export const StepBudget = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

  // 1. Memorizamos las opciones para que la referencia sea estable
  const budgetOptions = useMemo(
    () => [
      { label: t('brief.steps.step6.ranges.r1'), value: 'r1' },
      { label: t('brief.steps.step6.ranges.r2'), value: 'r2' },
      { label: t('brief.steps.step6.ranges.r3'), value: 'r3' },
      { label: t('brief.steps.step6.ranges.r4'), value: 'r4' },
      { label: t('brief.steps.step6.ranges.r5'), value: 'r5' },
    ],
    [t],
  );

  // 2. Buscamos el índice inicial una sola vez
  const initialIndex = useMemo(() => {
    const idx = budgetOptions.findIndex(opt => opt.value === formData.budget);
    return idx !== -1 ? idx : 2;
  }, []); // Solo al montar el componente

  const [sliderValue, setSliderValue] = useState(initialIndex);

  // 3. Efecto para validar el paso (sin dependencias que causen bucles)
  useEffect(() => {
    setStepValid(true);
  }, [setStepValid]);

  // 4. Manejador de cambio manual para evitar el bucle del useEffect
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    // Solo actualizamos el store cuando el usuario mueve el slider
    updateField('budget', budgetOptions[newValue].value);
  };

  return (
    <BriefContainer>
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter text-black uppercase">
          {t('brief.steps.step6.title')}
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center space-y-12 py-16">
        <h3 className="font-mono text-6xl font-black tracking-tighter text-black transition-all duration-300">
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
            className="accent-green-brutalist [&::-webkit-slider-thumb]:bg-green-brutalist h-[2px] w-full cursor-pointer appearance-none bg-gray-200 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <div className="flex w-full justify-between px-2">
            {budgetOptions.map((opt, index) => (
              <span
                key={`budget-opt-${opt.value}-${index}`} // Llave garantizada y única
                className={cn(
                  'font-mono text-sm tracking-tighter uppercase transition-all duration-300',
                  sliderValue === index
                    ? 'text-green-brutalist scale-110 font-bold'
                    : 'text-gray-500',
                )}
              >
                {opt.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </BriefContainer>
  );
};
