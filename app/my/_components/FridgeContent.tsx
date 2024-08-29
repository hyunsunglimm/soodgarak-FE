'use client';

import { useState } from 'react';
import { DUMMY_FRIDGE_ITEMS } from '@/mock/fridgeItems';
import Image from 'next/image';

type FridgeContentProps = {
  tab?: string;
};

const FridgeContent = ({ tab }: FridgeContentProps) => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const itemsPerRow = 3;
  const rows = Array.from(
    { length: Math.ceil(DUMMY_FRIDGE_ITEMS.length / itemsPerRow) },
    (_, index) => DUMMY_FRIDGE_ITEMS.slice(index * itemsPerRow, index * itemsPerRow + itemsPerRow)
  );

  const handleCheckboxClick = (id: number) => {
    setSelectedItems((prevSelected) => {
      if (prevSelected.includes(id)) {
        // 선택된 항목은 해제
        return prevSelected.filter((itemId) => itemId !== id);
      } else if (prevSelected.length < 3) {
        // 새 항목 추가
        return [...prevSelected, id];
      }
      return prevSelected; // 최대 개수 선택한 경우 아무 변화 없음
    });
  };

  const handleButtonClick = () => {
    if (tab === 'select') {
      const selectedNames = selectedItems.map(
        (id) => DUMMY_FRIDGE_ITEMS.find((item) => item.id === id)?.name
      );
      const selectedQuery = selectedNames.join(',');
      console.log(selectedQuery);
    }
  };

  return (
    <div className='text-center'>
      {tab === 'select' && (
        <button
          className='mb-20 h-[5.2rem] rounded-4 bg-primary px-24 text-20 text-white'
          onClick={handleButtonClick}
        >
          선택된 식재료로 요리 검색하기
        </button>
      )}
      <div className='h-[64.286rem] w-full bg-refrigerator bg-contain bg-no-repeat'>
        <ul className='h-full pb-[8rem] pl-[6.9rem] pr-[15.3rem] pt-[6rem]'>
          {rows.map((row, rowIndex) => (
            <li key={rowIndex} className='flex h-[25%] items-center'>
              {row.map((item) => (
                <div key={item.id} className='w-[33.3333%]'>
                  <div
                    className='relative m-auto h-[7rem] w-[7rem]'
                    onClick={() => handleCheckboxClick(item.id)}
                  >
                    <Image src={item.img} alt={item.name} fill />
                    {item.type === '냉동' && (
                      <div className='absolute right-0 h-[2.5rem] w-[2.5rem]'>
                        <Image src='/images/fridgeItems/freezing.png' alt='냉동' fill />
                      </div>
                    )}
                    {tab === 'select' && (
                      <div
                        className={`absolute left-[50%] top-[50%] h-[4rem] w-[4rem] translate-x-[-50%] translate-y-[-50%] ${selectedItems.includes(item.id) ? 'opacity-100' : 'opacity-50'}`}
                      >
                        <Image src='/images/checkbox_on.png' alt='체크' fill />
                      </div>
                    )}
                  </div>
                  <p className='text-center'>{item.name}</p>
                </div>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FridgeContent;
