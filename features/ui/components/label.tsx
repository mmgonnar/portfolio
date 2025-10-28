'use client';

import { cn } from '@/utils/functions';
import { labelIcons, labelVariants } from '../utils/constants';
import { LabelProps } from '../types/type';

export default function Label({
  labelText,
  variant = 'default',
  icon,
  className,
}: LabelProps) {
  const IconComponent = labelIcons[icon as keyof typeof labelIcons];

  return (
    <div className="max-w-150">
      <div
        className={cn(
          'm-auto flex items-center justify-center gap-1 rounded-full px-5 py-1 text-xs',
          labelVariants[variant],
          IconComponent != null && 'gap-2',
          className
        )}
      >
        {IconComponent && <IconComponent size={18}></IconComponent>}
        <p>{labelText}</p>
      </div>
    </div>
  );
}
