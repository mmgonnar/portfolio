'use -client';
import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/features/ui/components/carousel';
import Autoplay from 'embla-carousel-autoplay';

export function ToolsCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: 'start',
        loop: true,
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[350px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1 md:basis-1/3">
            <div className="p-1">
              <div>
                <span className="font-mono text-lg text-neutral-600 md:text-4xl">
                  {index + 1}
                </span>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
