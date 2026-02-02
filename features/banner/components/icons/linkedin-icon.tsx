'use client';

import Image from 'next/image';
import Linkedin from '../../assets/linkedin.svg';
import Link from 'next/link';

export default function LinkedinIcon() {
  return (
    <div>
      <Link href="/">
        <Image
          src={Linkedin}
          alt="Portfolio's logo"
          className="w-8 flex-shrink-0 transition-colors duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
}
