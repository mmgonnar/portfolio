'use client';

import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import { cn } from '@/utils/functions';
import Image from 'next/image';
import { ProjectCardProps } from '../types/types';

export default function ProjectCard({
  title,
  description,
  technologies,
  logo,
  className,
  onClick,
  modalOpen,
}: ProjectCardProps) {
  return (
    // fill={false}: al abrir el modal, este entra al grid como un item mas y
    // ensancha su fila. Con h-full la tarjeta se estiraba con la fila y su
    // contenido, centrado, quedaba empujado hacia abajo. Sin h-full conserva su
    // alto propio y la fila puede crecer sin arrastrarla.
    <NeobrutalistCard
      fill={false}
      onClick={onClick}
      className={cn(
        'm-auto grid cursor-pointer grid-cols-1 justify-center gap-5 p-6 md:w-full md:grid-cols-[1fr_auto]',
        className,
        modalOpen ? 'opacity-100' : 'opacity-100',
        // Solo transform y sombra. transition-all animaba tambien el alto, asi
        // que al cerrar el modal la tarjeta tardaba medio segundo en recuperar
        // su tamano y durante ese rato los iconos cruzaban la sombra.
        'transition-[transform,box-shadow] duration-300 ease-in-out'
      )}
    >
      <div
        id="card_content"
        className="m-auto flex w-full flex-col justify-center gap-6 md:text-left"
      >
        <div className="flex items-end justify-between gap-1">
          <h3
            id="card__title"
            className="text-green-brutalist line-clamp-1 w-full text-lg tracking-tight md:tracking-normal"
          >
            {title}
          </h3>
          {logo && (
            <div>
              <Image
                src={logo}
                width={300}
                height={100}
                alt=""
                className="block w-10 bg-cover md:hidden"
              />
            </div>
          )}
        </div>
        <p
          id="card__description"
          className="line-clamp-2 text-sm font-normal"
        >
          {description}
        </p>
        <div
          id="card__container"
          className="m-auto flex w-full items-center justify-start gap-2"
        >
          {technologies.map((item, i) => (
            <Image
              key={i}
              src={item.icon}
              width={30}
              height={30}
              alt={item.name}
              id="icon__project"
              className="shrink-0 overflow-hidden"
            />
          ))}
        </div>
      </div>
      {logo && (
        <div>
          <Image
            src={logo}
            width={300}
            height={100}
            alt=""
            className="hidden w-25 bg-cover md:block"
          />
        </div>
      )}
    </NeobrutalistCard>
  );
}
