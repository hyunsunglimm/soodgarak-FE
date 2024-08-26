export type CategoryOption = {
  value: string;
  label: string;
  imageUrl: string;
};

// 대분류
export const categoryOptions: CategoryOption[] = [
  { value: 'meat', label: '육류', imageUrl: '/images/fridgeItems/meat/meat.png' },
  { value: 'seafood', label: '해산물', imageUrl: '/images/fridgeItems/seafood/seafood.png' },
  { value: 'vegetables', label: '야채', imageUrl: '/images/fridgeItems/vegetables/vegetables.png' }
];

// 소분류
export const subCategoryOptions: Record<string, CategoryOption[]> = {
  meat: [
    { value: 'beef', label: '소고기', imageUrl: '/images/fridgeItems/meat/beef.png' },
    { value: 'pork', label: '돼지고기', imageUrl: '/images/fridgeItems/meat/pork.png' }
  ]
};
