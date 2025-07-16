// Testimonials section for homepage
export default function Testimonials() {
  return (
    <section className="py-16 bg-dark-700 text-offwhite" id="testimonials">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-doumbar font-bold text-retrored mb-8">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Example testimonials, replace with real data */}
          <div className="bg-dark p-6 rounded-lg shadow text-left border border-dark-800">
            <p className="text-offwhite mb-4">“NexaWorks delivered our project on time and exceeded expectations. Their team is highly skilled and professional.”</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-dark-800 rounded-full"></div>
              <div>
                <div className="font-bold text-retrored">A. Sharma</div>
                <div className="text-offwhite text-sm">Fintech Startup</div>
              </div>
            </div>
          </div>
          <div className="bg-dark p-6 rounded-lg shadow text-left border border-dark-800">
            <p className="text-offwhite mb-4">“Professional, transparent, and innovative. Highly recommend NexaWorks for software solutions.”</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-dark-800 rounded-full"></div>
              <div>
                <div className="font-bold text-retrored">M. Verma</div>
                <div className="text-offwhite text-sm">SME Owner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
