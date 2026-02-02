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
      <section className="m-auto grid max-w-7xl items-center gap-6 px-5 py-15 md:grid-cols-2 md:px-10 md:py-25">
        <NameSection />
        <DescriptionSection />
      </section>
      <VerticalBar />
    </>
  );
}
