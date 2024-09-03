'use client';

import { useState } from 'react';
import CardSwiper from './CardSwiper';
import FoodDNALanding from './Temp';

const FoodDNA = () => {
  const [isTest, setIsTest] = useState(false);
  return (
    <>
      {isTest && <CardSwiper />}
      {!isTest && <FoodDNALanding onTest={() => setIsTest(true)} />}
    </>
  );
};

export default FoodDNA;
