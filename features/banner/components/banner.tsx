'use client';

import FindMe from './find-me';

interface BannerProps {
  text?: string;
}

export default function Banner({ text }: BannerProps) {
  return (
    <section className="grid grid-cols-2">
      <div>
        <p className="text-2xl">Hello world!</p>
        <h1 className="text-4xl font-black">Mariela Gonzalez</h1>
        <h2 className="text-xl">{'<Fullstack Web Developer />'}</h2>
      </div>
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
