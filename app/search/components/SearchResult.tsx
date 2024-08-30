'use client';

import FoodList from '@/components/FoodList';
import Spinner from '@/components/Spinner';
import { getFoodsByKeyword } from '@/service/food';
import { useQuery } from '@tanstack/react-query';

const SearchResult = ({ keyword }: { keyword: string }) => {
  const { data, isPending, isSuccess } = useQuery({
    queryKey: ['foods', { type: 'search' }, keyword],
    queryFn: () => getFoodsByKeyword(keyword)
  });

  return (
    <section>
      {isPending && <Spinner color='border-primary' />}
      {isSuccess && (
        <p className='mb-16 text-end text-gray-500'>{data.totalCount}개의 요리들이 있습니다.</p>
      )}
      {isSuccess && <FoodList foods={data.recipeResponse} />}
    </section>
  );
};

export default SearchResult;
