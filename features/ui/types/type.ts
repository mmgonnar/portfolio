import { variants } from '../components/neobrutalist-button';

export interface NeobrutalistButtonProps {
  className?: string;
  text: string;
  href?: string;
  variant?: keyof typeof variants;
}
