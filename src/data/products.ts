export type Product = {
  slug: string;
  name: string;
  /** AED price, or null when the product is "enquire only". */
  price: number | null;
  /** small badge shown on the card image (dose). */
  badge: string;
  /** one-line research category descriptor. */
  category: string;
  /** product tint — a soft pastel, drives card glow + button + badge. */
  tint: string;
  /** short card / hero blurb. */
  blurb: string;
  /** two product-page description paragraphs. */
  description: [string, string];
  /** benefit-row bullets on the product page. */
  benefits: string[];
};

export const products: Product[] = [
  {
    slug: 'bpc-157-tb-500-40mg',
    name: 'BPC-157 & TB-500 40mg',
    price: 999,
    badge: '40mg',
    category: 'Recovery & Repair Research',
    tint: '#B9AEDF',
    blurb:
      'A dual research blend prepared under controlled conditions for consistent, reliable handling.',
    description: [
      'A dual research blend prepared under controlled conditions for consistent, reliable handling across structured study work.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability from our facility to your bench.',
    ],
    benefits: [
      'Dual-peptide research blend prepared to uniform, repeatable standards.',
      'Produced under controlled conditions for consistent batch-to-batch handling.',
      'Sourced from verified suppliers with documented quality practices.',
      'Sealed and protected packaging preserves stability through delivery.',
    ],
  },
  {
    slug: 'nad-1000mg',
    name: 'NAD+ 1,000mg',
    price: null,
    badge: '1,000mg',
    category: 'Cellular Research',
    tint: '#D8C3A3',
    blurb:
      'A NAD+ research formulation provided exclusively for controlled laboratory R&D applications.',
    description: [
      'NAD+ (Nicotinamide Adenine Dinucleotide) research formulation prepared for laboratory analysis and in vitro studies only.',
      'Provided exclusively for controlled laboratory R&D applications, packed with precision to preserve freshness and stability.',
    ],
    benefits: [
      'High-capacity NAD+ formulation for structured laboratory research.',
      'Prepared for in vitro analysis under controlled conditions.',
      'Verified-supplier sourcing with strict handling practices.',
      'Sealed packaging maintains integrity from our labs to yours.',
    ],
  },
  {
    slug: 'glow-70mg',
    name: 'Glow 70mg',
    price: 1199,
    badge: '70mg',
    category: 'Skin & Longevity Research',
    tint: '#E7A9A0',
    blurb:
      'A higher-capacity formulation packed securely to preserve freshness and stability.',
    description: [
      'A higher-capacity research formulation packed securely to preserve freshness, stability, and overall product integrity.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability for every study.',
    ],
    benefits: [
      'Higher-capacity formulation for extended research programmes.',
      'Packed securely to preserve freshness and stability over time.',
      'Produced with uniform standards for a dependable experience.',
      'Verified-supplier sourcing with documented quality checks.',
    ],
  },
  {
    slug: 'retatrutide-20mg',
    name: 'Retatrutide 20mg',
    price: null,
    badge: '20mg',
    category: 'Metabolic Research',
    tint: '#E59A8E',
    blurb:
      'Developed with a strong focus on purity, consistency, and safe handling practices.',
    description: [
      'A metabolic research formulation developed with a strong focus on purity, consistency, and safe handling practices.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability throughout study work.',
    ],
    benefits: [
      'Developed with a strong focus on purity and consistency.',
      'Prepared under safe handling practices for laboratory work.',
      'Sourced from verified suppliers that follow strict standards.',
      'Sealed and protected to preserve product integrity in transit.',
    ],
  },
  {
    slug: 'retatrutide-40mg',
    name: 'Retatrutide 40mg',
    price: 1990,
    badge: '40mg',
    category: 'Metabolic Research',
    tint: '#D98C76',
    blurb:
      'A research formulation produced with uniform standards for a dependable experience.',
    description: [
      'A higher-dose metabolic research formulation produced with uniform standards for a dependable, repeatable experience.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability for structured research.',
    ],
    benefits: [
      'Produced with uniform standards for a dependable experience.',
      'Higher-dose formulation for extended research applications.',
      'Verified-supplier sourcing with documented handling practices.',
      'Sealed packaging protects freshness and stability on delivery.',
    ],
  },
  {
    slug: 'tirzepatide-20mg',
    name: 'Tirzepatide 20mg',
    price: null,
    badge: '20mg',
    category: 'Metabolic Research',
    tint: '#93C9C6',
    blurb:
      'Checked thoroughly to maintain clean, high-quality formulations you can rely on.',
    description: [
      'A metabolic research formulation checked thoroughly to maintain clean, high-quality results you can rely on.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability in every unit.',
    ],
    benefits: [
      'Checked thoroughly to maintain clean, high-quality formulations.',
      'Produced under controlled processes for uniform output.',
      'Sourced from verified suppliers with strict testing standards.',
      'Sealed and protected packaging preserves overall integrity.',
    ],
  },
  {
    slug: 'tirzepatide-40mg',
    name: 'Tirzepatide 40mg',
    price: null,
    badge: '40mg',
    category: 'Metabolic Research',
    tint: '#9DA9DE',
    blurb:
      'Sealed and protected to preserve overall product integrity through delivery.',
    description: [
      'A higher-dose metabolic research formulation sealed and protected to preserve overall product integrity through delivery.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability for demanding study work.',
    ],
    benefits: [
      'Sealed and protected to preserve integrity through delivery.',
      'Higher-dose formulation for extended research programmes.',
      'Produced with uniform standards for dependable handling.',
      'Verified-supplier sourcing with documented quality practices.',
    ],
  },
  {
    slug: 'tirzepatide-5mg',
    name: 'Tirzepatide 5mg',
    price: null,
    badge: '5mg',
    category: 'Metabolic Research',
    tint: '#A9CFB8',
    blurb:
      'A starter-scale formulation sourced from verified suppliers and packed with precision.',
    description: [
      'A starter-scale metabolic research formulation, ideal for smaller structured studies and method work.',
      'Sourced from verified suppliers and carefully packed to ensure consistency, purity, and reliability from the first unit.',
    ],
    benefits: [
      'Starter-scale formulation for smaller, structured studies.',
      'Sourced from verified suppliers with strict handling standards.',
      'Packed with precision to preserve freshness and stability.',
      'Produced with uniform standards for a dependable experience.',
    ],
  },
];

export const getProduct = (slug: string) =>
  products.find((p) => p.slug === slug);

/** gallery images: <slug>_1 .. <slug>_4 in src/images/product-gallery/ */
export const galleryNames = (slug: string) =>
  [1, 2, 3, 4].map((n) => `product-gallery/${slug}_${n}`);
