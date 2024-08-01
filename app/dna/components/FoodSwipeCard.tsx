'use client';

import { Food } from '@/types/food';
import Image from 'next/image';
import { SpringValue, animated } from '@react-spring/web';
import { ReactDOMAttributes } from '@use-gesture/react/dist/declarations/src/types';

type Spring = {
  x: SpringValue<number>;
  y: SpringValue<number>;
  rotate: SpringValue<number>;
  scale: SpringValue<number>;
};

type FoodCardProps = {
  food: Food;
  style: Spring;
  bind: ReactDOMAttributes;
};

const FoodSwipeCard = ({ food, style, bind }: FoodCardProps) => {
  return (
    <animated.div
      style={style}
      {...bind}
      className='absolute z-20 h-5/6 w-[50rem] cursor-grab touch-none overflow-hidden rounded-16 bg-white'
    >
      <Image
        src={food.mainImg}
        alt={`${food.name} 이미지`}
        width={360}
        height={540}
        className='h-full w-full object-cover'
        priority
      />
      <div className='absolute left-0 top-0 h-full w-full bg-gradient-to-b from-white/10 to-black/40' />
      <p className='absolute bottom-8 left-1/2 w-full -translate-x-1/2 text-center text-40 text-white'>
        {food.name}
      </p>
    </animated.div>
  );
};

export default FoodSwipeCard;
