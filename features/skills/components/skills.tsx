import ContentSection from '@/features/ui/components/content-section';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import React from 'react';
import SkillsSection from './skills-section';

export default function Skills() {
  return (
    <section
      id="skills"
      className="md:pt-15 border-y-3 flex w-full flex-col items-center justify-between gap-4 border-solid border-neutral-300 bg-neutral-100 p-10 md:gap-10"
    >
      <ContentSection
        title="Skills"
        text="Stack principal orientado a frontend, APIs y UX."
        align="center"
      />
      <SkillsSection />
    </section>
  );
}
