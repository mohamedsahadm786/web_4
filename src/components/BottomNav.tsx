import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Cart, Flask, HomeIcon, Info, Mail } from './icons';

const ITEMS = [
  { label: 'Home', to: '/', icon: HomeIcon },
  { label: 'Products', to: '/shop', icon: Flask },
  { label: 'Why Us', to: '/#why', icon: Info },
  { label: 'Contact', to: '/#contact', icon: Mail },
] as const;

/** Floating bottom navigation — usable on desktop and mobile. */
export default function BottomNav() {
  const { pathname, hash } = useLocation();
  const { count, open } = useCart();

  const isActive = (to: string) => {
    if (to === '/') return pathname === '/' && !hash;
    if (to.startsWith('/#')) return pathname === '/' && hash === to.slice(1);
    return pathname.startsWith(to);
  };

  return (
    <nav
      aria-label="Primary"
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.7rem,env(safe-area-inset-bottom))]"
    >
      <div className="glass flex items-center gap-0.5 rounded-full p-1.5 shadow-lift sm:gap-1">
        {ITEMS.map(({ label, to, icon: Icon }) => {
          const active = isActive(to);
          return (
            <Link
              key={label}
              to={to}
              className={`group relative flex min-w-[58px] flex-col items-center gap-0.5 rounded-full px-3 py-2 text-[0.62rem] font-semibold transition-colors sm:min-w-[68px] sm:px-4 ${
                active
                  ? 'text-white'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {active && (
                <span className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary-vivid to-primary" />
              )}
              <Icon
                width={19}
                height={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
              {label}
            </Link>
          );
        })}
        <button
          type="button"
          onClick={open}
          aria-label={`Cart, ${count} items`}
          className="group relative flex min-w-[58px] flex-col items-center gap-0.5 rounded-full px-3 py-2 text-[0.62rem] font-semibold text-muted-foreground transition-colors hover:text-foreground sm:min-w-[68px] sm:px-4"
        >
          <span className="relative">
            <Cart
              width={19}
              height={19}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            {count > 0 && (
              <span className="absolute -right-2 -top-1.5 grid h-4 min-w-[1rem] place-items-center rounded-full bg-gradient-to-br from-primary-vivid to-accent-cool px-1 text-[0.55rem] font-bold text-white">
                {count}
              </span>
            )}
          </span>
          Cart
        </button>
      </div>
    </nav>
  );
}
