import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { ArrowRight } from '../components/icons';

export default function ProductsSection() {
  const featured = products.slice(0, 3);

  return (
    <section id="products" className="section-pad">
      <div className="shell">
        <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <Reveal>
            <span className="eyebrow">Our Catalogue</span>
            <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Our <span className="text-grad">Formulations.</span>
            </h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Research formulations packed with precision and care — sourced
              from verified suppliers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary/50"
            >
              View All Products
              <ArrowRight
                width={15}
                height={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
