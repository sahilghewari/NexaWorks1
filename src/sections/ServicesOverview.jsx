
import ServiceCarousel from '../components/ServiceCarousel';
import servicesBg from '../assets/BACKGROUND IMAGES/services/6243371.jpg';

export default function ServicesOverview() {
  return (
    <section
      className="w-full min-h-screen flex items-center relative overflow-hidden parallax-bg"
      id="services"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-center text-retrored mb-10">Our Services</h2>
        <ServiceCarousel />
      </div>
    </section>
  );
}
