'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { findMeIcons } from '../utils/constants';

export default function FindMe() {
  const { t } = useTranslation();

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
                className="w-7 shrink-0 transition duration-200 hover:scale-110"
              />
            </Link>
          );
        })}
      </div>
    </>
  );
}
