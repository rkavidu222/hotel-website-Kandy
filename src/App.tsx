import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { LeisurePackages } from './components/LeisurePackages';
import { Excursions } from './components/Excursions';
import { Footer } from './components/Footer';
export function App() {
  return <div className="font-sans antialiased text-gray-800 bg-stone-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <LeisurePackages />
        <Excursions />
      </main>
      <Footer />
    </div>;
}