import {
  alignmets,
  buttonVariants,
  labelIcons,
  labelVariants,
} from '../utils/constants';
import { ReactNode } from 'react';

export interface NeobrutalistButtonProps {
  className?: string;
  text: string;
  href?: string;
  variant?: keyof typeof buttonVariants;
  onClick?: () => void;
}

export interface ContetnSectionProps {
  title: string;
  text: string;
  align: keyof typeof alignmets;
  id: string;
}
export interface NeobrutalistCardProps {
  children: ReactNode;
  className?: string;
  onClick?: (e: any) => any;
}
export interface LabelProps {
  children?: ReactNode;
  labelText: string;
  variant?: keyof typeof labelVariants;
  icon?: keyof typeof labelIcons;
  className?: String;
}

export type SkillItem = {
  name: string;
};

export interface SlikllCardProps {
  title: string;
  description: string;
  skillsMap: SkillItem[];
  IconComponent: React.ElementType;
  iconClassName?: string;
}

export interface ModalProps {
  children: ReactNode;
  toggleModal: () => void;
  modalOpen: boolean;
  className?: string;
  classNameBackgrpound?: string;
}

export interface TerminalBannerProps {
  children?: ReactNode;
  terminalContent?: ReactNode;
  className?: string;
  childrenClassName?: string;
  terminalContentClassName?: string;
  id?: string;
}

type InputType = 'text' | 'email' | 'textarea';

export interface InputsProps {
  label: string;
  classNameLabel?: string;
  className?: string;
  type?: InputType;
  id: string;
  required?: boolean;
  placeholder?: string;
}
