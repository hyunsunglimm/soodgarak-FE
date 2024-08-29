'use client';

import FoodList from '@/components/FoodList';
import Spinner from '@/components/Spinner';
import { getTodayRecommendationFoods } from '@/service/food';
import { useQuery } from '@tanstack/react-query';

const TodayRecommandation = () => {
  const {
    data: todayRecommandationFoods,
    isPending,
    isSuccess
  } = useQuery({
    queryKey: ['foods', { type: 'today' }],
    queryFn: getTodayRecommendationFoods
  });

  return (
    <section className='mt-[7.2rem]'>
      <h2 className='mb-24 text-28 font-bold'>오늘 이런 음식은 어때요 ?</h2>
      {isPending && <Spinner color='border-primary' />}
      {isSuccess && <FoodList foods={todayRecommandationFoods} />}
    </section>
  );
};

export default TodayRecommandation;
