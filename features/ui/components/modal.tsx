'use client';

import { ModalProps } from '../types/type';
import NeobrutalistCard from './neobrutalist-card';

export default function Modal({
  children,
  toggleModal,
  modalOpen,
}: ModalProps) {
  if (!modalOpen) {
    return null;
  }

  return (
    <div
      onClick={toggleModal}
      className="absolute inset-[150] z-50 flex w-full items-start justify-start transition-all duration-300 "
      // className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out"
    >
      <div
        className="relative w-full max-w-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={toggleModal}
          className="v absolute right-5 top-2 z-10 cursor-pointer text-xl font-bold transition-transform hover:scale-110"
        >
          X
        </button>
        <NeobrutalistCard className="w-full p-0 transition-none">
          <div onClick={e => e.stopPropagation()} className="mx-4 w-full">
            {children}
          </div>
        </NeobrutalistCard>
      </div>
    </div>
  );
}
