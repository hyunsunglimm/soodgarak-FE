'use client';

import { createRef, useMemo, useRef, useState } from 'react';
import FoodSwipeCard from './FoodSwipeCard';
import ActionBar from './ActionBar';
import TinderCard from 'react-tinder-card';
import { DUMMY_FOODS } from '@/mock/data';

type Direction = 'left' | 'right' | 'up' | 'down';

const CardSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(DUMMY_FOODS.length - 1);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(DUMMY_FOODS.length)
        .fill(0)
        .map(() => createRef<any>()),
    []
  );

  const updateCurrentIndex = (val: number) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  const swiped = (index: number) => {
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name: string, idx: number) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir: Direction) => {
    if (canSwipe && currentIndex < DUMMY_FOODS.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  return (
    <section>
      <div className='relative h-[56vh]'>
        {DUMMY_FOODS.map((food, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='absolute left-[7rem]'
            key={food.name}
            onSwipe={() => swiped(index)}
            onCardLeftScreen={() => outOfFrame(food.name, index)}
          >
            <FoodSwipeCard food={food} />
          </TinderCard>
        ))}
      </div>
      <ActionBar onSwipe={swipe} />
    </section>
  );
};

export default CardSwiper;
