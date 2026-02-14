'use client';
import { FooterSection } from '../index';

export default function Footer() {
  return (
    <section
      id="footer"
      className="m-auto flex w-full items-center justify-center bg-neutral-800"
    >
      <div className="flex w-full max-w-6xl items-center justify-between px-5 py-6 pb-4 md:px-10 md:py-5">
        <FooterSection />
      </div>
    </section>
  );
}
