'use client';

import { useTranslation } from 'react-i18next';
import { ContentSection, ProjectsSection } from '../index';

export default function Projects() {
  const { t } = useTranslation();
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
