import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-hot-toast';
import { ApiCallToastOptions } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function apiCallToast<T>(
  fetch: Promise<T>,
  { loading, redirectTo, successMessage, errorMessage, router }: ApiCallToastOptions,
) {
  return toast.promise(fetch, {
    loading: loading,
    success: (response: any) => {
      if (response && response.success === false) {
        throw new Error(response.message || errorMessage);
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
