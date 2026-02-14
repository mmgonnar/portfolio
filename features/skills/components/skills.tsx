import ContentSection from '@/features/ui/components/content-section';
import { useTranslation } from 'react-i18next';
import SkillsSection from './skills-section';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <section
      id="skills"
      className="flex w-full flex-col items-center justify-between gap-4 border-y-4 border-solid border-neutral-900 bg-neutral-200 p-10 md:gap-10 md:pt-15"
    >
      <div className="m-auto flex w-full max-w-6xl flex-col items-center justify-between">
        <ContentSection
          id="skills__section"
          title={t('skills.title')}
          text={t('skills.text')}
          align="center"
        />
        <SkillsSection />
      </div>
    </section>
  );
}
