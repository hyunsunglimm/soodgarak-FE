'use client';

import { createRef, useMemo, useRef, useState } from 'react';
import FoodCard from './FoodCard';
import ActionBar from './ActionBar';
import TinderCard from 'react-tinder-card';

type Direction = 'left' | 'right' | 'up' | 'down';

const CardSwiper = () => {
  const DUMMY_FOODS = [
    {
      name: '대패짬뽕',
      img: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702651_234_10.jpg'
    },
    {
      name: '대패베이컨칩',
      img: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702640_234_09.jpg'
    },
    {
      name: '닭가슴살양배추쌈',
      img: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702639_234_08.jpg'
    },
    {
      name: '시금치계란찜',
      img: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702628_234_07.jpg'
    },
    {
      name: '감자토스트',
      img: 'https://pbbsres.kbs.co.kr/t2019-0286-04-296340/2024/07/19/2702617_234_06.jpg'
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(DUMMY_FOODS.length - 1);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(DUMMY_FOODS.length)
        .fill(0)
        .map(() => createRef<any>()),
    [DUMMY_FOODS.length]
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
        {DUMMY_FOODS.reverse().map((food, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='absolute left-[7rem]'
            key={food.name}
            onSwipe={() => swiped(index)}
            onCardLeftScreen={() => outOfFrame(food.name, index)}
          >
            <FoodCard food={food} />
          </TinderCard>
        ))}
      </div>
      <ActionBar onSwipe={swipe} />
    </section>
  );
};

export default CardSwiper;
