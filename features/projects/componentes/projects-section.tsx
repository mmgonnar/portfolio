'use client';

import { useEscapeKeyClose } from '@/hooks/useEscKeyClose';
import { useModal } from '@/hooks/useModa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SkeletonCard } from '@/features/ui/components/skeleton';
import { Modal, ProjectCard, ProjectModal } from '../index';
import { Project } from '../types/types';
import { fetchProjects, type ProjectRaw } from '../utils/apiProjects';
import { projectLayouts } from '../utils/layout-config';
import { mapTechnologies } from '../utils/technologies-map';

export default function ProjectsSection() {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [slowLoading, setSlowLoading] = useState(false);

  useEffect(() => {
    const lang = i18n.language;
    setLoading(true);
    setSlowLoading(false);

    const cached = sessionStorage.getItem(`projects_${lang}`);
    if (cached) {
      try {
        const parsed: Project[] = JSON.parse(cached);
        setProjects(parsed);
        setLoading(false);
        return;
      } catch {}
    }

    const timer = setTimeout(() => setSlowLoading(true), 8000);

    fetchProjects(lang)
      .then((raw: ProjectRaw[]) => {
        const mapped: Project[] = raw.map(item => {
          const layout = projectLayouts[item.id] ?? {};
          return {
            id: item.id,
            title: item.title,
            description: item.description,
            architecture: item.architecture,
            technical_details: item.technical_details,
            image_url: item.image_url,
            logo_url: item.logo_url,
            href: item.live_url,
            repository_url: item.repository_url,
            technologies: mapTechnologies(item.technologies),
            className: layout.className,
            classNameModal: layout.classNameModal,
          };
        });
        setProjects(mapped);
        sessionStorage.setItem(`projects_${lang}`, JSON.stringify(mapped));
      })
      .catch(() => setProjects([]))
      .finally(() => {
        setLoading(false);
        clearTimeout(timer);
      });
  }, [i18n.language]);

  const { modalOpen, selectedProject, toggleModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  useEscapeKeyClose(() => toggleModal(), modalOpen);
  useOnClickOutside(modalOpen, modalRef, () => toggleModal());

  if (loading) {
    return (
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-7">
        <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonCard key={i} showFooter={false} showImage={false} variant="card" />
          ))}
        </div>
        {slowLoading && (
          <p className="animate-pulse text-sm text-gray-500">
            The backend is waking up, hang tight...
          </p>
        )}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="flex items-center justify-center py-10">
        <p className="text-sm text-gray-500">No projects available</p>
      </div>
    );
  }

  return (
    <div
      id="project__section"
      className="custom-md:grid-cols-2 custom-md:grid-rows-2 relative grid w-full max-w-7xl grid-cols-1 grid-rows-1 items-center gap-7 md:grid-cols-1"
    >
      {projects.map(item => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          technologies={item.technologies}
          logo={item.logo_url}
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
        classNameBackground="h-full"
      >
        <div ref={modalRef}>
          {selectedProject && <ProjectModal project={selectedProject} modalOpen={modalOpen} />}
        </div>
      </Modal>
    </div>
  );
}
