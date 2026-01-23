'use client';

import Modal from '@/features/ui/components/modal';
import { projects } from '../utils/constanst';
import ProjectCard from './project-card';
import ProjectModal from '@/features/ui/components/project-modal';
import { useState } from 'react';
import { Project } from '../types/types';

export default function ProjectsSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleModal = (project?: Project) => {
    if (project) {
      setSelectedProject(project);
      setModalOpen(true);
    } else {
      setModalOpen(false);
      setSelectedProject(null);
    }
  };
  return (
    <div id='project__section' className="grid w-full max-w-7xl grid-cols-1 gap-7 custom-md:grid-cols-2 md:grid-cols-1">
      {projects.map(item => (
        <ProjectCard
          key={item.name}
          title={item.name}
          description={item.description}
          icons={item.icons}
          logo={item.logo}
          onClick={() => toggleModal(item)}
        />
      ))}
      <Modal toggleModal={() => toggleModal()} modalOpen={modalOpen}>
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </div>
  );
}
