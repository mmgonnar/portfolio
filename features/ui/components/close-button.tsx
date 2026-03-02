import { cn } from '@/utils/functions';

interface ClosseButtonProps {
  onClick: () => void;
  variant?: 'inside' | 'outside';
  className?: string;
}

export default function CloseButton({
  onClick,
  className,
  variant = 'outside',
}: ClosseButtonProps) {
  const positions = {
    outside: '-top-8 -right-4 md:-right-8',
    inside: 'top-2 right-2',
  };
  return (
    <button
      onClick={onClick}
      type="button"
      aria-label="Cerrar"
      className={cn(
        'absolute z-50 p-1',
        'cursor-pointer text-xl font-bold transition-all hover:scale-110 active:scale-90',
        positions[variant],
        className
      )}
    >
      <span className="flex h-6 w-6 items-center justify-center">X</span>
    </button>
  );
}
