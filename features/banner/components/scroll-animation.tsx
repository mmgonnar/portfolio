// components/InfiniteScrollCards.jsx
'use client';

import React from 'react';
import { languagesTools } from '../utils/constants'; // Asegúrate de que esta constante exista y tenga tus datos
import Image from 'next/image'; // Usa el componente Image si las carátulas son archivos locales

// Duplicamos el array para que el scroll sea continuo (Lista A + Lista B)
const COVERS_TO_RENDER = [...languagesTools, ...languagesTools];

function InfiniteScrollCards() {
  return (
    // Contenedor que define el área de visión y oculta el desbordamiento
    <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
      {/* Contenedor que se animará */}
      <div
        className="scroll-container flex w-fit space-x-8"
        style={{ animationDuration: '30s' }}
      >
        {COVERS_TO_RENDER.map((item, index) => (
          <div
            key={item.name + index} // Usamos index para clave única dado que se duplican
            className="h-[200px] w-[150px] flex-shrink-0" // Define el tamaño de cada carátula
          >
            {/* Aquí va tu carátula. Usa Image o un contenedor con la imagen */}
            <div className="relative h-full w-full">
              <Image
                src={item.src}
                alt={item.name}
                fill
                sizes="150px"
                className="rounded-md object-cover shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteScrollCards;
