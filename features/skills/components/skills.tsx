import ContentSection from '@/features/ui/components/content-section';
import SkillsSection from './skills-section';
import { t } from 'i18next';

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center justify-between gap-4 border-y-3 border-solid border-neutral-300 bg-neutral-100 p-10 md:gap-10 md:pt-15"
    >
      <ContentSection
        title={t('skills.title')}
        text={t('skills.text')}
        align="center"
      />
      <SkillsSection />
    </section>
  );
}
