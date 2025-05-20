import React, { useState } from 'react';
import { MenuIcon, XIcon, Phone, Mail, MapPin, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const contact = {
    phone: ' +94 77 567 7560',
    email: 'reservations@villavajrapani.com',
    location: '40/1 , Upland, Peradeniya, Sri Lanka',
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
    setIsMenuOpen(false);
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
                <a href="#home" onClick={handleLinkClick} className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>

                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105 flex items-center"
                  >
                    About
                    <ChevronDown
                      size={16}
                      className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg z-10 w-48">
                      <a href="#about" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">About Us</a>
                      <a href="#rooms" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Our Rooms</a>
                      <a href="#dining" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Dining</a>
                      <a href="#gallery" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Gallery</a>
                    </div>
                  )}
                </div>

                <a href="#packages" onClick={handleLinkClick} className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
                  Leisure Packages
                  <span className="absolute left-0 bottom-0 w-0 h-1 bg-emerald-800 group-hover:w-full transition-all duration-300"></span>
                </a>
                <a href="#excursions" onClick={handleLinkClick} className="group text-gray-600 hover:text-emerald-800 transition-all relative text-sm font-medium transform hover:scale-105">
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

            {/* Mobile Menu Icon */}
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
              <a href="#home" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">Home</a>
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="block w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105 flex items-center"
                >
                  About
                  <ChevronDown
                    size={16}
                    className={`ml-2 transition-transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                  />
                </button>
                {isDropdownOpen && (
                  <div className="bg-white shadow-lg rounded-lg mt-2">
                    <a href="#about" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">About Us</a>
                    <a href="#rooms" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Our Rooms</a>
                    <a href="#dining" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Dining</a>
                    <a href="#gallery" onClick={handleLinkClick} className="block px-4 py-2 text-gray-700 hover:bg-emerald-100">Gallery</a>
                  </div>
                )}
              </div>
              <a href="#packages" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">Leisure Packages</a>
              <a href="#excursions" onClick={handleLinkClick} className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-emerald-800 transform transition-all hover:scale-105">Excursions</a>
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

      {/* Contact Info Popup */}
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
                <a href={`tel:${contact.phone}`} className="text-emerald-800 hover:text-emerald-600">
                  {contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-600" />
                <a href={`mailto:${contact.email}`} className="text-emerald-800 hover:text-emerald-600">
                  {contact.email}
                </a>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-600 mt-1" />
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(contact.location)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-800 hover:text-emerald-600"
                >
                  {contact.location}
                </a>
              </p>
            </div>

            {/* "OR" separator */}
            <div className="my-4 text-center text-gray-600">or

            {/* Book Online Button */}
            <a
              href="https://www.booking.com/hotel/lk/vajrapani-kandy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-full text-center bg-gradient-to-r from-emerald-600 to-emerald-700 hover:bg-gradient-to-l text-white px-4 py-2 rounded-md shadow-lg hover:shadow-xl transform hover:scale-105 transition-all font-medium"
            >
              Book Online
            </a>
          </div>
        </div>
        </div>
      )}
    </>
  );
};
