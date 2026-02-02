import { cn } from '@/utils/functions';
import Link from 'next/link';
import React from 'react';
import { NeobrutalistButtonProps } from '../types/type';
import { buttonVariants } from '../utils/constants';

export default function NeobrutalistButton({
  className,
  text,
  href,
  variant = 'default',
}: NeobrutalistButtonProps) {
  return href ? (
    <Link href={href}>
      <button
        className={cn(
          className,
          'bg-neon h-15 cursor-pointer rounded-none border-[4px] border-black p-3 font-mono text-[18px] font-semibold text-black shadow-[8px_8px_0_#000] transition duration-300 ease-in-out outline-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000]',
          buttonVariants[variant]
        )}
      >
        {text}
      </button>
    </Link>
  ) : (
    <button
      className={cn(
        className,
        'bg-neon h-15 cursor-pointer rounded-none border-[4px] border-black p-3 font-mono text-[18px] font-semibold text-black shadow-[8px_8px_0_#000] transition duration-300 ease-in-out outline-none hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_#000]',
        buttonVariants[variant]
      )}
    >
      {text}
    </button>
  );
}
