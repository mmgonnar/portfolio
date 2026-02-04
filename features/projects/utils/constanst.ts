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
    name: 'ClassAid',
    description: 'projects.projectDescription.classaid',
    icons: classAidTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/classaid_frontend',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
    className:
      'custom-md:col-start-1 custom-md:row-start-1 col-start-1 row-start-1',
    classNameModal:
      'col-span-1 col-start-1 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-1 row-end-3',
  },
  {
    name: 'Web Project Around Us',
    description: 'projects.projectDescription.around',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/web_project_api_full',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
    className:
      'custom-md:col-start-2 custom-md:row-start-1 col-start-1 row-start-2',
    classNameModal:
      'col-span-1 custom-md:col-start-2 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 col-start-1 row-start-2 row-end-4',
  },
  {
    name: "Preparatoria No.4 'Pablo Neruda'",
    description: 'projects.projectDescription.highschool',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/web_uagro_prepa4',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
    className:
      'custom-md:col-start-1 custom-md:row-start-2 col-start-1 row-start-3',
    classNameModal:
      'col-span-1 col-start-1 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-3 row-end-5',
  },
  {
    name: 'Portfolio',
    description: 'projects.projectDescription.portfolio',
    icons: aroundTools,
    image: Classaid,
    logo: ClassaidLogo,
    href: 'https://classaidfrontend.vercel.app/',
    github: 'https://github.com/mmgonnar/portfolio',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
    className:
      'custom-md:col-start-2 custom-md:row-start-2 col-start-1 row-start-4',
    classNameModal:
      'col-span-1 custom-md:col-start-2 col-end-2 custom-md:row-start-1 custom-md:-row-end-1 row-start-3 row-end-5',
  },
];
