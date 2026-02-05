'use client';

import { Project } from '@/features/projects/types/types';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const { t } = useTranslation();

  return (
    <div className="flex w-full flex-col gap-2">
      <div className="h-40 w-full overflow-hidden border-b-2 border-black bg-green-100 md:h-55">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            width={150}
            height={150}
            sizes="100vw"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-col gap-3 px-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">{project.name}</h4>
          {project.href && (
            <Link
              href={project.href}
              target="_blank"
              className="hover:text-green-brutalist custom-md:hidden block"
            >
              <ExternalLinkIcon />
            </Link>
          )}
        </div>
        <p className="line-clamp-3 text-sm font-normal">
          {t(project.description)}
        </p>
        <ul className="list-disc border-t border-black/10 pt-2 pl-3 text-sm font-normal">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-black/10 pt-2">
        <div className="line-clamp-1 flex gap-2 px-4">
          {project.icons.map((icon, i) => (
            <Image
              key={i}
              src={icon.icon}
              width={30}
              height={30}
              alt={icon.name}
            />
          ))}
        </div>

        {project.href ? (
          <Link
            href={project.href}
            target="_blank"
            className="hover:text-green-brutalist custom-md:block hidden items-center gap-2 p-4 text-right text-sm font-normal hover:font-bold"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="line-clamp-1">Check Site</p>
              <ExternalLinkIcon />
            </div>
          </Link>
        ) : (
          <span>{project.name}</span>
        )}
      </div>
    </div>
  );
}
