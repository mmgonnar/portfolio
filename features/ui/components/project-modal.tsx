'use client';

import Image from 'next/image';
import { Project } from '@/features/projects/types/types';
import Link from 'next/link';
import { ChevronRightIcon } from 'lucide-react';

interface ProjectModalProps {
  project: Project;
}

export default function ProjectModal({ project }: ProjectModalProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="w-full overflow-hidden border-b-2 border-black bg-green-100">
        {project.image && (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            width={150}
            height={150}
            className="h-70 w-full rotate-3 object-cover"
          />
        )}
      </div>

      <div className="flex flex-col gap-3 p-4">
        <h4 className="text-lg font-semibold">{project.name}</h4>
        <p className="mt-2 text-sm font-normal">{project.description}</p>
        <ul className="mt-2 list-disc pl-3 text-sm font-normal">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="mt-2 flex items-center justify-between border-t border-black/10 pt-2">
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
        <div>
          {project.href ? (
            <Link
              href={project.href}
              target="_blank"
              className="hover:text-green-brutalist m-auto flex items-center gap-2 p-4 text-sm font-normal hover:font-bold"
            >
              Check Site{''}
              <ChevronRightIcon />
            </Link>
          ) : (
            <span>{project.name}</span>
          )}
        </div>
      </div>
    </div>
  );
}
