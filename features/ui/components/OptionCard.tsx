import { cn } from '@/utils/functions';
import { Check } from 'lucide-react';

interface OptionCardProps {
  title: string;
  desc: string;
  selected: boolean;
  onClick: () => void;
}

export const OptionCard = ({ title, desc, selected, onClick }: OptionCardProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      'relative flex w-full flex-col items-start gap-1 border-2 p-5 text-left transition-all duration-300',
      selected
        ? 'border-black bg-green-50/30 shadow-[4px_4px_0px_0px_#000]'
        : 'border-gray-100 hover:border-gray-200',
    )}
  >
    <div className="flex w-full items-center justify-between">
      <h4 className="text-sm font-bold tracking-tight text-black uppercase">{title}</h4>
      <div
        className={cn(
          'flex h-5 w-5 items-center justify-center border-2 transition-colors',
          selected ? 'border-green-brutalist bg-green-brutalist' : 'border-gray-200',
        )}
      >
        {selected && <Check className="h-3 w-3 text-white" strokeWidth={4} />}
      </div>
    </div>
    <p className="max-w-[90%] text-xs leading-relaxed text-gray-500">{desc}</p>
  </button>
);
