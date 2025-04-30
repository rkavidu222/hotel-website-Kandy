import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, X } from 'lucide-react';

type Package = {
  id: number;
  title: string;
  duration: string;
  description: string;
  images: string[];
  activities: string[];
};

const commonContact = {
  phone: '0775677560',
  email: 'reservations@villavajrapani.com',
  location: '40/1 Galouawatta, Upland, Peradeniya, Sri Lanka',
};

const packages: Package[] = [
  {
    id: 1,
    title: 'Connect with Nature',
    duration: '2 Days',
    description: 'Immerse yourself in the serenity of nature with guided hikes and forest bathing experiences.',
    images: [
      'https://i.redd.it/vla6t4e70n471.jpg',
      'https://srilankanexpeditions.co.uk/images/main_slider/interests/bird-watching-in-sri-lanka/01.jpg',
      'https://www.kitulgalaadventures.com/images/kitulgala-activities/rain-forest-trails/rain-forest-05.jpg',
    ],
    activities: [
      'Day 1: Meet and greet, rest, bird watching tour',
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
      'https://www.hoteltreeoflife.com/wp-content/uploads/2021/05/peacock.png',
      'https://lk.lakpura.com/cdn/shop/products/LK74171100-05-E-1280-720.jpg?v=1620049034&width=1445',
      'https://i.postimg.cc/gcN3T4LV/162718687.jpg',
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
      'https://pearlbaytravels.com/wp-content/uploads/2024/09/pedro-tea-estate.jpg',
      'https://in.lakpura.com/cdn/shop/products/LK60170800-01-E-1280-720.jpg?v=1620047711',
      'https://media.istockphoto.com/id/934538578/photo/beautiful-asian-woman-harvest-tea-leaves-in-tea-field-in-the-morning.jpg?s=612x612&w=0&k=20&c=ObpTtXwiqP3fzE-_6xUorPd027KbrE3i3WYX07jTRBY=',
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
      'https://img.freepik.com/premium-photo/woman-straw-hat-taking-photo-flowers-garden_1346134-17500.jpg',
      'https://images.stockcake.com/public/5/2/f/52fff216-5426-44e7-897d-40d4f41a98cd_large/birdwatching-in-nature-stockcake.jpg',
      'https://media.istockphoto.com/id/1315463358/photo/male-streak-backed-oriole-on-a-thorny-stick.jpg?s=612x612&w=0&k=20&c=YB60E-0NqbvBl7irhBB8EeYmFMgmn147q3EI3wR0Kgo=',
    ],
    activities: [
      'Day 1: Guided photography sessions in Vajrapani garden',
      'Day 2: Bird watching and landscape photography in the Hanthana mountain range',
    ],
  },
];

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-80 w-full rounded-xl overflow-hidden shadow-lg">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export const LeisurePackages = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section id="packages" className="py-24 bg-gradient-to-br from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-emerald-800 tracking-tight">Leisure Packages</h2>
          <p className="text-gray-600 mt-4 text-lg">
            Discover exclusive nature-infused experiences designed to rejuvenate your mind and body.
          </p>
        </div>

        <div className="space-y-20">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } items-center gap-10 bg-white/60 backdrop-blur-sm shadow-md rounded-2xl p-8 min-h-[500px] hover:shadow-xl transition duration-300`}
            >
              <div className="md:w-1/2 w-full">
                <ImageCarousel images={pkg.images} />
              </div>
              <div className="md:w-1/2 w-full text-gray-800">
                <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-emerald-600 text-sm mb-3 font-medium">{pkg.duration}</p>
                <p className="mb-4">{pkg.description}</p>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm">
                  {pkg.activities.map((a, i) => (
                    <li key={i}>{a}</li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-gradient-to-r from-emerald-600 to-green-500 text-white px-6 py-2 rounded-full shadow-md hover:scale-105 transition"
                >
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-sm w-full relative text-gray-800">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-xl font-semibold text-emerald-800 mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{commonContact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>{commonContact.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
                <span>{commonContact.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
