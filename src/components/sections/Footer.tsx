import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export const Footer = () => {
  return <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/theshedsandpoint/" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Instagram">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <Instagram className="relative w-10 h-10 text-pink-500 group-hover:text-pink-400 transition-all duration-300 group-hover:scale-110" />
            </a>
            <a href="https://www.facebook.com/theshedatsandpointidaho" target="_blank" rel="noopener noreferrer" className="group relative" aria-label="Facebook">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-50 transition duration-500" />
              <Facebook className="relative w-10 h-10 text-blue-500 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110" />
            </a>
          </div>

          <div className="flex flex-col items-center space-y-2">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} The Shed. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">Sandpoint, Idaho</p>
          </div>
        </div>
      </div>
    </footer>;
};

