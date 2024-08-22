import { Food } from '@/types/food';

export const DUMMY_FOODS: Food[] = [
  {
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
  },
  {
    id: 2,
    name: '부추 콩가루 찜',
    recipeWay: '찌기',
    category: '반찬',
    ingredient:
      '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간',
    manual: [
      {
        text: '부추는 깨끗이 씻어 물기를 제거하고, 5cm 길이로 썰고 부추에 날콩가루를 넣고 고루 섞이도록 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054820_1675673300714.jpg'
      },
      {
        text: '찜기에 면보를 깔고 부추를 넣은 후 김이 오르게 쪄서 파랗게 익힌다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054834_1675673314720.jpg'
      },
      {
        text: '저염간장에 다진 대파, 다진 마늘, 고춧가루, 요리당 , 참기름, 참깨를 섞어 양념장을 만들고 찐 부추는 그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054908_1675673348152.jpg'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00029_2.png',
    recipeTip:
      '콩가루로 버무려 감칠맛과 고소한 맛으로 나트륨 사용량을 줄여보세요. 부추는 피를 맑게 하고 허약 체질을 개선하여 성인병을 예방하는데 효과가 있지만, 알레르기 체질이나 위장이 약한 사람은 부작용이 생길 수 있으니 주의하세요.'
  },
  {
    id: 3,
    name: '방울토마토 소박이',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●방울토마토 소박이 : \n방울토마토 150g(5개), 양파 10g(3×1cm), 부추 10g(5줄기)\n●양념장 : \n고춧가루 4g(1작은술), 멸치액젓 3g(2/3작은술), 다진 마늘 2.5g(1/2쪽), 매실액 2g(1/3작은술), 설탕 2g(1/3작은술), 물 2ml(1/3작은술), 통깨 약간',
    manual: [
      {
        text: '물기를 빼고 2cm 정도의 크기로 썰은 부추와 양파를 양념장에 섞어 양념속을 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_1.png'
      },
      {
        text: '깨끗이 씻은 방울토마토는 꼭지를 떼고 윗부분에 칼로 십자모양으로 칼집을 낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png'
      },
      {
        text: '칼집을 낸 방울토마토에 양념속을 사이사이에 넣어 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_2.png',
    recipeTip:
      '소금에 절이는 오이 대신 방울토마토를 사용하여 나트륨 섭취를 줄였어요. 토마토에는 과일에 대체로 없는 글루탐산이 풍부하여 감칠맛을 내주며, 겉절이 양념과 잘 어우러져 상큼함과 감칠맛을 내주어요.'
  },
  {
    id: 4,
    name: '순두부 사과 소스 오이무침',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●오이무침 :\n오이 70g(1/3개), 다진 땅콩 10g(1큰술)\n●순두부사과 소스 : \n순두부 40g(1/8봉지), 사과 50g(1/3개)',
    manual: [
      {
        text: '사과, 순두부를 믹서에 넣고 곱게 갈아 소스를 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_1.png'
      },
      {
        text: '오이는 소금으로 문질러 씻어 반을 갈라 씨를 제거하고 어슷썰기를 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_2.png'
      },
      {
        text: '썰어 놓은 오이에 순두부사과 소스를 넣고 버무린 후 다진 땅콩을 뿌려 마무리 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_3.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00032_2.png',
    recipeTip:
      '사과에는 팩틴이 풍부하여 체내 나쁜 콜레스테롤을 감소시키고 나트륨 배출을 촉진시켜줘요. 순두부와 사과를 갈아 만든 소스는 맵고 짠 자극적인 간이 아닌 재료 그대로의 새콤달콤한 맛과 깔끔한 맛을 내요.'
  },
  {
    id: 5,
    name: '사과 새우 북엇국',
    recipeWay: '끓이기',
    category: '국&찌개',
    ingredient:
      '북엇국\n북어채 25g(15개), 새우 10g(3마리), 사과 30g(1/5개), 양파 40g(1/4개),\n표고버섯 20g(2장), 물 300ml(1½컵)',
    manual: [
      {
        text: '북어채를 잘게 손으로 찢어 찬물에 헹구어 준비한 후 양파, 표고버섯, 사과는 채 썰고 새우는 등쪽의 두세 마디에 꼬챙이를 넣어 내장을 뺀 후 헹군다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_2.png'
      },
      {
        text: '찬물에 북어채, 새우, 표고버섯, 양파를 넣고 20분 정도 끓인 후 사과를 넣어 북어의 씁쓸한 맛을 없앤다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png'
      },
      {
        text: '그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00033_2.png',
    recipeTip:
      '소금과 간장 대신 북어채와 새우의 짠맛으로 간을 한 담백한 맛의 북엇국을 만들었어요. 홍합이나 바지락을 넣으면 시원한 국물을 연출 할 수 있어요.'
  },
  {
    id: 6,
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
  },
  {
    id: 7,
    name: '부추 콩가루 찜',
    recipeWay: '찌기',
    category: '반찬',
    ingredient:
      '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간',
    manual: [
      {
        text: '부추는 깨끗이 씻어 물기를 제거하고, 5cm 길이로 썰고 부추에 날콩가루를 넣고 고루 섞이도록 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054820_1675673300714.jpg'
      },
      {
        text: '찜기에 면보를 깔고 부추를 넣은 후 김이 오르게 쪄서 파랗게 익힌다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054834_1675673314720.jpg'
      },
      {
        text: '저염간장에 다진 대파, 다진 마늘, 고춧가루, 요리당 , 참기름, 참깨를 섞어 양념장을 만들고 찐 부추는 그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054908_1675673348152.jpg'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00029_2.png',
    recipeTip:
      '콩가루로 버무려 감칠맛과 고소한 맛으로 나트륨 사용량을 줄여보세요. 부추는 피를 맑게 하고 허약 체질을 개선하여 성인병을 예방하는데 효과가 있지만, 알레르기 체질이나 위장이 약한 사람은 부작용이 생길 수 있으니 주의하세요.'
  },
  {
    id: 8,
    name: '방울토마토 소박이',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●방울토마토 소박이 : \n방울토마토 150g(5개), 양파 10g(3×1cm), 부추 10g(5줄기)\n●양념장 : \n고춧가루 4g(1작은술), 멸치액젓 3g(2/3작은술), 다진 마늘 2.5g(1/2쪽), 매실액 2g(1/3작은술), 설탕 2g(1/3작은술), 물 2ml(1/3작은술), 통깨 약간',
    manual: [
      {
        text: '물기를 빼고 2cm 정도의 크기로 썰은 부추와 양파를 양념장에 섞어 양념속을 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_1.png'
      },
      {
        text: '깨끗이 씻은 방울토마토는 꼭지를 떼고 윗부분에 칼로 십자모양으로 칼집을 낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png'
      },
      {
        text: '칼집을 낸 방울토마토에 양념속을 사이사이에 넣어 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_2.png',
    recipeTip:
      '소금에 절이는 오이 대신 방울토마토를 사용하여 나트륨 섭취를 줄였어요. 토마토에는 과일에 대체로 없는 글루탐산이 풍부하여 감칠맛을 내주며, 겉절이 양념과 잘 어우러져 상큼함과 감칠맛을 내주어요.'
  },
  {
    id: 9,
    name: '순두부 사과 소스 오이무침',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●오이무침 :\n오이 70g(1/3개), 다진 땅콩 10g(1큰술)\n●순두부사과 소스 : \n순두부 40g(1/8봉지), 사과 50g(1/3개)',
    manual: [
      {
        text: '사과, 순두부를 믹서에 넣고 곱게 갈아 소스를 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_1.png'
      },
      {
        text: '오이는 소금으로 문질러 씻어 반을 갈라 씨를 제거하고 어슷썰기를 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_2.png'
      },
      {
        text: '썰어 놓은 오이에 순두부사과 소스를 넣고 버무린 후 다진 땅콩을 뿌려 마무리 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_3.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00032_2.png',
    recipeTip:
      '사과에는 팩틴이 풍부하여 체내 나쁜 콜레스테롤을 감소시키고 나트륨 배출을 촉진시켜줘요. 순두부와 사과를 갈아 만든 소스는 맵고 짠 자극적인 간이 아닌 재료 그대로의 새콤달콤한 맛과 깔끔한 맛을 내요.'
  },
  {
    id: 10,
    name: '사과 새우 북엇국',
    recipeWay: '끓이기',
    category: '국&찌개',
    ingredient:
      '북엇국\n북어채 25g(15개), 새우 10g(3마리), 사과 30g(1/5개), 양파 40g(1/4개),\n표고버섯 20g(2장), 물 300ml(1½컵)',
    manual: [
      {
        text: '북어채를 잘게 손으로 찢어 찬물에 헹구어 준비한 후 양파, 표고버섯, 사과는 채 썰고 새우는 등쪽의 두세 마디에 꼬챙이를 넣어 내장을 뺀 후 헹군다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_2.png'
      },
      {
        text: '찬물에 북어채, 새우, 표고버섯, 양파를 넣고 20분 정도 끓인 후 사과를 넣어 북어의 씁쓸한 맛을 없앤다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png'
      },
      {
        text: '그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00033_2.png',
    recipeTip:
      '소금과 간장 대신 북어채와 새우의 짠맛으로 간을 한 담백한 맛의 북엇국을 만들었어요. 홍합이나 바지락을 넣으면 시원한 국물을 연출 할 수 있어요.'
  },
  {
    id: 11,
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
  },
  {
    id: 12,
    name: '부추 콩가루 찜',
    recipeWay: '찌기',
    category: '반찬',
    ingredient:
      '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간',
    manual: [
      {
        text: '부추는 깨끗이 씻어 물기를 제거하고, 5cm 길이로 썰고 부추에 날콩가루를 넣고 고루 섞이도록 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054820_1675673300714.jpg'
      },
      {
        text: '찜기에 면보를 깔고 부추를 넣은 후 김이 오르게 쪄서 파랗게 익힌다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054834_1675673314720.jpg'
      },
      {
        text: '저염간장에 다진 대파, 다진 마늘, 고춧가루, 요리당 , 참기름, 참깨를 섞어 양념장을 만들고 찐 부추는 그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054908_1675673348152.jpg'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00029_2.png',
    recipeTip:
      '콩가루로 버무려 감칠맛과 고소한 맛으로 나트륨 사용량을 줄여보세요. 부추는 피를 맑게 하고 허약 체질을 개선하여 성인병을 예방하는데 효과가 있지만, 알레르기 체질이나 위장이 약한 사람은 부작용이 생길 수 있으니 주의하세요.'
  },
  {
    id: 13,
    name: '방울토마토 소박이',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●방울토마토 소박이 : \n방울토마토 150g(5개), 양파 10g(3×1cm), 부추 10g(5줄기)\n●양념장 : \n고춧가루 4g(1작은술), 멸치액젓 3g(2/3작은술), 다진 마늘 2.5g(1/2쪽), 매실액 2g(1/3작은술), 설탕 2g(1/3작은술), 물 2ml(1/3작은술), 통깨 약간',
    manual: [
      {
        text: '물기를 빼고 2cm 정도의 크기로 썰은 부추와 양파를 양념장에 섞어 양념속을 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_1.png'
      },
      {
        text: '깨끗이 씻은 방울토마토는 꼭지를 떼고 윗부분에 칼로 십자모양으로 칼집을 낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png'
      },
      {
        text: '칼집을 낸 방울토마토에 양념속을 사이사이에 넣어 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_2.png',
    recipeTip:
      '소금에 절이는 오이 대신 방울토마토를 사용하여 나트륨 섭취를 줄였어요. 토마토에는 과일에 대체로 없는 글루탐산이 풍부하여 감칠맛을 내주며, 겉절이 양념과 잘 어우러져 상큼함과 감칠맛을 내주어요.'
  },
  {
    id: 14,
    name: '순두부 사과 소스 오이무침',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●오이무침 :\n오이 70g(1/3개), 다진 땅콩 10g(1큰술)\n●순두부사과 소스 : \n순두부 40g(1/8봉지), 사과 50g(1/3개)',
    manual: [
      {
        text: '사과, 순두부를 믹서에 넣고 곱게 갈아 소스를 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_1.png'
      },
      {
        text: '오이는 소금으로 문질러 씻어 반을 갈라 씨를 제거하고 어슷썰기를 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_2.png'
      },
      {
        text: '썰어 놓은 오이에 순두부사과 소스를 넣고 버무린 후 다진 땅콩을 뿌려 마무리 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_3.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00032_2.png',
    recipeTip:
      '사과에는 팩틴이 풍부하여 체내 나쁜 콜레스테롤을 감소시키고 나트륨 배출을 촉진시켜줘요. 순두부와 사과를 갈아 만든 소스는 맵고 짠 자극적인 간이 아닌 재료 그대로의 새콤달콤한 맛과 깔끔한 맛을 내요.'
  },
  {
    id: 15,
    name: '사과 새우 북엇국',
    recipeWay: '끓이기',
    category: '국&찌개',
    ingredient:
      '북엇국\n북어채 25g(15개), 새우 10g(3마리), 사과 30g(1/5개), 양파 40g(1/4개),\n표고버섯 20g(2장), 물 300ml(1½컵)',
    manual: [
      {
        text: '북어채를 잘게 손으로 찢어 찬물에 헹구어 준비한 후 양파, 표고버섯, 사과는 채 썰고 새우는 등쪽의 두세 마디에 꼬챙이를 넣어 내장을 뺀 후 헹군다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_2.png'
      },
      {
        text: '찬물에 북어채, 새우, 표고버섯, 양파를 넣고 20분 정도 끓인 후 사과를 넣어 북어의 씁쓸한 맛을 없앤다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png'
      },
      {
        text: '그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00033_2.png',
    recipeTip:
      '소금과 간장 대신 북어채와 새우의 짠맛으로 간을 한 담백한 맛의 북엇국을 만들었어요. 홍합이나 바지락을 넣으면 시원한 국물을 연출 할 수 있어요.'
  },
  {
    id: 16,
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
  },
  {
    id: 17,
    name: '부추 콩가루 찜',
    recipeWay: '찌기',
    category: '반찬',
    ingredient:
      '[1인분]조선부추 50g, 날콩가루 7g(1⅓작은술)\n·양념장 : 저염간장 3g(2/3작은술), 다진 대파 5g(1작은술), 다진 마늘 2g(1/2쪽), 고춧가루 2g(1/3작은술), 요리당 2g(1/3작은술), 참기름 2g(1/3작은술), 참깨 약간',
    manual: [
      {
        text: '부추는 깨끗이 씻어 물기를 제거하고, 5cm 길이로 썰고 부추에 날콩가루를 넣고 고루 섞이도록 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054820_1675673300714.jpg'
      },
      {
        text: '찜기에 면보를 깔고 부추를 넣은 후 김이 오르게 쪄서 파랗게 익힌다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054834_1675673314720.jpg'
      },
      {
        text: '저염간장에 다진 대파, 다진 마늘, 고춧가루, 요리당 , 참기름, 참깨를 섞어 양념장을 만들고 찐 부추는 그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/20230206/20230206054908_1675673348152.jpg'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00029_2.png',
    recipeTip:
      '콩가루로 버무려 감칠맛과 고소한 맛으로 나트륨 사용량을 줄여보세요. 부추는 피를 맑게 하고 허약 체질을 개선하여 성인병을 예방하는데 효과가 있지만, 알레르기 체질이나 위장이 약한 사람은 부작용이 생길 수 있으니 주의하세요.'
  },
  {
    id: 18,
    name: '방울토마토 소박이',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●방울토마토 소박이 : \n방울토마토 150g(5개), 양파 10g(3×1cm), 부추 10g(5줄기)\n●양념장 : \n고춧가루 4g(1작은술), 멸치액젓 3g(2/3작은술), 다진 마늘 2.5g(1/2쪽), 매실액 2g(1/3작은술), 설탕 2g(1/3작은술), 물 2ml(1/3작은술), 통깨 약간',
    manual: [
      {
        text: '물기를 빼고 2cm 정도의 크기로 썰은 부추와 양파를 양념장에 섞어 양념속을 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_1.png'
      },
      {
        text: '깨끗이 씻은 방울토마토는 꼭지를 떼고 윗부분에 칼로 십자모양으로 칼집을 낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_4.png'
      },
      {
        text: '칼집을 낸 방울토마토에 양념속을 사이사이에 넣어 버무린다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00031_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00031_2.png',
    recipeTip:
      '소금에 절이는 오이 대신 방울토마토를 사용하여 나트륨 섭취를 줄였어요. 토마토에는 과일에 대체로 없는 글루탐산이 풍부하여 감칠맛을 내주며, 겉절이 양념과 잘 어우러져 상큼함과 감칠맛을 내주어요.'
  },
  {
    id: 19,
    name: '순두부 사과 소스 오이무침',
    recipeWay: '기타',
    category: '반찬',
    ingredient:
      '●오이무침 :\n오이 70g(1/3개), 다진 땅콩 10g(1큰술)\n●순두부사과 소스 : \n순두부 40g(1/8봉지), 사과 50g(1/3개)',
    manual: [
      {
        text: '사과, 순두부를 믹서에 넣고 곱게 갈아 소스를 만든다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_1.png'
      },
      {
        text: '오이는 소금으로 문질러 씻어 반을 갈라 씨를 제거하고 어슷썰기를 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_2.png'
      },
      {
        text: '썰어 놓은 오이에 순두부사과 소스를 넣고 버무린 후 다진 땅콩을 뿌려 마무리 한다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00032_3.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00032_2.png',
    recipeTip:
      '사과에는 팩틴이 풍부하여 체내 나쁜 콜레스테롤을 감소시키고 나트륨 배출을 촉진시켜줘요. 순두부와 사과를 갈아 만든 소스는 맵고 짠 자극적인 간이 아닌 재료 그대로의 새콤달콤한 맛과 깔끔한 맛을 내요.'
  },
  {
    id: 20,
    name: '사과 새우 북엇국',
    recipeWay: '끓이기',
    category: '국&찌개',
    ingredient:
      '북엇국\n북어채 25g(15개), 새우 10g(3마리), 사과 30g(1/5개), 양파 40g(1/4개),\n표고버섯 20g(2장), 물 300ml(1½컵)',
    manual: [
      {
        text: '북어채를 잘게 손으로 찢어 찬물에 헹구어 준비한 후 양파, 표고버섯, 사과는 채 썰고 새우는 등쪽의 두세 마디에 꼬챙이를 넣어 내장을 뺀 후 헹군다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_2.png'
      },
      {
        text: '찬물에 북어채, 새우, 표고버섯, 양파를 넣고 20분 정도 끓인 후 사과를 넣어 북어의 씁쓸한 맛을 없앤다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_3.png'
      },
      {
        text: '그릇에 담아낸다.',
        img: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/20_00033_5.png'
      }
    ],
    mainImg: 'https://www.foodsafetykorea.go.kr/uploadimg/cook/10_00033_2.png',
    recipeTip:
      '소금과 간장 대신 북어채와 새우의 짠맛으로 간을 한 담백한 맛의 북엇국을 만들었어요. 홍합이나 바지락을 넣으면 시원한 국물을 연출 할 수 있어요.'
  }
];
