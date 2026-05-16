import { type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

type Props = {
  children: ReactNode;
  /** stagger delay in seconds. */
  delay?: number;
  /** vertical travel in px. */
  y?: number;
  className?: string;
  /** disable blur for large media (cheaper). */
  noBlur?: boolean;
  as?: 'div' | 'span' | 'li' | 'section';
};

/**
 * Reveal-on-scroll wrapper — blur-in + slide-up + slight scale, plays once.
 * Collapses to a plain fade (or nothing) under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  noBlur = false,
  as = 'div',
}: Props) {
  const reduce = useReducedMotion();
  const M = motion[as];

  if (reduce) {
    return <M className={className}>{children}</M>;
  }

  return (
    <M
      className={className}
      initial={{
        opacity: 0,
        y,
        scale: 0.985,
        filter: noBlur ? 'blur(0px)' : 'blur(10px)',
      }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{
        duration: 0.78,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </M>
  );
}
