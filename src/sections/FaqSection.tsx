import Reveal from '../components/Reveal';
import Accordion from '../components/Accordion';
import { faqs } from '../data/faqs';

export default function FaqSection() {
  return (
    <section id="faq" className="section-pad relative overflow-hidden">
      <div className="shell">
        <Reveal>
          <h2 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.6rem]">
            Frequently Asked <span className="text-grad">Questions</span>
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-3 max-w-lg text-center text-muted-foreground">
            Everything you need to know about ordering research formulations
            with ALLUVI.
          </p>
        </Reveal>

        <div className="mx-auto mt-10 max-w-3xl">
          <Reveal delay={0.12}>
            <Accordion items={faqs} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
