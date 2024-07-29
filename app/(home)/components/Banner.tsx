import SwiperWrapper from '@/components/SwiperWrapper';
import React from 'react';

const Banner = () => {
  return (
    <SwiperWrapper>
      <div className='flex h-[16rem] cursor-grab items-center justify-center bg-blue-500 text-white'>
        banner 1
      </div>
      <div className='flex h-[16rem] cursor-grab items-center justify-center bg-red-500 text-white'>
        banner 2
      </div>
      <div className='flex h-[16rem] cursor-grab items-center justify-center bg-green-500 text-white'>
        banner 3
      </div>
    </SwiperWrapper>
  );
};

export default Banner;
