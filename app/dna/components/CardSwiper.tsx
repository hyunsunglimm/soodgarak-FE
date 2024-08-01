'use client';

import { DUMMY_FOODS } from '@/mock/data';
import { useSprings, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import Image from 'next/image';
import HateButton from './HateButton';
import LikeButton from './LikeButton';
import { useRef, useState } from 'react';
import { Food } from '@/types/food';
import FoodSwipeCard from './FoodSwipeCard';

const CardSwiper = () => {
  const [cards, setCards] = useState<Food[]>(DUMMY_FOODS);
  const [currentIndex, setCurrentIndex] = useState(cards.length - 1);
  const [springs, api] = useSprings(cards.length, (index) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    config: { duration: window.innerWidth * 0.7 }
  }));
  const frame = useRef<HTMLDivElement>(null);
  const gone = new Set<number>();

  const complete = (
    isTrigger: boolean,
    index: number,
    xDir: number,
    active = false,
    mx = 0,
    vx = 1
  ) => {
    if (isTrigger) gone.add(index);

    api.start((i) => {
      if (index !== i) return;
      setCurrentIndex(index - 1);

      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      const rotate = active
        ? (mx / window.innerWidth) * 20
        : isGone
          ? mx / 100 + xDir * 10 * vx
          : 0;

      const scale = active ? 1.1 : 1;

      return {
        x,
        y: 0,
        rotate,
        scale,
        config: { friction: 50, tension: active ? 800 : isGone ? 200 : 500 }
      };
    });
  };

  const bind = useDrag(
    ({ active, movement: [mx], direction: [xDir], velocity: [vx], args: [index] }) => {
      const trigger = vx > 0.2;
      if (!active && trigger) gone.add(index);

      complete(!active && trigger, index, xDir, active, mx, vx);
    }
  );

  const like = () => {
    complete(true, currentIndex, 1);
  };

  const hate = () => {
    complete(true, currentIndex, -1);
  };

  return (
    <section className='relative mx-auto flex w-[50rem] grow flex-col items-center' ref={frame}>
      {cards.map((food, index) => (
        <FoodSwipeCard key={food.name} food={food} style={springs[index]} bind={bind(index)} />
      ))}
      <div className='absolute bottom-0 flex justify-center gap-36'>
        <HateButton onClick={hate} />
        <LikeButton onClick={like} />
      </div>
    </section>
  );
};

export default CardSwiper;
