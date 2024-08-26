'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useRef } from 'react';

const FridgeMenu = () => {
  const router = useRouter();
  const searchParams = useSearchParams().get('tab');

  const tabsContainerRef = useRef<HTMLUListElement>(null);

  const handleMenuClick = (selectedTab: string) => {
    if (selectedTab === 'fridge') {
      router.push('/my');
    } else {
      router.push(`/my?tab=${selectedTab}`);
    }
  };

  return (
    <ul
      ref={tabsContainerRef}
      className='bg-tan flex w-full items-center overflow-hidden rounded-12 text-center leading-[4.8rem] text-white'
    >
      <li
        className={`w-[33.3333%] cursor-pointer ${!searchParams ? 'bg-action' : ''}`}
        onClick={() => handleMenuClick('fridge')}
      >
        내 냉장고
      </li>
      |
      <li
        className={`w-[33.3333%] cursor-pointer ${searchParams === 'add' ? 'bg-action' : ''}`}
        onClick={() => handleMenuClick('add')}
      >
        식재료 추가
      </li>
      |
      <li
        className={`w-[33.3333%] cursor-pointer ${searchParams === 'select' ? 'bg-action' : ''}`}
        onClick={() => handleMenuClick('select')}
      >
        식재료 선택
      </li>
    </ul>
  );
};

export default FridgeMenu;
