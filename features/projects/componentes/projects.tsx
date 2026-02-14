'use client';

import { useTranslation } from 'react-i18next';
import { ContentSection, ProjectsSection } from '../index';
import TerminalBanner from '@/features/ui/components/terminal-banner';
import { useModal } from '@/hooks/useModa';
import { cn } from '@/utils/functions';

export default function Projects() {
  const { t } = useTranslation();
  const { modalOpen, selectedProject, toggleModal } = useModal();
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center justify-between gap-4 p-10 md:gap-10 md:pt-15"
    >
      <TerminalBanner
        className={cn(
          'custom-md:block absolute top-85 sm:hidden',
          modalOpen ? 'opacity-10' : 'opacity-100'
        )}
      />
      <div className="m-auto flex w-full max-w-5xl flex-col items-center justify-between">
        <ContentSection
          id="projects__content-section"
          title={t('projects.title')}
          text={t('projects.description')}
          align="center"
        />
        <ProjectsSection />
      </div>
    </section>
  );
}
