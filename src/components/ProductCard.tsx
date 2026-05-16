import { useState } from 'react';
import { Link } from 'react-router-dom';
import Img from './Img';
import TiltCard from './TiltCard';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/format';
import type { Product } from '../data/products';
import { Cart, Heart, Scale } from './icons';

type Props = { product: Product; showCompare?: boolean };

export default function ProductCard({ product, showCompare = false }: Props) {
  const { add } = useCart();
  const [liked, setLiked] = useState(false);

  return (
    <TiltCard intensity={6} className="group h-full [perspective:1000px]">
      <article className="card-surface flex h-full flex-col overflow-hidden transition-shadow duration-500 group-hover:shadow-lift">
        {/* media */}
        <Link
          to={`/product/${product.slug}`}
          className="relative block aspect-[4/3] overflow-hidden"
          style={{
            background: `radial-gradient(120% 90% at 50% 16%, ${product.tint}3a, transparent 70%)`,
          }}
        >
          <span
            className="absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[0.66rem] font-bold text-white shadow-sm"
            style={{ background: product.tint }}
          >
            {product.badge}
          </span>
          <div className="absolute right-3 top-3 z-10 flex flex-col gap-1.5">
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setLiked((v) => !v);
              }}
              aria-label="Save to wishlist"
              aria-pressed={liked}
              className={`grid h-8 w-8 place-items-center rounded-full border border-border bg-card/85 backdrop-blur transition-colors ${
                liked ? 'text-rose-500' : 'text-muted-foreground'
              } hover:text-rose-500`}
            >
              <Heart
                width={15}
                height={15}
                fill={liked ? 'currentColor' : 'none'}
              />
            </button>
            {showCompare && (
              <button
                type="button"
                onClick={(e) => e.preventDefault()}
                aria-label="Compare"
                className="grid h-8 w-8 place-items-center rounded-full border border-border bg-card/85 text-muted-foreground backdrop-blur transition-colors hover:text-primary"
              >
                <Scale width={15} height={15} />
              </button>
            )}
          </div>
          <Img
            name={`products/${product.slug}`}
            alt={product.name}
            fit="contain"
            tint={product.tint}
            className="h-full w-full p-6 transition-transform duration-700 ease-smooth group-hover:scale-[1.08]"
          />
        </Link>

        {/* body */}
        <div className="flex flex-1 flex-col p-4">
          <Link to={`/product/${product.slug}`} className="block">
            <h3 className="font-bold leading-tight transition-colors group-hover:text-primary">
              {product.name}
            </h3>
          </Link>
          <p className="mt-0.5 text-sm text-muted-foreground">
            {product.category}
          </p>
          <p className="mt-2 text-lg font-extrabold tracking-tight">
            {formatPrice(product.price)}
          </p>

          <button
            type="button"
            onClick={() => add(product.slug)}
            className="group/btn relative mt-3 flex items-center justify-center gap-2 overflow-hidden rounded-full py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(120deg, ${product.tint}, ${product.tint}cc)`,
            }}
          >
            <span
              aria-hidden
              className="absolute inset-0 -translate-x-[130%] skew-x-[-20deg] bg-white/40 transition-transform duration-700 ease-out group-hover/btn:translate-x-[230%]"
            />
            <Cart width={15} height={15} />
            Add to Cart
          </button>
        </div>
      </article>
    </TiltCard>
  );
}
