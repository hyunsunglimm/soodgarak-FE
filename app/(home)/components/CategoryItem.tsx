import Image from 'next/image';
import Link from 'next/link';

type CategoryItemProps = {
  title: string;
  enTitle: string;
  size: '2' | '3';
};

const CategoryItem = ({ title, enTitle, size }: CategoryItemProps) => {
  return (
    <Link
      href={`/foods?category=${enTitle}`}
      className={`group relative overflow-hidden rounded-12 ${size === '2' ? 'col-span-2' : 'col-span-3'}`}
    >
      <Image
        src={`/images/${enTitle}.png`}
        alt={title}
        width={300}
        height={0}
        className='h-auto w-full transition group-hover:scale-110'
        priority
      />
      <div className='absolute top-0 flex h-full w-full items-center justify-center bg-black/50'>
        <p className='text-24 font-bold text-white'>{title}</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
