import { useEffect } from 'react';
import { FieldValues, UseFormWatch } from 'react-hook-form';

/**
 * Mantiene el store al dia con lo que el usuario escribe en un paso del brief.
 * T lo infiere el `watch` que recibe, asi que cada paso trae su propio esquema
 * y `updateField` del store (que acepta cualquier clave de BriefData) encaja
 * con todos ellos.
 */
export const useFormSync = <T extends FieldValues>(
  watch: UseFormWatch<T>,
  updateField: (field: keyof T & string, value: T[keyof T]) => void,
  formData: Partial<T>,
) => {
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (!name) return;

      const field = name as keyof T & string;
      if (value[field] !== formData[field]) {
        updateField(field, (value[field] ?? '') as T[keyof T]);
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, updateField, formData]);
};
