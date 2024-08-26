import { DUMMY_FOODS } from '@/mock/data';

export const GET = async () => {
  const foods = DUMMY_FOODS;

  return Response.json(foods);
};
