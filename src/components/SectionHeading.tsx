import Reveal from './Reveal';
import { Sparkle } from './icons';

type Props = {
  eyebrow?: string;
  title: string;
  /** appended after `title`, rendered in the accent gradient. */
  accent?: string;
  sub?: string;
  align?: 'center' | 'left';
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  sub,
  align = 'center',
  className = '',
}: Props) {
  const items = align === 'center' ? 'items-center text-center' : 'items-start';
  return (
    <div className={`flex flex-col ${items} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <Sparkle width={13} height={13} className="text-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
          {title}
          {accent && <span className="text-grad"> {accent}</span>}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p
            className={`mt-4 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg ${
              align === 'center' ? 'mx-auto' : ''
            }`}
          >
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
