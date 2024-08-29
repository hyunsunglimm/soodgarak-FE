import HateButton from './HateButton';
import LikeButton from './LikeButton';
import FoodSwipeCard from './FoodSwipeCard';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import useTinder from '../hooks/useTinder';

const CardSwiper = () => {
  const { cards, springs, isOpen, like, hate, bind } = useTinder();

  return (
    <>
      <section className='relative mx-auto flex w-[50rem] grow flex-col items-center'>
        {cards?.map((food, index) => (
          <FoodSwipeCard key={food.id} food={food} style={springs[index]} bind={bind(index)} />
        ))}
        <div className='absolute bottom-0 flex justify-center gap-36'>
          <HateButton onClick={hate} />
          <LikeButton onClick={like} />
        </div>
      </section>
      <Modal isOpen={isOpen} onClose={() => {}}>
        <div>
          <p className='mb-12 text-center text-32 font-bold'>분석이 완료되었습니다.</p>
          <p className='mb-20 text-center text-28 font-bold'>결과를 확인하시겠습니까 ?</p>
          <Button className='w-full' asChild>
            <Link href='/dna/result' className='text-28 font-bold'>
              결과 보기
            </Link>
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default CardSwiper;
