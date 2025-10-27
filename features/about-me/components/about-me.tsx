'use-client';

import { t } from 'i18next';
import Image from 'next/image';
import AboutMeImg from '../assets/about-me.svg';
import { NeobrutalistButton } from '@/features/header';

export default function AboutMe() {
  return (
    <section className="max-w-8xl flex flex-col justify-between p-10 md:flex-row">
      <div>
        <h3 className="pb-6 text-4xl font-bold">{t('aboutMe.title')}</h3>
        <p className="max-w-2xl pb-5 text-lg">{t('aboutMe.description')}</p>
        <NeobrutalistButton variant="white" href="/" text="Know me better" />
      </div>
      <div>
        <Image width={400} height={400} src={AboutMeImg} alt="asdad" />
      </div>
    </section>
  );
}
