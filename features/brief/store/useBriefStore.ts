import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { BriefData, FeatureKey } from '../types/type';
import { getFlow, StepId } from '../utils/flow';

interface BriefState {
  formData: BriefData;
  stepId: StepId;
  /** Dónde se quedó el borrador, para poder ofrecer retomarlo desde el intro. */
  lastStepId: StepId;
  isStepValid: boolean;
  files: File[];
  updateField: <K extends keyof BriefData>(field: K, value: BriefData[K]) => void;
  setFiles: (files: File[]) => void;
  addFiles: (files: File[]) => number;
  toggleFeature: (feature: FeatureKey) => void;
  nextStep: () => void;
  prevStep: () => void;
  goToStep: (stepId: StepId) => void;
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
  designStatus: '',
  designLink: '',
  wantsDesignQuote: false,
  visualStyle: '',
  visualReferences: '',
  brandColors: '',
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
    (set, get) => ({
      formData: INITIAL_FORM_DATA,
      files: [],
      stepId: 'intro',
      lastStepId: 'intro',
      isStepValid: false,

      updateField: (field, value) =>
        set(state => ({
          formData: { ...state.formData, [field]: value },
        })),

      setFiles: files => set({ files }),

      addFiles: (incoming: File[]) => {
        const key = (f: File) => `${f.name}-${f.size}-${f.lastModified}`;
        const existing = new Set(get().files.map(key));
        const unique = incoming.filter(f => !existing.has(key(f)));
        set({ files: [...get().files, ...unique] });
        return incoming.length - unique.length; // cuántos se ignoraron
      },

      // Se guarda la clave, nunca el titulo traducido: un cambio de idioma a
      // media captura no debe perder lo que el cliente ya selecciono.
      toggleFeature: feature =>
        set(state => {
          const current = state.formData.features || [];
          const updated = current.includes(feature)
            ? current.filter(f => f !== feature)
            : [...current, feature];

          return {
            formData: { ...state.formData, features: updated },
          };
        }),

      // El flujo se deriva de formData en cada movimiento, asi que el paso de
      // estilo aparece o desaparece sin que nadie recalcule indices.
      nextStep: () =>
        set(state => {
          if (state.stepId === 'intro') {
            const first = getFlow(state.formData)[0];
            return { stepId: first, lastStepId: first };
          }
          if (state.stepId === 'review') return { stepId: 'success', lastStepId: 'success' };
          if (state.stepId === 'success') return {};

          const flow = getFlow(state.formData);
          const index = flow.indexOf(state.stepId);
          if (index === -1 || index === flow.length - 1) return {};

          return { stepId: flow[index + 1], lastStepId: flow[index + 1] };
        }),

      prevStep: () =>
        set(state => {
          const flow = getFlow(state.formData);
          const index = flow.indexOf(state.stepId);
          if (index <= 0) return { stepId: 'intro' };

          return { stepId: flow[index - 1], lastStepId: flow[index - 1] };
        }),

      // Volver al intro no mueve lastStepId: es justo lo que permite ofrecer
      // retomar el borrador donde se quedó.
      goToStep: stepId =>
        set(state => ({
          stepId,
          lastStepId: stepId === 'intro' ? state.lastStepId : stepId,
        })),

      setStepValid: isValid => set({ isStepValid: isValid }),

      resetBrief: () =>
        set({
          stepId: 'intro',
          lastStepId: 'intro',
          isStepValid: false,
          files: [],
          formData: INITIAL_FORM_DATA,
        }),
    }),
    {
      name: 'brief-storage',
      version: 2,
      // v1 guardaba currentStep numerico y features como titulos traducidos.
      // El texto se conserva, las features se descartan porque ya no son
      // claves validas, y se vuelve al intro porque el indice viejo no
      // corresponde a ningun paso del flujo nuevo.
      migrate: persisted => {
        const old = (persisted ?? {}) as Partial<BriefState> & { currentStep?: number };
        const { currentStep: _currentStep, ...rest } = old;

        return {
          ...rest,
          stepId: 'intro' as StepId,
          lastStepId: 'intro' as StepId,
          isStepValid: false,
          formData: {
            ...INITIAL_FORM_DATA,
            ...(old.formData ?? {}),
            features: [],
            designStatus: '',
            wantsDesignQuote: false,
            budget: '',
          },
        } as BriefState;
      },
      // Los File no se pueden serializar, por eso quedan fuera.
      // Al llegar a 'success' se guarda un borrador vacio en vez del enviado:
      // el estado en memoria sigue intacto para pintar la pantalla de exito,
      // pero una recarga arranca limpia. Va aqui y no en el submit porque
      // cualquier set() posterior volveria a escribir el borrador completo.
      partialize: state => {
        const { files, ...rest } = state;

        if (state.stepId === 'success') {
          return {
            ...rest,
            stepId: 'intro' as StepId,
            lastStepId: 'intro' as StepId,
            isStepValid: false,
            formData: INITIAL_FORM_DATA,
          };
        }

        return rest;
      },
    },
  ),
);
