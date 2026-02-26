import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { toast } from 'react-hot-toast';
import { ApiCallToastOptions } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function apiCallToast<T>(
  fetch: Promise<T>,
  {
    loading,
    redirectTo,
    successMessage,
    errorMessage,
    router,
  }: ApiCallToastOptions
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
