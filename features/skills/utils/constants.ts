import { ChevronsLeftRightEllipsisIcon, Palette, SquareChevronRight, Wrench } from 'lucide-react';

import { skillsInCategory } from '@/lib/skills';

/**
 * Presentacion de las cuatro tarjetas de la seccion Skills.
 *
 * `title` y `description` son claves de `utils/translations.ts`. Los chips ya no
 * se escriben aqui: salen de `lib/skills`, la lista unica de skills y herramientas.
 */
export const skillCards = [
  {
    title: 'skills.uiDesign',
    description: 'skills.design',
    map: skillsInCategory('design'),
    icon: Palette,
  },
  {
    title: 'skills.front',
    description: 'skills.frontend',
    map: skillsInCategory('frontend'),
    icon: ChevronsLeftRightEllipsisIcon,
  },
  {
    title: 'skills.back',
    description: 'skills.backend',
    map: skillsInCategory('backend'),
    icon: SquareChevronRight,
  },
  {
    title: 'skills.other',
    description: 'skills.tools',
    map: skillsInCategory('tools'),
    icon: Wrench,
  },
];
