'use client';

import { useState } from 'react';
import CardSwiper from './CardSwiper';
import { getQueryClient } from '@/context/queryProvider';
import { Button } from '@/components/ui/button';

const FoodDnaLanding = () => {
  const [isAgree, setIsAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const goToFoodDnaTest = async () => {
    setIsLoading(true);
    const queryClient = getQueryClient();
    await queryClient.prefetchQuery({
      queryKey: ['dna'],
      queryFn: async () => fetch('/api/dna').then((res) => res.json()),
      staleTime: 0
    });
    setIsAgree(true);
    setIsLoading(false);
  };

  if (isAgree) {
    return <CardSwiper />;
  }

  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-28'>
        푸드 DNA 검사를 완료하면 사용자의 취향을 기반으로 음식을 추천받을 수 있습니다.
      </h1>
      <Button onClick={goToFoodDnaTest} disabled={isLoading}>
        <p className='text-32 font-bold'>{isLoading ? '음식 불러오는중...' : '검사하기'}</p>
      </Button>
    </section>
  );
};

export default FoodDnaLanding;
