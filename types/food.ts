export type Manual = {
  manualId: number;
  manual: string;
  manualImgUrl: string;
};

export type Food = {
  recipeId: number;
  menu: string;
  ingredient: string;
  mainImage: string;
  tip: string;
  manualList: Manual[];
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
