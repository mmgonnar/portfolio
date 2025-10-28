import Label from '@/features/ui/components/label';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import React from 'react';

export default function SkillsSection() {
  return (
    <div className="max-w-sm font-mono">
      <NeobrutalistCard>
        <h4 className=" text-green-brutalist ">Title</h4>
        <p className="text-center text-sm font-normal text-neutral-600">
          Creación de interfaces visuales centradas en el usuario, con
          experiencia en diseño gráfico y prototipado digital.
        </p>
      </NeobrutalistCard>
      <Label labelText="sadasd" />
      <div></div>
    </div>
  );
}
