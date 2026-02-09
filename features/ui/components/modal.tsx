'use client';

import { useEffect } from 'react';
import { ModalProps } from '../types/type';
import NeobrutalistCard from './neobrutalist-card';
import { cn } from '@/utils/functions';

export default function Modal({
  children,
  toggleModal,
  modalOpen,
  className,
}: ModalProps) {
  if (!modalOpen) {
    return null;
  }

  return (
    <div onClick={toggleModal} className={cn('z-10 h-full', className)}>
      <div className={cn('h-full')} onClick={e => e.stopPropagation()}>
        <NeobrutalistCard
          className="relative h-full p-0 hover:transition-none"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={toggleModal}
            className={cn(
              'absolute top-2 right-3 z-11 cursor-pointer text-xl font-bold transition-transform hover:scale-110'
            )}
          >
            X
          </button>
          <div onClick={e => e.stopPropagation()} className="size-full">
            {children}
          </div>
        </NeobrutalistCard>
      </div>
    </div>
  );
}
