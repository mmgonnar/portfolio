'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { ToolsCarousel } from './tools-carousel';
import InfiniteScrollCards from './scroll-animation';

export default function VerticalBar() {
  return (
    <div className="bg-neon flex h-40 w-full items-center justify-between px-4 md:h-80 md:px-10">
      <div className="flex items-start gap-4 font-mono text-[10px] text-neutral-700 md:text-lg">
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
      </div>
      <div className="hidden md:block">
        <ToolsCarousel />
      </div>
    </div>
  );
}
