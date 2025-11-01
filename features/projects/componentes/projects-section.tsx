'use client';

import { projects } from '../utils/constanst';
import ProjectCard from './project-card';

export default function ProjectsSection() {
  return (
    <div>
      <div className="bg-neon w-full">
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
