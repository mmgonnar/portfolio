'use client';

import { Project } from '@/features/projects/types/types';
import { ExternalLinkIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

interface ProjectModalProps {
  project: Project;
  modalOpen: boolean;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-full flex-col gap-2">
      <div className="custom-md:aspect-video overflow-hidden border-b-2 border-black bg-green-100">
        <Image
          src={project.image_url}
          alt={project.title}
          width={400}
          height={225}
          className="w-full object-cover"
          priority
          unoptimized
        />
      </div>
      <div className="flex grow flex-col gap-3 overflow-y-auto px-4">
        <div className="flex justify-between">
          <h4 className="text-lg font-semibold">{project.title}</h4>
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
        <p className="text-sm font-normal">{project.description}</p>

        {project.architecture && (
          <div className="border-t border-black/10 pt-2">
            <p className="mb-1 text-xs font-bold tracking-wide uppercase">
              {t('projects.architecture')}
            </p>
            <p className="text-sm font-normal">{project.architecture}</p>
          </div>
        )}
      </div>
      <div className="mt-2 mb-4 flex items-center justify-between border-t border-black/10 pt-2">
        <div className="line-clamp-1 flex gap-2 px-4">
          {project.technologies.map((item, i) => (
            <Image key={i} src={item.icon} width={30} height={30} alt={item.name} />
          ))}
        </div>

        {project.href ? (
          <Link
            href={project.href}
            target="_blank"
            className="hover:text-green-brutalist custom-md:block hidden items-center gap-2 p-4 text-right text-sm font-normal hover:font-bold"
          >
            <div className="flex flex-row items-center justify-center gap-2">
              <p className="line-clamp-1">{t('projects.checkSite')}</p>
              <ExternalLinkIcon />
            </div>
          </Link>
        ) : (
          <span>{project.title}</span>
        )}
      </div>
    </div>
  );
}
