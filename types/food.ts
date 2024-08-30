type Manual = {
  text: string;
  img: string;
};

export type Food = {
  id: number;
  name: string;
  recipeWay: string;
  category: string;
  ingredient: string;
  manual: Manual[];
  mainImg: string;
  recipeTip: string;
};

export type SimpleFood = {
  id: number;
  menu: string;
  mainImage: string;
  mbti: string;
  way: string;
  category: string;
};

export type FoodsResponse = {
  hasNextData: boolean;
  recipeResponse: SimpleFood[];
  totalCount: number;
};
