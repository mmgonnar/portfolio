import * as React from 'react';

export type IconItem = {
  icon: string;
  i?: number;
  name: string;
};

export interface ProjectCardProps {
  title: string;
  description: string;
  icons: IconItem[];
  IconComponent?: React.ElementType;
}
