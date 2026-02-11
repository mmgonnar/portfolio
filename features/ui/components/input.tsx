'use client';

import { cn } from '@/utils/functions';
import { InputsProps } from '../types/type';

export default function Input({
  label,
  className,
  type,
  id,
  required,
  placeholder,
}: InputsProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        className={cn(
          'text-sm font-bold text-neutral-400 uppercase',
          className
        )}
      >
        {label}
      </label>
      <input
        required={required}
        placeholder={placeholder}
        id={id}
        type={type}
        className={cn(
          'border-[3px] border-black bg-white p-3 font-mono outline-none',
          'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none',
          className
        )}
      />
    </div>
  );
}
