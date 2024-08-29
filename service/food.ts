import { SimpleFood } from '@/types/food';

export const getTodayRecommendationFoods = async (): Promise<SimpleFood[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe`);
  const foods = await res.json();

  return foods;
};

export const getFoodsByCategory = async (category: string): Promise<SimpleFood[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe?category=${category}`);
  const foods = await res.json();

  return foods;
};

export const getFoodsByKeyword = async (keyword: string): Promise<SimpleFood[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe?keyword=${keyword}`);
  const foods = await res.json();

  return foods;
};

export const getFoodCards = async (): Promise<SimpleFood[]> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/recipe`);
  const foods = await res.json();

  return foods;
};
