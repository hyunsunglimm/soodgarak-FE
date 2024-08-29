'use client';

import FillLoading from '@/components/FillLoading';
import { Button } from '@/components/ui/button';
import { pokemon } from '@/utils/staticData';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const FoodDNAResult = () => {
  const router = useRouter();
  const mbti = sessionStorage.getItem('mbti');

  if (!mbti) {
    router.replace('/dna');

    return <FillLoading />;
  }

  const foodDNA = pokemon.find((p) => p.mbti === mbti);

  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-32'>푸드 DNA 분석이 완료 되었습니다!</h1>
      <p className='text-28 font-bold'>{mbti}</p>
      <Image
        src={`/images/pokemon/${mbti}.png`}
        alt={`${mbti}에 해당하는 포켓몬`}
        width={96}
        height={96}
        priority
      />
      <p className='text-24 font-bold'>{foodDNA?.name}</p>
      <div className='mt-40 flex w-full gap-20'>
        <Button className='w-full' variant='outline' asChild>
          <Link href='/dna' className='text-28 font-bold'>
            다시하기
          </Link>
        </Button>
        <Button className='w-full' asChild>
          <Link href='/my' className='text-28 font-bold'>
            내 정보에 등록
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FoodDNAResult;
