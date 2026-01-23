import Label from '@/features/ui/components/label';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import React from 'react';
import {
  backendSkills,
  designSkills,
  frontendSkills,
  otherSkills,
  skillCards,
} from '../utils/constants';
import { t } from 'i18next';
import SkillCard from './skill-card';

export default function SkillsSection() {
  return (
    <div className="grid grid-cols-1 justify-between gap-7  font-mono custom-sm:grid-cols-1 md:grid-cols-2 md:flex-row custom-lg:grid-cols-4">
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
