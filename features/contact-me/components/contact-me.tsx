'use client';

import { NeobrutalistButton } from '@/features/footer';
import ContentSection from '@/features/ui/components/content-section';
import { TypeAnimation } from 'react-type-animation';

export default function ContactMe() {
  return (
    <section
      id="contact-me"
      className="gap-4p-10 flex w-full flex-col items-center justify-between md:gap-10 md:pt-15 md:pb-15"
    >
      <ContentSection
        title="Contact"
        text="¿Tienes un proyecto? Hablemos. Disponible para colaborar en proyectos web y diseño de interfaces. Enfoque en React/Next.js, Tailwind y buenas prácticas."
        align="center"
      />

      <div className="bg-neon custom-sm:flex-row flex h-40 w-full flex-col items-center justify-between px-4 md:h-80 md:px-20">
        <div className="custom-md:text-lg custom-sm:text-sm flex items-start gap-4 font-mono text-[10px] text-neutral-700">
          <TypeAnimation
            sequence={[
              'console> git init contact',
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
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="block">
          <NeobrutalistButton
            text="Contact me"
            variant="secondary"
            className="hover:bg-amber-400"
          />
        </div>
      </div>
    </section>
  );
}
