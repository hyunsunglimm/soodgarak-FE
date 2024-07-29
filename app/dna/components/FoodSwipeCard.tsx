'use client';

import { Food } from '@/types/food';
import Image from 'next/image';

type FoodCardProps = {
  food: Food;
};

const FoodSwipeCard = ({ food }: FoodCardProps) => {
  return (
    <div className='relative h-[56vh] w-[46rem] cursor-grab touch-none overflow-hidden rounded-16 border bg-white'>
      <Image
        src={food.mainImg}
        alt={`${food.name} 이미지`}
        width={360}
        height={540}
        className='h-[56vh] w-[46rem] object-cover'
      />
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/10 to-black/40' />
      <p className='absolute bottom-4 left-1/2 w-full -translate-x-1/2 text-center text-24 text-white'>
        {food.name}
      </p>
    </div>
  );
};

export default FoodSwipeCard;
