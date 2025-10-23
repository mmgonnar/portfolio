'use client';

import FindMe from './find-me';
import NameSection from './name-section';

interface BannerProps {
  text?: string;
}

export default function Banner({ text }: BannerProps) {
  return (
    <section className="grid md:grid-cols-2">
      <NameSection />
      <div>
        <p>
          Desarrolladora Web Fullstack Jr. con 2 años de experiencia en
          desarrollo web y 5 años en diseño web y UX/UI, combinando lo técnico
          con lo creativo para entregar soluciones digitales escalables y
          centradas en el usuario.
        </p>
        <FindMe />
      </div>
    </section>
  );
}
