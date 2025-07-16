// Hero section for homepage

import { useEffect, useState } from 'react';
import heroBg from '../assets/BACKGROUND IMAGES/HERO/6204503.jpg';

export default function HeroSection() {

  const [show, setShow] = useState(false);
  const [lettersShown, setLettersShown] = useState(0);
  const companyName = 'NexaWorks';

  useEffect(() => {
    setTimeout(() => setShow(true), 200);
  }, []);

  useEffect(() => {
    if (show && lettersShown < companyName.length) {
      const timeout = setTimeout(() => setLettersShown(lettersShown + 1), 80);
      return () => clearTimeout(timeout);
    }
  }, [show, lettersShown, companyName.length]);

  return (
    <section
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Left: Company Name & Tagline */}
      <div className={`flex-1 flex flex-col items-center md:items-start justify-center px-6 md:px-16 z-10 transition-opacity duration-1000 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-offwhite/80 text-base md:text-lg mb-2 font-mono">Welcome to</span>
        <h1 className="text-5xl md:text-7xl font-doumbar font-bold mb-4 drop-shadow-lg" aria-label="NexaWorks">
          {companyName.split('').map((char, i) => (
            <span
              key={i}
              className={`inline-block transition-all duration-300 ${lettersShown > i ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-offwhite/90">Transforming Ideas into <span className="text-retrored">Exceptional Software</span> Experiences.</h2>
        <p className="text-base md:text-lg mb-8 max-w-xl text-offwhite/80">High-quality, secure software solutions using cutting-edge technologies at affordable prices.</p>
        <a href="#contact" className="inline-block px-8 py-3 bg-retrored text-offwhite rounded-full font-semibold shadow-lg hover:bg-retrored-700 transition">Get a Free Quote</a>
      </div>
      {/* Right: Visual/Illustration */}
      <div className={`flex-1 flex items-center justify-center mt-12 md:mt-0 z-10 transition-opacity duration-1000 delay-200 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Placeholder for future SVG/graphic, can be replaced with a tech/retro illustration */}
        <div className="w-64 h-64 md:w-80 md:h-80 bg-dark-800/80 border-4 border-retrored rounded-2xl flex items-center justify-center shadow-2xl">
          <span className="text-retrored text-3xl font-doumbar">{`</>`}</span>
        </div>
      </div>
    </section>
  );
}
