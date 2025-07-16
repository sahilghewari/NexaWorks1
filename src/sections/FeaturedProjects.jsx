// Featured projects section for homepage
export default function FeaturedProjects() {
  return (
    <section className="py-16 bg-dark text-offwhite" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-center text-retrored mb-10">Featured Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Example project cards, replace with real data */}
          <div className="bg-dark-700 p-6 rounded-lg shadow hover:shadow-lg transition border border-dark-800">
            <div className="h-32 bg-dark-800 rounded mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-retrored">AI Chatbot Platform</h3>
            <p className="mb-2 text-offwhite">Automated customer support for a fintech startup.</p>
            <a href="/portfolio" className="text-retrored hover:underline">View Details</a>
          </div>
          <div className="bg-dark-700 p-6 rounded-lg shadow hover:shadow-lg transition border border-dark-800">
            <div className="h-32 bg-dark-800 rounded mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-retrored">Workflow Automation Suite</h3>
            <p className="mb-2 text-offwhite">Streamlined business processes for an SME.</p>
            <a href="/portfolio" className="text-retrored hover:underline">View Details</a>
          </div>
          <div className="bg-dark-700 p-6 rounded-lg shadow hover:shadow-lg transition border border-dark-800">
            <div className="h-32 bg-dark-800 rounded mb-4"></div>
            <h3 className="text-xl font-bold mb-2 text-retrored">E-Learning Platform</h3>
            <p className="mb-2 text-offwhite">Interactive education tools for a university.</p>
            <a href="/portfolio" className="text-retrored hover:underline">View Details</a>
          </div>
        </div>
      </div>
    </section>
  );
}
