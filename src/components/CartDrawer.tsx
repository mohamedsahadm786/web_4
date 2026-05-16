import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Img from './Img';
import { useCart } from '../context/CartContext';
import { formatPrice, whatsappLink } from '../lib/format';
import { ArrowRight, Cart, Close, Minus, Plus } from './icons';

export default function CartDrawer() {
  const { lines, count, subtotal, isOpen, close, setQty, remove } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const checkoutText =
    'Hi ALLUVI — I would like to order:\n' +
    lines
      .map((l) => `• ${l.qty}× ${l.product.name}`)
      .join('\n') +
    (subtotal > 0 ? `\n\nEstimated subtotal: ${formatPrice(subtotal)}` : '');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[70]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
            onClick={close}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="absolute right-0 top-0 flex h-full w-full max-w-[26rem] flex-col bg-background shadow-lift"
          >
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
                  <Cart width={19} height={19} />
                </span>
                <div>
                  <h2 className="font-bold leading-tight">Your Cart</h2>
                  <p className="text-xs text-muted-foreground">
                    {count} {count === 1 ? 'item' : 'items'}
                  </p>
                </div>
              </div>
              <button
                onClick={close}
                aria-label="Close cart"
                className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <Close width={18} height={18} />
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="flex flex-1 flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-muted text-muted-foreground">
                  <Cart width={26} height={26} />
                </span>
                <p className="font-semibold">Your cart is empty</p>
                <p className="text-sm text-muted-foreground">
                  Add some formulations to get started.
                </p>
                <Link
                  to="/shop"
                  onClick={close}
                  className="btn-primary mt-2 text-sm"
                >
                  Browse Products
                  <ArrowRight width={15} height={15} />
                </Link>
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-3 overflow-y-auto p-4">
                  {lines.map(({ product, qty }) => (
                    <div
                      key={product.slug}
                      className="flex gap-3 rounded-xl border border-border bg-card p-3"
                    >
                      <Link
                        to={`/product/${product.slug}`}
                        onClick={close}
                        className="grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-lg"
                        style={{ background: `${product.tint}26` }}
                      >
                        <Img
                          name={`products/${product.slug}`}
                          alt={product.name}
                          fit="contain"
                          tint={product.tint}
                          className="h-full w-full p-1.5"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-sm font-semibold leading-snug">
                            {product.name}
                          </p>
                          <button
                            onClick={() => remove(product.slug)}
                            aria-label={`Remove ${product.name}`}
                            className="text-muted-foreground hover:text-foreground"
                          >
                            <Close width={15} height={15} />
                          </button>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {formatPrice(product.price)}
                        </p>
                        <div className="mt-2 inline-flex items-center rounded-full border border-border">
                          <button
                            onClick={() => setQty(product.slug, qty - 1)}
                            aria-label="Decrease quantity"
                            className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground"
                          >
                            <Minus width={14} height={14} />
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">
                            {qty}
                          </span>
                          <button
                            onClick={() => setQty(product.slug, qty + 1)}
                            aria-label="Increase quantity"
                            className="grid h-7 w-7 place-items-center text-muted-foreground hover:text-foreground"
                          >
                            <Plus width={14} height={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Subtotal
                    </span>
                    <span className="font-bold">
                      {subtotal > 0
                        ? formatPrice(subtotal)
                        : 'Enquire for pricing'}
                    </span>
                  </div>
                  <a
                    href={whatsappLink(checkoutText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full justify-center"
                  >
                    Checkout on WhatsApp
                    <ArrowRight width={16} height={16} />
                  </a>
                  <p className="mt-2 text-center text-[0.7rem] text-muted-foreground">
                    Orders are confirmed and completed over WhatsApp.
                  </p>
                </div>
              </>
            )}
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
