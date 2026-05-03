'use client';
import { useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import BriefContainer from '../ui/brief-container';
import { cn } from '@/utils/functions';

export const StepBudget = () => {
  const { t } = useTranslation();
  const { formData, updateField, setStepValid } = useBriefStore();

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

  const initialIndex = useMemo(() => {
    const idx = budgetOptions.findIndex(opt => opt.value === formData.budget);
    return idx !== -1 ? idx : 2;
  }, []);

  const [sliderValue, setSliderValue] = useState(initialIndex);

  useEffect(() => {
    setStepValid(true);
  }, [setStepValid]);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value);
    setSliderValue(newValue);

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
            className="accent-neon [&::-webkit-slider-thumb]:bg-neon h-[2px] w-full cursor-pointer appearance-none bg-gray-200 [&::-webkit-slider-thumb]:h-8 [&::-webkit-slider-thumb]:w-8 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-black [&::-webkit-slider-thumb]:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
          />

          <div className="flex w-full justify-between px-2">
            {budgetOptions.map((opt, index) => (
              <span
                key={`budget-opt-${opt.value}-${index}`}
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
