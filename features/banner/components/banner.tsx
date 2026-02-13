'use client';

import { TypeAnimation } from 'react-type-animation';
import DescriptionSection from './description-section';
import NameSection from './name-section';
import TerminalBanner from '../../ui/components/terminal-banner';
import { ToolsCarousel } from './tools-carousel';

interface BannerProps {
  text?: string;
}

export default function Banner({ text }: BannerProps) {
  return (
    <>
      <section className="m-auto grid max-w-7xl items-center gap-6 px-5 py-15 md:grid-cols-2 md:px-10 md:py-15">
        <NameSection />
        <DescriptionSection />
      </section>
      <TerminalBanner
        childrenClassName="hidden md:block"
        terminalContent={
          <TypeAnimation
            sequence={[
              'console> git init portfolio',
              1000,
              'console> git add .',
              1000,
              'console> git clone mmgonnar',
              1000,
              'console> git pull',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        }
      >
        <ToolsCarousel />
      </TerminalBanner>
    </>
  );
}
