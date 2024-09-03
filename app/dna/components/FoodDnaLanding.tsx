'use client';

import { Button } from '@/components/ui/button';

const FoodDNALanding = ({ onTest }: { onTest: () => void }) => {
  return (
    <section className='flex grow flex-col items-center justify-center gap-24'>
      <h1 className='text-center text-28'>
        푸드 DNA 검사를 완료하면 사용자의 취향을 기반으로 음식을 추천받을 수 있습니다.
      </h1>
      <Button onClick={onTest}>
        <p className='text-32 font-bold'>검사하기</p>
      </Button>
    </section>
  );
};

// 빌드 에러 해결

export default FoodDNALanding;
