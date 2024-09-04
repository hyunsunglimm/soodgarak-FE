import { getFoodById } from '@/service/food';
import Image from 'next/image';
import { redirect } from 'next/navigation';

type FoodDetailPageProps = {
  params: {
    foodId: string;
  };
};

const FoodDetailPage = async ({ params }: FoodDetailPageProps) => {
  const food = await getFoodById(params.foodId);

  if (!food) return redirect('/');

  return (
    <section>
      <div className='mb-52'>
        <Image
          src={food.mainImage}
          alt={`${food.menu} 이미지`}
          width='0'
          height='0'
          className='mb-24 h-[40rem] w-full rounded-12 object-cover'
          priority
        />
        <h2 className='text-32 font-bold'>{food.menu}</h2>
      </div>
      <div className='flex flex-col gap-[4.8rem]'>
        <div>
          <h3 className='mb-32 text-28 font-bold'>요리 재료</h3>
          <p className='text-24'>{food.ingredient}</p>
        </div>
        <div>
          <h3 className='mb-32 text-28 font-bold'>레시피 팁 !</h3>
          <p className='text-24'>{food.tip}</p>
        </div>
        <div>
          <h3 className='mb-32 text-28 font-bold'>요리 순서</h3>
          <ul className='flex flex-col gap-[4rem]'>
            {food.manualList.map((m) => (
              <li key={m.manualId}>
                <p className='mb-24 text-24'>
                  {m.manualId}. {m.manual}
                </p>
                <Image
                  src={m.manualImgUrl}
                  alt={`${food.menu}의 ${m.manualId}번 째 요리 방법`}
                  width='0'
                  height='0'
                  className='w-[40rem] rounded-12'
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
