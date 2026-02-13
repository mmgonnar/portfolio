'use client';

import Image from 'next/image';
import Mail from '../../assets/mail.svg';
import Link from 'next/link';

export default function MailIcon() {
  return (
    <div>
      <Link href="/">
        <Image
          src={Mail}
          alt="Email"
          className="w-8 flex-shrink-0 transition duration-200 hover:scale-110"
        />
      </Link>
    </div>
  );
}
