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
    description:
      'Plataforma fullstack para docentes, con gestión de clases, usuarios y asistencia. ',
    icons: classAidTools,
    image: Classaid,
    href: 'https://classaidfrontend.vercel.app/',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
  },
  {
    name: 'Web Project Around Us',
    description:
      'Interactive application that allows users to explore and share interesting locations across the United States.',
    icons: aroundTools,
    image: Classaid,
    href: 'https://classaidfrontend.vercel.app/',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
  },
  {
    name: 'Prepa 4',
    description:
      'Sitio web para la Preparatoria No.4 "Pablo Neruda" de la UAGro, Taxco',
    icons: aroundTools,
    image: Classaid,
    href: 'https://classaidfrontend.vercel.app/',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
  },
  {
    name: 'Portfolio',
    description:
      'Sitio web para la Preparatoria No.4 "Pablo Neruda" de la UAGro, Taxco',
    icons: aroundTools,
    image: Classaid,
    href: 'https://classaidfrontend.vercel.app/',
    features: [
      'Desarrollo FullStack con Next.js, MongoDB y autenticación JWT.',
      'Diseño de interfaz intuitiva y responsive con Tailwind CSS.',
    ],
  },
];
