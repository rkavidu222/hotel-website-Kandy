import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // ensure Lucide is installed: npm install lucide-react

export const About = () => {
  const images = [
    "/images/a1.webp",
    "/images/a2.webp",
    "/images/a3.webp",
    "/images/a4.webp",
    "/images/a5.webp",
    "/images/a6.webp",
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

        {/* Our Rooms Section */}
        <div id="rooms"></div>
        <div className="mt-20 bg-gradient-to-b from-stone-100 to-stone-200 py-16 rounded-t-3xl shadow-inner">
          <h3 className="text-3xl font-serif font-medium text-gray-900 mb-4 text-center">Our Rooms</h3>
          <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
            {[
              { name: "Arundathi", description: "It's a celestial retreat where memories are woven with love, and every moment sparkles with promise. Welcome to our most popular honeymoon room, where forever begins." },
              { name: "Anuththara", description: "This room embodies clarity and strength — a sanctuary where your spirit feels unbreakable." },
              { name: "Niramaya", description: "A room that inspires moments of inner light and profound understanding." },
              { name: "Sathi", description: "A place where awakening meets luxurious comfort." },
              { name: "Satori", description: "A room that inspires moments of inner light and profound understanding." },
              { name: "Janana", description: "Every shift and change is honored, like clouds drifting over timeless peaks." }
            ].map((room, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-stone-200 text-gray-700 rounded-full flex items-center justify-center text-sm font-medium">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-emerald-700">{room.name}</h4>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{room.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Dining Section */}
        <div id="dining" className="max-w-7xl mx-auto space-y-16 bg-stone-50 rounded-lg p-8 scroll-mt-20">
          <div className="text-center">
            <h3 className="text-3xl font-serif font-medium text-gray-900 mb-4">Dining</h3>
            <div className="w-16 h-1 bg-emerald-800 mx-auto mb-6"></div>

            <p className="text-gray-600 leading-relaxed">
              At Villa Vajrapani, we believe that nourishing both the mind and body is essential to holistic well-being. 
              Our thoughtfully curated menu offers a well-balanced diet, rich in nutritious options that support gut health 
              and enhance overall vitality. We proudly source most of our ingredients from our own garden or trusted local producers, 
              ensuring every dish is fresh, sustainable, and full of life. With the flexibility to personalize meals according to 
              your needs, we invite you on a culinary journey that celebrates wellness, harmonizing health and flavor in every bite.
            </p>
          </div>

          {/* Dining Options */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* The Restaurant */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="/images/g8.webp"
                  alt="Minimalistic restaurant with view"
                  className="w-full h-72 object-cover rounded-lg mb-6 transition-transform transform hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-emerald-600 mb-2">01 • The Restaurant</h3>
              <h4 className="text-lg text-gray-800 mb-4">Minimalistic Design with a View</h4>
              <p className="text-gray-700 text-sm mb-4">
                Nestled next to the kitchen, converse directly with our chef while enjoying breathtaking mountain views through large glass windows.
              </p>
              <ul className="text-sm text-gray-600">
                <li><strong>Breakfast:</strong> 07:00–10:00 AM</li>
                <li><strong>Lunch:</strong> 12:00–3:00 PM</li>
                <li><strong>Dinner:</strong> 7:00–10:00 PM</li>
              </ul>
            </div>

            {/* Outdoor Dining */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="/images/d2.webp"
                  alt="Outdoor dining in Zen garden"
                  className="w-full h-72 object-cover rounded-lg mb-6 transition-transform transform hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">02 • Outdoor Dining</h3>
              <h4 className="text-lg text-gray-800 mb-4">Scenic Garden & Rooftop Settings</h4>
              <p className="text-gray-700 text-sm mb-4">
                Dine beside a waterfall, by a spring water stream, or atop our rooftop with a panoramic 360° view. The Zen garden’s calm lets you fully immerse in nature as you eat.
              </p>
            </div>

            {/* Picnic Breakfast */}
            <div className="bg-white p-6 rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="/images/d3.webp"
                  alt="Picnic breakfast with mountain view"
                  className="w-full h-72 object-cover rounded-lg mb-6 transition-transform transform hover:scale-110 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black opacity-30 rounded-lg"></div>
              </div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">03 • Picnic Breakfast</h3>
              <h4 className="text-lg text-gray-800 mb-4">Mountain Morning Bliss</h4>
              <p className="text-gray-700 text-sm mb-4">
                Start your morning with a hike up Hanthana, followed by a peaceful breakfast overlooking stunning mountain scenery. Ideal for mindful mornings.
              </p>
            </div>
          </div>
        </div>
      </div>


   {/* Gallery Section */}
<section id="gallery" className="mt-20 py-16 bg-stone-100 rounded-t-3xl shadow-inner scroll-mt-28">
  <div className="text-center mb-12">
    <h3 className="text-3xl font-serif font-medium text-gray-900">Gallery</h3>
    <div className="w-16 h-1 bg-emerald-800 mx-auto mt-2"></div>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      A glimpse into the serene beauty of Villa Vajrapani – from tranquil spaces to lush landscapes.
    </p>
  </div>

  <div className="px-6 max-w-7xl mx-auto">
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{ delay: 4000 }}
      pagination={{ clickable: true }}
      loop
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="rounded-lg"
    >
      {[
        "/images/g1.webp", "/images/g3.webp", "/images/g4.webp", "/images/g5.webp",
        "/images/g6.webp", "/images/g23.webp", "/images/g9.webp", "/images/g11.webp",
        "/images/g16.webp", "/images/g17.webp", "/images/g18.webp",
        "/images/g19.webp", "/images/g20.webp", "/images/g22.webp",
      ].map((src, idx) => (
        <SwiperSlide key={idx}>
          <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={src}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>



{/* Meet Drogan - Beloved Mascot Layout */}

<div id="ambassador-dog" className="py-20 bg-emerald-50 scroll-mt-28">
<div className="text-center mb-12">
    <h3 className="text-3xl font-serif font-medium text-gray-900">Meet Drogan</h3>
    <div className="w-16 h-1 bg-emerald-800 mx-auto mt-2"></div>
  </div>
    
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

 
    {/* Right: Content (shown first on mobile) */}
    <div className="order-1 md:order-2">
      <h3 className="text-4xl font-bold font-serif text-emerald-900 mb-4">
        Meet Drogan – More Than a Mascot
      </h3>
      <p className="text-gray-700 text-lg mb-4">
        Drogan isn’t just our ambassador — he’s a friend, a guardian, and a reason guests fall in love with Villa Vajrapani.
      </p>
      <p className="text-gray-700 mb-4">
        With his warm eyes and wagging tail, he greets everyone like family. Many visitors return just to see him again.
      </p>
      <p className="text-gray-700">
        Whether it’s a walk around the garden or just a cuddle in the lounge, Drogan brings joy to every guest's stay.
      </p>
    </div>

    {/* Left: Images (shown first on desktop) */}
    <div className="order-2 md:order-1">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <img
            src="/images/r1.jfif"
            alt="Drogan posing"
            className="w-full h-80 object-cover rounded-lg shadow-lg"
          />
        </div>
        <img
           src="/images/r2.webp"
          alt="Drogan smiling"
          className="h-40 object-cover rounded-lg shadow"
        />
        <img
           src="/images/r3.webp"
          alt="Drogan with guest"
          className="h-40 object-cover rounded-lg shadow"
        />
      </div>

      
     
    </div>
  </div>
</div>





    </section>
  );
};
