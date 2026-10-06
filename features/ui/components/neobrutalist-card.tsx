'use client';

import { cn } from '@/utils/functions';
import { NeobrutalistCardProps } from '../types/type';

export default function NeobrutalistCard({
  children,
  className,
  onClick,
  variant = 'interactive',
}: NeobrutalistCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'rounded-none border-4 border-black bg-white text-black shadow-[8px_8px_0_#000] outline-none',
        'flex flex-col font-mono',
        'h-full w-full',
        variant === 'interactive'
          ? [
              'cursor-pointer p-4 text-[18px] font-semibold transition duration-300 ease-in-out',
              'items-center justify-center gap-5',
              'hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000]',
            ]
          : 'p-6',
        className
      )}
    >
      {children}
    </div>
  );
}
