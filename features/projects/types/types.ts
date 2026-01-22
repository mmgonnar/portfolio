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
  icons: IconItem[];
  image?: string | StaticImageData;
  href?: string;
  features: string[];
};

export interface ProjectCardProps {
  title: string;
  description: string;
  icons: IconItem[];
  IconComponent?: React.ElementType;
  onClick?: () => void;
}
