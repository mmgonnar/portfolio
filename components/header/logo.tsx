'use client';

import Image from 'next/image';
import Logotipo from '../../icons/mmgonnar.svg';
import Link from 'next/link';

export default function Logo() {
  return (
    <div>
      <Link href="/">
        <Image src={Logotipo} alt="Portfolio's logo" className="w-30 md:w-full" />
      </Link>
    </div>
  );
}
