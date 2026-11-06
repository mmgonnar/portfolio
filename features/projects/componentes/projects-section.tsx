'use client';

import { useEscapeKeyClose } from '@/hooks/useEscKeyClose';
import { useModal } from '@/hooks/useModa';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SkeletonCard } from '@/features/ui/components/skeleton';
import Modal from '@/features/ui/components/modal';
import { ProjectCard, ProjectModal } from '../index';
import { Project } from '../types/types';
import { fetchProjects, type ProjectRaw } from '../utils/apiProjects';
import { projectLayouts } from '../utils/layout-config';
import { mapTechnologies } from '../utils/technologies-map';
import snapshotEn from '../data/projects-snapshot.en.json';
import snapshotEs from '../data/projects-snapshot.es.json';

interface ProjectsSectionProps {
  /**
   * Avisa cuando la grid real ya esta en pantalla. El banner decorativo del
   * padre se coloca con un desplazamiento fijo pensado para esa grid, asi que
   * mientras se carga no debe pintarse: caeria encima de los esqueletos.
   */
  onReady?: (ready: boolean) => void;
}

function toProject(item: ProjectRaw): Project {
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
    technologies: mapTechnologies(item.technologies, item.title),
    className: layout.className,
    classNameModal: layout.classNameModal,
  };
}

export default function ProjectsSection({ onReady }: ProjectsSectionProps) {
  const { i18n } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [slowLoading, setSlowLoading] = useState(false);

  useEffect(() => {
    const lang = i18n.language;
    setLoading(true);
    setSlowLoading(false);

    let showedCache = false;
    const cached = sessionStorage.getItem(`projects_${lang}`);
    const snapshot = lang === 'es' ? snapshotEs : snapshotEn;
    if (cached) {
      try {
        const parsed: Project[] = JSON.parse(cached);
        setProjects(parsed);
        showedCache = true;
        setLoading(false);
      } catch {}
    }

    const timer = setTimeout(() => setSlowLoading(true), 8000);

    fetchProjects(lang)
      .then((raw: ProjectRaw[]) => {
        const mapped: Project[] = raw.map(toProject);
        setProjects(mapped);
        sessionStorage.setItem(`projects_${lang}`, JSON.stringify(mapped));
      })
      .catch(() => {
        if (!showedCache) {
          const mapped: Project[] = snapshot.map(toProject);
          setProjects(mapped);
        }
      })
      .finally(() => {
        setLoading(false);
        clearTimeout(timer);
      });
  }, [i18n.language]);

  useEffect(() => {
    onReady?.(!loading && projects.length > 0);
  }, [loading, projects.length, onReady]);

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
