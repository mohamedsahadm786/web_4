import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { DISCLAIMER } from '../lib/constants';
import { ArrowLeft } from '../components/icons';

export default function Shop() {
  return (
    <>
      <section className="relative overflow-hidden pt-[68px]">
        <span
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-80 w-80 animate-aurora rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, hsl(var(--primary)/.55), transparent 65%)',
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute right-0 top-32 h-72 w-72 animate-aurora rounded-full opacity-30 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, hsl(var(--accent-cool)/.55), transparent 65%)',
            animationDelay: '-7s',
          }}
        />

        <div className="shell relative pb-10 pt-12">
          <Reveal>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft width={15} height={15} />
              Back to Home
            </Link>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              All <span className="text-grad">Products</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-xl text-pretty text-muted-foreground sm:text-lg">
              {products.length} research formulations — sourced from verified
              suppliers and packed with precision for consistency, purity, and
              reliability.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="shell grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <ProductCard product={p} showCompare />
            </Reveal>
          ))}
        </div>
      </section>

      <div className="border-y border-border bg-card/50">
        <p className="shell py-6 text-center text-xs leading-relaxed text-muted-foreground">
          {DISCLAIMER}
        </p>
      </div>
    </>
  );
}
