'use client';

import Image from 'next/image';
import { Project } from '@/features/projects/types/types';

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="m-auto flex w-full flex-col justify-center bg-green-200 bg-cover bg-center">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            width={300}
            height={300}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <div>
        <h4 className="text-lg font-semibold">{project.name}</h4>
        <p className="mt-2 text-sm">{project.description}</p>
      </div>

      <div className="flex gap-2">
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
    </div>
  );
}
