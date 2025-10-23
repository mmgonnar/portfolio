'use client';

import Image from 'next/image';
import Github from '../../assets/github.svg';
import Link from 'next/link';

export default function GithubIcon() {
  return (
    <div>
      <Link href="/">
        <Image
          src={Github}
          alt="Portfolio's logo"
          className="w-8  flex-shrink-0 transition-colors duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
}
