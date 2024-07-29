'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

type SwiperWrapperProps = {
  children: Array<React.ReactNode>;
};

const SwiperWrapper = ({ children }: SwiperWrapperProps) => {
  return (
    <Swiper autoplay slidesPerView={1} loop className='rounded-12'>
      {children.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperWrapper;
