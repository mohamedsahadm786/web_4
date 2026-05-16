import { Link } from 'react-router-dom';
import Logo from './Logo';
import Reveal from './Reveal';
import { BRAND, DISCLAIMER, FOOTER_LINKS } from '../lib/constants';
import { whatsappLink } from '../lib/format';
import {
  ArrowRight,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pin,
  Whatsapp,
} from './icons';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-ink text-background/85">
      {/* aurora glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-32 top-0 h-96 w-96 animate-aurora rounded-full opacity-30 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary)), transparent 65%)',
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 animate-aurora rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--accent-cool)), transparent 65%)',
          animationDelay: '-8s',
        }}
      />

      {/* disclaimer strip */}
      <div className="relative border-b border-white/10">
        <p className="shell py-5 text-center text-xs leading-relaxed text-background/55">
          {DISCLAIMER}
        </p>
      </div>

      <div className="shell relative pb-10 pt-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* brand */}
          <div>
            <div className="[&_span]:text-background brightness-150">
              <Logo />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Premium peptide and supplement research formulations — sourced
              from verified suppliers, packed for consistency, purity, and
              reliability.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { Icon: Instagram, href: BRAND.instagram, label: 'Instagram' },
                { Icon: Facebook, href: BRAND.facebook, label: 'Facebook' },
                {
                  Icon: Whatsapp,
                  href: whatsappLink(`Hi ${BRAND.name}!`),
                  label: 'WhatsApp',
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-background/75 transition-colors hover:border-primary hover:text-white"
                >
                  <Icon width={17} height={17} />
                </a>
              ))}
            </div>
          </div>

          {/* navigate */}
          <FooterCol title="Navigate" links={FOOTER_LINKS.navigate} />
          {/* policies */}
          <FooterCol title="Policies" links={FOOTER_LINKS.policies} />

          {/* contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-background/45">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-background/65">
              <li className="flex items-start gap-2.5">
                <Pin width={16} height={16} className="mt-0.5 text-primary" />
                {BRAND.address}
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <Mail width={16} height={16} className="text-primary" />
                  {BRAND.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BRAND.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2.5 hover:text-white"
                >
                  <Phone width={16} height={16} className="text-primary" />
                  {BRAND.phone}
                </a>
              </li>
            </ul>
            <Reveal delay={0.1}>
              <Link
                to="/shop"
                className="btn-primary mt-5 text-sm"
              >
                Start Your Order
                <ArrowRight width={15} height={15} />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* watermark */}
        <div
          aria-hidden
          className="pointer-events-none mt-10 select-none text-center text-[18vw] font-extrabold leading-none tracking-tighter text-white/[0.04]"
        >
          {BRAND.name}
        </div>

        <div className="mt-6 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {BRAND.name}. All Rights Reserved.
          </p>
          <p>Dubai, UAE · Research-use only · 18+</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; to: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-background/45">
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5 text-sm text-background/65">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="inline-block transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
