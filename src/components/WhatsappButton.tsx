import Magnetic from './Magnetic';
import { Whatsapp } from './icons';
import { whatsappLink } from '../lib/format';
import { BRAND } from '../lib/constants';

/** Floating WhatsApp button with a soft pulsing glow ring. */
export default function WhatsappButton() {
  return (
    <div className="fixed bottom-[5.6rem] right-4 z-40 sm:bottom-7 sm:right-7">
      <Magnetic strength={0.3}>
        <a
          href={whatsappLink(
            `Hi ${BRAND.name} — I have a question about your research formulations.`,
          )}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lift transition-transform duration-300 hover:scale-105"
        >
          <span className="absolute inset-0 animate-pulseglow rounded-full" />
          <Whatsapp width={28} height={28} />
        </a>
      </Magnetic>
    </div>
  );
}
