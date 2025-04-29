import React, { useState, useEffect } from 'react';

type Package = {
  id: number;
  title: string;
  duration: string;
  description: string;
  images: string[];
  activities: string[];
  contactInfo: {
    phone: string;
    email: string;
    location: string;
  };
};

const packages: Package[] = [
  {
    id: 1,
    title: 'Connect with Nature',
    duration: '2 Days',
    description:
      'A short but immersive experience to connect with the natural world through guided activities.',
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
    contactInfo: {
      phone: '+94 123 456 789',
      email: 'connect@nature.com',
      location: '40/1 Galouawatta, Upland, Peradeniya, 20000 Kandy, Sri Lanka',
    },
  },
  {
    id: 2,
    title: 'In Harmony with Nature',
    duration: '3 Days',
    description:
      'Deepen your connection with nature through extended exploration and mindful experiences.',
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
    contactInfo: {
      phone: '+94 987 654 321',
      email: 'harmony@nature.com',
      location: '40/1 Galouawatta, Upland, Peradeniya, 20000 Kandy, Sri Lanka',
    },
  },
  {
    id: 3,
    title: 'Mind-Body Challenge',
    duration: '3 Days',
    description:
      'Push your boundaries while exploring historic tea estates and breathtaking landscapes.',
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
    contactInfo: {
      phone: '+94 456 789 012',
      email: 'mindbody@challenge.com',
      location: '40/1 Galouawatta, Upland, Peradeniya, 20000 Kandy, Sri Lanka',
    },
  },
  {
    id: 4,
    title: 'Photography and Bird Watching Tour',
    duration: '2 Days',
    description:
      'Capture the beauty of Vajrapani gardens and the Hanthana mountain range through your lens.',
    images: [
      'https://img.freepik.com/premium-photo/woman-straw-hat-taking-photo-flowers-garden_1346134-17500.jpg',
      'https://images.stockcake.com/public/5/2/f/52fff216-5426-44e7-897d-40d4f41a98cd_large/birdwatching-in-nature-stockcake.jpg',
      'https://media.istockphoto.com/id/1315463358/photo/male-streak-backed-oriole-on-a-thorny-stick.jpg?s=612x612&w=0&k=20&c=YB60E-0NqbvBl7irhBB8EeYmFMgmn147q3EI3wR0Kgo=',
    ],
    activities: [
      'Day 1: Guided photography sessions in Vajrapani garden',
      'Day 2: Bird watching and landscape photography in the Hanthana mountain range',
    ],
    contactInfo: {
      phone: '+94 789 123 456',
      email: 'photography@tour.com',
      location: '40/1 Galouawatta, Upland, Peradeniya, 20000 Kandy, Sri Lanka',
    },
  },
];

// ✅ Image Carousel component
const ImageCarousel = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // show each image for 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-carousel">
      {images.map((img, index) => (
        <div
          key={index}
          className={`image-slide ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
};

export const LeisurePackages = () => {
  return (
    <section id="packages" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-semibold text-emerald-800">Our Leisure Packages</h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore unique and immersive journeys into nature and wellness. Each package is thoughtfully crafted.
          </p>
        </div>

        <div className="space-y-24">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`flex flex-col md:flex-row items-start ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } gap-10 package-card`}
            >
              {/* Image Carousel */}
              <div className="md:w-1/2 w-full relative overflow-hidden">
                <ImageCarousel images={pkg.images} />
              </div>

              {/* Content */}
              <div className="md:w-1/2 w-full">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{pkg.title}</h3>
                <p className="text-sm text-emerald-600 font-medium mb-3">{pkg.duration}</p>
                <p className="text-gray-700 mb-5">{pkg.description}</p>

                <h4 className="font-medium text-gray-800 mb-2">Itinerary</h4>
                <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                  {pkg.activities.map((activity, i) => (
                    <li key={i}>{activity}</li>
                  ))}
                </ul>

                <div className="text-sm mb-6 space-y-1 text-gray-600">
                  <p>
                    <span className="font-medium text-emerald-700">Phone:</span> {pkg.contactInfo.phone}
                  </p>
                  <p>
                    <span className="font-medium text-emerald-700">Email:</span> {pkg.contactInfo.email}
                  </p>
                  <p>
                    <span className="font-medium text-emerald-700">Location:</span> {pkg.contactInfo.location}
                  </p>
                </div>

                <button className="bg-emerald-700 text-white px-6 py-2 rounded hover:bg-emerald-800 transition">
                  Book This Package
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CSS Injection
const style = document.createElement('style');
style.innerHTML = `
  .package-card {
    border-radius: 10px;
    border: 2px solid #e0e0e0;
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
  }

  .package-card:hover {
    transform: scale(1.03);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .image-carousel {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 10px;
  }

  .image-slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.7s ease-in-out;
    z-index: 0;
  }

  .image-slide.active {
    opacity: 1;
    z-index: 1;
  }
`;
document.head.appendChild(style);
