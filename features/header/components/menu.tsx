'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import MenuIcon from '../assets/menu.svg';
import { cn } from '@/utils/functions';
import { MenuProps } from '../types/types';

export default function Menu({ className }: MenuProps) {
  const { t } = useTranslation();

  return (
    <>
      <Image src={MenuIcon} alt={t('button.openMenu')} className={cn(className)} />
    </>
  );
}
