import Img from '../components/Img';
import Stars from '../components/Stars';
import { reviews } from '../data/reviews';

/** Thin auto-scrolling marquee of mini review chips, above the hero. */
export default function ReviewsTicker() {
  const loop = [...reviews, ...reviews];

  return (
    <div className="relative z-10 border-y border-border/70 bg-card/55 py-2.5 backdrop-blur">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-3 pause-on-hover">
          {loop.map((r, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-card px-3.5 py-1.5"
            >
              <span className="grid h-6 w-6 shrink-0 place-items-center overflow-hidden rounded-full bg-muted">
                <Img
                  name={r.avatar}
                  alt={r.name}
                  className="h-full w-full"
                  fallback={r.name.charAt(0)}
                />
              </span>
              <Stars size={11} />
              <span className="max-w-[15rem] truncate text-xs text-muted-foreground">
                “{r.quote}”
              </span>
              <span className="whitespace-nowrap text-xs font-semibold">
                {r.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
