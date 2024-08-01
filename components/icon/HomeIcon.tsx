import Image from 'next/image';
import { IconProps } from '@/types/Icons';

const HomeIcon = ({ isActive, ...props }: IconProps) => {
  const src = isActive ? '/icons/home-yellow.png' : '/icons/home.png';
  return <Image src={src} alt='home icon' width={50} height={50} {...props} />;
};

export default HomeIcon;
