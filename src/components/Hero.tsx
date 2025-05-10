import React from 'react';
import { Helmet } from 'react-helmet-async';

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover object-center"
      >
        <source src="/video/0510.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


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
