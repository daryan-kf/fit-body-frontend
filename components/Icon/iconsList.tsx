import AppleIcon from '@/assets/icons/apple.svg';
import GoogleIcon from '@/assets/icons/google.svg';
import FacebookIcon from '@/assets/icons/facebook.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';

const iconMap = {
  apple: AppleIcon,
  google: GoogleIcon,
  facebook: FacebookIcon,
  chevronLeft: ChevronLeftIcon
};

export default iconMap;
export type IconName = keyof typeof iconMap;
