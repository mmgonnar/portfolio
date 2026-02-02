'use client';

import { t } from 'i18next';
import Image from 'next/image';
import Link from 'next/link';
import { findMeIcons } from '../utils/constants';

export default function FindMe() {
  return (
    <>
      <p className="pb-3 text-lg">{t('bannerText.findMe')}</p>
      <div className="flex gap-3">
        {findMeIcons.map(item => {
          return (
            <Link key={item.name} href={item.href} target="_blank">
              <Image
                src={item.icon}
                alt="Email"
                className="w-8 flex-shrink-0 transition duration-200 hover:scale-110"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
