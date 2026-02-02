'use client';
import { Copyright, FooterIcons, LogoFooter } from '../index';

export default function FooterSection() {
  return (
    <div className="m-auto flex w-full flex-col items-center gap-5 md:flex-row md:justify-between">
      <LogoFooter />
      <Copyright />
      <FooterIcons />
    </div>
  );
}
