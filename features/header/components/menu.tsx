'use client';
import Image from 'next/image';
import MenuIcon from '../assets/menu.svg';
import { cn } from '@/utils/functions';
import { MenuProps } from '../types/types';

export default function Menu({ className }: MenuProps) {
  return (
    <>
      <Image src={MenuIcon} alt="Portfolio's logo" className={cn(className)} />
    </>
  );
}
