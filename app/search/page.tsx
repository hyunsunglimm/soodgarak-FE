import { redirect } from 'next/navigation';
import SearchResult from './components/SearchResult';

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
      <SearchResult keyword={keyword} />
    </section>
  );
};

export default SearchPage;
