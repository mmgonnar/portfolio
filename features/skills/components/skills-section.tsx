import Label from '@/features/ui/components/label';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import React from 'react';
import { designSkills, frontendSkills } from '../utils/constants';

export default function SkillsSection() {
  return (
    <div className="max-w-sm font-mono">
      <NeobrutalistCard>
        <h4 className=" text-green-brutalist ">Title</h4>
        <p className="text-center text-sm font-normal text-neutral-600">
          Creación de interfaces visuales centradas en el usuario, con
          experiencia en diseño gráfico y prototipado digital.
        </p>
        <div className="flex w-full flex-wrap justify-center gap-3">
          {frontendSkills.map(item => (
            <Label key={item.name} labelText={item.name} variant="default" />
          ))}
        </div>
      </NeobrutalistCard>
      <div></div>
    </div>
  );
}
