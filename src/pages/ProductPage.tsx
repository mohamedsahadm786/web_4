import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Img from '../components/Img';
import Reveal from '../components/Reveal';
import Stars from '../components/Stars';
import Magnetic from '../components/Magnetic';
import Accordion from '../components/Accordion';
import ProductCard from '../components/ProductCard';
import ProductGallery from '../components/ProductGallery';
import ReviewsTicker from '../sections/ReviewsTicker';
import ImageBand from '../sections/ImageBand';
import { getProduct, products } from '../data/products';
import { productFaqs } from '../data/faqs';
import { reviews } from '../data/reviews';
import { useCart } from '../context/CartContext';
import { useScrolled } from '../hooks/useScrolled';
import { formatPrice, whatsappLink } from '../lib/format';
import {
  ArrowRight,
  Cart,
  Check,
  Minus,
  Plus,
  Whatsapp,
} from '../components/icons';

const DETAILS = [
  ['Form', 'Lyophilised powder'],
  ['Purity', 'Verified — third-party tested'],
  ['Storage', 'Cool, dry, away from light'],
  ['Handling', 'Sealed & protected packaging'],
];

export default function ProductPage() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  const { add } = useCart();
  const [qty, setQty] = useState(1);
  const scrolled = useScrolled(640);

  if (!product) {
    return (
      <div className="shell flex min-h-[70vh] flex-col items-center justify-center pt-[68px] text-center">
        <h1 className="text-3xl font-extrabold">Product not found</h1>
        <p className="mt-2 text-muted-foreground">
          The formulation you’re looking for isn’t available.
        </p>
        <Link to="/shop" className="btn-primary mt-6">
          Back to Shop
          <ArrowRight width={16} height={16} />
        </Link>
      </div>
    );
  }

  const hasPrice = product.price != null;
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);
  const enquiryLink = whatsappLink(
    `Hi ALLUVI — I'd like to enquire about ${product.name}.`,
  );

  const addToCart = () => add(product.slug, qty);

  return (
    <>
      {/* sticky add-to-cart bar */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -70, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="glass fixed inset-x-0 top-[68px] z-40 border-b border-border"
          >
            <div className="shell flex items-center justify-between gap-4 py-3">
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-lg"
                  style={{ background: `${product.tint}26` }}
                >
                  <Img
                    name={`products/${product.slug}`}
                    alt=""
                    fit="contain"
                    tint={product.tint}
                    className="h-full w-full p-1"
                  />
                </span>
                <span className="truncate font-bold">{product.name}</span>
                <span className="hidden font-semibold text-primary sm:inline">
                  {formatPrice(product.price)}
                </span>
              </div>
              {hasPrice ? (
                <button onClick={addToCart} className="btn-primary !py-2 text-sm">
                  <Cart width={15} height={15} />
                  Add to Cart
                </button>
              ) : (
                <a
                  href={enquiryLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !py-2 text-sm"
                >
                  <Whatsapp width={15} height={15} />
                  Enquire
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* main */}
      <section className="pt-[68px]">
        <div className="shell pb-12 pt-8">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">
                Home
              </Link>
              <span>/</span>
              <Link to="/shop" className="hover:text-foreground">
                Shop
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </nav>
          </Reveal>

          <div className="mt-6 grid gap-10 lg:grid-cols-2">
            {/* gallery */}
            <Reveal noBlur>
              <ProductGallery product={product} />
            </Reveal>

            {/* info */}
            <div className="flex flex-col">
              <Reveal delay={0.06}>
                <span
                  className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold text-white"
                  style={{ background: product.tint }}
                >
                  {product.badge} · Research Formulation
                </span>
                <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                  {product.name}
                </h1>
                <div className="mt-3 flex items-center gap-2.5">
                  <Stars size={16} />
                  <span className="text-sm text-muted-foreground">
                    5.0 · 24 verified reviews
                  </span>
                </div>
                <p className="mt-4 text-3xl font-extrabold tracking-tight">
                  {formatPrice(product.price)}
                </p>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="mt-5 space-y-3 text-pretty leading-relaxed text-muted-foreground">
                  <p>{product.description[0]}</p>
                  <p>{product.description[1]}</p>
                </div>
              </Reveal>

              {/* qty + cta */}
              <Reveal delay={0.18}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center rounded-full border border-border bg-card">
                    <button
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground"
                    >
                      <Minus width={16} height={16} />
                    </button>
                    <span className="w-8 text-center font-bold">{qty}</span>
                    <button
                      onClick={() => setQty((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="grid h-11 w-11 place-items-center text-muted-foreground hover:text-foreground"
                    >
                      <Plus width={16} height={16} />
                    </button>
                  </div>
                  {hasPrice ? (
                    <Magnetic>
                      <button onClick={addToCart} className="btn-primary">
                        <Cart width={17} height={17} />
                        Add to Cart
                      </button>
                    </Magnetic>
                  ) : (
                    <Magnetic>
                      <a
                        href={enquiryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Whatsapp width={17} height={17} />
                        Enquire on WhatsApp
                      </a>
                    </Magnetic>
                  )}
                </div>
              </Reveal>

              {/* detail list */}
              <Reveal delay={0.24}>
                <dl className="mt-7 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
                  {DETAILS.map(([k, v]) => (
                    <div key={k} className="bg-card px-4 py-3">
                      <dt className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {k}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* reviews ticker */}
      <ReviewsTicker />

      {/* banner 1 */}
      <ImageBand name="extra/E_1" alt="ALLUVI research" />

      {/* benefits */}
      <section className="section-pad">
        <div className="shell mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl">
              Why researchers choose{' '}
              <span className="text-grad">{product.name}</span>
            </h2>
          </Reveal>
          <div className="mt-8 space-y-3">
            {product.benefits.map((b, i) => (
              <Reveal key={b} delay={i * 0.08}>
                <div className="card-surface flex items-start gap-3.5 p-4">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary-vivid to-accent-cool text-white">
                    <Check width={15} height={15} />
                  </span>
                  <p className="text-pretty leading-relaxed">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* product FAQ */}
      <section className="section-pad pt-0">
        <div className="shell mx-auto max-w-3xl">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Frequently Asked <span className="text-grad">Questions</span>
            </h2>
          </Reveal>
          <div className="mt-8">
            <Reveal delay={0.1}>
              <Accordion items={productFaqs(product.name)} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* review grid */}
      <section className="section-pad pt-0">
        <div className="shell">
          <Reveal>
            <h2 className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              What Researchers <span className="text-grad">Say</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 0.08}>
                <article className="card-surface flex h-full flex-col p-6">
                  <Stars size={14} />
                  <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
                    “{r.quote}”
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-full bg-muted">
                      <Img
                        name={r.avatar}
                        alt={r.name}
                        className="h-full w-full"
                        fallback={r.name.charAt(0)}
                      />
                    </span>
                    <div>
                      <p className="text-sm font-bold">{r.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {r.role} · {r.date}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* banner 2 */}
      <ImageBand
        name="about/home-about-stat-image"
        alt="ALLUVI laboratory"
        eyebrow="Trusted by Researchers"
        title="Consistency you can build research on."
        cta={{ label: 'Browse all formulations', to: '/shop' }}
      />

      {/* related */}
      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              You May Also <span className="text-grad">Like</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 4) * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
