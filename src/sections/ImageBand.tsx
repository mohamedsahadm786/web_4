import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import { gsap, useGSAP } from '../lib/gsap';
import { ArrowRight } from '../components/icons';

type Props = {
  name: string;
  alt?: string;
  eyebrow?: string;
  title?: string;
  cta?: { label: string; to: string };
};

/** Full-bleed parallax image band with an optional overlaid caption. */
export default function ImageBand({ name, alt = '', eyebrow, title, cta }: Props) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to('[data-band-img]', {
        yPercent: 16,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="relative h-[58vh] min-h-[22rem] overflow-hidden">
      <div data-band-img className="absolute inset-0 -inset-y-[16%]" aria-hidden>
        <Img name={name} alt={alt} className="h-full w-full" />
      </div>

      {(title || eyebrow) && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/25 to-transparent" />
          <div className="shell relative flex h-full flex-col items-start justify-end pb-12">
            <Reveal>
              {eyebrow && (
                <span className="eyebrow text-background/70">{eyebrow}</span>
              )}
              {title && (
                <h2 className="mt-2 max-w-2xl text-balance text-3xl font-extrabold text-background sm:text-4xl lg:text-5xl">
                  {title}
                </h2>
              )}
              {cta && (
                <Link
                  to={cta.to}
                  className="btn-primary mt-6 text-sm"
                >
                  {cta.label}
                  <ArrowRight width={15} height={15} />
                </Link>
              )}
            </Reveal>
          </div>
        </>
      )}
    </section>
  );
}
