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
    <div
      id={id}
      className={cn(className, 'bg-neon flex h-40 w-full items-center md:h-68')}
    >
      <div className="m-auto flex w-full max-w-7xl items-center justify-between px-4 md:h-70 md:px-14">
        <div
          className={cn(
            'custom-md:text-2xl custom-sm:text-[15px] flex items-start justify-between gap-4 font-mono text-base text-[10px] text-neutral-600 md:text-lg',
            terminalContentClassName
          )}
        >
          {terminalContent}
        </div>
        <div className={cn(childrenClassName)}>{children}</div>
      </div>
    </div>
  );
}
