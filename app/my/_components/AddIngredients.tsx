'use client';

import React, { useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import Image from 'next/image';
import { CategoryOption, categoryOptions, subCategoryOptions } from '@/utils/categoryData';
import { getTodayDate } from '@/utils/getTodayDate';

const AddIngredients = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryOption | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<CategoryOption | null>(null);
  const [itemName, setItemName] = useState('');
  const [storage, setStorage] = useState<string | null>('냉장');
  const [purchaseDate, setPurchaseDate] = useState(getTodayDate());
  const [expirationDate, setExpirationDate] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);
  const purchaseDateRef = useRef<HTMLInputElement>(null);
  const expirationDateRef = useRef<HTMLInputElement>(null);

  // 대분류 내용 변경
  const handleCategoryChange = (option: CategoryOption | null) => {
    setSelectedCategory(option);
    setSelectedSubCategory(null); // 소분류 초기화
    setItemName(''); // 이름 필드도 초기화
  };

  const handleSubCategoryChange = (option: CategoryOption | null) => {
    setSelectedSubCategory(option);
    if (option) {
      setItemName(option.label);
    }
  };

  // 옵션 커스텀
  const formatOptionLabel = (option: CategoryOption) => (
    <div className='flex items-center'>
      <div className='relative mr-8 h-[4rem] w-[4rem]'>
        <Image src={option.imageUrl} alt={option.label} fill />
      </div>
      <span>{option.label}</span>
    </div>
  );

  // 현재 선택된 대분류에 소분류 옵션이 있는지 확인
  const hasSubCategories =
    selectedCategory && subCategoryOptions[selectedCategory.value]?.length > 0;

  const handleStorageChange = (value: string) => {
    setStorage(value);
  };

  // 이름 입력 필드 포커스
  const handleNameFocus = () => {
    if (inputRef.current && selectedSubCategory && itemName === selectedSubCategory.label) {
      inputRef.current.select();
    }
  };

  // date input focus
  const handlePurchaseDateClick = () => {
    if (purchaseDateRef.current) {
      purchaseDateRef.current.focus();
    }
  };

  const handleExpirationDateClick = () => {
    if (expirationDateRef.current) {
      expirationDateRef.current.focus();
    }
  };

  useEffect(() => {
    // 유통기한이 구매날짜보다 이른 경우 유통기한을 구매날짜로 변경
    if (expirationDate && new Date(expirationDate) < new Date(purchaseDate)) {
      setExpirationDate(purchaseDate);
    }
  }, [expirationDate, purchaseDate]);

  const handleSubmit = () => {
    const data = {
      category: selectedCategory?.label,
      subCategory: selectedSubCategory?.label,
      itemName,
      storage,
      purchaseDate,
      expirationDate
    };
    console.log(data);
  };

  return (
    <div>
      <h3 className='mb-32 text-28 font-bold'>냉장고 식재료 추가하기</h3>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>분류</label>
        <div className='flex items-center justify-between'>
          <div className='w-[28.1rem]'>
            <Select
              instanceId='category'
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={categoryOptions}
              formatOptionLabel={formatOptionLabel}
              placeholder='대분류'
              isSearchable={false}
              styles={{
                control: (base) => ({
                  ...base,
                  height: '6rem',
                  fontSize: '1.8rem'
                })
              }}
            />
          </div>
          {hasSubCategories && (
            <>
              <div className='relative mx-10 h-[2.8rem] w-[1.8rem]'>
                <Image src='/images/arrow_next.png' alt='오른쪽화살표' fill />
              </div>
              <div className='w-[28.1rem]'>
                <Select
                  instanceId='subCategory'
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  options={subCategoryOptions[selectedCategory.value]}
                  formatOptionLabel={formatOptionLabel}
                  placeholder='소분류'
                  isSearchable={false}
                  styles={{
                    control: (base) => ({
                      ...base,
                      height: '6rem',
                      fontSize: '1.8rem'
                    })
                  }}
                />
              </div>
            </>
          )}
        </div>
      </div>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>이름</label>
        <input
          type='text'
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          onFocus={handleNameFocus}
          ref={inputRef}
          className='h-[4.8rem] w-[28.1rem] rounded-4 border border-gray-md px-12 text-18 focus:outline-[#2684ff]'
        />
      </div>
      <div className='mb-32'>
        <label className='mb-12 block text-20'>보관 상태</label>
        <div className='flex space-x-4'>
          <button
            onClick={() => handleStorageChange('냉장')}
            className={`h-[3.6rem] w-[7.2rem] rounded-20 border border-gray-md text-18 transition-colors ${
              storage === '냉장' ? 'bg-gray-400 text-white' : 'text-gray-800'
            }`}
          >
            냉장
          </button>
          <button
            onClick={() => handleStorageChange('냉동')}
            className={`h-[3.6rem] w-[7.2rem] rounded-20 border text-18 transition-colors ${
              storage === '냉동' ? 'bg-gray-400 text-white' : 'text-gray-800'
            }`}
          >
            냉동
          </button>
        </div>
      </div>
      <div className='flex items-center'>
        <div>
          <label className='mb-12 block text-20'>구매날짜</label>
          <input
            type='date'
            ref={purchaseDateRef}
            value={purchaseDate}
            max={getTodayDate()}
            onChange={(e) => setPurchaseDate(e.target.value)}
            onClick={handlePurchaseDateClick}
            className='relative h-[4.8rem] w-[22rem] cursor-pointer select-none rounded-4 border px-12 text-18 focus:outline-[#2684ff]'
          />
        </div>
        <p className='mx-20 mt-32 text-32'>~</p>
        <div>
          <label className='mb-12 block text-20'>유통기한</label>
          <input
            type='date'
            ref={expirationDateRef}
            value={expirationDate}
            min={purchaseDate}
            onChange={(e) => setExpirationDate(e.target.value)}
            onClick={handleExpirationDateClick}
            className='relative h-[4.8rem] w-[22rem] select-none rounded-4 border px-12 text-18 focus:outline-[#2684ff]'
          />
        </div>
      </div>
      <button
        className='mt-[12rem] h-[5.2rem] w-full rounded-4 bg-primary text-20 text-white'
        onClick={handleSubmit}
      >
        추가하기
      </button>
    </div>
  );
};

export default AddIngredients;
