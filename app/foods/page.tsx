import FoodList from '@/components/FoodList';
import { DUMMY_FOODS } from '@/mock/data';
import { CATEGORY_LIST } from '@/utils/staticData';
import { redirect } from 'next/navigation';

type FoodsPageProps = {
  searchParams: {
    category: string;
  };
};

const FoodsPage = ({ searchParams }: FoodsPageProps) => {
  if (!searchParams.category) return redirect('/');
  const { category } = searchParams;
  const categoryKrTitle = CATEGORY_LIST.find((c) => c.enTitle === category)?.title;

  if (!categoryKrTitle) return redirect('/');

  return (
    <section>
      <h1 className='mb-8 text-28 font-bold'>{categoryKrTitle}</h1>
      <p className='mb-16 text-end text-gray-500'>{DUMMY_FOODS.length}개의 요리들이 있습니다.</p>
      <FoodList foods={DUMMY_FOODS} />
    </section>
  );
};

export default FoodsPage;
