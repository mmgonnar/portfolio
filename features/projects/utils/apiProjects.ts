const API_URL = process.env.NEXT_PUBLIC_RENDER_URI || 'http://127.0.0.1:8000';

export type ProjectRaw = {
  id: string;
  title: string;
  description: string;
  architecture: string;
  technical_details: string;
  image_url: string;
  logo_url: string | null;
  repository_url: string | null;
  live_url: string | null;
  technologies: string[];
  created_at: string;
};

export async function fetchProjects(lang: string): Promise<ProjectRaw[]> {
  const res = await fetch(`${API_URL}/projects?lang=${lang}`);

  if (!res.ok) {
    throw new Error('Error al obtener proyectos');
  }

  return res.json();
}
