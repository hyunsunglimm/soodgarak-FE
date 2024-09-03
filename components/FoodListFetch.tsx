'use client';

import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import FoodList from './FoodList';
import { getFoodsByCategory } from '@/service/food';
import Spinner from './Spinner';
import useObserver from '@/hooks/useObserver';

const FoodListFetch = ({ mbti }: { mbti: string }) => {
  const { data, isPending, isSuccess, isFetchingNextPage, fetchNextPage } = useInfiniteQuery({
    queryKey: ['foods', { type: 'category' }, mbti],
    queryFn: ({ pageParam }) => getFoodsByCategory(mbti, pageParam),
    initialPageParam: 1,
    getNextPageParam: (result, _, next) => {
      if (!result.hasNextData) return undefined;

      return next + 1;
    }
  });

  const { target: bottom } = useObserver({ fetchNextPage });

  return (
    <>
      <section>
        {isPending && <Spinner color='border-primary' />}
        {isSuccess && (
          <p className='mb-16 text-end text-gray-500'>
            {data.pages[0].totalCount}개의 요리가 있습니다.
          </p>
        )}
        {data?.pages.map((page, index) => <FoodList key={index} foods={page.recipeResponse} />)}
      </section>
      {isFetchingNextPage && <Spinner color='border-primary' />}
      <div ref={bottom} />
    </>
  );
};

export default FoodListFetch;
