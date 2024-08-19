const FridgeMenu = () => {
  return (
    <ul className='bg-primary flex w-full items-center overflow-hidden rounded-12 text-center leading-[4.8rem] text-white'>
      <li className='bg-action w-[33.3333%] cursor-pointer'>내 냉장고</li>|
      <li className='w-[33.3333%] cursor-pointer'>식재료 추가</li>|
      <li className='w-[33.3333%] cursor-pointer'>식재료 선택</li>
    </ul>
  );
};

export default FridgeMenu;
