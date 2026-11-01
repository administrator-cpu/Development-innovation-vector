'use client';

import { useEffect, useRef, useState } from 'react';

function fmt(c, t) {
  const v = c.from + (c.to - c.from) * t;
  if (c.fmt === 'pct2') return `${v.toFixed(2)}%`;
  if (c.fmt === 'pct0') return `${Math.round(v)}%`;
  const m = Math.round(v);
  return m >= 60 ? `${Math.round(m / 60)} hrs` : `${m} min`;
}

/** Counts from count.from to count.to once the element scrolls into view. Final text is always `value`. */
export default function CountUp({ value, count, className }) {
  const ref = useRef(null);
  const [t, setT] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia?.('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      setT(1);
      return;
    }
    let raf;
    const io = new IntersectionObserver(
      (es) => {
        if (!es.some((e) => e.isIntersecting)) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - t0) / 3200);
          setT(1 - Math.pow(1 - p, 3));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{value}</span>
      <span aria-hidden="true">{t >= 1 || !count ? value : fmt(count, t)}</span>
    </span>
  );
}
