// About summary section for homepage
export default function AboutSummary() {
  return (
    <section className="py-16 bg-dark-700 text-offwhite" id="about">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-retrored mb-4">About NexaWorks</h2>
        <p className="text-lg text-offwhite mb-6">NexaWorks delivers innovative, high-quality software solutions that empower businesses. Our team combines top talent from leading colleges with experienced professionals to deliver secure, scalable, and user-centric solutions at competitive prices.</p>
        <a href="/about" className="inline-block px-6 py-2 bg-retrored text-offwhite rounded-full font-semibold shadow hover:bg-retrored-700 transition">Learn More About Us</a>
      </div>
    </section>
  );
}
