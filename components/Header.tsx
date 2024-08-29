'use client';

import Image from 'next/image';
import SearchIcon from '@/components/icon/SearchIcon';
import { FormEvent, useRef } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { getQueryClient } from '@/context/queryProvider';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const keyword = searchParams.get('keyword');

  const inputFocusHandler = () => {
    inputRef.current?.focus();
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // 매 검색 시 새로운 데이터 요청
    if (inputRef.current?.value === keyword) {
      location.href = `/search?keyword=${inputRef.current?.value}`;
    } else {
      const queryClient = getQueryClient();
      queryClient.removeQueries({
        queryKey: ['foods', { type: 'search' }, inputRef.current?.value],
        exact: true
      });

      router.push(`/search?keyword=${inputRef.current?.value}`);
    }

    if (inputRef.current) inputRef.current.value = '';
  };

  return (
    <header className='sticky top-0 z-10 flex gap-20 bg-white p-20'>
      <Link href='/'>
        <Image
          src='/images/soodgarak-logo.png'
          alt='soodgarak logo'
          width={150}
          height={60}
          className='h-[6rem] w-[15rem]'
          priority
        />
      </Link>
      <form className='relative grow' onSubmit={handleSubmit}>
        <input
          className='h-[6rem] w-full rounded-12 bg-gray-sm pl-[5.6rem] text-20'
          placeholder='요리 or 재료'
          ref={inputRef}
          required
        />
        <SearchIcon
          className='absolute left-[1.2rem] top-[1.4rem] h-[3.2rem] w-[3.2rem] cursor-pointer'
          onClick={inputFocusHandler}
        />
      </form>
    </header>
  );
};

export default Header;
