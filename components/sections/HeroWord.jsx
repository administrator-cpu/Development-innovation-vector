'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const HERO_WORDS = ['website', 'CRM', 'mobile app', 'billing', 'support desk', 'automation'];
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

export default function HeroWord() {
  const [{ i, prev }, set] = useState({ i: 0, prev: null });
  const [w, setW] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const t = setInterval(() => set((s) => ({ prev: s.i, i: (s.i + 1) % HERO_WORDS.length })), 4200);
    return () => clearInterval(t);
  }, []);

  useLayoutEffect(() => {
    const measure = () => ref.current && setW(ref.current.offsetWidth);
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [i]);

  return (
    <span
      aria-hidden="true"
      className="inline-grid justify-items-start align-bottom"
      style={{ width: w ? `${w}px` : 'auto', transition: `width 1.3s ${EASE}` }}
    >
      {prev !== null && (
        <span
          key={`o${prev}-${i}`}
          className="whitespace-nowrap [grid-area:1/1]"
          style={{ animation: `word-out 1.1s ${EASE} both` }}
        >
          {HERO_WORDS[prev]}
        </span>
      )}
      <span
        key={`i${i}`}
        ref={ref}
        className="whitespace-nowrap [grid-area:1/1]"
        style={{ animation: prev === null ? 'none' : `word-in 1.4s ${EASE} 0.25s both` }}
      >
        {HERO_WORDS[i]}
      </span>
    </span>
  );
}
