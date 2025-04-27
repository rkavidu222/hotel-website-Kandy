import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-medium text-emerald-800">
                Villa Vajrapani
              </h1>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-emerald-800 transition-colors px-3 py-2 text-sm font-medium">
                Home
              </a>
              <a href="#about" className="text-gray-600 hover:text-emerald-800 transition-colors px-3 py-2 text-sm font-medium">
                About
              </a>
              <a href="#packages" className="text-gray-600 hover:text-emerald-800 transition-colors px-3 py-2 text-sm font-medium">
                Leisure Packages
              </a>
              <a href="#excursions" className="text-gray-600 hover:text-emerald-800 transition-colors px-3 py-2 text-sm font-medium">
                Excursions
              </a>
              <button className="bg-emerald-800 text-white hover:bg-emerald-700 transition-colors px-4 py-2 rounded-sm text-sm">
                Book Now
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-800 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800">
              Home
            </a>
            <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800">
              About
            </a>
            <a href="#packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800">
              Leisure Packages
            </a>
            <a href="#excursions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800">
              Excursions
            </a>
            <button className="w-full mt-2 bg-emerald-800 text-white hover:bg-emerald-700 transition-colors px-4 py-2 rounded-sm text-sm">
              Book Now
            </button>
          </div>
        </div>}
    </nav>;
};