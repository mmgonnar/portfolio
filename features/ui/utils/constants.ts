export const buttonActions = [{ text: 'button.switchDesign', href: '/' }];
import { History, CircleAlert, Newspaper, UserStar } from 'lucide-react';

export const buttonVariants = {
  default: 'px-7',
  white: 'bg-white hover:bg-neon px-7',
  secondary: 'bg-white hover:bg-neutral-100 px-7',
};

export const alignmets = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export const labelVariants = {
  default: ' text-neutral-600 bg-neutral-200',
  secondary: 'text-main-red bg-main-red/20',
  announcement: 'bg-main-red text-white font-semibold',
};

export const labelIcons = {
  History: History,
  CircleAlert: CircleAlert,
  Newspaper: Newspaper,
  UserStar: UserStar,
};
