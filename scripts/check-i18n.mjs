#!/usr/bin/env node
/**
 * Comprueba que EN y ES tengan exactamente las mismas claves y que cada t()
 * del código apunte a una que exista.
 *
 * Una clave presente en un solo locale no falla en build ni en typecheck: le
 * muestra la ruta cruda al cliente. Por eso esto es un script aparte que se
 * corre a mano, no un paso del build.
 *
 * Uso: npm run i18n:check
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';

const TRANSLATIONS = 'utils/translations.ts';
const SOURCE_DIRS = ['app', 'features', 'hooks', 'context', 'lib', 'utils'];

/** Extrae un literal de objeto exportado equilibrando llaves. */
const extractObject = (source, exportName) => {
  const marker = `export const ${exportName} = `;
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`No se encontró ${exportName} en ${TRANSLATIONS}`);

  let depth = 0;
  let index = source.indexOf('{', start);
  const from = index;

  for (; index < source.length; index += 1) {
    const char = source[index];
    if (char === '{') depth += 1;
    else if (char === '}') {
      depth -= 1;
      if (depth === 0) break;
    }
  }

  return source.slice(from, index + 1);
};

const flatten = (value, prefix = '', out = new Set()) => {
  if (Array.isArray(value)) {
    value.forEach((item, i) => flatten(item, `${prefix}.${i}`, out));
    return out;
  }
  if (value !== null && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      flatten(child, prefix ? `${prefix}.${key}` : key, out);
    }
    return out;
  }
  out.add(prefix);
  return out;
};

const walk = dir => {
  const found = [];
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry.startsWith('.')) continue;
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) found.push(...walk(path));
    else if (['.ts', '.tsx'].includes(extname(path))) found.push(path);
  }
  return found;
};

const source = readFileSync(TRANSLATIONS, 'utf8');
const en = flatten(eval(`(${extractObject(source, 'enTranslations')})`));
const es = flatten(eval(`(${extractObject(source, 'esTranslations')})`));

const onlyEn = [...en].filter(key => !es.has(key)).sort();
const onlyEs = [...es].filter(key => !en.has(key)).sort();

const missingKeys = [];
const unresolved = [];
const STATIC_CALL = /\bt\(\s*'([^']+)'/g;
const TEMPLATE_CALL = /\bt\(\s*`([^`]+)`/g;

for (const file of SOURCE_DIRS.flatMap(dir => walk(dir))) {
  if (file === TRANSLATIONS) continue;
  const content = readFileSync(file, 'utf8');

  for (const [, key] of content.matchAll(STATIC_CALL)) {
    if (!en.has(key)) missingKeys.push({ file, key });
  }

  // Una clave interpolada se vuelve un glob: basta con que alguna del catálogo
  // encaje para saber que la ruta sigue siendo válida.
  for (const [, raw] of content.matchAll(TEMPLATE_CALL)) {
    // Se marca la interpolación antes de escapar, si no el \$ escapado rompe
    // el comodín que viene después.
    const SLOT = '\u0000';
    const pattern = new RegExp(
      `^${raw
        .replace(/\$\{[^}]*\}/g, SLOT)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .split(SLOT)
        .join('[^.]+')}$`,
    );
    if (![...en].some(key => pattern.test(key))) unresolved.push({ file, raw });
  }
}

const report = (title, rows) => {
  if (rows.length === 0) return;
  console.log(`\n${title}`);
  for (const row of rows) console.log(`  ${row}`);
};

report(
  `Claves solo en EN (${onlyEn.length})`,
  onlyEn.map(k => k),
);
report(
  `Claves solo en ES (${onlyEs.length})`,
  onlyEs.map(k => k),
);
report(
  `t() sin clave (${missingKeys.length})`,
  missingKeys.map(({ file, key }) => `${file}: ${key}`),
);

if (unresolved.length > 0) {
  console.log(`\nAviso: ${unresolved.length} clave(s) interpolada(s) sin resolver`);
  for (const { file, raw } of unresolved) console.log(`  ${file}: ${raw}`);
}

const failures = onlyEn.length + onlyEs.length + missingKeys.length;

if (failures > 0) {
  console.error(`\ni18n: ${failures} problema(s). EN ${en.size} claves, ES ${es.size}.`);
  process.exit(1);
}

console.log(`i18n: ok. ${en.size} claves en ambos locales, ${unresolved.length} aviso(s).`);
