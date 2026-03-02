'use client';
import { forwardRef } from 'react';
import { cn } from '@/utils/functions';
import { InputsProps } from '../types/type';

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputsProps>(
  ({ label, className, type, placeholder, ...props }, ref) => {
    const styles = cn(
      'text-green-brutalist border-[3px] border-black bg-white p-3 font-mono outline-none',
      'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all focus:translate-x-1 focus:translate-y-1 focus:shadow-none',
      className
    );

    return (
      <div className="flex w-full flex-col gap-2">
        <label className="text-sm font-bold text-neutral-400 uppercase">
          {label}
        </label>
        {type === 'textarea' ? (
          <textarea
            {...props}
            ref={ref as any}
            placeholder={placeholder}
            rows={4}
            className={styles}
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
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
