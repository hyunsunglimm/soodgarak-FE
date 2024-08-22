import { DUMMY_FOODS } from '@/mock/data';

export const GET = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const foods = DUMMY_FOODS;

  return Response.json(foods);
};
