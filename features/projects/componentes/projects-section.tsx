'use client';

import { Modal, ProjectCard, ProjectModal } from '../index';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Project } from '../types/types';
import { projects } from '../utils/constanst';

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

  return (
    <div
      id="project__section"
      className="custom-md:grid-cols-2 custom-md:grid-rows-2 relative grid w-full max-w-7xl grid-cols-1 grid-rows-1 items-center gap-7 md:grid-cols-1"
    >
      {projects.map(item => (
        <ProjectCard
          key={item.name}
          title={t(item.name)}
          description={t(item.description)}
          icons={item.icons}
          logo={item.logo}
          onClick={() => toggleModal(item)}
          className={item.className}
        />
      ))}
      {modalOpen && (
        <div
          className="absolute inset-0 z-10 backdrop-blur-[2px]"
          onClick={() => toggleModal()}
          aria-hidden
        />
      )}

      <Modal
        toggleModal={() => toggleModal()}
        modalOpen={modalOpen}
        className={selectedProject?.classNameModal ?? ''}
      >
        {selectedProject && <ProjectModal project={selectedProject} />}
      </Modal>
    </div>
  );
}
