import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Logo from './Logo';
import Magnetic from './Magnetic';
import SearchOverlay from './SearchOverlay';
import { useCart } from '../context/CartContext';
import { useScrolled } from '../hooks/useScrolled';
import { BRAND } from '../lib/constants';
import { ArrowRight, Cart, Search, Sparkle } from './icons';

export default function Header() {
  const scrolled = useScrolled(60);
  const { count, open } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-500 ${
          scrolled
            ? 'glass shadow-[0_8px_30px_-20px_rgba(28,24,20,.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="shell flex h-[68px] items-center justify-between gap-4">
          <Logo />

          {/* center promo — fades in on scroll (desktop) */}
          <AnimatePresence>
            {scrolled && (
              <motion.div
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden items-center gap-3 lg:flex"
              >
                <span className="eyebrow">
                  <Sparkle width={13} height={13} className="text-primary" />
                  {BRAND.tagline}
                </span>
                <Link
                  to="/shop"
                  className="btn-primary !py-2 !px-4 text-sm"
                >
                  Shop Products
                  <ArrowRight width={15} height={15} />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center gap-1.5 sm:gap-2.5">
            <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground sm:inline-flex">
              <span aria-hidden>🇦🇪</span> UAE
            </span>
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search products"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:border-primary/50"
            >
              <Search width={18} height={18} />
            </button>
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={open}
                aria-label={`Open cart, ${count} items`}
                className="relative grid h-10 w-10 place-items-center rounded-full border border-border bg-card/70 text-foreground transition-colors hover:border-primary/50"
              >
                <Cart width={18} height={18} />
                {count > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-5 min-w-[1.25rem] place-items-center rounded-full bg-gradient-to-br from-primary-vivid to-accent-cool px-1 text-[0.62rem] font-bold text-white">
                    {count}
                  </span>
                )}
              </button>
            </Magnetic>
          </div>
        </div>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
