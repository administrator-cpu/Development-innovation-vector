'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';


export default function Parallax({ children, distance = 60, className, ...rest }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-distance / 2, distance / 2]);

  return (
    <motion.div ref={ref} className={className} style={reduced ? undefined : { y }} {...rest}>
      {children}
    </motion.div>
  );
}
