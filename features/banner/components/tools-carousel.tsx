'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { languagesTools } from '../utils/constants';

export function ToolsCarousel() {
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        /* Ralentiza un poco en móviles para mantener la legibilidad */
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 20s;
          }
        }
        /* Solo pausa la animación si el dispositivo admite hover real (PC) */
        @media (hover: hover) {
          .group:hover .animate-marquee {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* Contenedor principal con máscara desvanecida adaptable */}
      <div className="group relative w-full max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4">
        {/* Envoltura interna que junta los dos bloques idénticos */}
        <div className="flex w-max items-center">
          {/* BLOQUE 1: Contenedor original */}
          <div className="animate-marquee flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8">
            {languagesTools.map((item, index) => (
              <motion.div
                key={`b1-${index}`}
                className="relative flex shrink-0 flex-col items-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              >
                <Image
                  src={item.src}
                  alt={item.name}
                  width={36}
                  height={36}
                  unoptimized
                  className="h-7 w-7 md:h-9 md:w-9"
                />
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.span
                      key="tooltip-b1"
                      initial={{ opacity: 0, y: -2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -2 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-white md:text-xs"
                    >
                      {item.name}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* BLOQUE 2: Clon exacto para el efecto loop infinito sin saltos */}
          <div
            className="animate-marquee flex shrink-0 items-center gap-6 pr-6 md:gap-8 md:pr-8"
            aria-hidden="true"
          >
            {languagesTools.map((item, index) => {
              // Ajustamos el índice para que el hover del clon también active el tooltip
              const cloneIndex = index + languagesTools.length;
              return (
                <motion.div
                  key={`b2-${index}`}
                  className="relative flex shrink-0 flex-col items-center"
                  onMouseEnter={() => setHoveredIndex(cloneIndex)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    width={36}
                    height={36}
                    unoptimized
                    className="h-7 w-7 md:h-9 md:w-9"
                  />
                  <AnimatePresence>
                    {hoveredIndex === cloneIndex && (
                      <motion.span
                        key="tooltip-b2"
                        initial={{ opacity: 0, y: -2 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -2 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 rounded-md border border-neutral-800 bg-neutral-900 px-2 py-0.5 text-[10px] font-medium whitespace-nowrap text-white md:text-xs"
                      >
                        {item.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
