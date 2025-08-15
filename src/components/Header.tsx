import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black shadow-md' : 'bg-black'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          <img 
            src="/drive365now header logo.png" 
            alt="EliteAuto Logo" 
            className="h-10 w-auto"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;