'use client';

import Modal from '@/features/ui/components/modal';
import ProjectModal from '@/features/ui/components/project-modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types/types';
import { projects } from '../utils/constanst';
import ProjectCard from './project-card';
import { cn } from '@/utils/functions';

export default function ProjectsSection() {
  const { t } = useTranslation();
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
  //si ya se renderizó no renderice las demas hacer constante
  return (
    <div
      id="project__section"
      className="custom-md:grid-cols-2 custom-md:grid-rows-2 relative grid w-full max-w-7xl grid-cols-1 grid-rows-1 gap-7 md:grid-cols-1"
    >
      {projects.map((item, index) => (
        <div key={item.name}>
          <ProjectCard
            title={item.name}
            description={t(item.description)}
            icons={item.icons}
            logo={item.logo}
            onClick={() => toggleModal(item)}
            className={item.className}
          />
          {index === 0 && (
            <Modal
              toggleModal={() => toggleModal()}
              modalOpen={modalOpen}
              className={cn('w-full', item.classNameModal)}
            >
              {selectedProject && <ProjectModal project={selectedProject} />}
            </Modal>
          )}
        </div>
      ))}
    </div>
  );
}
