import FoodList from '@/components/FoodList';
import { DUMMY_FOODS } from '@/mock/data';

const TodayRecommandation = () => {
  return (
    <section className='mt-[7.2rem]'>
      <h2 className='mb-24 text-28 font-bold'>오늘 이런 음식은 어때요 ?</h2>
      <FoodList foods={DUMMY_FOODS} />
    </section>
  );
};

export default TodayRecommandation;
