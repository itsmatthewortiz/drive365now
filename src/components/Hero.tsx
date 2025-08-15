import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/mclaren720s.jpg)'
        }}
      >
      </div>

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Centered CTA Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          Deal. Deliver. <span style={{color: '#4DA9E1'}}>Drive.</span>
        </h1>

        <p className="text-xl lg:text-2xl mb-8 leading-relaxed max-w-2xl mx-auto">
          Drive365 is the place where luxury meets convenience. Whether you're a busy professional, devoted parent, or driven entrepreneur, your perfect ride is just one message away.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={scrollToContact}
            className="group text-white px-10 py-5 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center shadow-xl" 
            style={{backgroundColor: '#4DA9E1'}} 
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#3A8BC7'} 
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4DA9E1'}
          >
            Start Today
            <ArrowRight size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;