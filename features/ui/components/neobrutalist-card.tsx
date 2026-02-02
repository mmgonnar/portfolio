'use client';

import { cn } from '@/utils/functions';
import { NeobrutalistCardProps } from '../types/type';

export default function NeobrutalistCard({
  children,
  className,
  onClick,
}: NeobrutalistCardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'cursor-pointer rounded-none border-4 border-black bg-white p-4 text-[18px] font-semibold text-black shadow-[8px_8px_0_#000] transition duration-300 ease-in-out outline-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000]',
        'flex flex-col items-center justify-center gap-5 font-mono',
        className
      )}
    >
      {children}
    </div>
  );
}
