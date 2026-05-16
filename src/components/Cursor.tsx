import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';
import { useHasFinePointer, usePrefersReducedMotion } from '../hooks/useMediaQuery';

/** Soft glow follower that trails the cursor (fine-pointer devices only). */
export default function Cursor() {
  const fine = useHasFinePointer();
  const reduce = usePrefersReducedMotion();
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!fine || reduce) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const t = e.target as HTMLElement;
      setActive(!!t.closest('a,button,[role="button"],input'));
    };
    window.addEventListener('pointermove', move);
    return () => window.removeEventListener('pointermove', move);
  }, [fine, reduce, x, y]);

  if (!fine || reduce) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-multiply"
      style={{
        x: sx,
        y: sy,
        width: 26,
        height: 26,
        background:
          'radial-gradient(circle, hsl(var(--primary)/.55), transparent 70%)',
      }}
      animate={{ scale: active ? 2.6 : 1, opacity: active ? 0.55 : 0.9 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
