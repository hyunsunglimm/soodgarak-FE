import { Food } from '@/types/food';

export const DUMMY_FOOD: Food = {
  id: 1,
  name: '새우 두부 계란찜',
  recipeWay: '찌기',
  category: '반찬',
  ingredient:
    '새우두부계란찜\n연두부 75g(3/4모), 칵테일새우 20g(5마리), 달걀 30g(1/2개), 생크림 13g(1큰술), 설탕 5g(1작은술), 무염버터 5g(1작은술)\n고명\n시금치 10g(3줄기)',
  manual: [
    {
      text: '손질된 새우를 끓는 물에 데쳐 건진다.',
      img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_1.png'
    },
    {
      text: '연두부, 달걀, 생크림, 설탕에 녹인 무염버터를 믹서에 넣고 간 뒤 새우(1)를 함께 섞어 그릇에 담는다.',
      img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_2.png'
    },
    {
      text: '시금치를 잘게 다져 혼합물 그릇(2)에 뿌리고 찜기에 넣고 중간 불에서 10분 정도 찐다.',
      img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00028_3.png'
    }
  ],
  mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00028_2.png',
  recipeTip:
    '나트륨의 배출을 도와주는 것으로 알려진 칼륨이 풍부한 시금치와 소금, 간장 등의 양념 대신 새우에 들어있는 간으로 맛을 내요.'
};
