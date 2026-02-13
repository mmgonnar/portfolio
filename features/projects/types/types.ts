import * as React from 'react';
import { StaticImageData } from 'next/image';

export type IconItem = {
  icon: string;
  i?: number;
  name: string;
};

export type Project = {
  name: string;
  description: string;
  descriptionKey?: string;
  icons: IconItem[];
  logo: string;
  image?: string | StaticImageData;
  href?: string;
  features: string[];
  className?: string;
  classNameModal?: string;
  modalOpen?: boolean;
};

export interface ProjectCardProps {
  title: string;
  description: string;
  projectDescription?: string;
  icons: IconItem[];
  logo: string | StaticImageData;
  IconComponent?: React.ElementType;
  onClick?: () => void;
  className?: string;
  modalOpen?: boolean;
}
