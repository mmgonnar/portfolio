import { useEffect } from 'react';
import { UseFormWatch } from 'react-hook-form';

export const useFormSync = (
  watch: UseFormWatch<any>,
  updateField: (field: any, value: any) => void,
  formData: any,
) => {
  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name && value[name] !== formData[name]) {
        updateField(name, value[name] ?? '');
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, updateField, formData]);
};
