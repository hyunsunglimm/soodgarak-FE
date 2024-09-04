import dynamic from 'next/dynamic';
import Banner from './components/Banner';
import Category from './components/Category';
import TodayRecommandation from './components/TodayRecommandation';

const FoodDNARecommandation = dynamic(() => import('./components/FoodDNARecommandation'), {
  ssr: false
});

export default function Home() {
  return (
    <section>
      <Banner />
      <Category />
      <FoodDNARecommandation />
      <TodayRecommandation />
    </section>
  );
}
