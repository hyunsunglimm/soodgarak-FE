'use client';

import { useSprings } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import HateButton from './HateButton';
import LikeButton from './LikeButton';
import { useEffect, useRef, useState } from 'react';
import { Food } from '@/types/food';
import FoodSwipeCard from './FoodSwipeCard';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CardSwiper = () => {
  const { data: cards } = useQuery<Food[]>({
    queryKey: ['dna'],
    queryFn: () => fetch('/api/dna').then((res) => res.json())
  });

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(cards!.length - 1);
  const [likedCards, setLikedCards] = useState<Food[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [springs, api] = useSprings(cards!.length, (index) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    config: { duration: window.innerWidth * 0.7 }
  }));
  const frame = useRef<HTMLDivElement>(null);
  const gone = new Set<number>();

  useEffect(() => {
    if (likedCards.length === 15) {
      setIsOpen(true);
    }
  }, [likedCards.length, router]);

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

      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * xDir : active ? mx : 0;
      const rotate = active
        ? (mx / window.innerWidth) * 20
        : isGone
          ? mx / 100 + xDir * 10 * vx
          : 0;

      const scale = active ? 1.1 : 1;

      if (isGone) {
        setCurrentIndex(index - 1);
        if (xDir === 1) setLikedCards((prev) => [...prev, cards![currentIndex]]);
      }

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
    <>
      <section className='relative mx-auto flex w-[50rem] grow flex-col items-center' ref={frame}>
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

// 배포 테스트
