import React from 'react';
import { Car, Shield, Zap, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Car size={24} />,
      title: 'Wide Range',
      description: 'Extensive selection of vehicles to match every need and budget'
    },
    {
      icon: <Shield size={24} />,
      title: 'Trusted by Clients',
      description: 'Thousands of satisfied customers trust us with their automotive needs'
    },
    {
      icon: <Zap size={24} />,
      title: 'Convenience',
      description: 'Streamlined process that saves you time and eliminates hassle'
    },
    {
      icon: <Users size={24} />,
      title: 'Expert Support',
      description: 'Dedicated specialists guide you through every step'
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Why Choose <span style={{color: '#4DA9E1'}}>Drive365</span>?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're revolutionizing the car buying and selling experience with convenience, 
              transparency, and exceptional service. No more dealership games or hidden surprises.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-black border border-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="text-blue-400">{feature.icon}</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="border border-gray-800 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/mclaren570s.jpeg"
                alt="Car inspection process"
                className="w-full aspect-square object-cover scale-105"
                style={{ objectPosition: '50% center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;