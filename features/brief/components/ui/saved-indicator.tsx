'use client';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface SavedIndicatorProps {
  label: string;
  /** Cambia cada vez que hay algo nuevo que se guardó. */
  watchedValue: unknown;
  className?: string;
}

export const SavedIndicator = ({ label, watchedValue, className }: SavedIndicatorProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const isFirstRun = useRef(true);

  useEffect(() => {
    // El primer render no es un guardado, es la carga de la página.
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    setIsVisible(true);
    const timer = setTimeout(() => setIsVisible(false), 1800);
    return () => clearTimeout(timer);
  }, [watchedValue]);

  return (
    <span
      aria-live="polite"
      className={cn(
        'flex items-center gap-1 font-mono text-[10px] font-bold tracking-widest text-gray-400 uppercase transition-opacity duration-500',
        isVisible ? 'opacity-100' : 'opacity-0',
        className,
      )}
    >
      <Check size={10} strokeWidth={3} className="text-green-brutalist" />
      {label}
    </span>
  );
};
