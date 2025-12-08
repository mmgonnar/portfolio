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

  console.log(modalOpen, 'asdasdsad');
  return (
    <div
      onClick={toggleModal}
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/30 backdrop-blur-[3px] transition-all duration-300 ease-in-out"
    >
      <NeobrutalistCard className="transition-none">
        <div
          onClick={e => e.stopPropagation()}
          className="mx-4 w-full max-w-lg"
        >
          {children}
        </div>
      </NeobrutalistCard>
    </div>
  );
}
