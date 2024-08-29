import { DUMMY_FOOD } from '@/mock/data';
import Image from 'next/image';

type FoodDetailPageProps = {
  params: {
    foodId: string;
  };
};

const FoodDetailPage = ({ params }: FoodDetailPageProps) => {
  const food = DUMMY_FOOD;
  return (
    <section>
      <div className='mb-52'>
        <Image
          src={food?.mainImg || ''}
          alt={`${food?.name} 이미지`}
          width={600}
          height={400}
          className='mb-24 h-[40rem] w-full rounded-12'
          priority
        />
        <h2 className='text-32 font-bold'>{food?.name}</h2>
      </div>
      <div className='flex flex-col gap-[4.8rem]'>
        <div>
          <h3 className='mb-32 text-28 font-bold'>요리 재료</h3>
          <p>{food?.ingredient}</p>
        </div>
        <div>
          <h3 className='mb-32 text-28 font-bold'>레시피 팁 !</h3>
          <p>{food?.recipeTip}</p>
        </div>
        <div>
          <h3 className='mb-32 text-28 font-bold'>요리 순서</h3>
          <ul className='flex flex-col gap-[4rem]'>
            {food?.manual.map((m, index) => (
              <li key={m.text}>
                <p className='mb-24'>
                  {index + 1}. {m.text}
                </p>
                <Image
                  src={m.img}
                  alt={`${food}의 ${index}번 째 요리 방법`}
                  width={200}
                  height={130}
                  className='w-[20rem]'
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FoodDetailPage;
