'use client';

import { useEffect, useRef } from 'react';

const OFFSET = {
  up: '0, 22px',
  down: '0, -22px',
  left: '26px, 0',
  right: '-26px, 0',
  none: '0, 0',
};

/**
 * Scroll reveal. Wrap any server-rendered block:
 *
 *   <Reveal><h2 …/></Reveal>
 *   <Reveal as="article" delay={0.08} from="left">…</Reveal>
 *
 * CSS transition + IntersectionObserver (globals.css, [data-reveal]) instead of motion: it ran on every page
 * and cost ~40 kB of JS for fade-ins. Content stays visible without JS (the hidden state needs html.js) and
 * with reduced motion.
 */
export default function Reveal({
  children,
  as: Tag = 'div',
  from = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  className,
  style,
  ...rest
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const show = () => el.setAttribute('data-shown', '');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      show();
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        // Taller-than-viewport blocks can never be `amount` visible: half a screen of them is enough.
        if (e.intersectionRatio >= amount || e.intersectionRect.height >= window.innerHeight * 0.5) {
          show();
          io.disconnect();
        }
      },
      { threshold: [0, amount, 1] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [amount]);

  return (
    <Tag
      ref={ref}
      data-reveal=""
      className={className}
      style={{
        '--reveal-offset': OFFSET[from] ?? OFFSET.up,
        '--reveal-delay': `${delay}s`,
        '--reveal-duration': `${duration}s`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
