import Img from '../components/Img';
import Reveal from '../components/Reveal';
import Magnetic from '../components/Magnetic';
import { BRAND } from '../lib/constants';
import { whatsappLink } from '../lib/format';
import { ArrowRight, Mail, Phone, Pin, Whatsapp } from '../components/icons';

const DETAILS = [
  { icon: Pin, label: BRAND.address, href: null },
  { icon: Mail, label: BRAND.email, href: `mailto:${BRAND.email}` },
  {
    icon: Phone,
    label: BRAND.phone,
    href: `tel:${BRAND.phone.replace(/\s/g, '')}`,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-pad">
      <div className="shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl2 border border-border">
            {/* banner image */}
            <div className="absolute inset-0" aria-hidden>
              <Img name="extra/E_3" alt="" className="h-full w-full" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(100deg, hsl(var(--ink) / 0.95) 0%, hsl(var(--ink) / 0.88) 42%, hsl(var(--ink) / 0.68) 100%)',
                }}
              />
            </div>

            <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.1fr_1fr] lg:p-16">
              <div>
                <span className="eyebrow text-background/70">
                  Here to Guide You
                </span>
                <h2 className="mt-3 text-balance text-4xl font-extrabold text-background sm:text-5xl">
                  Get in <span className="text-grad">Touch</span>
                </h2>
                <p className="mt-4 max-w-md text-pretty text-background/70">
                  Reach out anytime for product details, order help, or
                  personalised assistance — transparent communication, every
                  step of the way.
                </p>
                <Magnetic>
                  <a
                    href={whatsappLink(
                      `Hi ${BRAND.name} — I'd like some help with your formulations.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary mt-7"
                  >
                    <Whatsapp width={17} height={17} />
                    Chat With Us
                    <ArrowRight width={16} height={16} />
                  </a>
                </Magnetic>
              </div>

              <div className="flex flex-col justify-center gap-3">
                {DETAILS.map((d) => {
                  const inner = (
                    <div className="glass flex items-center gap-4 rounded-2xl p-4">
                      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-vivid to-accent-cool text-white">
                        <d.icon width={19} height={19} />
                      </span>
                      <span className="font-semibold text-foreground">
                        {d.label}
                      </span>
                    </div>
                  );
                  return d.href ? (
                    <a key={d.label} href={d.href} className="block">
                      {inner}
                    </a>
                  ) : (
                    <div key={d.label}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
