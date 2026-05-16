import { Star } from './icons';

/** Static 5-star rating row. */
export default function Stars({
  size = 14,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-0.5 text-amber-400 ${className}`}
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} />
      ))}
    </span>
  );
}
