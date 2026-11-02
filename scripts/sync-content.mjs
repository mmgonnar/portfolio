import { writeFile } from 'node:fs/promises';

const API_URL = 'https://portfolio-backend-tarb.onrender.com';
const LANGS = ['es', 'en'];

async function fetchSnapshot(lang) {
  const res = await fetch(`${API_URL}/projects?lang=${lang}`);

  if (!res.ok) {
    throw new Error(`${lang}: HTTP ${res.status}`);
  }

  const data = await res.json();

  if (!Array.isArray(data) || data.length === 0) {
    throw new Error(`${lang}: la respuesta no es una lista de proyectos`);
  }

  return data;
}

const snapshots = {};
for (const lang of LANGS) {
  snapshots[lang] = await fetchSnapshot(lang);
}

for (const lang of LANGS) {
  const path = `features/projects/data/projects-snapshot.${lang}.json`;
  await writeFile(path, JSON.stringify(snapshots[lang], null, 2) + '\n');
  console.log(`${lang}: ${snapshots[lang].length} proyectos`);
}
