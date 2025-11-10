'use client';

import { projects } from '../utils/constanst';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <div>
      <div className=" grid w-full grid-cols-1 gap-6 custom-sm:grid-cols-2">
        {projects.map(item => (
          <ProjectCard
            key={item.name}
            title={item.name}
            description={item.description}
            icons={item.icons}
          />
        ))}
      </div>
    </div>
  );
}
