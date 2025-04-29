import React from 'react';
const excursions = [{
  title: 'Village Tour',
  description: 'Experience authentic Sri Lankan rural life and traditions.',
  image: 'https://img.freepik.com/free-photo/safari-casual-hipster-camping-off-morning_1253-1036.jpg?semt=ais_hybrid&w=740'
}, {
  title: 'Tea Factory Tour',
  description: 'Discover the fascinating process of tea production from leaf to cup.',
  image: 'https://t4.ftcdn.net/jpg/08/56/67/87/360_F_856678714_cASYwLMKiHiu3Gny9AJnhFwA0TWzXT3m.jpg'
}, {
  title: 'Bird Watching & Photography Tour',
  description: 'Spot exotic birds and capture stunning landscapes with expert guidance.',
  image: 'https://www.shutterstock.com/image-photo/nature-photographer-photographing-birds-600nw-1040137813.jpg'
}, {
  title: 'Peradeniya Botanical Garden Tour',
  description: "Explore one of Asia's most spectacular botanical gardens.",
  image: 'https://media.istockphoto.com/id/635795812/photo/alley-of-palms-in-royal-botanic-gardens-kandy.jpg?s=612x612&w=0&k=20&c=eLJ9LdAU72Jf2a5UuU-OY7co1DYK7OenmBtTTphn1Hw='
}, {
  title: 'Katusukonda Hike and Camping',
  description: 'Adventure through pristine forests and camp under the stars.',
  image: 'https://i.pinimg.com/736x/7c/69/6d/7c696dc16be99ac2335a14c2f8ae0613.jpg'
}, {
  title: 'Kandy City Tour',
  description: 'Visit the cultural capital of Sri Lanka with its rich heritage sites.',
  image: 'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e0/8e/9e.jpg'
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