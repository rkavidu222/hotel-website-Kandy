import React from 'react';
const excursions = [{
  title: 'Village Tour',
  description: 'Experience authentic Sri Lankan rural life and traditions.',
  image: 'https://images.unsplash.com/photo-1582210449638-91b2e7825b02?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Tea Factory Tour',
  description: 'Discover the fascinating process of tea production from leaf to cup.',
  image: 'https://images.unsplash.com/photo-1582126892906-5ba111a3d7e6?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Bird Watching & Photography Tour',
  description: 'Spot exotic birds and capture stunning landscapes with expert guidance.',
  image: 'https://images.unsplash.com/photo-1621494547944-5797d74ee2c9?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Peradeniya Botanical Garden Tour',
  description: "Explore one of Asia's most spectacular botanical gardens.",
  image: 'https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Katusukonda Hike and Camping',
  description: 'Adventure through pristine forests and camp under the stars.',
  image: 'https://images.unsplash.com/photo-1510672981848-a1c4f1cb5ccf?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Kandy City Tour',
  description: 'Visit the cultural capital of Sri Lanka with its rich heritage sites.',
  image: 'https://images.unsplash.com/photo-1578168109644-231b538f638f?q=80&w=800&auto=format&fit=crop'
}, {
  title: 'Temple Tours',
  description: 'Discover Ambuluwawa, Embekke and Gadaladeniya temples.',
  image: 'https://images.unsplash.com/photo-1564509027875-ba1c0c08158a?q=80&w=800&auto=format&fit=crop'
}];
export const Excursions = () => {
  return <section id="excursions" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            Excursions
          </h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Explore the natural beauty and cultural heritage surrounding Villa
            Vajrapani.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => <div key={index} className="group bg-white rounded-md overflow-hidden shadow-md transition-transform hover:-translate-y-1">
              <div className="h-56 overflow-hidden">
                <img src={excursion.image} alt={excursion.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-medium text-xl mb-2">
                  {excursion.title}
                </h3>
                <p className="text-gray-600 mb-4">{excursion.description}</p>
                <button className="text-emerald-800 font-medium flex items-center group-hover:underline">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};