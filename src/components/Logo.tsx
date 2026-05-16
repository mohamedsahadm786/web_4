import { Link } from 'react-router-dom';
import { resolveImage } from '../lib/images';
import { BRAND } from '../lib/constants';

type Props = { className?: string; onClick?: () => void };

/** Site logo — uses logo/site-logo if present, else an ALLUVI wordmark. */
export default function Logo({ className = '', onClick }: Props) {
  const logo = resolveImage('logo/site-logo');

  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label={`${BRAND.name} — home`}
      className={`group inline-flex items-center gap-2.5 ${className}`}
    >
      {logo ? (
        <img src={logo.url} alt={BRAND.name} className="h-8 w-auto" />
      ) : (
        <>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary-vivid to-accent-cool text-white shadow-glow">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 19 12 5l7 14"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="19" r="2" fill="currentColor" />
            </svg>
          </span>
          <span className="text-[1.32rem] font-extrabold tracking-[-0.04em] text-foreground">
            ALLUVI
          </span>
        </>
      )}
    </Link>
  );
}
