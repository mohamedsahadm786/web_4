import { type ReactNode, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { useHasFinePointer, usePrefersReducedMotion } from '../hooks/useMediaQuery';

type Props = {
  children: ReactNode;
  className?: string;
  /** max tilt in degrees. */
  intensity?: number;
  /** show the moving sheen highlight. */
  glare?: boolean;
};

/**
 * Pointer-tracked 3D tilt with an optional moving sheen.
 * Disabled on coarse pointers / reduced-motion (renders a plain div).
 */
export default function TiltCard({
  children,
  className = '',
  intensity = 9,
  glare = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const fine = useHasFinePointer();
  const reduce = usePrefersReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 150, damping: 18 });
  const sy = useSpring(my, { stiffness: 150, damping: 18 });

  const rotateY = useTransform(sx, [0, 1], [-intensity, intensity]);
  const rotateX = useTransform(sy, [0, 1], [intensity, -intensity]);
  const glareX = useTransform(sx, [0, 1], ['0%', '100%']);
  const glareY = useTransform(sy, [0, 1], ['0%', '100%']);

  if (!fine || reduce) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      {children}
      {glare && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.group:hover_&]:opacity-100"
          style={{
            background: useTransform(
              [glareX, glareY],
              ([x, y]) =>
                `radial-gradient(420px circle at ${x} ${y}, rgba(255,255,255,.55), transparent 60%)`,
            ),
          }}
        />
      )}
    </motion.div>
  );
}
