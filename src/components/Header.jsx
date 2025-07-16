import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-dark/95 backdrop-blur border-b border-dark-800 shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 md:py-3">
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl md:text-3xl font-doumbar text-retrored font-bold tracking-widest drop-shadow-lg flex items-center gap-2">
          <span className="hidden md:inline-block text-retrored">{`<`}</span>
          NexaWorks
          <span className="hidden md:inline-block text-retrored">{`/>`}</span>
        </Link>
        {/* Nav Links */}
        <ul className="flex gap-2 md:gap-6 text-offwhite font-semibold text-base md:text-lg">
          <li><Link to="/" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">Home</Link></li>
          <li><Link to="/about" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">About</Link></li>
          <li><Link to="/services" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">Services</Link></li>
          <li><Link to="/portfolio" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">Portfolio</Link></li>
          <li><Link to="/blog" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">Blog</Link></li>
          <li><Link to="/contact" className="px-3 py-1 rounded hover:bg-retrored hover:text-offwhite transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
