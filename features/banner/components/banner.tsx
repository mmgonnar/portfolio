'use client';

import DescriptionSection from './description-section';
import NameSection from './name-section';
import VerticalBar from './vertical-bar';

interface BannerProps {
  text?: string;
}

export default function Banner({ text }: BannerProps) {
  return (
    <>
      <section className="md:py-25 m-auto grid max-w-7xl items-center gap-6 px-5 py-14 md:grid-cols-2 md:px-10">
        <NameSection />
        <DescriptionSection />
      </section>
      <VerticalBar />
    </>
  );
}
