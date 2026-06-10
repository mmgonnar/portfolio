import type { IconItem } from '../types/types';

import expressjs from '../assets/expressjs.svg';
import gitSvg from '../assets/git.svg';
import i18nextIcon from '../assets/i18next-icon.svg';
import javascript from '../assets/javascript.svg';
import jwt from '../assets/jwt.svg';
import mongodbIcon from '../assets/mongodb-icon.svg';
import nextjsIcon from '../assets/nextjs_icon_dark.svg';
import nodejs from '../assets/nodejs.svg';
import python from '../assets/python.svg';
import fastApiIcon from '../assets/fastapi-icon.svg';
import reactLight from '../assets/react_light.svg';
import shadcnUi from '../assets/shadcn-ui.svg';
import tailwindcss from '../assets/tailwindcss.svg';
import typescript from '../assets/typescript.svg';
import vite from '../assets/vite.svg';
import npm from '../assets/npmjs-icon.svg';
import supabase from '../assets/supabase-icon.svg';
import prisma from '../assets/prisma.svg';
import terminalIcon from '../assets/terminal-icon.svg';
import bun from '../assets/bun.svg';
import zod from '../assets/zod.svg';
import resend from '../assets/resend.svg';

const techIconMap: Record<string, string> = {
  'Next.js 15': nextjsIcon,
  'Next.js': nextjsIcon,
  Python: python,
  FastAPI: fastApiIcon,
  TypeScript: typescript,
  'TypeScript strict': typescript,
  i18next: i18nextIcon,
  'next-intl': i18nextIcon,
  'Node.js': nodejs,
  'Node.js 20': nodejs,
  Express: expressjs,
  'Express.js': expressjs,
  MongoDB: mongodbIcon,
  JWT: jwt,
  'Tailwind CSS': tailwindcss,
  'Tailwind CSS 4': tailwindcss,
  React: reactLight,
  'React 19': reactLight,
  Vite: vite,
  Javascript: javascript,
  JavaScript: javascript,
  ShadCn: shadcnUi,
  'shadcn/ui': shadcnUi,
  NPM: npm,
  Supabase: supabase,
  'Supabase Auth': supabase,
  Prisma: prisma,
  'Prisma 7': prisma,
  CLI: terminalIcon,
  Bun: bun,
  Zod: zod,
  Resend: resend,
};

export function mapTechnologies(techNames: string[]): IconItem[] {
  return techNames
    .map(name => {
      const icon = techIconMap[name];
      if (!icon) return null;
      return { icon, name };
    })
    .filter((item): item is IconItem => item !== null);
}
