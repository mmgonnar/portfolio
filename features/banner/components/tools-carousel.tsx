'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { languagesTools } from '../utils/constants';

// 🔧 MODIFICAR AQUÍ: tecnologías a mostrar — editar languagesTools en constants.ts
// 🔧 MODIFICAR AQUÍ: velocidad de animación — cambiar "60s" en style.animation
// 🔧 MODIFICAR AQUÍ: tamaño de iconos — clases w-* h-* en <img>

const ALL_ITEMS = [...languagesTools, ...languagesTools];

export function ToolsCarousel() {
  const [isPaused, setIsPaused] = React.useState(false);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        className="w-300 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
          setHoveredIndex(null);
        }}
      >
        <div
          className="flex w-max items-center gap-4 md:gap-6"
          style={{
            animation: `marquee 60s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {ALL_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              className="relative flex shrink-0 flex-col items-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.src} alt={item.name} className="h-7 w-7 md:h-9 md:w-9" />
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.span
                    key="tooltip"
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-md bg-neutral-900 px-1.5 py-0.5 text-[10px] whitespace-nowrap text-white md:text-xs"
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
