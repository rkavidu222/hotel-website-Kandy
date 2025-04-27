import React from 'react';
export const Hero = () => {
  return <section id="home" className="relative h-screen w-full bg-black">
      <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{
      backgroundImage: "url('https://cf.bstatic.com/xdata/images/hotel/max500/162718807.jpg?k=4730ad7b1824d627782f1603c32bc94b38b6a784cbee77e779d21011990e152d&o=')"
    }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-medium text-white mb-6">
          Villa Vajrapani
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl">
          A luxury mountain retreat where tranquility, mindfulness, and nature
          unite
        </p>
        <div className="mt-4 sm:mt-8">
          <button className="bg-emerald-800 hover:bg-emerald-700 text-white px-8 py-3 rounded-sm text-lg transition-colors">
            Experience Tranquility
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a href="#about" className="animate-bounce bg-white/20 p-2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>;
};