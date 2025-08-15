import React from 'react';
import { Car, Shield, CreditCard, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Car size={48} />,
      title: 'Buy Cars',
      description: 'Whether you are looking for luxury, economy, or something in between, we have the perfect vehicle to match your needs and preferences.',
      features: ['Certified pre-owned', 'Detailed history reports', 'Professional inspection'],
    },
    {
      icon: <Shield size={48} />,
      title: 'Sell Your Car',
      description: 'Get the best price for your vehicle with our convenient, hassle-free selling process.',
      features: ['Free valuation', 'Quick sale process', 'Competitive offers'],
    },
    {
      icon: <CreditCard size={48} />,
      title: 'Financing',
      description: 'Flexible financing options with competitive rates and quick approval.',
      features: ['Low interest rates', 'Flexible terms', 'Quick approval'],
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes buying and selling cars simple, transparent, and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 rounded-lg border border-gray-800 hover:shadow-lg transition-shadow bg-black">
              <div className="mb-6 flex justify-center" style={{color: '#4DA9E1'}}>
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center text-sm text-gray-300">
                    <CheckCircle size={16} className="text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;