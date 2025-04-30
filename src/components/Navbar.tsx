import React, { useState } from 'react';
import { MenuIcon, XIcon, Phone, Mail, MapPin, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const contact = {
    phone: '0775677560',
    email: 'reservations@villavajrapani.com',
    location: '40/1 Galouawatta, Upland, Peradeniya, Sri Lanka',
  };

  return (
    <>
      <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-lg transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-3xl font-serif font-semibold text-emerald-800 hover:text-emerald-900 transform transition-all hover:scale-105">
                  Villa Vajrapani
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <a href="#home" className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#about" className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#packages" className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  Leisure Packages
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#excursions" className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  Excursions
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:bg-gradient-to-l transition-all px-4 py-2 rounded-sm text-sm transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-800 focus:outline-none transition-all transform hover:scale-105"
              >
                {isMenuOpen ? (
                  <XIcon size={24} className="transition-transform transform rotate-180" />
                ) : (
                  <MenuIcon size={24} className="transition-transform transform rotate-0" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg transform transition-transform duration-500 ease-in-out translate-x-0">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">
                About
              </a>
              <a href="#packages" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">
                Leisure Packages
              </a>
              <a href="#excursions" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">
                Excursions
              </a>
              <button
                onClick={() => {
                  setShowPopup(true);
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white hover:bg-gradient-to-l transition-all px-4 py-2 rounded-sm text-sm transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50">
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-2xl max-w-sm w-full relative text-gray-800 animate-fadeIn">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h4 className="text-xl font-semibold text-emerald-800 mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <span>{contact.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
                <span>{contact.location}</span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
