export const BRAND = {
  name: 'ALLUVI',
  tagline: 'Premium Research Formulations',
  title: 'ALLUVI — Premium Research Formulations',
  address: 'Level 5, Dubai, UAE',
  email: 'sales@lumauae.com',
  phone: '+971 54 380 0625',
  whatsapp: 'https://wa.me/971543800625',
  instagram: '#',
  facebook: '#',
};

/** primary navigation — used by header + floating bottom nav. */
export const NAV = [
  { label: 'Home', to: '/', hash: '#top' },
  { label: 'Products', to: '/shop', hash: '#products' },
  { label: 'Why Us', to: '/#why', hash: '#why' },
  { label: 'Contact', to: '/#contact', hash: '#contact' },
];

export const FOOTER_LINKS = {
  navigate: [
    { label: 'Home', to: '/' },
    { label: 'All Products', to: '/shop' },
    { label: 'Why Us', to: '/#why' },
    { label: 'Testimonials', to: '/#reviews' },
    { label: 'FAQ', to: '/#faq' },
    { label: 'Contact', to: '/#contact' },
  ],
  policies: [
    { label: 'Shipping', to: '/#contact' },
    { label: 'Returns & Refunds', to: '/#contact' },
    { label: 'Terms & Conditions', to: '/#contact' },
    { label: 'Privacy Policy', to: '/#contact' },
    { label: 'Disclaimer', to: '/#contact' },
  ],
};

export const DISCLAIMER =
  'All products are supplied strictly for scientific research and laboratory use only. They are not intended for human or veterinary use, diagnosis, treatment, or prevention of any condition. By ordering you confirm you are a qualified researcher and at least 18 years of age.';
