import { useEffect, useRef, useState } from 'react';

export function useScrollSpy<T extends string>(sectionIds: readonly T[]) {
  const [topY, setTopY] = useState(0);
  const [activeId, setActiveId] = useState<T>(sectionIds[0]);
  const [lockedId, setLockedId] = useState<T | null>(null);
  const ignoreNextScrollRef = useRef(false);

  useEffect(() => {
    function onScroll() {
      setTopY(window.scrollY);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (lockedId) return;

    const scrollBottom = window.scrollY + window.innerHeight;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );
    const bottomThreshold = 2;

    const lastId = sectionIds[sectionIds.length - 1];

    if (scrollBottom >= docHeight - bottomThreshold) {
      if (activeId !== lastId) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setActiveId(lastId);
      }
      return;
    }

    const anchorY = 120;

    let bestId: T = sectionIds[0];
    let bestScore = Infinity;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (!el) continue;

      const top = el.getBoundingClientRect().top;
      const score = Math.abs(top - anchorY);

      if (score < bestScore) {
        bestScore = score;
        bestId = id;
      }
    }

    if (activeId !== bestId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveId(bestId);
    }
  }, [topY, lockedId, activeId, sectionIds]);

  useEffect(() => {
    function onScrollEnd() {
      if (ignoreNextScrollRef.current) {
        ignoreNextScrollRef.current = false;
      }
    }

    function onScroll() {
      if (!lockedId) return;

      if (ignoreNextScrollRef.current) {
        return;
      }

      setLockedId(null);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('scrollend', onScrollEnd);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scrollend', onScrollEnd);
    };
  }, [lockedId]);

  function handleNavClick(id: T) {
    ignoreNextScrollRef.current = true;
    setLockedId(id);
    setActiveId(id);
  }

  return {
    activeId,
    handleNavClick,
  };
}