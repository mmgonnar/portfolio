'use client';

import { useTranslation } from 'react-i18next';
import { useContactForm } from '../hooks/useContactForm';
import { formFields } from '../utils/constants';
import { NeobrutalistButton } from '@/features/footer';
import Input from '@/features/ui/components/input';
import { ContactFormData, contactSchema } from '../utils/schema';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// export default function Form({ toggleModal }: { toggleModal: () => void }) {
//   const { t } = useTranslation();
//   const {
//     register,
//     handleSubmit,
//     onSubmit,
//     formState: { errors, isSubmitting },
//   } = useContactForm(toggleModal);

//   return (
//     <form
//       className="flex w-105 flex-col gap-8 p-4"
//       onSubmit={handleSubmit(onSubmit)}
//       noValidate
//     >
//       <h5 className="text-neutral-700">{t('form.heading')}</h5>

//       {formFields.map(field => (
//         <div key={field.name} className="flex flex-col gap-1">
//           <Input
//             id={field.name}
//             label={t(field.label)}
//             type={field.type}
//             placeholder={t(field.placeholder)}
//             {...register(field.name as any)}
//           />

//           {errors[field.name as keyof typeof errors] && (
//             <span className="text-xs font-bold text-red-500 uppercase">
//               {t(
//                 errors[field.name as keyof ContactFormData]?.message as string
//               )}
//             </span>
//           )}
//         </div>
//       ))}
//       <div
//         className="absolute -z-1 h-0 w-0 overflow-hidden opacity-0"
//         aria-hidden="true"
//       >
//         <input
//           type="text"
//           {...register('phone_extension')}
//           tabIndex={-1}
//           autoComplete="off"
//         />
//       </div>

//       <NeobrutalistButton
//         className="w-full"
//         text={isSubmitting ? t('button.sending') : t('button.submit')}
//         disabled={isSubmitting}
//       />

//       <p className="text-center text-neutral-400">{t('form.footerCopy')}</p>
//     </form>
//   );
// }

export default function Form({ toggleModal }: { toggleModal: () => void }) {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange', // Valida mientras escribes
  });

  const onSubmit = (data: ContactFormData) => {
    // Aquí llamas a tu apiCallToast con 'data'
    console.log('Datos listos para enviar:', data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mb-4 flex w-105 flex-col gap-2 p-4"
    >
      <h5 className="text-neutral-700">{t('form.heading')}</h5>
      {formFields.map(field => (
        <div key={field.name} className="mb-4">
          <Input
            id={field.name}
            label={t(field.label)}
            type={field.type}
            placeholder={t(field.placeholder)}
            {...register(field.name as any)}
          />
          {errors[field.name as keyof ContactFormData] && (
            <p className="mt-1 text-xs font-bold text-red-500 uppercase">
              {t(
                errors[field.name as keyof ContactFormData]?.message as string
              )}
            </p>
          )}
        </div>
      ))}
      <NeobrutalistButton
        type="submit"
        className="mt-2 w-full"
        text={isSubmitting ? t('button.sending') : t('button.submit')}
        disabled={isSubmitting}
      />
    </form>
  );
}
