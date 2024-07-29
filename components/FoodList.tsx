import FoodListItem from '@/app/(home)/components/FoodListItem';
import { DUMMY_FOODS } from '@/mock/data';
import { Food } from '@/types/food';

type FoodListProps = {
  foods: Food[];
};

const FoodList = ({ foods }: FoodListProps) => {
  return (
    <ul className='grid grid-cols-2 gap-20'>
      {foods.map((food) => (
        <li key={food.name}>
          <FoodListItem food={food} />
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
