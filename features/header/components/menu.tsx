'use client';
import Image from 'next/image';
import MenuIcon from '../svg/jam_menu.svg';
import { cn } from '@/utils/functions';

interface MenuProps {
  className?: string;
}

export default function Menu({ className }: MenuProps) {
  return (
    <>
      <Image src={MenuIcon} alt="Portfolio's logo" className={cn(className)} />
    </>
  );
}
