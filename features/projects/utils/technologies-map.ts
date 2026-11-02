import type { IconItem } from '../types/types';

import { resolveSkillIcon } from '@/lib/skills';

/**
 * Maximo de iconos por proyecto.
 *
 * Medido en la tarjeta colapsada a 360px, el ancho de telefono mas estrecho que
 * soportamos: la fila dispone de 224px y cada icono ocupa 30px con 8px de hueco,
 * asi que entran 6 (6 x 30 + 5 x 8 = 220). Con 7 o mas los iconos se encogian en
 * la tarjeta y se cortaban en el modal.
 *
 * La lista vive en Supabase, columna `projects.technologies`: esa es la fuente de
 * verdad. Aqui no se recorta nada, solo se avisa en desarrollo.
 */
export const MAX_TECH_ICONS = 6;

/**
 * La API manda `technologies` como texto plano escrito a mano, asi que los
 * nombres no siempre coinciden con el canonico ("Next.js 15", "Express.js").
 * `resolveSkillIcon` resuelve ambos contra `lib/skills`, que es donde viven los
 * alias. Una tecnologia sin arte se omite, igual que antes.
 */
export function mapTechnologies(techNames: string[], projectTitle?: string): IconItem[] {
  const icons = techNames
    .map(name => {
      const icon = resolveSkillIcon(name);
      if (!icon) return null;
      return { icon, name };
    })
    .filter((item): item is IconItem => item !== null);

  if (process.env.NODE_ENV !== 'production' && icons.length > MAX_TECH_ICONS) {
    console.warn(
      `[projects] "${projectTitle ?? 'sin titulo'}" tiene ${icons.length} iconos de tecnologia, ` +
        `el maximo es ${MAX_TECH_ICONS}. Ajusta projects.technologies en Supabase.`,
    );
  }

  return icons;
}
