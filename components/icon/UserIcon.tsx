import Image from 'next/image';
import { IconProps } from '@/types/Icons';

const UserIcon = ({ isActive, ...props }: IconProps) => {
  const src = isActive ? '/icons/user-yellow.png' : '/icons/user.png';
  return <Image src={src} alt='user icon' width={50} height={50} {...props} />;
};

export default UserIcon;
