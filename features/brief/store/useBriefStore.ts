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
      },
      currentStep: 0, //Intro

      updateField: (field, value) =>
        set(state => ({
          formData: { ...state.formData, [field]: value },
        })),

      nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
      prevStep: () => set(state => ({ currentStep: state.currentStep - 1 })),

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
    }),
    {
      name: 'brief-storage',
    },
  ),
);
