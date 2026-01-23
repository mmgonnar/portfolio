'use client';

import ContentSection from '@/features/ui/components/content-section';
import ProjectsSection from './projects-section';
import { t } from 'i18next';

export default function Projects() {
  return (
    <section
      id="skills"
      className="md:pt-15 relative flex w-full flex-col items-center justify-between gap-4 p-10 md:gap-10"
    >
      <ContentSection
        title={t("projects.title")}
        text={t("projects.description")}
        align="center"
      />
      <ProjectsSection />
    </section>
  );
}
