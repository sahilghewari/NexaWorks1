export default function Footer() {
  return (
    <footer className="w-full bg-dark-900 text-offwhite py-6 mt-12 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-lg font-doumbar text-retrored">NexaWorks © {new Date().getFullYear()}</div>
        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-retrored">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-retrored">Twitter</a>
          <a href="mailto:info@nexaworks.com" className="hover:text-retrored">info@nexaworks.com</a>
        </div>
      </div>
    </footer>
  );
}
