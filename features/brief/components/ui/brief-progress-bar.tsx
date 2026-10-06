'use client';
import { useTranslation } from 'react-i18next';
import { useBriefStore } from '../../store/useBriefStore';
import { getFlow } from '../../utils/flow';
import { cn } from '@/lib/utils';

export const BriefProgressBar = () => {
  const stepId = useBriefStore(state => state.stepId);
  const formData = useBriefStore(state => state.formData);
  const { t } = useTranslation();

  // El total sale del flujo derivado, asi que saltarse el paso de estilo
  // acorta la barra en vez de dejar un hueco que nunca se llena.
  const flow = getFlow(formData);
  const totalSteps = flow.length;
  const currentNumber = flow.indexOf(stepId) + 1;
  const progress = Math.round((currentNumber / totalSteps) * 100);

  return (
    <div className="mx-auto mb-8 w-full space-y-4">
      <div className="flex items-end justify-between font-mono text-[10px] font-bold tracking-widest uppercase">
        <span className="text-gray-400">
          {t('brief.step')} <span className="text-black">{currentNumber}</span> {t('brief.of')}{' '}
          {totalSteps}
        </span>
        <span className="text-green-brutalist">{progress}%</span>
      </div>

      <div className="relative w-full">
        <div className="h-[2px] w-full bg-gray-100" />

        <div
          className="bg-green-brutalist absolute top-0 left-0 h-[2px] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />

        <div className="absolute -top-[3px] hidden w-full justify-between md:flex">
          {flow.map((id, index) => (
            <div
              key={id}
              className={cn(
                'h-2 w-2 rounded-full transition-colors duration-300',
                index < currentNumber ? 'bg-green-brutalist' : 'bg-gray-200',
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
