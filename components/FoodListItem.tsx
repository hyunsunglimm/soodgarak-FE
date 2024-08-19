'use client';

import { Food } from '@/types/food';
import Image from 'next/image';
import Link from 'next/link';
import TogglePin from './TogglePin';

type FoodListItemProps = {
  food: Food;
  priority: boolean;
};

const FoodListItem = ({ food, priority }: FoodListItemProps) => {
  return (
    <div>
      <div className='relative block overflow-hidden rounded-12'>
        <Link href={`/foods/${food.name}`}>
          <Image
            src={food.mainImg}
            alt={`${food.name} 이미지`}
            width={300}
            height={260}
            className='transition hover:scale-110'
            priority={priority}
          />
        </Link>
        <div className='absolute bottom-4 right-4 flex gap-12'>
          <div className='rounded-12 bg-black/50 p-8 text-[2rem] font-bold text-white'>
            {food.recipeWay}
          </div>
          <div className='rounded-12 bg-black/50 p-8 text-[2rem] font-bold text-white'>
            {food.category}
          </div>
        </div>
        <TogglePin />
      </div>
      <p className='p-12 text-20'>{food.name}</p>
    </div>
  );
};

export default FoodListItem;
