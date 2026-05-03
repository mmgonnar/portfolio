'use client';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { cn } from '@/utils/functions';

export const BriefProgressBar = () => {
  const currentStep = useBriefStore(state => state.currentStep);
  const totalSteps = 11;
  const progress = Math.round((currentStep / totalSteps) * 100);
  const { t } = useTranslation();

  return (
    <div className="mx-auto mb-10 w-full space-y-4">
      <div className="flex items-end justify-between font-mono text-[10px] font-bold tracking-widest uppercase">
        <span className="text-gray-400">
          {t('brief.step')} <span className="text-black">{currentStep}</span> {t('brief.of')}{' '}
          {totalSteps}
        </span>
        <span className="text-green-brutalist">{progress}%</span>
      </div>

      {/* Contenedor de la barra y puntos */}
      <div className="relative w-full">
        <div className="h-[2px] w-full bg-gray-100" />

        <div
          className="bg-green-brutalist absolute top-0 left-0 h-[2px] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />

        {/* PUNTOS INDICADORES */}
        <div className="absolute -top-[3px] hidden w-full justify-between md:flex">
          {[...Array(totalSteps)].map((_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber <= currentStep;

            return (
              <div
                key={stepNumber}
                className={cn(
                  'h-2 w-2 rounded-full transition-colors duration-300',
                  isCompleted ? 'bg-green-brutalist' : 'bg-gray-200',
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
