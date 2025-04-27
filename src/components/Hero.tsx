import React, { useState, useEffect } from 'react';

const images = [
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718807.jpg?k=4730ad7b1824d627782f1603c32bc94b38b6a784cbee77e779d21011990e152d&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718687.jpg?k=bd9b3dbef979521a833dbe7149c622d1ea1a5e21c837979a4c17b3f479a17be8&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718772.jpg?k=f0f9b03d125f1131955cbc8b30d8e3b12ec5b6f3cff23e46a77d3f05f682a2a8&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718762.jpg?k=57ea3b11d1a7685157d9f70f27fe3e79a1b95ca63c0f5a0f11c8e1cae747850e&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718843.jpg?k=3343760890ef3297f360f73ad51dd4a7942deebb4905fa68559ccdee7bd3e629&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718785.jpg?k=f6bda1a8b09e9715755edc23184e0a4a8a02de666f713b2073ba2044177fd340&o=&hp=1",
  "https://cf.bstatic.com/xdata/images/hotel/max1024x768/162718768.jpg?k=0528ad9a7809e00c21b6d5813ade982383e4fe4260f19f259bdf0e164193c1f5&o=&hp=1"
];

export const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white mb-6">
          Villa Vajrapani
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl">
          A luxury mountain retreat where tranquility, mindfulness, and nature unite
        </p>
        <div className="mt-4 sm:mt-8">
          <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-sm text-lg transition-colors">
            Experience Tranquility
          </button>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
        <a href="#about" className="animate-bounce bg-white/20 p-2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
