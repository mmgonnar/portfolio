'use client';

import { useEffect } from 'react';
import { ModalProps } from '../types/type';
import NeobrutalistCard from './neobrutalist-card';
import { cn } from '@/utils/functions';
import CloseButton from './close-button';

export default function Modal({
  children,
  toggleModal,
  modalOpen,
  className,
  classNameBackground,
  closeButtonVariant = 'outside',
}: ModalProps) {
  if (!modalOpen) {
    return null;
  }

  return (
    <div onClick={toggleModal} className={cn('z-10 h-full', className)}>
      <div
        className={cn(classNameBackground)}
        onClick={e => e.stopPropagation()}
      >
        <NeobrutalistCard
          className="relative h-full p-0 hover:transition-none"
          onClick={e => e.stopPropagation()}
        >
          <CloseButton onClick={toggleModal} variant={closeButtonVariant} />
          <div onClick={e => e.stopPropagation()} className="size-full">
            {children}
          </div>
        </NeobrutalistCard>
      </div>
    </div>
  );
}
