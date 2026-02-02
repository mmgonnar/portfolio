'use client';

import ContentSection from '@/features/ui/components/content-section';
import ProjectsSection from './projects-section';
import { t } from 'i18next';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative flex w-full flex-col items-center justify-between gap-4 p-10 md:gap-10 md:pt-15"
    >
      <ContentSection
        title={t('projects.title')}
        text={t('projects.description')}
        align="center"
      />
      <ProjectsSection />
    </section>
  );
}
