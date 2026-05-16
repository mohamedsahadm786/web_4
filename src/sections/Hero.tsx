import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Img from '../components/Img';
import Stars from '../components/Stars';
import Magnetic from '../components/Magnetic';
import ReviewsTicker from './ReviewsTicker';
import { products } from '../data/products';
import { gsap, useGSAP } from '../lib/gsap';
import { ArrowRight, Sparkle } from '../components/icons';

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)' },
};

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // background parallax
      gsap.to('[data-hero-bg]', {
        yPercent: 18,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
      // product strip drifts up slightly slower
      gsap.from('[data-hero-strip]', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative isolate overflow-hidden pt-[68px]"
    >
      {/* background */}
      <div
        data-hero-bg
        className="absolute inset-0 -z-20 scale-110"
        aria-hidden
      >
        <Img
          name="hero/home-hero-background-image"
          alt=""
          className="h-full w-full"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background" />
      </div>
      {/* aurora blobs */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-[26rem] w-[26rem] animate-aurora rounded-full opacity-50 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary)/.7), transparent 65%)',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-24 top-40 -z-10 h-[24rem] w-[24rem] animate-aurora rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent-cool)/.7), transparent 65%)',
          animationDelay: '-9s',
        }}
      />
      <div className="pt-3">
        <ReviewsTicker />
      </div>

      <div className="shell flex flex-col items-center pb-10 pt-12 text-center sm:pt-16">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
          className="flex flex-col items-center"
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 backdrop-blur"
          >
            <Sparkle width={14} height={14} className="text-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              High-Purity Research Peptides
            </span>
            <Stars size={12} />
          </motion.span>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Premium Research
            <br />
            <span className="text-grad">Formulations.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 max-w-xl text-pretty text-base text-muted-foreground sm:text-lg"
          >
            Sourced from verified suppliers and carefully packed to ensure
            consistency, purity, and reliability — formulations engineered for
            structured research.
          </motion.p>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Magnetic>
              <Link to="/shop" className="btn-primary">
                Shop Products
                <ArrowRight width={17} height={17} />
              </Link>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Link to="/#why" className="btn-ghost">
                Why ALLUVI
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* product strip */}
        <motion.div
          data-hero-strip
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="glass mt-14 w-full rounded-2xl p-3 shadow-soft sm:p-4"
        >
          <div className="mask-fade-x overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <ul className="flex min-w-max gap-2 sm:min-w-0 sm:justify-between">
              {products.map((p) => (
                <li key={p.slug} className="w-[7.4rem] shrink-0 sm:w-auto sm:flex-1">
                  <Link
                    to={`/product/${p.slug}`}
                    className="group flex flex-col items-center gap-1.5 rounded-xl p-2 transition-colors hover:bg-card"
                  >
                    <span
                      className="grid aspect-square w-full place-items-center overflow-hidden rounded-lg"
                      style={{ background: `${p.tint}24` }}
                    >
                      <Img
                        name={`products/${p.slug}`}
                        alt={p.name}
                        fit="contain"
                        tint={p.tint}
                        className="h-full w-full p-2 transition-transform duration-500 group-hover:scale-110"
                      />
                    </span>
                    <span className="line-clamp-1 text-center text-[0.68rem] font-semibold text-muted-foreground group-hover:text-foreground">
                      {p.name}
                    </span>
                    <span
                      className="h-1.5 w-1.5 rounded-full transition-transform group-hover:scale-150"
                      style={{ background: p.tint }}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
