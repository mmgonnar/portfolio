'use client';

import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import { cn } from '@/utils/functions';
import Image from 'next/image';
import { ProjectCardProps } from '../types/types';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({
  title,
  description,
  icons,
  logo,
  className,
  onClick,
  modalOpen,
}: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <>
      <NeobrutalistCard
        onClick={onClick}
        className={cn(
          'm-auto grid cursor-pointer grid-cols-1 justify-center gap-5 p-6 md:w-full md:grid-cols-[1fr_auto]',
          className,
          modalOpen ? 'opacity-80' : 'opacity-100',
          'transition-all duration-500 ease-in-out'
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
              {t(title)}
            </h3>
            <div>
              <Image
                src={logo}
                width={300}
                height={100}
                alt="adfafa"
                className="block w-10 bg-cover md:hidden"
              />
            </div>
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
            {icons.map((item, i) => (
              <Image
                key={i}
                src={item.icon}
                width={30}
                height={30}
                alt={item.name}
                id="icon__project"
                className="overflow-hidden"
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
            className="hidden w-25 bg-cover md:block"
          />
        </div>
      </NeobrutalistCard>
    </>
  );
}
