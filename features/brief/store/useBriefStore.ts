import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BriefData } from '../types/type';

interface BriefState {
  formData: BriefData;
  currentStep: number;
  // Acciones
  updateField: (field: keyof BriefData, value: any) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetBrief: () => void;
  isStepValid: boolean;
  setStepValid: (isValid: boolean) => void;
}

export const useBriefStore = create<BriefState>()(
  persist(
    set => ({
      formData: {
        name: '',
        email: '',
        projectName: '',
        projectType: 'webapp',
        description: '',
        features: [],
        budget: '',
        timeline: '',
        isStepValid: false,
      },
      currentStep: 0, //Intro

      updateField: (field, value) =>
        set(state => ({
          formData: { ...state.formData, [field]: value },
        })),

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

      resetBrief: () =>
        set({
          currentStep: 0,
          formData: {
            name: '',
            email: '',
            projectName: '',
            projectType: 'webapp',
            description: '',
            features: [],
            budget: '',
            timeline: '',
          },
        }),
      isStepValid: false,
      setStepValid: isValid => set({ isStepValid: isValid }),
    }),
    {
      name: 'brief-storage',
    },
  ),
);
