'use client';

import Image from 'next/image';
import SearchIcon from '@/components/icon/SearchIcon';
import { useRef } from 'react';
import Link from 'next/link';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const inputFocusHandler = () => {
    inputRef.current?.focus();
  };

  return (
    <header className='sticky top-0 flex gap-20 bg-white p-20'>
      <Link href='/'>
        <Image
          src='/images/soodgarak-logo.png'
          alt='soodgarak logo'
          width={150}
          height={60}
          className='h-[6rem] w-[15rem]'
        />
      </Link>
      <div className='relative grow'>
        <input
          className='text-20 rounded-12 h-[6rem] w-full bg-gray-sm pl-[5.6rem]'
          placeholder='요리 or 재료'
          ref={inputRef}
        />
        <SearchIcon
          className='absolute left-[1.2rem] top-[1.4rem] h-[3.2rem] w-[3.2rem] cursor-pointer'
          onClick={inputFocusHandler}
        />
      </div>
    </header>
  );
};

export default Header;
