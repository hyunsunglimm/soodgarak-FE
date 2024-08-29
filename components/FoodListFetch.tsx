'use client';

import { useQuery } from '@tanstack/react-query';
import FoodList from './FoodList';
import { getFoodsByCategory } from '@/service/food';
import Spinner from './Spinner';

const FoodListFetch = ({ mbti }: { mbti: string }) => {
  const {
    data: foods,
    isPending,
    isSuccess
  } = useQuery({
    queryKey: ['foods', { type: 'category' }, mbti],
    queryFn: () => getFoodsByCategory(mbti)
  });

  return (
    <section>
      {isPending && <Spinner color='border-primary' />}
      {isSuccess && <p className='mb-16 text-end text-gray-500'>30개의 요리들이 있습니다.</p>}
      {isSuccess && <FoodList foods={foods} />}
    </section>
  );
};

export default FoodListFetch;
