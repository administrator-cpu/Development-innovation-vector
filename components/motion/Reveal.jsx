'use client';

import { motion, useReducedMotion } from 'motion/react';

const DIRECTIONS = {
  up: { y: 22, x: 0 },
  down: { y: -22, x: 0 },
  left: { x: 26, y: 0 },
  right: { x: -26, y: 0 },
  none: { x: 0, y: 0 },
};

/**
 * Scroll reveal. Wrap any server-rendered block:
 *
 *   <Reveal><h2 …/></Reveal>
 *   <Reveal as="article" delay={0.08} from="left">…</Reveal>
 *
 * Children stay Server Components — only the wrapper is client.
 * Content is visible with no JS / reduced motion (opacity animates from 1).
 */
export default function Reveal({
  children,
  as = 'div',
  from = 'up',
  delay = 0,
  duration = 0.7,
  amount = 0.3,
  className,
  ...rest
}) {
  const reduced = useReducedMotion();
  const Tag = motion[as] ?? motion.div;
  const offset = DIRECTIONS[from] ?? DIRECTIONS.up;

  if (reduced) {
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
