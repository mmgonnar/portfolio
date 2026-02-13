import Javascript from '../assets/javascript.svg';
import Typescript from '../assets/typescript.svg';
import Next from '../assets/nextjs_icon_dark.svg';
import MongoDB from '../assets/mongodb-icon.svg';
import Tailwind from '../assets/tailwindcss.svg';
import Git from '../assets/git.svg';
import Express from '../assets/expressjs.svg';
import Node from '../assets/nodejs.svg';
import React from '../assets/react_light.svg';
import Jwt from '../assets/jwt.svg';
import ShadCn from '../assets/shadcn-ui.svg';
import Vite from '../assets/vite.svg';
import i18n from '../assets/i18next-icon.svg';
import Phyton from '../assets/python.svg';
import ClassaidLogo from '../assets/project-logos/classaid_favicon.svg';
import UagroLogo from '../assets/project-logos/uagro.svg';
import AUSLogo from '../assets/project-logos/logo_aus.svg';
import PortfolioLogo from '../assets/project-logos/mmgn.svg';
import ClassaidImage from '../assets/projects-preview/clasaid_preview.png';
import AUS from '../assets/projects-preview/aus_preview.png';
import Uagro from '../assets/projects-preview/prepa_preview.png';
import Portfolio from '../assets/projects-preview/portfolii_preview.png';

export const classAidTools = [
  { icon: Next, name: "Next's icon" },
  { icon: React, name: "Javascript's icon" },
  { icon: MongoDB, name: "MongoDB's icon" },
  { icon: Tailwind, name: "Tailwind's icon" },
  { icon: Node, name: "Node' icon" },
];
export const aroundTools = [
  { icon: React, name: "React's icon" },
  { icon: Node, name: "Node' icon" },
  { icon: Express, name: "Express' icon" },
  { icon: Jwt, name: "Jwt's icon" },
  { icon: Vite, name: "Vite's icon" },
];
export const highschoolTools = [
  { icon: Next, name: "Next's icon" },
  { icon: Typescript, name: "Typescript's icon" },
  { icon: Tailwind, name: "Tailwind's icon" },
  { icon: ShadCn, name: "Shadcn's icon" },
  { icon: React, name: "React's icon" },
];
export const portfolioTools = [
  { icon: Next, name: "Next's icon" },
  { icon: Typescript, name: "Typescript's icon" },
  { icon: Tailwind, name: "Tailwind's icon" },
  { icon: i18n, name: "i18next's icon" },
  { icon: Phyton, name: "React's icon" },
];

export const projects = [
  {
    name: 'projects.projectTitle.classAid',
    description: 'projects.projectDescription.classaid',
    icons: classAidTools,
    image: ClassaidImage,
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
    image: AUS,
    logo: AUSLogo,
    href: 'https://18-web-project-api-full-frontend.vercel.app/signup',
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
    icons: highschoolTools,
    image: Uagro,
    logo: UagroLogo,
    href: 'https://web-uagro-prepa4.vercel.app/',
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
    icons: portfolioTools,
    image: Portfolio,
    logo: PortfolioLogo,
    href: 'https://portfolio-six-phi-849ndn28g0.vercel.app/',
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
