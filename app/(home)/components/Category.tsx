import { CATEGORY_LIST } from '@/utils/staticData';
import CategoryItem from './CategoryItem';

const Category = () => {
  return (
    <section className='mt-[7.2rem]'>
      <h2 className='mb-24 text-28 font-bold'>어떤 음식을 찾으시나요 ?</h2>
      <div className='grid grid-cols-6 gap-12'>
        {CATEGORY_LIST.map(({ title, enTitle, size }) => (
          <CategoryItem key={title} title={title} enTitle={enTitle} size={size} />
        ))}
      </div>
    </section>
  );
};

export default Category;
