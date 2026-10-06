import { cn } from '@/lib/utils';

interface StepHeaderProps {
  title: string;
  description?: string;
  /** El paso de presupuesto y el de revisión usan un título más grande. */
  size?: 'default' | 'large';
  className?: string;
  children?: React.ReactNode;
}

export const StepHeader = ({
  title,
  description,
  size = 'default',
  className,
  children,
}: StepHeaderProps) => (
  <div className={cn('space-y-2', className)}>
    <h2
      className={cn(
        'tracking-tighter text-black',
        size === 'large' ? 'text-4xl font-black uppercase' : 'text-3xl font-bold',
      )}
    >
      {title}
      {children}
    </h2>
    {description && <p className="max-w-4xl text-gray-500">{description}</p>}
  </div>
);
