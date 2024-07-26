import LikeButton from '@/app/dna/components/LikeButton';
import HateButton from './HateButton';

type ActionBarProps = {
  onSwipe: (dir: 'left' | 'right' | 'up' | 'down') => Promise<void>;
};

const ActionBar = ({ onSwipe }: ActionBarProps) => {
  return (
    <section className='flex justify-center gap-36 p-20'>
      <HateButton onClick={() => onSwipe('left')} />
      <LikeButton onClick={() => onSwipe('right')} />
    </section>
  );
};

export default ActionBar;
