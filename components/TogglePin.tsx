'use client';

import Image from 'next/image';
import { useState } from 'react';

const TogglePin = () => {
  const [isPinned, setIsPinned] = useState(false);

  const handleToggle = () => {
    setIsPinned((prev) => !prev);
  };

  return (
    <div
      className='absolute right-4 top-4 cursor-pointer rounded-12 bg-black/50'
      onClick={handleToggle}
    >
      <Image
        src={isPinned ? '/icons/pin-yellow-fill.png' : '/icons/pin-yellow.png'}
        alt='핀'
        width={50}
        height={50}
        className='h-[5rem] w-[5rem]'
      />
    </div>
  );
};

export default TogglePin;
