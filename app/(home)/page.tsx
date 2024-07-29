import Banner from './components/Banner';
import Category from './components/Category';
import TodayRecommandation from './components/TodayRecommandation';

export default function Home() {
  return (
    <section>
      <Banner />
      <Category />
      <TodayRecommandation />
    </section>
  );
}
