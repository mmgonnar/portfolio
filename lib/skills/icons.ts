/**
 * El unico sitio donde se importa el arte de un icono de tecnologia.
 *
 * La clave es el `icon` de una entrada de `SKILLS`, no su nombre visible: asi
 * varias entradas pueden compartir una misma marca sin duplicar el import.
 */
import bun from '@/features/projects/assets/bun.svg';
import expressjs from '@/features/projects/assets/expressjs.svg';
import fastapi from '@/features/projects/assets/fastapi-icon.svg';
import i18next from '@/features/projects/assets/i18next-icon.svg';
import javascript from '@/features/projects/assets/javascript.svg';
import jwt from '@/features/projects/assets/jwt.svg';
import mongodb from '@/features/projects/assets/mongodb-icon.svg';
import nextjs from '@/features/projects/assets/nextjs_icon_dark.svg';
import nodejs from '@/features/projects/assets/nodejs.svg';
import npm from '@/features/projects/assets/npmjs-icon.svg';
import prisma from '@/features/projects/assets/prisma.svg';
import python from '@/features/projects/assets/python.svg';
import react from '@/features/projects/assets/react_light.svg';
import resend from '@/features/projects/assets/resend.svg';
import shadcn from '@/features/projects/assets/shadcn-ui.svg';
import supabase from '@/features/projects/assets/supabase-icon.svg';
import tailwind from '@/features/projects/assets/tailwindcss.svg';
import terminal from '@/features/projects/assets/terminal-icon.svg';
import typescript from '@/features/projects/assets/typescript.svg';
import vite from '@/features/projects/assets/vite.svg';
import zod from '@/features/projects/assets/zod.svg';

export const SKILL_ICONS = {
  bun,
  expressjs,
  fastapi,
  i18next,
  javascript,
  jwt,
  mongodb,
  nextjs,
  nodejs,
  npm,
  prisma,
  python,
  react,
  resend,
  shadcn,
  supabase,
  tailwind,
  terminal,
  typescript,
  vite,
  zod,
} as const;

export type SkillIconKey = keyof typeof SKILL_ICONS;
