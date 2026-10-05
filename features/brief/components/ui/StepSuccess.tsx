'use client';
import { useTranslation } from 'react-i18next';
import { Check } from 'lucide-react';
import BriefContainer from '../ui/brief-container';
import { Copyright, NeobrutalistButton } from '@/features/footer';

export const StepSuccess = () => {
  const { t } = useTranslation();

  return (
    <BriefContainer>
      <div className="animate-in fade-in zoom-in-95 flex flex-col items-center justify-center space-y-8 py-12 text-center duration-700 md:py-20">
        {/* ÍCONO BRUTALISTA */}
        <Check size={70} strokeWidth={3} className="text-green-600" />

        <div className="space-y-4">
          <h2 className="text-5xl leading-none font-black tracking-tighter text-black uppercase italic md:text-7xl">
            {t('brief.success.title')}
          </h2>
          <p className="mx-auto max-w-md text-sm leading-relaxed font-medium text-gray-600 md:text-base">
            {t('brief.success.message')}
          </p>
        </div>

        {/* BOTÓN DE RETORNO */}

        <NeobrutalistButton
          onClick={() => (window.location.href = '/')}
          text={t('button.backHome')}
          className="cursor-pointer"
        />

        {/* FIRMA EDITORIAL */}
        <Copyright className="pt-10 text-neutral-700" />
      </div>
    </BriefContainer>
  );
};
