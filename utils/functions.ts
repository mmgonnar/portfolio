import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-hot-toast';
import { ApiCallToastOptions } from './types';

/**
 * Forma minima que el backend devuelve cuando responde 200 con un fallo
 * logico dentro del cuerpo, en vez de lanzar.
 */
type ApiCallResult = {
  success?: boolean;
  message?: string;
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function apiCallToast<T>(
  fetch: Promise<T>,
  { loading, redirectTo, successMessage, errorMessage, router }: ApiCallToastOptions,
) {
  return toast.promise(fetch, {
    loading: loading,
    success: (response: T) => {
      const result = response as ApiCallResult | null;
      if (result && result.success === false) {
        throw new Error(result.message || errorMessage);
      }
      if (redirectTo && router) {
        router.push(redirectTo);
      }
      return successMessage;
    },
    // El mensaje configurado gana sobre el del error. Antes era al reves, asi
    // que el usuario veia cosas como "Failed to fetch" o el texto que
    // devolviera el servidor, y el errorMessage que pasaba cada llamada no se
    // usaba nunca.
    error: (error: Error) => errorMessage || error.message,
  });
}

const MEXICAN_TIMEZONES = [
  'America/Mexico_City',
  'America/Monterrey',
  'America/Guadalajara',
  'America/Tijuana',
  'America/Merida',
  'America/Cancun',
  'America/Chihuahua',
  'America/Puebla',
  'America/Leon',
];

let cachedIsMexico: boolean | null = null;

export function isUserInMexico(): boolean {
  if (typeof window === 'undefined') return false;

  if (cachedIsMexico !== null) return cachedIsMexico;

  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    cachedIsMexico = MEXICAN_TIMEZONES.includes(timezone);
    return cachedIsMexico;
  } catch {
    return false;
  }
}
