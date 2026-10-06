import { BriefData } from '../types/type';

/**
 * Un borrador cuenta como empezado cuando hay algo que valga la pena retomar.
 * Los campos opcionales no entran: tenerlos vacíos no significa progreso.
 */
export const hasBriefDraft = (formData: BriefData): boolean =>
  Boolean(
    formData.name ||
      formData.email ||
      formData.company ||
      formData.projectName ||
      formData.projectDescription ||
      formData.projectType ||
      formData.features.length > 0 ||
      formData.designStatus,
  );
