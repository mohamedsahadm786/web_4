import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Img from './Img';
import { products } from '../data/products';
import { formatPrice } from '../lib/format';
import { Close, Search } from './icons';

type Props = { open: boolean; onClose: () => void };

export default function SearchOverlay({ open, onClose }: Props) {
  const [q, setQ] = useState('');

  useEffect(() => {
    if (!open) return;
    setQ('');
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return products;
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term),
    );
  }, [q]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div
            className="absolute inset-0 bg-ink/40 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-2xl border border-border bg-card shadow-lift"
          >
            <div className="flex items-center gap-3 border-b border-border px-5">
              <Search width={20} height={20} className="text-muted-foreground" />
              <input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search formulations…"
                className="h-16 flex-1 bg-transparent text-lg outline-none placeholder:text-muted-foreground"
              />
              <button
                onClick={onClose}
                aria-label="Close search"
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <Close width={18} height={18} />
              </button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-4 py-10 text-center text-muted-foreground">
                  No formulations match “{q}”.
                </p>
              )}
              {results.map((p) => (
                <Link
                  key={p.slug}
                  to={`/product/${p.slug}`}
                  onClick={onClose}
                  className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted"
                >
                  <span
                    className="grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-lg"
                    style={{ background: `${p.tint}26` }}
                  >
                    <Img
                      name={`products/${p.slug}`}
                      alt={p.name}
                      fit="contain"
                      tint={p.tint}
                      className="h-full w-full p-1"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block truncate font-semibold">
                      {p.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {p.category}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-semibold text-primary">
                    {formatPrice(p.price)}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
