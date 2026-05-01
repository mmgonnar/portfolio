'use client';

import { cn } from '@/utils/functions';
import { labelIcons, labelVariants } from '../utils/constants';
import { LabelProps } from '../types/type';

export default function Label({ labelText, variant = 'default', icon, className }: LabelProps) {
  const IconComponent = labelIcons[icon as keyof typeof labelIcons];

  return (
    <div className="w-fit">
      <div
        className={cn(
          'flex items-center justify-start gap-2 rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase italic',
          labelVariants[variant],
          className,
        )}
      >
        {IconComponent && <IconComponent size={16} className="shrink-0" />}
        <p className="whitespace-nowrap">{labelText}</p>
      </div>
    </div>
  );
}
