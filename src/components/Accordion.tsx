import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import type { Faq } from '../data/faqs';
import { Plus } from './icons';

/** Accessible accordion for FAQ-style content. */
export default function Accordion({ items }: { items: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={item.q}
            className={`card-surface overflow-hidden transition-colors ${
              isOpen ? 'shadow-soft' : ''
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-semibold sm:text-lg">{item.q}</span>
                <span
                  className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-400 ${
                    isOpen
                      ? 'rotate-45 bg-gradient-to-br from-primary-vivid to-accent-cool text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  <Plus width={16} height={16} />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-pretty leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
