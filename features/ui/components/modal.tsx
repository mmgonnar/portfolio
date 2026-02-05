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
  // useEffect(() => {
  //   if (modalOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'unset';
  //   }
  // }, [modalOpen]);

  if (!modalOpen) {
    return null;
  }

  return (
    <div
      onClick={toggleModal}
      className={cn(
        'z-10 col-span-2 row-span-1 h-full bg-black/5 backdrop-blur-xs',
        // 'bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out',
        // 'col-span-1 col-start-2 col-end-2 row-start-1 -row-end-1',
        className
      )}
      // className={cn(
      //   'absolute top-0 z-50 col-span-full flex w-full items-start justify-start transition-all duration-300',
      //   // 'col-start-1 row-start-2',
      //   className
      // )}
      // className =
      // className={cn(
      //   'fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out'
      // )}
      // className="'absolute row-start-1' col-start-1 grid w-full grid-cols-2 grid-rows-2 items-start justify-start"
    >
      <div
        className={cn('z-20 h-full', className)}
        onClick={e => e.stopPropagation()}
      >
        <NeobrutalistCard
          className="relative h-full p-0 transition-none"
          onClick={e => e.stopPropagation()}
        >
          <button
            onClick={toggleModal}
            className={cn(
              'absolute top-2 right-3 z-10 cursor-pointer text-xl font-bold transition-transform hover:scale-110'
            )}
          >
            X
          </button>
          <div onClick={e => e.stopPropagation()} className="mx-4 w-full">
            {children}
          </div>
        </NeobrutalistCard>
      </div>
    </div>
  );
}
