// Contact call-to-action section for homepage
export default function ContactCTA() {
  return (
    <section className="py-16 bg-dark text-center" id="contact">
      <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-retrored mb-4">Ready to start your project?</h2>
      <p className="text-lg text-offwhite mb-6">Get in touch with us for a free consultation and quote.</p>
      <a href="/contact" className="inline-block px-8 py-3 bg-retrored text-offwhite rounded-full font-semibold shadow-lg hover:bg-retrored-700 transition">Contact Us</a>
    </section>
  );
}
