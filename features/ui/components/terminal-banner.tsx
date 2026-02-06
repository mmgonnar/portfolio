'use client';
import { cn } from '@/utils/functions';
import { TerminalBannerProps } from '../types/type';

export default function TerminalBanner({
  children,
  terminalContent,
  className,
  childrenClassName,
  terminalContentClassName,
  id,
}: TerminalBannerProps) {
  return (
    <section
      id={id}
      className={cn(
        'bg-neon flex h-40 w-full items-center justify-between px-4 md:h-80 md:px-14',
        className
      )}
    >
      <div
        className={cn(
          'flex items-start justify-between gap-4 font-mono text-[10px] text-neutral-700 md:text-lg',
          terminalContentClassName
        )}
      >
        {terminalContent}
      </div>
      <div className={cn(childrenClassName)}>{children}</div>
    </section>
  );
}
