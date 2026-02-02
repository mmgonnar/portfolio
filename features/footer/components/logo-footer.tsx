'use client';
import Image from 'next/image';
import Link from 'next/link';
import Logotipo from '../assets/mmgonnar.svg';

export default function LogoFooter() {
  return (
    <div>
      <Link href="#header">
        <Image
          src={Logotipo}
          alt="Portfolio's logo"
          className="w-30 flex-shrink-0 cursor-pointer opacity-70"
        />
      </Link>
    </div>
  );
}
