import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export interface ApiCallToastOptions {
  loading: string;
  successMessage: string;
  errorMessage: string;
  redirectTo?: string;
  router?: AppRouterInstance;
}
