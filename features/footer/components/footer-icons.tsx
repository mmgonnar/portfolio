'use client';

import Link from 'next/link';
import { footerIcons } from '../utils/constants';
import Image from 'next/image';

export default function FooterIcons() {
  return (
    <div className="flex gap-3">
      {footerIcons.map(item => {
        return (
          <Link key={item.name} href={item.href} target="_blank">
            <Image
              src={item.icon}
              alt={`${item.name} icon`}
              className="w-8 flex-shrink-0 opacity-40 transition duration-200 hover:scale-110 md:w-7"
            />
          </Link>
        );
      })}
    </div>
  );
}
