import { BriefData } from '../types/type';

export type StepId =
  | 'intro'
  | 'contact'
  | 'type'
  | 'details'
  | 'features'
  | 'audience'
  | 'design'
  | 'style'
  | 'budget'
  | 'timeline'
  | 'notes'
  | 'review'
  /** Fuera de BASE_FLOW: la pantalla de exito no se cuenta en el progreso. */
  | 'success';

/** Pasos contados en la barra de progreso, en orden. */
const BASE_FLOW: StepId[] = [
  'contact',
  'type',
  'details',
  'features',
  'audience',
  'design',
  'style',
  'budget',
  'timeline',
  'notes',
  'review',
];

/** Pasos que se pueden dejar vacíos y aun así avanzar. */
export const OPTIONAL_STEPS: StepId[] = ['audience', 'notes'];

/**
 * El estilo solo se pregunta cuando hay algo que decidir: sin nada de diseño,
 * o con kit de marca y una cotización de UI/UX pedida. Con el diseño listo no
 * hay estética que elegir.
 */
export const needsStyleStep = (formData: Pick<BriefData, 'designStatus' | 'wantsDesignQuote'>) =>
  formData.designStatus === 'none' ||
  (formData.designStatus === 'brand_kit' && formData.wantsDesignQuote);

export const getFlow = (
  formData: Pick<BriefData, 'designStatus' | 'wantsDesignQuote'>,
): StepId[] => BASE_FLOW.filter(id => id !== 'style' || needsStyleStep(formData));

export const isOptionalStep = (stepId: StepId) => OPTIONAL_STEPS.includes(stepId);
