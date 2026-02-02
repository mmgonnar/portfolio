'use-client';

import { t } from 'i18next';
import Image from 'next/image';
import AboutMeImg from '../assets/about-me.svg';
import { NeobrutalistButton } from '@/features/header';
import ContentSection from '@/features/ui/components/content-section';

export default function AboutMe() {
  return (
    <section
      id="about-me"
      className="m-auto flex max-w-7xl flex-col items-center justify-between gap-4 p-10 md:flex-row md:gap-10 md:pt-15"
    >
      <div className="flex flex-col gap-6">
        <ContentSection
          align="left"
          title={t('aboutMe.title')}
          text={t('aboutMe.description')}
        />
        <NeobrutalistButton href="/" text={t('button.knowMeBetter')} />
      </div>
      <div>
        <Image width={400} height={400} src={AboutMeImg} alt="asdad" />
      </div>
    </section>
  );
}
