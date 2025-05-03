
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

type Excursion = {
  title: string;
  description: string;
  images: string[];
  details: string;
  moreDetails: string;
};

const excursions: Excursion[] = [
  {
    title: 'Village Tour',
    description: 'Experience authentic Sri Lankan rural life and traditions.',
    details: 'Visit a traditional village, interact with locals, learn how to cook local cuisine, and enjoy a bullock cart ride.',
    moreDetails: 'You’ll witness daily rural routines, traditional farming techniques, and enjoy a home-cooked lunch. Great for families and cultural explorers.',
    images: [
      '/images/e1.JPG',
      '/images/e2.JPG',
      '/images/e3.JPG',
    ]
  },
  {
    title: 'Tea Factory Tour',
    description: 'Discover the fascinating process of tea production from leaf to cup.',
    details: 'Tour a working tea factory, observe leaf processing, taste fresh Ceylon tea, and explore tea fields.',
    moreDetails: 'You’ll learn about tea grading, export processes, and get a souvenir pack of Ceylon tea. Ideal for tea lovers and photographers.',
    images: [
      '/images/e4.JPG',
      '/images/e5.jfif',
      '/images/e6.jpg',
    ]
  },
  {
    title: 'Bird Watching & Photography Tour',
    description: 'Spot exotic birds and capture stunning landscapes with expert guidance.',
    details: 'Guided by naturalists, this tour offers ideal spots for birdwatching and nature photography around Vajrapani.',
    moreDetails: 'Perfect for early risers and photographers. Bring your own binoculars and gear, or rent on-site. Ideal for nature enthusiasts.',
    images: [
      '/images/e7.JPG',
      '/images/e8.JPG',
      '/images/e9.JPG',
    ]
  },
  {
    title: 'Peradeniya Botanical Garden Tour',
    description: "Explore one of Asia's most spectacular botanical gardens.",
    details: 'Stroll through orchid houses, palm avenues, and spice gardens in Peradeniya.',
    moreDetails: 'This leisurely tour includes a guided walk and optional golf cart rental. Ideal for all ages.',
    images: [
      '/images/e10.JPG',
      '/images/e11.jpg',
      '/images/e12.jpg',
    ]
  },
  {
    title: 'Katusukonda Hike and Camping',
    description: 'Adventure through pristine forests and camp under the stars.',
    details: 'Trek to the scenic Katusukonda mountain and enjoy a night of camping with views.',
    moreDetails: 'Includes tents, meals, and a campfire under the stars. Great for hikers and groups.',
    images: [
      '/images/e13.jpg',
      '/images/e14.JPG',
      '/images/e15.jpg',
    ]
  },
  {
    title: 'Kandy City Tour',
    description: 'Visit the cultural capital of Sri Lanka with its rich heritage sites.',
    details: 'Explore the Temple of the Tooth, Kandy Lake, cultural shows, and shopping streets.',
    moreDetails: 'Includes entrance tickets, cultural performance seats, and guide. Perfect for first-time visitors.',
    images: [
      '/images/e16.jpeg',
      '/images/e17.jfif',
      '/images/e18.jpg',
    ]
  },
  {
    title: 'Temple Tours',
    description: 'Discover Ambuluwawa, Embekke and Gadaladeniya temples.',
    details: 'Tour historical and religious temple sites nestled in the hills of central Sri Lanka.',
    moreDetails: 'A peaceful experience with spiritual guides and historical context. Best done in the morning.',
    images: [
      '/images/e19.jpg',
      '/images/e20.JPG',
      '/images/e21.jpg',
    ]
  },
];

export const Excursions = () => {
  const [selectedExcursion, setSelectedExcursion] = useState<Excursion | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false); // Prevent hydration mismatch

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!selectedExcursion) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % selectedExcursion.images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [selectedExcursion]);

  const closeModal = () => {
    setSelectedExcursion(null);
    setCurrentIndex(0);
  };

  const nextSlide = () => {
    if (!selectedExcursion) return;
    setCurrentIndex((prev) => (prev + 1) % selectedExcursion.images.length);
  };

  const prevSlide = () => {
    if (!selectedExcursion) return;
    setCurrentIndex((prev) =>
      prev === 0 ? selectedExcursion.images.length - 1 : prev - 1
    );
  };

  return (
    <section id="excursions" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Excursions</h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6" />
          <p className="text-gray-600">
            Explore the natural beauty and cultural heritage surrounding Villa Vajrapani.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => (
            <div
              key={index}
              className="group bg-white rounded-md overflow-hidden shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={excursion.images[0]}
                  alt={excursion.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-medium text-xl mb-2">{excursion.title}</h3>
                <p className="text-gray-600 mb-4">{excursion.description}</p>
                <button
                  onClick={() => {
                    setSelectedExcursion(excursion);
                    setCurrentIndex(0);
                  }}
                  className="text-emerald-800 font-medium flex items-center group-hover:underline"
                >
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isClient && selectedExcursion &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg max-w-2xl w-full relative overflow-hidden shadow-xl">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              >
                ×
              </button>

              <div className="relative h-64 rounded overflow-hidden mb-4">
                {selectedExcursion.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedExcursion.title} image ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${i === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                  />
                ))}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow"
                >
                  ›
                </button>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedExcursion.title}</h3>
              <p className="text-gray-700 mb-2">{selectedExcursion.details}</p>
              <p className="text-gray-600 text-sm">{selectedExcursion.moreDetails}</p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};