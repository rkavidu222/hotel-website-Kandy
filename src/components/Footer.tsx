import React from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, InstagramIcon, FacebookIcon, TwitterIcon } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Villa Vajrapani */}
          <div className="col-span-1">
            <h3 className="text-2xl font-serif font-medium mb-4">
              Villa Vajrapani
            </h3>
            <p className="text-emerald-100 mb-6">
              A luxury mountain retreat where tranquility, mindfulness, and nature unite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-emerald-200 hover:text-white transition-colors" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="#" className="text-emerald-200 hover:text-white transition-colors" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-emerald-200 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-emerald-200 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#packages" className="text-emerald-200 hover:text-white transition-colors">
                  Leisure Packages
                </a>
              </li>
              <li>
                <a href="#excursions" className="text-emerald-200 hover:text-white transition-colors">
                  Excursions
                </a>
              </li>
            </ul>
          </div>

          {/* Packages */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Packages</h4>
            <ul className="space-y-2">
              <li>
                <a href="#package-1" className="text-emerald-200 hover:text-white transition-colors">
                  Connect with Nature
                </a>
              </li>
              <li>
                <a href="#package-2" className="text-emerald-200 hover:text-white transition-colors">
                  In Harmony with Nature
                </a>
              </li>
              <li>
                <a href="#package-3" className="text-emerald-200 hover:text-white transition-colors">
                  Mind-Body Challenge
                </a>
              </li>
              <li>
                <a href="#package-4" className="text-emerald-200 hover:text-white transition-colors">
                  Photography Tour
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPinIcon size={20} className="mr-2 flex-shrink-0 mt-1 text-emerald-300" />
                <span className="text-emerald-100">
                  40/1 Galouawatta, Upland, Peradeniya, Sri Lanka
                </span>
              </li>
              <li className="flex items-center">
                <PhoneIcon size={18} className="mr-2 flex-shrink-0 text-emerald-300" />
                <span className="text-emerald-100">0775677560</span>
              </li>
              <li className="flex items-center">
                <MailIcon size={18} className="mr-2 flex-shrink-0 text-emerald-300" />
                <span className="text-emerald-100">
                  reservations@villavajrapani.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-emerald-800 mt-12 pt-8 text-center text-emerald-300 text-sm">
          <p>
            © {new Date().getFullYear()} Villa Vajrapani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
