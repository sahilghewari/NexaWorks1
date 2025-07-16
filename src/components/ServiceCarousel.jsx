import { useRef, useEffect } from 'react';

// Duplicate services for seamless infinite scroll
const baseServices = [
  {
    title: 'Custom Software Development',
    desc: 'Design and build tailored software solutions to meet specific business needs, from enterprise applications to customer-facing platforms.',
    link: '/services',
  },
  {
    title: 'AI and Machine Learning Solutions',
    desc: 'Develop intelligent systems leveraging AI and ML to enhance decision-making, automate processes, and deliver personalized experiences.',
    link: '/services',
  },
  {
    title: 'Automation Services',
    desc: 'Streamline business operations through robotic process automation (RPA) and custom automation scripts to boost efficiency and reduce costs.',
    link: '/services',
  },
  {
    title: 'Cloud Solutions',
    desc: 'Provide cloud-based infrastructure and application development for scalability, flexibility, and cost efficiency.',
    link: '/services',
  },
  {
    title: 'Web Development',
    desc: 'Build responsive, secure, and feature-rich websites and web applications tailored to client needs.',
    link: '/services',
  },
  {
    title: 'DevOps and CI/CD Implementation',
    desc: 'Streamline software development and deployment with DevOps practices for faster, reliable releases.',
    link: '/services',
  },
  {
    title: 'UI/UX Design',
    desc: 'Craft intuitive and visually appealing user interfaces to enhance user experiences and engagement.',
    link: '/services',
  },
  {
    title: 'Maintenance and Support',
    desc: 'Provide ongoing support, updates, and maintenance to ensure software remains secure, functional, and up-to-date.',
    link: '/services',
  },
  {
    title: 'Data Analytics and Business Intelligence',
    desc: 'Transform raw data into actionable insights through advanced analytics and visualization tools.',
    link: '/services',
  },
];
// Duplicate the array to help with seamless looping
const services = [...baseServices, ...baseServices];


export default function ServiceCarousel() {
  const carouselRef = useRef(null);
  const scrollInterval = useRef(null);

  // Simple scroll handler for left/right buttons
  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: dir * (width * 0.7), behavior: 'smooth' });
  };

  // Auto-scroll effect for infinite loop
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Set initial scroll position to the start of the first set
    carousel.scrollLeft = 0;

    // Auto-scroll function

    function autoScroll() {
      if (!carousel) return;
      const width = carousel.offsetWidth;
      // Scroll by one card width (plus gap)
      carousel.scrollBy({ left: width * 0.7, behavior: 'smooth' });
      // If we've reached the end of the first set, reset to start
      if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      }
    }

    scrollInterval.current = setInterval(autoScroll, 3000); // 3 seconds

    // Pause on hover
    const pause = () => clearInterval(scrollInterval.current);
    const resume = () => {
      clearInterval(scrollInterval.current);
      scrollInterval.current = setInterval(autoScroll, 3000);
    };
    carousel.addEventListener('mouseenter', pause);
    carousel.addEventListener('mouseleave', resume);

    return () => {
      clearInterval(scrollInterval.current);
      carousel.removeEventListener('mouseenter', pause);
      carousel.removeEventListener('mouseleave', resume);
    };
  }, []);

  return (
    <div className="relative w-full">
      <button
        aria-label="Scroll left"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-dark-900/80 hover:bg-retrored text-offwhite rounded-full p-2 shadow-lg transition"
        onClick={() => scroll(-1)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
      </button>
      <div
        ref={carouselRef}
        className="flex gap-8 overflow-x-auto py-6 px-2 md:px-8 snap-x snap-mandatory hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory', scrollBehavior: 'auto' }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="min-w-[260px] md:min-w-[340px] h-[380px] bg-dark-700/40 border border-dark-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center px-6 py-8 snap-center transition-transform duration-300 hover:scale-105 hover:shadow-retrored/40 backdrop-blur-lg backdrop-saturate-150"
            style={{
              background: 'rgba(30, 30, 40, 0.45)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              border: '1px solid rgba(255,255,255,0.18)',
            }}
          >
            <h3 className="text-2xl font-bold text-retrored mb-3 font-doumbar text-center drop-shadow-lg">{service.title}</h3>
            <p className="text-offwhite/90 mb-6 text-center text-base md:text-lg font-medium drop-shadow">{service.desc}</p>
            <a href={service.link} className="mt-auto inline-block px-6 py-2 bg-retrored/90 text-offwhite rounded-full font-semibold shadow hover:bg-retrored-700 transition backdrop-blur-sm">Learn More</a>
          </div>
        ))}
      </div>
      <button
        aria-label="Scroll right"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-dark-900/80 hover:bg-retrored text-offwhite rounded-full p-2 shadow-lg transition"
        onClick={() => scroll(1)}
      >
        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      </button>
    </div>
  );
}
