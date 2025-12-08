'use client';

import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import Image from 'next/image';
import { ProjectCardProps } from '../types/types';

export default function ProjectCard({
  title,
  description,
  icons,
  onClick,
}: ProjectCardProps) {
  return (
    <>
      <NeobrutalistCard
        onClick={onClick}
        className="flex cursor-pointer items-center justify-center gap-5 text-center custom-sm:grid-cols-2 custom-sm:flex-row custom-sm:text-left"
      >
        <div className="flex max-w-sm flex-col gap-3">
          <h3 className="text-lg text-green-brutalist">{title}</h3>
          <p className="line-clamp-2 overflow-hidden text-sm font-normal">
            {description}
          </p>
          <div className="flex justify-center gap-2 custom-sm:justify-start">
            {icons.map((item, i) => (
              <Image
                key={i}
                src={item.icon}
                width={30}
                height={30}
                alt={item.name}
              />
            ))}
          </div>
        </div>
        <div>
          <Image
            src="https://picsum.photos/id/237/300/300"
            width={300}
            height={100}
            alt="adfafa"
            className="w-full bg-cover"
          />
        </div>
      </NeobrutalistCard>
    </>
  );
}
