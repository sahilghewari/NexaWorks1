import { useRef } from 'react';

const services = [
  {
    title: 'Custom Software Development',
    desc: 'Tailored solutions for your business needs.',
    link: '/services',
  },
  {
    title: 'AI & Machine Learning',
    desc: 'Automation, analytics, and intelligent systems.',
    link: '/services',
  },
  {
    title: 'Automation Services',
    desc: 'Streamline processes for efficiency and growth.',
    link: '/services',
  },
  // Add more cards as needed
];

export default function ServiceCarousel() {
  const carouselRef = useRef(null);

  // Simple scroll handler for left/right buttons
  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: dir * (width * 0.7), behavior: 'smooth' });
  };

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
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map((service, i) => (
          <div
            key={i}
            className="min-w-[260px] md:min-w-[340px] h-[380px] bg-dark-700/80 border border-dark-800 rounded-3xl shadow-2xl flex flex-col items-center justify-center px-6 py-8 snap-center transition-transform duration-300 hover:scale-105 hover:shadow-retrored/40"
          >
            <h3 className="text-2xl font-bold text-retrored mb-3 font-doumbar text-center">{service.title}</h3>
            <p className="text-offwhite/90 mb-6 text-center">{service.desc}</p>
            <a href={service.link} className="mt-auto inline-block px-6 py-2 bg-retrored text-offwhite rounded-full font-semibold shadow hover:bg-retrored-700 transition">Learn More</a>
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
