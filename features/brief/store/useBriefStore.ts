import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BriefData } from '../types/type';

interface BriefState {
  formData: BriefData;
  currentStep: number;
  isStepValid: boolean;
  updateField: (field: keyof BriefData, value: any) => void;
  toggleFeature: (featureTitle: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: number) => void;
  setStepValid: (isValid: boolean) => void;
  resetBrief: () => void;
}

export const useBriefStore = create<BriefState>()(
  persist(
    set => ({
      // --- ESTADO INICIAL ---
      formData: {
        name: '',
        email: '',
        projectName: '',
        projectType: '', // Recuerda actualizar esto a '' en tu type si es necesario
        description: '',
        features: [],
        budget: '',
        timeline: '',
        referenceLinks: '',
        additionalNotes: '',
      },
      currentStep: 0,
      isStepValid: false,

      // --- ACCIONES ---
      updateField: (field, value) =>
        set(state => ({
          formData: { ...state.formData, [field]: value },
        })),

      toggleFeature: (featureTitle: string) =>
        set(state => {
          const currentFeatures = state.formData.features || [];
          const updatedFeatures = currentFeatures.includes(featureTitle)
            ? currentFeatures.filter(f => f !== featureTitle)
            : [...currentFeatures, featureTitle];

          return {
            formData: { ...state.formData, features: updatedFeatures },
          };
        }),

      nextStep: () =>
        set(state => {
          const next = state.currentStep + 1;
          const MAX_STEPS = 11;
          return {
            currentStep: next <= MAX_STEPS ? next : state.currentStep,
          };
        }),

      prevStep: () =>
        set(state => ({
          currentStep: state.currentStep > 0 ? state.currentStep - 1 : 0,
        })),

      setCurrentStep: step => set({ currentStep: step }),

      setStepValid: isValid => set({ isStepValid: isValid }),

      resetBrief: () =>
        set({
          currentStep: 0,
          isStepValid: false,
          formData: {
            name: '',
            email: '',
            projectName: '',
            projectType: '',
            description: '',
            features: [],
            budget: '',
            timeline: '',
            referenceLinks: '',
            additionalNotes: '',
          },
        }),
    }),
    {
      name: 'brief-storage',
    },
  ),
);
