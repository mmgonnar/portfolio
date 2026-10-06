import { BriefData, BudgetKey, FeatureKey, ProjectType } from '../types/type';

export type ScopeLevel = 'basic' | 'medium' | 'advanced';
export type Currency = 'MXN' | 'USD';

/**
 * Los precios y pesos de este módulo salen de la nota de bóveda:
 *   ~/Library/Mobile Documents/com~apple~CloudDocs/Obsidian/Personal/
 *     02-Areas/Freelance/Precios y servicios.md
 *
 * Si esa nota cambia, este archivo cambia con ella: es la única copia que el
 * frontend usa para estimar alcance.
 */
export const PROJECT_TYPE_WEIGHT: Record<Exclude<ProjectType, ''>, number> = {
  landing: 1,
  website: 2,
  redesign: 2,
  other: 2,
  web_app: 4,
  dashboard: 4,
};

export const FEATURE_WEIGHT: Record<FeatureKey, number> = {
  seo: 1,
  deployment: 1,
  forms_emails: 1,
  auth: 2,
  database: 2,
  integrations: 2,
  multi_language: 2,
  admin_dashboard: 3,
};

/** El diseño UI/UX pedido como servicio adicional pesa en el alcance. */
export const DESIGN_QUOTE_WEIGHT = 2;

const LEVEL_THRESHOLDS = { basic: 4, medium: 9 } as const;

/** Dónde arranca el slider según el alcance. Los rangos nunca se ocultan. */
export const LEVEL_FLOOR: Record<ScopeLevel, BudgetKey> = {
  basic: 'r1',
  medium: 'r2',
  advanced: 'r3',
};

export const STARTS_FROM: Record<Currency, Record<ScopeLevel, string>> = {
  MXN: { basic: '$8,000 MXN', medium: '$15,000 MXN', advanced: '$40,000 MXN' },
  USD: { basic: '$500 USD', medium: '$1,200 USD', advanced: '$3,000 USD' },
};

interface BudgetBand {
  value: BudgetKey;
  short: string;
  min?: string;
  max?: string;
}

export const BUDGET_BANDS: Record<Currency, BudgetBand[]> = {
  MXN: [
    { value: 'r1', short: '<15K', max: '$15,000' },
    { value: 'r2', short: '15-40K', min: '$15,000', max: '$40,000' },
    { value: 'r3', short: '40-80K', min: '$40,000', max: '$80,000' },
    { value: 'r4', short: '80K+', min: '$80,000' },
  ],
  USD: [
    { value: 'r1', short: '<1.2K', max: '$1,200' },
    { value: 'r2', short: '1.2-3K', min: '$1,200', max: '$3,000' },
    { value: 'r3', short: '3-6K', min: '$3,000', max: '$6,000' },
    { value: 'r4', short: '6K+', min: '$6,000' },
  ],
};

type ScopeInput = Pick<BriefData, 'projectType' | 'features' | 'wantsDesignQuote'>;

export const getScopeWeight = ({ projectType, features, wantsDesignQuote }: ScopeInput): number => {
  const typeWeight = projectType === '' ? 0 : PROJECT_TYPE_WEIGHT[projectType];
  const featureWeight = (features || []).reduce((total, key) => total + FEATURE_WEIGHT[key], 0);
  const designWeight = wantsDesignQuote ? DESIGN_QUOTE_WEIGHT : 0;

  return typeWeight + featureWeight + designWeight;
};

export const getScopeLevel = (weight: number): ScopeLevel => {
  if (weight <= LEVEL_THRESHOLDS.basic) return 'basic';
  if (weight <= LEVEL_THRESHOLDS.medium) return 'medium';
  return 'advanced';
};

export const getScope = (formData: ScopeInput) => {
  const weight = getScopeWeight(formData);
  return { weight, level: getScopeLevel(weight) };
};

/**
 * Las cifras viven aquí y el idioma en los patrones under/between/plus, así el
 * dinero no se duplica en dos locales por dos monedas.
 */
export const formatBudgetBand = (
  value: BudgetKey,
  currency: Currency,
  t: (key: string, options?: Record<string, unknown>) => string,
): string => {
  const band = BUDGET_BANDS[currency].find(b => b.value === value);
  if (!band) return '';

  const pattern = band.min && band.max ? 'between' : band.max ? 'under' : 'plus';
  return t(`brief.steps.budget.${pattern}`, { min: band.min, max: band.max });
};
