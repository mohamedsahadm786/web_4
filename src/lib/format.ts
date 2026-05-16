/** Format an AED price, or a fallback label when there is no price. */
export function formatPrice(price: number | null): string {
  if (price == null) return 'Price on enquiry';
  return `AED ${price.toLocaleString('en-AE', { minimumFractionDigits: 0 })}`;
}

export const WHATSAPP = 'https://wa.me/971543800625';
export const whatsappLink = (text: string) =>
  `${WHATSAPP}?text=${encodeURIComponent(text)}`;
