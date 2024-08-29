'use client';

import { SimpleFood } from '@/types/food';
import Image from 'next/image';
import Link from 'next/link';
import TogglePin from './TogglePin';

type FoodListItemProps = {
  food: SimpleFood;
  priority: boolean;
};

const FoodListItem = ({ food, priority }: FoodListItemProps) => {
  return (
    <div>
      <div className='relative block overflow-hidden rounded-12 border'>
        <Link href={`/foods/${food.id}`}>
          <Image
            src={food.mainImage}
            alt={`${food.menu} 이미지`}
            width={290}
            height={290}
            className='h-[29rem] w-[29rem] object-cover transition hover:scale-110'
            priority={priority}
          />
        </Link>
        <div className='absolute bottom-4 right-4 flex gap-12'>
          <div className='rounded-12 bg-black/50 p-8 text-[2rem] font-bold text-white'>
            {food.way}
          </div>
          <div className='rounded-12 bg-black/50 p-8 text-[2rem] font-bold text-white'>
            {food.category}
          </div>
        </div>
        <TogglePin />
      </div>
      <p className='p-12 text-20'>{food.menu}</p>
    </div>
  );
};

export default FoodListItem;
