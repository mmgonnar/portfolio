'use client';

import Label from '@/features/ui/components/label';
import NeobrutalistCard from '@/features/ui/components/neobrutalist-card';
import { SlikllCardProps } from '@/features/ui/types/type';
import { cn } from '@/utils/functions';
import { t } from 'i18next';

export default function SkillCard({
  title,
  description,
  skillsMap,
  IconComponent,
  iconClassName,
}: SlikllCardProps) {
  return (
    <>
      <NeobrutalistCard className="max-w-75 h-auto justify-start py-6">
        {IconComponent && (
          <div className="mb-3">
            <IconComponent
              className={cn('h-8 w-8 text-neutral-400', iconClassName)}
              aria-hidden="true"
            />
          </div>
        )}
        <h4 className=" text-green-brutalist ">{title}</h4>
        <p className="max-w-[300px] text-center text-sm font-normal text-neutral-600">
          {t(description)}
        </p>
        <div className="flex w-full flex-wrap justify-center gap-2">
          {skillsMap.map(item => (
            <Label key={item.name} labelText={item.name} variant="default" />
          ))}
        </div>
      </NeobrutalistCard>
    </>
  );
}
