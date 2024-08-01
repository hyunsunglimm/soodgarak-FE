import Image from 'next/image';
import { IconProps } from '@/types/Icons';

const DNAIcon = ({ isActive, ...props }: IconProps) => {
  const src = isActive ? '/icons/dna-yellow.png' : '/icons/dna.png';
  return <Image src={src} alt='dna icon' width={50} height={50} {...props} />;
};

export default DNAIcon;
