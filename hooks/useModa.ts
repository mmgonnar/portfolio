import { useState, useCallback } from 'react';
import { Project } from '../features/projects/types/types';

export const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleModal = useCallback((project?: Project) => {
    if (project) {
      setSelectedProject(project);
      setModalOpen(true);
    } else {
      setModalOpen(prev => !prev);
      setSelectedProject(null);
    }
  }, []);

  return {
    modalOpen,
    selectedProject,
    toggleModal,
  };
};
