export type Review = {
  name: string;
  role: string;
  /** testimonials/<image> slug, no extension. */
  avatar: string;
  quote: string;
  date: string;
};

export const reviews: Review[] = [
  {
    name: 'Michael Reed',
    role: 'Research Assistant',
    avatar: 'testimonials/home-testimonial-michael-reed',
    quote:
      'Consistent products, clear guidance, and quick replies made the whole process simple and genuinely reassuring from start to finish.',
    date: '2 weeks ago',
  },
  {
    name: 'Emily Carter',
    role: 'Wellness Consultant',
    avatar: 'testimonials/home-testimonial-emily-carter',
    quote:
      'Fast support and reliable formulations every time — ordering with ALLUVI has been smooth, dependable, and refreshingly straightforward.',
    date: '1 month ago',
  },
  {
    name: 'Sofia Bennett',
    role: 'Fitness Coordinator',
    avatar: 'testimonials/home-testimonial-sofia-bennett',
    quote:
      'Everything arrived securely sealed, communication was excellent, and the overall service felt exactly like a premium brand should.',
    date: '1 month ago',
  },
  {
    name: 'Daniel Hayes',
    role: 'Lab Coordinator',
    avatar: 'testimonials/daniel-hayes',
    quote:
      'Documentation was thorough and the formulations were exactly as described — a dependable supplier for structured research work.',
    date: '3 weeks ago',
  },
  {
    name: 'Priya Nair',
    role: 'Research Analyst',
    avatar: 'testimonials/priya-nair',
    quote:
      'Ordering was effortless over WhatsApp, packaging arrived sealed, and the consistency between batches really stood out.',
    date: '2 months ago',
  },
  {
    name: 'Omar Farouk',
    role: 'Study Coordinator',
    avatar: 'testimonials/omar-farouk',
    quote:
      'Clear guidance, quick replies, and reliable products. ALLUVI has made our procurement process genuinely simple.',
    date: '5 days ago',
  },
];
