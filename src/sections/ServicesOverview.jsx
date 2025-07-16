

import ServiceCarousel from '../components/ServiceCarousel';

export default function ServicesOverview() {
  return (
    <section
      className="w-full min-h-screen flex items-center relative overflow-hidden bg-transparent"
      id="services"
    >
      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-center text-retrored mb-10">Our Services</h2>
        <ServiceCarousel />
      </div>
    </section>
  );
}
