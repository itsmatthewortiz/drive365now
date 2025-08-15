import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-center">
          <div>
            <div className="mb-6 text-center">
              <img 
                src="/footer logo.png" 
                alt="Drive365 Logo" 
                className="h-10 w-auto mx-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed text-center">
              Making car transactions simple and convenient for everyone.
            </p>
            <div className="flex space-x-4 justify-center">
              <a href="https://www.facebook.com/profile.php?id=61578873623582&sk=about" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors" style={{'--hover-color': '#4DA9E1'}} onMouseEnter={(e) => e.currentTarget.style.color = '#4DA9E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/drive365_now/" target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4DA9E1'} onMouseLeave={(e) => e.currentTarget.style.color = ''}>
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2025 Drive365. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;