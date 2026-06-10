import type { StaticImageData } from 'next/image';

export type IconItem = {
  icon: string;
  i?: number;
  name: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  architecture: string;
  technical_details: string;
  image_url: string;
  logo_url: string | null;
  href: string | null;
  repository_url: string | null;
  technologies: IconItem[];
  className?: string;
  classNameModal?: string;
};

export interface ProjectCardProps {
  title: string;
  description: string;
  technologies: IconItem[];
  logo: string | null;
  onClick?: () => void;
  className?: string;
  modalOpen?: boolean;
}
