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
      'https://img.freepik.com/free-photo/safari-casual-hipster-camping-off-morning_1253-1036.jpg',
      'https://img.freepik.com/free-photo/couple-path-bamboo-forest_23-2147637662.jpg',
      'https://img.freepik.com/free-photo/group-hikers-standing-footpath_23-2147950694.jpg',
    ]
  },
  {
    title: 'Tea Factory Tour',
    description: 'Discover the fascinating process of tea production from leaf to cup.',
    details: 'Tour a working tea factory, observe leaf processing, taste fresh Ceylon tea, and explore tea fields.',
    moreDetails: 'You’ll learn about tea grading, export processes, and get a souvenir pack of Ceylon tea. Ideal for tea lovers and photographers.',
    images: [
      'https://img.freepik.com/free-photo/tea-picker-harvesting-tea-leaves_53876-47059.jpg',
      'https://images.unsplash.com/photo-1701544872167-7f5ee73cb435',
      'https://t3.ftcdn.net/jpg/00/80/71/78/360_F_80717866_KlL2dJT1CazArCsdPcH74sAeLMyOELEP.jpg',
    ]
  },
  {
    title: 'Bird Watching & Photography Tour',
    description: 'Spot exotic birds and capture stunning landscapes with expert guidance.',
    details: 'Guided by naturalists, this tour offers ideal spots for birdwatching and nature photography around Vajrapani.',
    moreDetails: 'Perfect for early risers and photographers. Bring your own binoculars and gear, or rent on-site. Ideal for nature enthusiasts.',
    images: [
      'https://www.shutterstock.com/image-photo/nature-photographer-photographing-birds-600nw-1040137813.jpg',
      'https://www.shutterstock.com/image-photo/child-learning-take-photos-kid-600nw-2495152737.jpg',
      'https://www.shutterstock.com/image-photo/family-watching-greater-flamingo-phoenicopterus-600nw-2580944381.jpg',
    ]
  },
  {
    title: 'Peradeniya Botanical Garden Tour',
    description: "Explore one of Asia's most spectacular botanical gardens.",
    details: 'Stroll through orchid houses, palm avenues, and spice gardens in Peradeniya.',
    moreDetails: 'This leisurely tour includes a guided walk and optional golf cart rental. Ideal for all ages.',
    images: [
      'https://media-cdn.tripadvisor.com/media/photo-s/0e/b5/09/26/photo3jpg.jpg',
      'https://www.botanicgardens.gov.lk/wp-content/uploads/2021/03/Haggala-Main-Img.jpg',
      'https://media.istockphoto.com/id/997791056/photo/peradeniya-royal-botanical-garden-kandy-sri-lanka.jpg?s=170667a&w=0&k=20&c=wjwfPZyPD8vxAaxhRVRy-9IhurptuwDXkZ7EYs41XEk=',
    ]
  },
  {
    title: 'Katusukonda Hike and Camping',
    description: 'Adventure through pristine forests and camp under the stars.',
    details: 'Trek to the scenic Katusukonda mountain and enjoy a night of camping with views.',
    moreDetails: 'Includes tents, meals, and a campfire under the stars. Great for hikers and groups.',
    images: [
      'https://i.pinimg.com/736x/7c/69/6d/7c696dc16be99ac2335a14c2f8ae0613.jpg',
      'https://www.shutterstock.com/image-photo/top-view-katusu-konda-maountain-600nw-1635435145.jpg',
      'https://media.istockphoto.com/id/1188628428/photo/drone-landscape-view-of-katusu-konda-edge-and-uragala-peak-at-hanthana-mountain-range-kandy.jpg?s=170667a&w=0&k=20&c=TEg2CHVLxKq2I601RtEm4zDmLkM8qfLR0DMFZgLANpI=',
    ]
  },
  {
    title: 'Kandy City Tour',
    description: 'Visit the cultural capital of Sri Lanka with its rich heritage sites.',
    details: 'Explore the Temple of the Tooth, Kandy Lake, cultural shows, and shopping streets.',
    moreDetails: 'Includes entrance tickets, cultural performance seats, and guide. Perfect for first-time visitors.',
    images: [
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/09/29/a9/bc.jpg',
      'https://images.unsplash.com/photo-1626091022888-485eb96c494a?fm=jpg&q=60&w=3000',
      'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/kandy-sri-lanka-laughingmango.jpg',
    ]
  },
  {
    title: 'Temple Tours',
    description: 'Discover Ambuluwawa, Embekke and Gadaladeniya temples.',
    details: 'Tour historical and religious temple sites nestled in the hills of central Sri Lanka.',
    moreDetails: 'A peaceful experience with spiritual guides and historical context. Best done in the morning.',
    images: [
      'https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/e0/8e/9e.jpg',
      'https://www.shutterstock.com/image-photo/kandy-sri-lanka-april-10th-600nw-1437447995.jpg',
      'https://t3.ftcdn.net/jpg/05/44/36/12/360_F_544361215_LHJFIAjhMUSseI3zC7txLhgIIC7c4CY1.jpg',
    ]
  },
];

export const Excursions = () => {
  const [selectedExcursion, setSelectedExcursion] = useState<Excursion | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

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
          <p className="text-gray-600 text-sm sm:text-base">
            Explore the natural beauty and cultural heritage surrounding Villa Vajrapani.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {excursions.map((excursion, index) => (
            <div
              key={index}
              className="group bg-white rounded-md overflow-hidden shadow-md transition-transform hover:-translate-y-1"
            >
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={excursion.images[0]}
                  alt={excursion.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-medium text-xl mb-2">{excursion.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base mb-4">{excursion.description}</p>
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

      {selectedExcursion &&
        createPortal(
          <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center px-2 sm:px-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-xs sm:max-w-lg md:max-w-2xl relative overflow-y-auto max-h-[90vh] shadow-xl">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-bold"
              >
                ×
              </button>

              <div className="relative h-52 sm:h-64 md:h-72 rounded overflow-hidden mb-4">
                {selectedExcursion.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedExcursion.title} image ${i + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      i === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow text-lg"
                >
                  ‹
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white shadow text-lg"
                >
                  ›
                </button>
              </div>

              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">{selectedExcursion.title}</h3>
              <p className="text-gray-700 text-sm sm:text-base mb-2">{selectedExcursion.details}</p>
              <p className="text-gray-600 text-xs sm:text-sm">{selectedExcursion.moreDetails}</p>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};
