import React, { useEffect, useState } from 'react';

type Package = {
  id: number;
  title: string;
  duration: string;
  description: string;
  images: string[];
  activities: string[];
};

const packages: Package[] = [
  {
    id: 1,
    title: 'Connect with Nature',
    duration: '2 Days',
    description: 'A short but immersive experience to connect with the natural world through guided activities.',
    images: [
      'https://cf.bstatic.com/xdata/images/hotel/max500/162718709.jpg?k=15ecbe004a21706fb4c96bce2b347c6ff3c122da2766c9a9e8947a32def5c9f0&o=',
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800&auto=format&fit=crop',
    ],
    activities: [
      'Day 1: Meet and greet, rest, birdwatching tour',
      'Night: Sky gazing experience',
      'Day 2: Katusukonda hike and forest bathing',
    ],
  },
  {
    id: 2,
    title: 'In Harmony with Nature',
    duration: '3 Days',
    description: 'Deepen your connection with nature through extended exploration and mindful experiences.',
    images: [
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    ],
    activities: [
      'Day 1: Meet and greet, evening bird watching tour',
      'Day 2: Forest bathing and Hanthana hike',
      'Day 3: Vajrapani garden experience - blending with nature',
    ],
  },
  {
    id: 3,
    title: 'Mind-Body Challenge',
    duration: '3 Days',
    description: 'Push your boundaries while exploring historic tea estates and breathtaking landscapes.',
    images: [
      'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=800&auto=format&fit=crop',
    ],
    activities: [
      'Day 1: Cross Katusukonda hike to enter Pekoe trail stage one, visit first tea estate of Sri Lanka',
      'Day 2: Tea experience - tea plucking, processing, and tea factory tour',
      'Day 3: Tour to Ambuluwawa',
    ],
  },
  {
    id: 4,
    title: 'Photography and Bird Watching Tour',
    duration: '2 Days',
    description: 'Capture the beauty of Vajrapani gardens and the Hanthana mountain range through your lens.',
    images: [
      'https://images.unsplash.com/photo-1520808663317-647b476a81b9?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=800&auto=format&fit=crop',
    ],
    activities: [
      'Day 1: Guided photography sessions in Vajrapani garden',
      'Day 2: Bird watching and landscape photography in the Hanthana mountain range',
    ],
  },
];

export const LeisurePackages = () => {
  const [activePackage, setActivePackage] = useState<Package>(packages[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handlePackageClick = (pkg: Package) => {
    setActivePackage(pkg);
    setCurrentImageIndex(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % activePackage.images.length
        );
        setFade(true); // fade in new image
      }, 300); // fade out duration
    }, 3000);

    return () => clearInterval(interval);
  }, [activePackage]);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            Leisure Packages
          </h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>
          <p className="text-gray-600">
            Immerse yourself in curated experiences that blend nature, wellness, and cultural discovery.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {packages.map((pkg) => (
            <button
              key={pkg.id}
              onClick={() => handlePackageClick(pkg)}
              className={`p-4 text-left border-b-2 transition-all ${
                activePackage.id === pkg.id
                  ? 'border-emerald-800 bg-emerald-50'
                  : 'border-transparent hover:bg-gray-50'
              }`}
            >
              <h3 className="font-medium text-lg">{pkg.title}</h3>
              <p className="text-sm text-gray-500">{pkg.duration}</p>
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-3">
              {activePackage.title}
            </h3>
            <p className="text-sm text-emerald-800 font-medium mb-4">
              {activePackage.duration}
            </p>
            <p className="text-gray-600 mb-6">{activePackage.description}</p>
            <div className="border-l-2 border-emerald-800 pl-4 mb-8">
              <h4 className="font-medium mb-3">Itinerary</h4>
              <ul className="space-y-3">
                {activePackage.activities.map((activity, index) => (
                  <li key={index} className="text-gray-600">
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <button className="bg-emerald-800 text-white hover:bg-emerald-700 transition-colors px-6 py-3 rounded-sm">
              Book This Package
            </button>
          </div>

          <div className="order-1 md:order-2 relative w-full h-96">
            <img
              src={activePackage.images[currentImageIndex]}
              alt={activePackage.title}
              className={`rounded-md shadow-lg object-cover w-full h-96 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
