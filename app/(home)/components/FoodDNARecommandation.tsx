'use client';

import { useQuery } from '@tanstack/react-query';
import { getFoodsByDNA } from '@/service/food';
import FoodList from '@/components/FoodList';
import RefreshIcon from '@/components/icon/RefreshIcon';
import Spinner from '@/components/Spinner';
import Link from 'next/link';

const FoodDNARecommandation = () => {
  const mbti = sessionStorage.getItem('mbti');
  const { data, isSuccess, isPending, refetch } = useQuery({
    queryKey: ['foods', { type: 'mbti' }, mbti],
    queryFn: () => (mbti ? getFoodsByDNA(mbti) : null),
    enabled: !!mbti
  });

  if (!mbti) {
    return (
      <section className='mt-[7.2rem] rounded-12 bg-primary p-12'>
        <Link href='/dna' className='text-28 font-bold'>
          푸드 DNA 검사를 완료하고, 맞춤형 음식을 추천받으세요 !
        </Link>
      </section>
    );
  }

  return (
    <section className='mt-[7.2rem]'>
      <div className='mb-24 flex items-center justify-between'>
        <h2 className='text-28 font-bold'>✨ Food DNA 맞춤 음식입니다 !</h2>
        <button onClick={() => refetch()}>
          <RefreshIcon />
        </button>
      </div>
      {isPending && <Spinner color='border-primary' />}
      {isSuccess && data && <FoodList foods={data.recipeResponse} />}
    </section>
  );
};

export default FoodDNARecommandation;
