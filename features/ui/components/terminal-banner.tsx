'use client';
import { cn } from '@/utils/functions';
import { ReactNode } from 'react';

interface TerminalBannerProps {
  children?: ReactNode;
  terminalContent?: ReactNode;
  className?: string;
  childrenClassName?: string;
}

export default function TerminalBanner({
  children,
  terminalContent,
  className,
  childrenClassName,
}: TerminalBannerProps) {
  return (
    <section
      className={cn(
        'bg-neon flex h-40 w-full items-center justify-between px-4 md:h-80 md:px-10',
        className
      )}
    >
      <div
        className={cn(
          'flex items-start gap-4 font-mono text-[10px] text-neutral-700 md:text-lg'
        )}
      >
        {terminalContent}
      </div>
      <div className={cn(childrenClassName)}>{children}</div>
    </section>
  );
}
