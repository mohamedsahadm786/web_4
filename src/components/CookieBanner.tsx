import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Close, Shield } from './icons';

const KEY = 'alluvi-cookie-choice';

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      if (!localStorage.getItem(KEY)) setShow(true);
    }, 1400);
    return () => clearTimeout(t);
  }, []);

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(KEY, choice);
    } catch {
      /* ignore */
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-[5.4rem] z-[60] mx-auto max-w-md sm:inset-x-auto sm:left-7 sm:bottom-7 sm:mx-0"
        >
          <div className="glass relative overflow-hidden rounded-2xl p-5 shadow-lift">
            <div className="flex items-start gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Shield width={18} height={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold">We value your privacy</h3>
                <p className="mt-1 text-[0.82rem] leading-relaxed text-muted-foreground">
                  We use cookies to keep the site running smoothly and to
                  understand how it is used. Choose what works for you.
                </p>
              </div>
              <button
                onClick={() => decide('declined')}
                aria-label="Dismiss"
                className="grid h-7 w-7 shrink-0 place-items-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <Close width={15} height={15} />
              </button>
            </div>
            <div className="mt-4 flex gap-2.5">
              <button
                onClick={() => decide('declined')}
                className="flex-1 rounded-full border border-border bg-card py-2 text-sm font-semibold transition-colors hover:border-primary/50"
              >
                Decline
              </button>
              <button
                onClick={() => decide('accepted')}
                className="btn-primary flex-1 justify-center !py-2 text-sm"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
