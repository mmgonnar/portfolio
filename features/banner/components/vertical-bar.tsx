'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ToolsCarousel } from './tools-carousel';

export default function VerticalBar() {
  return (
    <div className="bg-neon flex h-40 w-full items-center justify-between px-4 md:h-80">
      <div className="flex items-start gap-4 font-mono text-neutral-700 md:text-lg">
        {/* <ToolsCarousel /> */}
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
          style={{ fontSize: '2em', display: 'inline-block' }}
          repeat={Infinity}
        />
        {/* <ToolsCarousel /> */}
      </div>
      <div>{/* <ToolsCarousel /> */}</div>
    </div>
  );
}
