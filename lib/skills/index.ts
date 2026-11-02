/**
 * Fuente unica de skills y herramientas.
 *
 * Antes la misma tecnologia vivia escrita a mano en tres sitios: los chips de
 * la seccion Skills, el carrusel del banner y el mapa de iconos de proyectos.
 * Se desincronizaron ("Express.js" contra "Express", "Tailwind v4" contra
 * "Tailwind CSS") y agregar una skill costaba hasta tres ficheros.
 *
 * Ahora cada tecnologia es UNA entrada de `SKILLS` con su nombre canonico, su
 * categoria y su clave de icono. Las tres superficies leen de aqui.
 *
 * Para agregar una skill: una entrada abajo, y si lleva icono, el asset mas su
 * clave en `lib/skills/icons.ts`.
 *
 * Los titulos y descripciones de cada categoria siguen en `utils/translations.ts`,
 * que es la capa de i18n. Aqui solo viven los nombres propios, que no se traducen.
 */
import { SKILL_ICONS, type SkillIconKey } from './icons';

export { SKILL_ICONS };
export type { SkillIconKey };

export type SkillCategory = 'design' | 'frontend' | 'backend' | 'tools';

export type Skill = {
  /** Nombre canonico. El unico sitio donde se escribe esta cadena. */
  name: string;
  /** Tarjeta de la seccion Skills donde sale el chip. Sin categoria, no hay chip. */
  category?: SkillCategory;
  /** Clave en `SKILL_ICONS`. Sin icono, la tecnologia no se pinta en proyectos. */
  icon?: SkillIconKey;
  /** Si sale en el carrusel del banner, en el orden de esta lista. */
  inCarousel?: boolean;
  /**
   * Otras grafias que la API puede mandar en `projects.technologies`, que es
   * texto plano escrito a mano en Supabase y no siempre usa el nombre canonico.
   */
  aliases?: string[];
};

export const SKILLS: Skill[] = [
  // --- ui/design ---
  { name: 'Figma', category: 'design' },
  { name: 'UX/UI', category: 'design' },
  { name: 'Illustrator', category: 'design' },
  { name: 'Photoshop', category: 'design' },

  // --- frontend ---
  { name: 'HTML', category: 'frontend' },
  { name: 'CSS', category: 'frontend' },
  {
    name: 'JavaScript',
    category: 'frontend',
    icon: 'javascript',
    inCarousel: true,
    aliases: ['Javascript'],
  },
  {
    name: 'TypeScript',
    category: 'frontend',
    icon: 'typescript',
    inCarousel: true,
    aliases: ['TypeScript strict'],
  },
  { name: 'React', category: 'frontend', icon: 'react', inCarousel: true, aliases: ['React 19'] },
  {
    name: 'Next.js',
    category: 'frontend',
    icon: 'nextjs',
    inCarousel: true,
    aliases: ['Next.js 15'],
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'tailwind',
    inCarousel: true,
    aliases: ['Tailwind CSS 4'],
  },

  // --- backend ---
  {
    name: 'Node.js',
    category: 'backend',
    icon: 'nodejs',
    inCarousel: true,
    aliases: ['Node.js 20'],
  },
  {
    name: 'Express',
    category: 'backend',
    icon: 'expressjs',
    inCarousel: true,
    aliases: ['Express.js'],
  },
  { name: 'Python', category: 'backend', icon: 'python', inCarousel: true },
  { name: 'MongoDB', category: 'backend', icon: 'mongodb', inCarousel: true },
  { name: 'PostgreSQL', category: 'backend' },
  {
    name: 'Supabase',
    category: 'backend',
    icon: 'supabase',
    inCarousel: true,
    aliases: ['Supabase Auth'],
  },
  { name: 'REST APIs', category: 'backend' },

  // --- tools ---
  { name: 'Git', category: 'tools' },
  { name: 'GitFlow', category: 'tools' },
  { name: 'SemVer', category: 'tools' },
  { name: 'Postman', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Scrum', category: 'tools' },
  { name: 'Kanban', category: 'tools' },
  { name: 'Zoho CRM', category: 'tools' },

  // --- sin chip: salen en el carrusel y/o en los iconos de proyecto ---
  { name: 'FastAPI', icon: 'fastapi', inCarousel: true },
  { name: 'Prisma', icon: 'prisma', inCarousel: true, aliases: ['Prisma 7'] },
  { name: 'JWT', icon: 'jwt', inCarousel: true },
  { name: 'Vite', icon: 'vite', inCarousel: true },
  { name: 'Bun', icon: 'bun', inCarousel: true },
  { name: 'Zod', icon: 'zod', inCarousel: true },
  { name: 'shadcn/ui', icon: 'shadcn', inCarousel: true, aliases: ['ShadCn'] },
  // next-intl reusa la marca de i18next: no hay asset propio y resolvia asi ya antes.
  { name: 'i18next', icon: 'i18next', inCarousel: true, aliases: ['next-intl'] },
  { name: 'Resend', icon: 'resend' },
  { name: 'NPM', icon: 'npm' },
  { name: 'CLI', icon: 'terminal' },
];

export const SKILL_CATEGORIES: SkillCategory[] = ['design', 'frontend', 'backend', 'tools'];

/** Los chips de una tarjeta de la seccion Skills, en el orden de `SKILLS`. */
export function skillsInCategory(category: SkillCategory): Skill[] {
  return SKILLS.filter(skill => skill.category === category);
}

/**
 * Las tecnologias del carrusel del banner, ya resueltas a su arte.
 * Una entrada marcada para el carrusel pero sin icono no tiene nada que pintar,
 * asi que se cae de la lista en vez de dejar un hueco.
 */
export const carouselTools: { name: string; src: string }[] = SKILLS.flatMap(skill =>
  skill.inCarousel && skill.icon ? [{ name: skill.name, src: SKILL_ICONS[skill.icon] }] : [],
);

/**
 * Nombre (canonico o alias) -> arte. Se construye una vez al cargar el modulo.
 */
const iconByName: Record<string, string> = {};
for (const skill of SKILLS) {
  if (!skill.icon) continue;
  const src = SKILL_ICONS[skill.icon];
  iconByName[skill.name] = src;
  for (const alias of skill.aliases ?? []) iconByName[alias] = src;
}

/** `undefined` cuando no hay arte: quien llama decide si omite o no la tecnologia. */
export function resolveSkillIcon(name: string): string | undefined {
  return iconByName[name];
}
