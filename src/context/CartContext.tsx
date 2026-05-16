import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { products, type Product } from '../data/products';

type Line = { slug: string; qty: number };
export type CartLine = { product: Product; qty: number };

type CartCtx = {
  lines: CartLine[];
  count: number;
  subtotal: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (slug: string, qty?: number) => void;
  setQty: (slug: string, qty: number) => void;
  remove: (slug: string) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Line[]>([]);
  const [isOpen, setOpen] = useState(false);

  const lines = useMemo<CartLine[]>(
    () =>
      items
        .map((l) => {
          const product = products.find((p) => p.slug === l.slug);
          return product ? { product, qty: l.qty } : null;
        })
        .filter((x): x is CartLine => x !== null),
    [items],
  );

  const count = lines.reduce((n, l) => n + l.qty, 0);
  const subtotal = lines.reduce(
    (n, l) => n + (l.product.price ?? 0) * l.qty,
    0,
  );

  const add: CartCtx['add'] = (slug, qty = 1) => {
    setItems((prev) => {
      const found = prev.find((l) => l.slug === slug);
      if (found)
        return prev.map((l) =>
          l.slug === slug ? { ...l, qty: l.qty + qty } : l,
        );
      return [...prev, { slug, qty }];
    });
    setOpen(true);
  };

  const setQty: CartCtx['setQty'] = (slug, qty) => {
    if (qty <= 0) return setItems((p) => p.filter((l) => l.slug !== slug));
    setItems((p) => p.map((l) => (l.slug === slug ? { ...l, qty } : l)));
  };

  const remove: CartCtx['remove'] = (slug) =>
    setItems((p) => p.filter((l) => l.slug !== slug));

  return (
    <Ctx.Provider
      value={{
        lines,
        count,
        subtotal,
        isOpen,
        open: () => setOpen(true),
        close: () => setOpen(false),
        add,
        setQty,
        remove,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
