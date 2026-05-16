import Reveal from '../components/Reveal';
import { Lock, Shield, Truck, Whatsapp } from '../components/icons';

const BADGES = [
  {
    icon: Whatsapp,
    label: 'Fast WhatsApp Support',
    sub: 'Real people, quick replies',
  },
  {
    icon: Shield,
    label: 'Verified Purity',
    sub: 'Sourced from trusted suppliers',
  },
  {
    icon: Lock,
    label: 'Secure Packaging',
    sub: 'Sealed & protected, every order',
  },
  {
    icon: Truck,
    label: 'UAE-Wide Delivery',
    sub: 'Trackable, across all Emirates',
  },
];

export default function TrustBadges() {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="shell grid gap-px overflow-hidden py-2 sm:grid-cols-2 lg:grid-cols-4">
        {BADGES.map((b, i) => (
          <Reveal key={b.label} delay={i * 0.08}>
            <div className="group flex items-center gap-3.5 px-4 py-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary transition-all duration-400 group-hover:bg-gradient-to-br group-hover:from-primary-vivid group-hover:to-accent-cool group-hover:text-white">
                <b.icon width={22} height={22} />
              </span>
              <div>
                <p className="font-bold leading-tight">{b.label}</p>
                <p className="text-sm text-muted-foreground">{b.sub}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
