import Image from 'next/image';
import { IconProps } from '@/types/Icons';

const PinIcon = ({ isActive, ...props }: IconProps) => {
  const src = isActive ? '/icons/pin-yellow.png' : '/icons/pin.png';
  return <Image src={src} alt='pin icon' width={50} height={50} {...props} />;
};

export default PinIcon;
