'use client';

import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import Image from 'next/image';
import { ProjectCardProps } from '../types/types';

export default function ProjectCard({
  title,
  description,
  icons,
  logo,
  onClick,
}: ProjectCardProps) {
  return (
    <>
      <NeobrutalistCard
        onClick={onClick}
        className="grid m-auto cursor-pointer gap-5  grid-cols-1 md:grid-cols-[1fr_auto]  sm:w-sm md:w-full p-6  justify-center"
      >
        <div id='card_content' className="flex flex-col gap-6 md:text-left w-full justify-center m-auto">
          <div className='flex justify-between items-end gap-1'>
            <h3 id='card__title' className="text-lg text-green-brutalist line-clamp-1 tracking-tight md:tracking-normal w-full">{title}</h3>
            <div>
              <Image
                src={logo}
                width={300}
                height={100}
                alt="adfafa"
                className="w-10 bg-cover block md:hidden"
              />
            </div>
          </div>

          <p id='card__description' className="line-clamp-2 text-sm font-normal ">
            {description}
          </p>
          <div id='card__container' className="flex w-full justify-start  gap-2  m-auto items-center">
            {icons.map((item, i) => (
              <Image
                key={i}
                src={item.icon}
                width={30}
                height={30}
                alt={item.name}
                id='icon__project'
                className='overflow-hidden'
              />
            ))}
          </div>
        </div>
        <div>
          <Image
            src={logo}
            width={300}
            height={100}
            alt="adfafa"
            className="w-25 bg-cover hidden md:block"
          />
        </div>
      </NeobrutalistCard>
    </>
  );
}
