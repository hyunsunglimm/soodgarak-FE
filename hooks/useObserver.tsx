import { FoodsResponse } from '@/types/food';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult
} from '@tanstack/react-query';
import { useCallback, useEffect, useRef } from 'react';

type ObserverProps = {
  root?: null;
  rootMargin?: string;
  threshold?: number;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<InfiniteData<FoodsResponse, unknown>, Error>>;
};

export default function useObserver({
  root = null,
  rootMargin = '0px',
  threshold = 1.0,
  fetchNextPage
}: ObserverProps) {
  const target = useRef(null);

  const onIntersect = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage]
  );

  useEffect(() => {
    let observer: IntersectionObserver;

    if (target && target.current) {
      observer = new IntersectionObserver(onIntersect, {
        root,
        rootMargin,
        threshold
      });
      observer.observe(target.current);
    }

    return () => observer && observer.disconnect();
  }, [target, rootMargin, threshold, onIntersect, root]);

  return { target };
}
