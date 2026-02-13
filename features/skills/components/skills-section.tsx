import { useTranslation } from 'react-i18next';
import { skillCards } from '../utils/constants';
import SkillCard from './skill-card';

export default function SkillsSection() {
  const { t } = useTranslation();
  return (
    <div className="custom-sm:grid-cols-1 custom-lg:grid-cols-4 grid grid-cols-1 justify-between gap-7 font-mono md:grid-cols-2 md:flex-row">
      {skillCards.map(item => (
        <SkillCard
          key={item.title}
          title={t(item.title)}
          description={t(item.description)}
          skillsMap={item.map}
          IconComponent={item.icon}
        />
      ))}
      <div></div>
    </div>
  );
}
