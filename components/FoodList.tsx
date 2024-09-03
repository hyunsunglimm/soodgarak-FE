import { SimpleFood } from '@/types/food';
import FoodListItem from './FoodListItem';

type FoodListProps = {
  foods: SimpleFood[];
};

const FoodList = ({ foods }: FoodListProps) => {
  return (
    <ul className='grid grid-cols-2 gap-20'>
      {foods?.map((food, index) => (
        <li key={food.id}>
          <FoodListItem food={food} priority={index <= 6} />
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
