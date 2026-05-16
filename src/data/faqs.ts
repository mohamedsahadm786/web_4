export type Faq = { q: string; a: string };

/** Home-page FAQ. */
export const faqs: Faq[] = [
  {
    q: 'Are your products for research use only?',
    a: 'Yes. Every ALLUVI formulation is supplied strictly for scientific research and laboratory use. Our products are not intended for human or veterinary use, diagnosis, or treatment.',
  },
  {
    q: 'Do you provide quality and purity information?',
    a: 'Our formulations are sourced from verified suppliers that follow strict testing, handling, and documentation standards, so every batch is produced to clean, consistent quality.',
  },
  {
    q: 'How do I place an order?',
    a: 'Ordering is quick and personal — add items to your cart and confirm over WhatsApp, where our team helps with product details, pricing, and delivery.',
  },
  {
    q: 'How are orders packed and delivered?',
    a: 'Every product is sealed and protected to preserve freshness and stability, then dispatched with secure, trackable delivery across the UAE.',
  },
];

/** Builds a product-specific FAQ set. */
export const productFaqs = (name: string): Faq[] => [
  {
    q: `What is ${name}?`,
    a: `${name} is a research formulation prepared under controlled conditions for structured laboratory study. It is sourced from verified suppliers and packed for consistency and reliability.`,
  },
  {
    q: `Is ${name} supplied for research use only?`,
    a: `Yes. ${name} is supplied strictly for scientific research and laboratory use. It is not intended for human or veterinary use.`,
  },
  {
    q: `How should ${name} be stored?`,
    a: 'Store cool and dry, away from direct light, in its sealed packaging to preserve stability and overall product integrity.',
  },
  {
    q: `Do you deliver ${name} across the UAE?`,
    a: `We deliver ${name} with secure, trackable packaging across Dubai, Abu Dhabi, Sharjah and the wider UAE.`,
  },
  {
    q: `How do I order ${name}?`,
    a: 'Add it to your cart and confirm on WhatsApp, or enquire directly — our team will guide you through pricing and delivery.',
  },
];
