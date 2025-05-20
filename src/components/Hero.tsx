import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <>
      {/* Section 1: Background Video Fullscreen */}
      <section id="home" className="relative h-screen w-full overflow-hidden">
        <Helmet>
          <title>Villa Vajrapani</title>
        </Helmet>

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

        {/* Scroll Down Arrow */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-10">
          <a href="#hero-text" className="animate-bounce bg-white/20 p-2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Section 2: Hero Text Content with Modern Style */}
      <section
        id="hero-text"
        className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-xl p-8 sm:p-10 md:p-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white drop-shadow mb-4"
          >
            Villa Vajrapani
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed tracking-wide"
          >
            A luxury mountain retreat where tranquility, mindfulness, and nature unite in perfect harmony.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-2.5 rounded-full text-base sm:text-lg shadow-md ring-1 ring-emerald-400/50 transition-all duration-300 mb-8"
          >
            Experience Tranquility
          </motion.button>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-6 text-white/90 text-sm sm:text-base space-y-1.5"
          >
            <p>
              <strong>📍 Address:</strong>{' '}
              <a
                href="https://www.google.com/maps?q=40/1+Galouawatta,+Upland,+Peradeniya,+Sri+Lanka"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                40/1  Upland, Peradeniya, Sri Lanka
              </a>
            </p>
            <p><strong>📞 Phone:</strong> +94 77 567 7560</p>
            <p>
              <strong>✉️ Email:</strong>{' '}
              <a href="mailto:reservations@villavajrapani.com" className="underline hover:text-white">
                reservations@villavajrapani.com
              </a>
            </p>
            <p>
              <strong>🌐 Website:</strong>{' '}
              <a href="https://www.villavajrapani.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                www.villavajrapani.com
              </a>
            </p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};
