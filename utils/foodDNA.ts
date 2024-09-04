import { SimpleFood } from '@/types/food';

export const mbtiDerivation = (likedCards: SimpleFood[]) => {
  const collectedMBTI = likedCards.map((c) => c.mbti.split('')).flat();

  const countMap: Record<string, number> = collectedMBTI.reduce(
    (acc, letter) => {
      acc[letter] = (acc[letter] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const derivedMBTI = [
    { M: countMap.M || 0, S: countMap.S || 0, V: countMap.V || 0 },
    { A: countMap.A || 0, K: countMap.K || 0 },
    { W: countMap.W || 0, D: countMap.D || 0 },
    { N: countMap.N || 0, H: countMap.H || 0 }
  ].map((group) => {
    const keys = Object.keys(group) as Array<keyof typeof group>;
    return keys.reduce((a, b) => {
      return (group[a] ?? 0) > (group[b] ?? 0) ? a : b;
    });
  });

  return derivedMBTI.join('');
};
