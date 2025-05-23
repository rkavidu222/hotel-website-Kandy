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
  phone: ' +94 77 567 7560',
  email: 'reservations@villavajrapani.com',
  location: '40/1 , Upland, Peradeniya, Sri Lanka',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.1558582733433!2d80.62551257405072!3d7.223056914640844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae36f6d04090321%3A0xaff282801d364dbb!2sVilla%20Vajrapani!5e0!3m2!1sen!2slk!4v1745767053338!5m2!1sen!2slk'
};

const packages: Package[] = [
  {
    id: 1,
    title: 'Connect with Nature',
    duration: '2 Days',
    description: 'Immerse yourself in the serenity of nature with guided hikes and forest bathing experiences.',
    images: [
      '/images/p1.webp',
      '/images/p2.webp',
      '/images/p3.webp',
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
      '/images/p4.webp',
      '/images/p5.webp',
      '/images/p6.webp',
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
      '/images/p7.webp',
      '/images/p8.webp',
      '/images/p9.webp',
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
      '/images/p10.webp',
      '/images/p11.webp',
      '/images/p12.webp',
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
    <div className="relative w-full h-64 md:h-80 overflow-hidden rounded-xl shadow-lg">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0'}`}
        >
          <img
            src={img}
            alt={`Package image ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
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
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">Leisure Packages</h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Discover exclusive nature-infused experiences designed to rejuvenate your mind and body.
          </p>
        </div>

        <div className="space-y-20">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`flex flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} items-center gap-10 bg-white/60 backdrop-blur-sm shadow-md rounded-2xl p-6 md:p-8 min-h-[500px] hover:shadow-xl transition duration-300`}
            >
              <div className="md:w-1/2 w-full">
                <ImageCarousel images={pkg.images} />
              </div>
              <div className="md:w-1/2 w-full text-gray-800">
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">{pkg.title}</h3>
                <p className="text-emerald-600 text-sm md:text-base mb-3 font-medium">{pkg.duration}</p>
                <p className="mb-4 text-sm md:text-base">{pkg.description}</p>
                <ul className="list-disc list-inside mb-4 space-y-1 text-sm md:text-base">
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
            
            {/* Contact Information Section */}
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex flex-col gap-2">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <a href={`tel:${commonContact.phone}`} className="text-emerald-600 hover:underline">
                    {commonContact.phone}
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <a href={`mailto:${commonContact.email}`} className="text-emerald-600 hover:underline">
                    {commonContact.email}
                  </a>
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
                  <a
                    href={commonContact.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    {commonContact.location}
                  </a>
                </p>
              </div>

              {/* "OR" separator */}
              <div className="my-4 text-center text-gray-600">or</div>

              {/* Book Online Button */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSe_GRmPkRv7zXFBkCdbxbO8gNvulWsWy0yrlpXxH4-ZSCnYsg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block w-full bg-gradient-to-r from-emerald-600 to-green-500 text-white text-center py-2 rounded-full shadow-md hover:scale-105 transition"
              >
                Book Online
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
