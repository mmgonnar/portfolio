'use client';
import { StepHeader } from '@/features/ui/components/step-header';
import { cn } from '@/lib/utils';
import { isUserInMexico } from '@/utils/functions';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { BUDGET_BANDS, formatBudgetBand, getScope, LEVEL_FLOOR, STARTS_FROM } from '../../utils/scope';
import BriefContainer from '../ui/brief-container';

export const StepBudget = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();
  const [isMexico, setIsMexico] = useState(false);

  useEffect(() => {
    setIsMexico(isUserInMexico());
  }, []);

  const currency = isMexico ? 'MXN' : 'USD';
  const scope = useMemo(() => getScope(formData), [formData]);

  const budgetOptions = useMemo(
    () =>
      BUDGET_BANDS[currency].map(band => ({
        value: band.value,
        short: band.short,
        label: formatBudgetBand(band.value, currency, t),
      })),
    [currency, t],
  );

  // Sin presupuesto elegido el slider arranca en el piso del alcance, no en el
  // centro: es la posición que corresponde a lo que el cliente describió.
  const floorIndex = budgetOptions.findIndex(opt => opt.value === LEVEL_FLOOR[scope.level]);
  const savedIndex = budgetOptions.findIndex(opt => opt.value === formData.budget);
  const [sliderValue, setSliderValue] = useState(savedIndex !== -1 ? savedIndex : floorIndex);

  useEffect(() => {
    if (!formData.budget) {
      setSliderValue(floorIndex);
      updateField('budget', budgetOptions[floorIndex].value);
    }
    setStepValid(true);
  }, [formData.budget, floorIndex, budgetOptions, updateField, setStepValid]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);
    updateField('budget', budgetOptions[newValue].value);
  };

  return (
    <BriefContainer>
      <StepHeader title={t('brief.steps.budget.title')}>
        {' '}
        <span className="font-mono text-2xl font-bold tracking-widest text-gray-400 uppercase">
          ({currency})
        </span>
      </StepHeader>

      <div className="flex flex-col items-center justify-center space-y-12 py-16">
        <h3 className="custom-sm:text-5xl font-mono text-4xl font-black tracking-tighter text-black transition-all duration-300 md:text-6xl">
          {budgetOptions[sliderValue]?.label}
        </h3>

        <div className="w-full space-y-8">
          <input
            type="range"
            min="0"
            max={budgetOptions.length - 1}
            step="1"
            value={sliderValue}
            onChange={handleSliderChange}
            className="accent-neon [&::-webkit-slider-thumb]:bg-neon h-[2px] w-full cursor-pointer appearance-none bg-gray-200 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <div className="flex w-full justify-between px-2">
            {budgetOptions.map((opt, index) => (
              <span
                key={opt.value}
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

        <p className="border-l-2 border-gray-200 pl-4 font-mono text-xs leading-relaxed tracking-wide text-gray-500">
          {t('brief.steps.budget.scopeNote', { amount: STARTS_FROM[currency][scope.level] })}
        </p>
      </div>
    </BriefContainer>
  );
};
