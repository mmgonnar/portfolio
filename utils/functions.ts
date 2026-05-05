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
    error: (error: Error) => error.message || errorMessage,
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

export function formatBudgetRange(rangeKey: string): string {
  const isMexico = isUserInMexico();

  const ranges: Record<string, { usd: string; mxn: string }> = {
    r1: { usd: '$1K - $3K', mxn: '$10K - $15K MXN' },
    r2: { usd: '$3K - $5K', mxn: '$15K - $20K MXN' },
    r3: { usd: '$5K - $10K', mxn: '$20K - $25K MXN' },
    r4: { usd: '$10K - $25K', mxn: '$25K - $30K MXN' },
    r5: { usd: '$25K+', mxn: '$30K+ MXN' },
  };

  return ranges[rangeKey]?.[isMexico ? 'mxn' : 'usd'] || rangeKey;
}
