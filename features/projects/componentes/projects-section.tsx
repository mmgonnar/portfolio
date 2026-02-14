'use client';

import { useEscapeKeyClose } from '@/hooks/useEscKeyClose';
import { useModal } from '@/hooks/useModa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal, ProjectCard, ProjectModal } from '../index';
import { projects } from '../utils/constanst';
import TerminalBanner from '@/features/ui/components/terminal-banner';

export default function ProjectsSection() {
  const { t } = useTranslation();

  const { modalOpen, selectedProject, toggleModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEscapeKeyClose(() => toggleModal(), modalOpen);
  useOnClickOutside(modalOpen, modalRef, () => toggleModal());

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
          modalOpen={modalOpen}
        />
      ))}
      {modalOpen && (
        <div
          className="absolute inset-0 z-10 backdrop-blur-[2px]"
          onClick={() => toggleModal()}
          aria-hidden="true"
        />
      )}

      <Modal
        toggleModal={() => toggleModal()}
        modalOpen={modalOpen}
        className={selectedProject?.classNameModal ?? ''}
        classNameBackgrpound="h-full"
      >
        <div ref={modalRef}>
          {selectedProject && (
            <ProjectModal project={selectedProject} modalOpen={modalOpen} />
          )}
        </div>
      </Modal>
    </div>
  );
}
