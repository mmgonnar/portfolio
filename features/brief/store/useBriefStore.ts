import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BriefData } from '../types/type';

interface BriefState {
  formData: BriefData;
  currentStep: number;
  isStepValid: boolean;
  files: File[];
  updateField: (field: keyof BriefData, value: any) => void;
  setFiles: (files: File[]) => void;
  toggleFeature: (featureTitle: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  setCurrentStep: (step: number) => void;
  setStepValid: (isValid: boolean) => void;
  resetBrief: () => void;
}

const INITIAL_FORM_DATA: BriefData = {
  name: '',
  email: '',
  phone: '',
  company: '',
  projectName: '',
  projectType: '',
  projectDescription: '',
  features: [],
  featuresDetail: '',
  targetAudience: '',
  competitors: '',
  visualStyle: '',
  visualReferences: '',
  brandColors: false,
  brandAssetsReady: false,
  budget: '',
  timeline: '',
  flexibleBudget: false,
  additionalNotes: '',
  hasExistingSite: false,
  existingSiteUrl: '',
  locale: '',
};

export const useBriefStore = create<BriefState>()(
  persist(
    set => ({
      formData: INITIAL_FORM_DATA,
      files: [],
      currentStep: 0,
      isStepValid: false,

      updateField: (field, value) =>
        set(state => ({
          formData: { ...state.formData, [field]: value },
        })),

      setFiles: files => set({ files }),

      toggleFeature: featureTitle =>
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
          const MAX_STEPS = 16;
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
          files: [],
          formData: INITIAL_FORM_DATA, // ✅ Usar la constante para evitar errores
        }),
    }),
    {
      name: 'brief-storage',
      // No guardamos los archivos (Files) en LocalStorage porque daría error
      partialize: state => {
        const { files, ...rest } = state;
        return rest;
      },
    },
  ),
);
