import Javascript from '../assets/javascript.svg';
import Typescript from '../assets/typescript.svg';
import Next from '../assets/nextjs_icon_dark.svg';
import MongoDB from '../assets/mongodb-icon.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Git from '../assets/git.svg';
import Express from '../assets/expressjs.svg';
import Node from '../assets/nodejs.svg';
import React from '../assets/react_light.svg';
import Classaid from '../assets/projects-preview/classaid_preview.png';
import ClassaidLogo from '../assets/project-logos/classaid_favicon.svg';

export const classAidTools = [
  { icon: Javascript, name: "Javascript's icon" },
  { icon: Next, name: "Next's icon" },
  { icon: MongoDB, name: "MongoDB's icon" },
  { icon: Tailwind, name: "Tailwind's icon" },
  { icon: Express, name: "Express' icon" },
  { icon: Git, name: "Express' icon" },
];
export const aroundTools = [
  { icon: Javascript, name: "Javascript's icon" },
  { icon: React, name: "React's icon" },
  { icon: MongoDB, name: "MongoDB's icon" },
  { icon: Express, name: "Express' icon" },
  { icon: Node, name: "Node' icon" },
  { icon: Git, name: "Express' icon" },
];

export const projects = [
  {
    name: 'projects.projectTitle.classAid',
    description: 'projects.projectDescription.classaid',
    icons: classAidTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/classaid_frontend',
    features: [
      'projects.features.classaid.f1',
      'projects.features.classaid.f2',
    ],
    className:
      'custom-md:col-start-1 custom-md:row-start-1 col-start-1 row-start-1',
    classNameModal:
      'col-span-1 col-start-1 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-1 row-end-3',
  },
  {
    name: 'projects.projectTitle.around',
    description: 'projects.projectDescription.around',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/web_project_api_full',
    features: ['projects.features.around.f1', 'projects.features.around.f2'],
    className:
      'custom-md:col-start-2 custom-md:row-start-1 col-start-1 row-start-2',
    classNameModal:
      'col-span-1 custom-md:col-start-2 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 col-start-1 row-start-2 row-end-4',
  },
  {
    name: 'projects.projectTitle.highschool',
    description: 'projects.projectDescription.highschool',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/web_uagro_prepa4',
    features: [
      'projects.features.highschool.f1',
      'projects.features.highschool.f2',
    ],
    className:
      'custom-md:col-start-1 custom-md:row-start-2 col-start-1 row-start-3',
    classNameModal:
      'col-span-1 col-start-1 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-3 row-end-5',
  },
  {
    name: 'projects.projectTitle.portfolio',
    description: 'projects.projectDescription.portfolio',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/portfolio',
    features: [
      'projects.features.portfolio.f1',
      'projects.features.portfolio.f2',
    ],
    className:
      'custom-md:col-start-2 custom-md:row-start-2 col-start-1 row-start-4',
    classNameModal:
      'col-span-1 custom-md:col-start-2 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-3 row-end-5',
  },
];
