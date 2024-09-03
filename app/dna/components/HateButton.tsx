import { IoIosClose } from 'react-icons/io';

const HateButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <div
      className='flex h-[9rem] w-[9rem] cursor-pointer items-center justify-center rounded-full bg-white shadow-all'
      onClick={onClick}
    >
      <IoIosClose className='h-[10rem] w-[10rem] text-red-500' />
    </div>
  );
};

export default HateButton;
