'use client';
import { forwardRef } from 'react';
import { cn } from '@/utils/functions';
import { InputsProps } from '../types/type';

const BriefInput = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputsProps>(
  ({ label, className, type, placeholder, error, ...props }, ref) => {
    const styles = cn(
      'w-full bg-transparent border-b border-gray-300 py-4 px-2 text-xl font-light transition-all outline-none',
      'placeholder:text-gray-300',

      'focus:border-green-brutalist focus:ring-1 focus:ring-green-brutalist focus:border-b-4',

      error && 'border-red-500 focus:border-red-500 focus:ring-red-500',

      className,
    );

    return (
      <div className="flex w-full flex-col">
        {label && (
          <label className="mb-1 font-mono text-sm font-bold tracking-widest text-neutral-400 uppercase">
            {label}
          </label>
        )}

        {type === 'textarea' ? (
          <textarea
            {...(props as any)}
            ref={ref as any}
            placeholder={placeholder}
            className={cn(styles, 'min-h-[120px] resize-none')}
          />
        ) : (
          <input
            {...props}
            ref={ref as any}
            type={type}
            placeholder={placeholder}
            className={styles}
          />
        )}

        {/* Manejo de errores  */}
        {error && (
          <span className="mt-2 font-mono text-xs font-bold tracking-tighter text-red-500 uppercase">
            {error}
          </span>
        )}
      </div>
    );
  },
);

BriefInput.displayName = 'BriefInput';
export default BriefInput;
