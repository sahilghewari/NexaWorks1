// Home page with all main sections
import HeroSection from '../sections/HeroSection';
import ServicesOverview from '../sections/ServicesOverview';
import AboutSummary from '../sections/AboutSummary';
import FeaturedProjects from '../sections/FeaturedProjects';
import Testimonials from '../sections/Testimonials';
import ContactCTA from '../sections/ContactCTA';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutSummary />
      <FeaturedProjects />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
