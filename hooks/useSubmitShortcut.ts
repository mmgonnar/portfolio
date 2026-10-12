import { useCallback, useEffect } from 'react';

/**
 * Cmd+Enter en Mac, Ctrl+Enter en el resto, para avanzar el brief sin soltar el
 * teclado. Hermano de useEscapeKeyClose: mismo patron de listener en window con
 * limpieza al desmontar.
 *
 * Exige metaKey o ctrlKey, asi que un Enter solo nunca lo dispara y sigue
 * insertando saltos de linea dentro de un textarea.
 *
 * `enabled` debe ser la misma condicion que habilita el boton, no una copia
 * parecida: si los dos criterios se separan, el atajo acaba haciendo algo que
 * el boton no deja hacer.
 */
export const useSubmitShortcut = (onTrigger: () => void, enabled: boolean) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key !== 'Enter') return;
      if (!event.metaKey && !event.ctrlKey) return;

      event.preventDefault();
      onTrigger();
    },
    [onTrigger],
  );

  useEffect(() => {
    if (!enabled) return;
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled, handleKeyDown]);
};
