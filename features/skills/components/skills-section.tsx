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
    <div className="grid grid-cols-1 justify-between gap-5  font-mono custom-sm:grid-cols-2 md:grid-cols-[auto] md:flex-row custom-lg:grid-cols-4">
      {/* <NeobrutalistCard>
        <h4 className=" text-green-brutalist ">{title}</h4>
        <p className="text-center text-sm font-normal text-neutral-600">
          {t('skills.design')}
        </p>
        <div className="flex w-full flex-wrap justify-center gap-3">
          {frontendSkills.map(item => (
            <Label key={item.name} labelText={item.name} variant="default" />
          ))}
        </div>
      </NeobrutalistCard> */}

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
