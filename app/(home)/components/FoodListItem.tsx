import { Food } from '@/types/food';
import Image from 'next/image';
import Link from 'next/link';

type FoodListItemProps = {
  food: Food;
};

const FoodListItem = ({ food }: FoodListItemProps) => {
  return (
    <Link href={`/foods/${food.name}`} className='group relative'>
      <div className='overflow-hidden rounded-12'>
        <Image
          src={food.mainImg}
          alt={`${food.name} 이미지`}
          width={300}
          height={260}
          className='transition group-hover:scale-110'
        />
      </div>
      <p className='p-12 text-20'>{food.name}</p>
      <div className='absolute right-4 top-4 flex gap-12'>
        <button className='rounded-12 bg-white p-6'>{food.recipeWay}</button>
        <button className='rounded-12 bg-white p-6'>{food.category}</button>
      </div>
    </Link>
  );
};

export default FoodListItem;
