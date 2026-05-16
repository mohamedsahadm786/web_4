import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import Counter from '../components/Counter';
import SectionHeading from '../components/SectionHeading';
import { Flask, Lock, Shield } from '../components/icons';

const FEATURES = [
  {
    icon: Flask,
    title: 'Purity First',
    text: 'Each product is checked thoroughly to maintain clean, high-quality formulations you can rely on.',
  },
  {
    icon: Shield,
    title: 'Reliable Consistency',
    text: 'Our controlled processes ensure every unit is produced with uniform standards for a dependable experience.',
  },
  {
    icon: Lock,
    title: 'Secure Packaging',
    text: 'Every product is sealed and protected to preserve freshness, stability, and overall product integrity.',
  },
];

const STATS = [
  { to: 25, suffix: '+', label: 'Research formulations' },
  { to: 99, suffix: '%', label: 'Purity standard targeted' },
  { to: 100, suffix: '%', label: 'Sealed & protected orders' },
];

export default function WhySection() {
  return (
    <section id="why" className="section-pad relative overflow-hidden">
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, hsl(var(--primary)/.35), transparent 70%)',
        }}
      />
      <div className="shell relative">
        <SectionHeading
          eyebrow="Why Choose ALLUVI"
          title="Why"
          accent="ALLUVI."
          sub="The quality standard built for serious, structured research — clean formulations, dependable handling, and supportive service."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.1}>
              <TiltCard intensity={7} className="group h-full [perspective:1000px]">
                <article className="card-surface relative h-full overflow-hidden p-7 transition-shadow duration-500 group-hover:shadow-lift">
                  <span className="absolute right-5 top-5 text-xs font-bold tracking-widest text-muted-foreground/40">
                    0{i + 1} / 03
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary-vivid to-accent-cool text-white shadow-glow">
                    <f.icon width={24} height={24} />
                  </span>
                  <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                    {f.text}
                  </p>
                  <span
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary-vivid to-accent-cool transition-transform duration-500 group-hover:scale-x-100"
                  />
                </article>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {/* stats */}
        <Reveal delay={0.1}>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card px-6 py-7 text-center">
                <p className="text-4xl font-extrabold tracking-tight text-grad sm:text-5xl">
                  <Counter to={s.to} suffix={s.suffix} />
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
