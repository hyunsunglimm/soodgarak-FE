type Manual = {
  text: string;
  img: string;
};

export type Food = {
  name: string;
  recipeWay: string;
  category: string;
  ingredient: string;
  manual: Manual[];
  mainImg: string;
  recipeTip: string;
};
