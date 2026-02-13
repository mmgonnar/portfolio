import { RefObject, useEffect } from 'react';

export const useOnClickOutside = (
  isOpen: boolean,
  ref: RefObject<HTMLElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    if (!isOpen) return;
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler, isOpen]);
};
