import { type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useHasFinePointer, usePrefersReducedMotion } from '../hooks/useMediaQuery';

type Props = {
  children: ReactNode;
  className?: string;
  /** pull strength 0–1. */
  strength?: number;
};

/** Wraps a control so it drifts slightly toward the cursor. */
export default function Magnetic({
  children,
  className = '',
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useHasFinePointer();
  const reduce = usePrefersReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  if (!fine || reduce) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x: sx, y: sy }}
      onPointerMove={onMove}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}
