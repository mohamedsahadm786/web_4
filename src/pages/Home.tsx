import Hero from '../sections/Hero';
import ImageBand from '../sections/ImageBand';
import WhySection from '../sections/WhySection';
import ProductsSection from '../sections/ProductsSection';
import FaqSection from '../sections/FaqSection';
import TrustBadges from '../sections/TrustBadges';
import ContactSection from '../sections/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <ImageBand
        name="about/video"
        alt="ALLUVI research formulations"
      />
      <WhySection />
      <ImageBand
        name="extra/E_2"
        alt="Precision research formulations"
        eyebrow="Engineered for Research"
        title="Precision in every formulation."
        cta={{ label: 'Explore the catalogue', to: '/shop' }}
      />
      <ProductsSection />
      <FaqSection />
      <TrustBadges />
      <ContactSection />
    </>
  );
}
