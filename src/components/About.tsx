import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const About = () => {
  const images = [
    "/images/a1.jpg",
    "/images/a2.jpg",
    "/images/a3.jpg",
    "/images/a4.jpg",
    "/images/a5.jpeg",
    "/images/a6.jpeg",
  ];

  // Scroll Reveal Functionality with Reset
  const revealOnScroll = () => {
    const elements = document.querySelectorAll('.about-section, .room-item');

    const options = {
      threshold: 0.2, // Trigger animation when 20% of the element is in the viewport
      rootMargin: '0px 0px -50px 0px', // Add a bit of extra space when scrolling up or down
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible'); // Remove 'visible' class when it leaves
        }
      });
    }, options);

    elements.forEach((el) => {
      observer.observe(el);
    });
  };

  useEffect(() => {
    revealOnScroll();
  }, []);

  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-16 w-full h-1 bg-emerald-500"></div>
        
        {/* About Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 about-section">
          <h2 className="text-3xl font-serif font-medium text-gray-900 mb-4">
            About Villa Vajrapani
          </h2>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>
          <p className="text-gray-600 leading-relaxed">
            Inspired by the ancient Buddhist principle of Vajrapani — the power
            of the mind rooted in the present moment — our luxury resort offers
            a unique haven for relaxation and renewal.
          </p>
        </div>

        {/* Image Carousel */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-full about-section">
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 3500 }}
              pagination={{ clickable: true }}
              loop
              className="rounded-md shadow-lg"
            >
              {images.map((src, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={src}
                    alt={`Resort view ${i + 1}`}
                    className="w-full h-64 sm:h-80 md:h-[350px] object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="about-section">
            <h3 className="text-2xl font-serif font-medium text-gray-900 mb-4">
              A Sanctuary of Luxury and Tranquility
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Discover a sanctuary of luxury and tranquility nestled in the
              pristine western foothills of the Hanthana Mountains in Sri Lanka.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Villa Vajrapani, we are dedicated to holistic wellbeing,
              harmonizing the mind, body, and spirit. Our eco-resort is a haven
              where nature's serenity meets refined elegance, offering a
              transformative retreat for those seeking rejuvenation and inner
              peace.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Inspired by Zen principles and modern minimalism, every aspect of
              Villa Vajrapani is meticulously designed to create an atmosphere
              of calm and mindfulness. From the architecture to the
              surroundings, our resort invites you to immerse yourself in the
              present moment, fostering a sense of deep relaxation and
              contemplation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you seek a peaceful escape or a journey of self-discovery,
              Villa Vajrapani is your gateway to a timeless experience of
              healing and renewal. Welcome to a space where luxury meets
              tranquility, and every moment is an opportunity to reconnect with
              yourself and the natural world.
            </p>
          </div>
        </div>

        <div className="my-16 w-full h-1 bg-emerald-500"></div>

        {/* Our Rooms Section */}
        <div className="mt-16 bg-stone-100 py-12">
          <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6 text-center" id='rooms'>Our Rooms</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Arundathi</h4>
              <p className="text-gray-600">
                It's a celestial retreat where memories are woven with love, and every moment sparkles with promise. Welcome to our most popular honeymoon room, where forever begins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Anuththara</h4>
              <p className="text-gray-600">
                This room embodies clarity and strength — a sanctuary where your spirit feels unbreakable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Niramaya</h4>
              <p className="text-gray-600">
                A room that inspires moments of inner light and profound understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Sathi</h4>
              <p className="text-gray-600">
                A place where awakening meets luxurious comfort.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Satori</h4>
              <p className="text-gray-600">
                A room that inspires moments of inner light and profound understanding.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:bg-emerald-50 room-item">
              <h4 className="text-xl font-semibold text-emerald-700 mb-3">Janana</h4>
              <p className="text-gray-600">
                Every shift and change is honored, like clouds drifting over timeless peaks.
              </p>
            </div>
          </div>
        </div>

        <div className="my-16 w-full h-1 bg-emerald-500"></div>

        {/* Dining Section */}
        <div className="mt-16 bg-stone-100 py-12">
          <h3 className="text-2xl font-serif font-medium text-gray-900 mb-6 text-center">Dining</h3>
          <div className="text-center mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              At Villa Vajrapani, we believe that nourishing the mind and body is essential for holistic well-being. Our carefully curated menu features a well-balanced diet filled with nutritious options designed to support gut health and overall vitality. We take pride in sourcing the majority of our ingredients from our own garden or local producers, ensuring freshness and sustainability in every dish. With the flexibility to select meals tailored to your individual requirements, we invite you to embark on a culinary journey that harmonizes health and taste, promoting wellness in every bite.
            </p>
            <h4 className="text-xl font-semibold text-emerald-700 mb-4">The Restaurant</h4>
            <p className="text-gray-600 mb-6">
              Experience a Minimalistic Design with a View — Nestled next to the kitchen, our space allows you to converse directly with the chef, creating a warm and inviting atmosphere. Large glass windows overlook lush mountains, offering breathtaking vistas that stretch all the way to Adam’s Peak on a clear day. Feel at home in this serene and stylish setting.
            </p>
            <p className="text-gray-600 mb-6">
              **Breakfast:** 07:00–10:00 AM  
              **Lunch:** 12:00–3:00 PM  
              **Dinner:** 7:00–10:00 PM
            </p>
            <h4 className="text-xl font-semibold text-emerald-700 mb-4">Outdoor Dining</h4>
            <p className="text-gray-600 mb-6">
              Select Your Perfect Outdoor Dining Spot — Enjoy the tranquility of our Zen garden, where you can choose from various scenic locations to dine. Whether beside the soothing waterfall, along the spring water stream, overlooking the lush, green, cloud-capped mountains, or atop our rooftop with a breathtaking 360-degree panoramic view — your ideal outdoor dining experience awaits.
            </p>
            <h4 className="text-xl font-semibold text-emerald-700 mb-4">Enjoy a Picnic Breakfast with a View</h4>
            <p className="text-gray-600">
              Take a hike up the Hanthana Mountains and start your day with an outdoor breakfast amidst stunning panoramic vistas. Immerse yourself in nature and experience the serenity of the mountains — the perfect way to connect with the natural beauty around you.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
