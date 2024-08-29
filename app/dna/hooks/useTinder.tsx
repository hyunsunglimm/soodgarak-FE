import { getFoodCards } from '@/service/food';
import { SimpleFood } from '@/types/food';
import { useSprings } from '@react-spring/web';
import { useQuery } from '@tanstack/react-query';
import { useDrag } from '@use-gesture/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const useTinder = () => {
  // 무한 쿼리로 변경 예정
  const { data: cards } = useQuery({
    queryKey: ['foods', { type: 'dna' }],
    queryFn: getFoodCards
  });

  console.log(cards);

  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(cards!.length - 1);
  const [likedCards, setLikedCards] = useState<SimpleFood[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const [springs, api] = useSprings(cards!.length, (index) => ({
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    config: { duration: window.innerWidth * 0.7 }
  }));

  const gone = new Set<number>();

  useEffect(() => {
    if (likedCards.length === 15) {
      setIsOpen(true);
    } else {
      if (currentIndex + 1 === 10) alert('카드 10장 더 주세요 !');
    }
  }, [likedCards.length, router, currentIndex]);

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
      const x = isGone ? Math.min(200 + window.innerWidth, 1000) * xDir : active ? mx : 0;
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

      complete(!active && trigger, index, xDir, active, mx, vx);
    }
  );

  const like = () => {
    complete(true, currentIndex, 1);
  };

  const hate = () => {
    complete(true, currentIndex, -1);
  };

  return { cards, springs, isOpen, like, hate, bind };
};

export default useTinder;
