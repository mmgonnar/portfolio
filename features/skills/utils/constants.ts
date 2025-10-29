import {
  ChevronsLeftRightEllipsisIcon,
  Palette,
  SquareChevronRight,
  Wrench,
} from 'lucide-react';

export const designSkills = [
  { name: 'Figma' },
  { name: 'UX/UI' },
  { name: 'Illustrator' },
  { name: 'Photoshop' },
];

export const frontendSkills = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React.js' },
  { name: 'Next.js' },
  { name: 'Tailwind' },
];

export const backendSkills = [
  { name: 'Node.js' },
  { name: 'Expres.js' },
  { name: 'Postman' },
  { name: 'MongoDB' },
  { name: 'Rest APIs' },
];

export const otherSkills = [
  { name: 'Scrum' },
  { name: 'Kanban' },
  { name: 'GitFlow' },
  { name: 'SemVer' },
  { name: 'CRM' },
  { name: 'WordPress' },
];

export const skillCards = [
  {
    title: 'skills.uiDesign',
    description: 'skills.design',
    map: designSkills,
    icon: Palette,
  },
  {
    title: 'skills.front',
    description: 'skills.frontend',
    map: frontendSkills,
    icon: ChevronsLeftRightEllipsisIcon,
  },
  {
    title: 'skills.back',
    description: 'skills.backend',
    map: backendSkills,
    icon: SquareChevronRight,
  },
  {
    title: 'skills.other',
    description: 'skills.tools',
    map: otherSkills,
    icon: Wrench,
  },
];
