import { useEffect, useState, useRef } from 'react';


export const useScrollPosition = () => {

  const [bottomY, setBottomY] = useState<number | null>(
    typeof window !== 'undefined' ? window.innerHeight : null
  );
  const [topY, setTopY] = useState<number>(0);
  const [prevTopY, setPrevTopY] = useState<number>(0);
  const lastTopY = useRef<number>(0);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    function scrollListener() {
      setTopY(window.scrollY);
      setPrevTopY(lastTopY.current);
      setBottomY(window.scrollY + window.innerHeight);
      lastTopY.current = window.scrollY;
    }
    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [setBottomY, setTopY]);

  useEffect(() => {
  }, [bottomY, topY, prevTopY])

  return { bottomY, topY, prevTopY };
}