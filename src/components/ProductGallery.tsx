import { useState } from 'react';
import Img from './Img';
import { galleryNames, type Product } from '../data/products';
import { Flask, Lock, Shield, Snowflake, Share } from './icons';

const BADGES = [
  { icon: Shield, label: 'Third-Party Tested', pos: 'left-2 top-[12%]' },
  { icon: Flask, label: 'cGMP Manufactured', pos: 'left-2 top-[34%]' },
  { icon: Snowflake, label: '24-Month Stability', pos: 'left-4 bottom-[26%]' },
  { icon: Lock, label: 'Sealed & Protected', pos: 'left-2 bottom-[8%]' },
];

/** Product image gallery — main image, floating proof badges, 4 thumbnails. */
export default function ProductGallery({ product }: { product: Product }) {
  const names = galleryNames(product.slug);
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        className="relative overflow-hidden rounded-xl2 border border-border"
        style={{
          background: `radial-gradient(120% 90% at 50% 14%, ${product.tint}33, hsl(var(--card)) 70%)`,
        }}
      >
        {/* floating proof badges */}
        {BADGES.map((b, i) => (
          <span
            key={b.label}
            className={`absolute z-10 hidden animate-float items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1.5 text-[0.7rem] font-semibold shadow-soft backdrop-blur sm:flex ${b.pos}`}
            style={{ animationDelay: `${i * 0.8}s` }}
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
              <b.icon width={12} height={12} />
            </span>
            {b.label}
          </span>
        ))}

        {/* share / save */}
        <div className="absolute right-3 top-3 z-10 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Share product"
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card/90 text-muted-foreground backdrop-blur transition-colors hover:text-primary"
          >
            <Share width={16} height={16} />
          </button>
        </div>

        <Img
          name={names[active]}
          alt={product.name}
          fit="contain"
          tint={product.tint}
          loading="eager"
          className="aspect-[4/3] w-full p-8 sm:p-12"
        />

        {/* dots */}
        <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-1.5">
          {names.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                active === i
                  ? 'w-5 bg-primary'
                  : 'w-1.5 bg-foreground/20 hover:bg-foreground/40'
              }`}
            />
          ))}
        </div>
      </div>

      {/* thumbnails */}
      <div className="mt-3 grid grid-cols-4 gap-2.5">
        {names.map((n, i) => (
          <button
            key={n}
            onClick={() => setActive(i)}
            aria-label={`Thumbnail ${i + 1}`}
            className={`overflow-hidden rounded-xl border transition-all ${
              active === i
                ? 'border-primary ring-2 ring-primary/30'
                : 'border-border hover:border-primary/50'
            }`}
            style={{ background: `${product.tint}1f` }}
          >
            <Img
              name={n}
              alt=""
              fit="contain"
              tint={product.tint}
              className="aspect-[4/3] w-full p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
