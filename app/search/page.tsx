import FoodList from '@/components/FoodList';
import { DUMMY_FOODS } from '@/mock/data';
import { redirect } from 'next/navigation';

type SearchPageProps = {
  searchParams: {
    keyword: string;
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  if (!searchParams.keyword) return redirect('/');
  const { keyword } = searchParams;

  return (
    <section>
      <h1 className='mb-8 text-28 font-bold'>{`"${keyword}"의 검색결과`}</h1>
      <p className='mb-16 text-end text-gray-500'>{DUMMY_FOODS.length}개의 요리들이 있습니다.</p>
      <FoodList foods={DUMMY_FOODS} />
    </section>
  );
};

export default SearchPage;
