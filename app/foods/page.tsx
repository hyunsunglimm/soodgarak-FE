import FoodListFetch from '@/components/FoodListFetch';
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
  const mbti = CATEGORY_LIST.find((c) => c.enTitle === category)?.mbti;

  if (!categoryKrTitle || !mbti) return redirect('/');

  return (
    <section>
      <h1 className='mb-8 text-28 font-bold'>{categoryKrTitle}</h1>
      <FoodListFetch mbti={mbti} />
    </section>
  );
};

export default FoodsPage;
