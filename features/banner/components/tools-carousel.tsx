'use -client';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/features/ui/components/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { languagesTools } from '../utils/constants';
import Link from 'next/link';
import Image from 'next/image';

export function ToolsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
        axis: 'y',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="h-65 -mt-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/4">
            {languagesTools.map(item => {
              return (
                <div key={item.name} className="flex gap-4">
                  <Image
                    width={60}
                    height={60}
                    src={item.src}
                    alt={`${item.name} Logo`}
                    className="w-8 flex-shrink-0 pb-6  transition duration-200 hover:scale-110"
                  />
                </div>
              );
            })}
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
