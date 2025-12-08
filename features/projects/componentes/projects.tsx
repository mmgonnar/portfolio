'use client';

import ContentSection from '@/features/ui/components/content-section';
import ProjectsSection from './projects-section';

export default function Projects() {
  return (
    <section
      id="skills"
      className="md:pt-15 flex w-full flex-col items-center justify-between gap-4 p-10 md:gap-10"
    >
      ,
      <ContentSection
        title="Projects"
        text="Stack principal orientado a frontend, APIs y UX."
        align="center"
      />
      <ProjectsSection />
    </section>
  );
}
